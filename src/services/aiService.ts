import { GoogleGenerativeAI } from "@google/generative-ai";
import { Candidate, Job, MatchResult } from "../types";

// Note: Always use process.env.GEMINI_API_KEY for the Gemini API.
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export class AIService {
  /**
   * Performs deep resume parsing using AI (Gemini)
   */
  static async parseResume(content: string): Promise<any> {
    if (!process.env.GEMINI_API_KEY) {
       return { parsedSummary: "Parsing básico simulado (API Key ausente)." };
    }

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `
        Atue como um especialista em Resume Parsing de alta precisão. 
        Analise o texto do currículo abaixo e extraia os dados em formato JSON estrito:
        {
          "extractedSkills": ["lista de hard skills"],
          "extractedExperience": "resumo de experiências",
          "extractedEducation": "formação principal",
          "detectedLanguages": ["idiomas"],
          "yearsOfExperience": número,
          "parsedSummary": "resumo executivo de 2 frases",
          "seniority": "Estágio" | "Júnior" | "Pleno" | "Sênior" | "Especialista" | "Diretoria"
        }
        
        Currículo:
        ${content}
      `;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text().replace(/```json|```/g, '').trim();
      return JSON.parse(text);
    } catch (error) {
      console.error("Advanced Parsing failed:", error);
      return { parsedSummary: "Erro no processamento semântico." };
    }
  }

  /**
   * Calculates the match between Candidate and Job with explainable weights
   * PESOS: 40% Mandatory Skills, 20% Desirable, 20% Seniority/Exp, 20% Semantic fit
   */
  static async calculateMatch(candidate: Candidate, job: Job): Promise<MatchResult> {
    // 1. Mandatory Skills Match (40%)
    const mandatoryMatchCount = job.requirements.filter(req => 
      candidate.skills.some(skill => skill.toLowerCase().includes(req.toLowerCase()) || req.toLowerCase().includes(skill.toLowerCase()))
    ).length;
    const mandatoryScore = (mandatoryMatchCount / job.requirements.length) * 40;

    // 2. Desirable Skills Match (20%)
    let desirableScore = 20;
    if (job.desirable && job.desirable.length > 0) {
      const desirableMatchCount = job.desirable.filter(req => 
        candidate.skills.some(skill => skill.toLowerCase().includes(req.toLowerCase()) || req.toLowerCase().includes(skill.toLowerCase()))
      ).length;
      desirableScore = (desirableMatchCount / job.desirable.length) * 20;
    }

    // 3. Seniority/Experience Match (20%)
    const seniorityLevels = ['Estágio', 'Júnior', 'Pleno', 'Sênior', 'Especialista', 'Diretoria'];
    const cLevel = seniorityLevels.indexOf(candidate.seniority);
    const jLevel = seniorityLevels.indexOf(job.seniority);
    let seniorityScore = 0;
    if (cLevel >= jLevel) seniorityScore = 20;
    else if (cLevel === jLevel - 1) seniorityScore = 15;
    else if (cLevel === jLevel - 2) seniorityScore = 10;
    else seniorityScore = 5;

    // 4. Semantic Fit & Justification (20% logic simulation + Gemini)
    let aiExplanation = "A análise semântica indica que o candidato possui uma base sólida, mas com algumas lacunas técnicas específicas para o core da vaga.";
    let semanticScore = 15;

    if (process.env.GEMINI_API_KEY) {
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `
          Analise a aderência entre Candidato e Vaga.
          Candidato: ${candidate.name}, Senioridade: ${candidate.seniority}, Skills: ${candidate.skills.join(', ')}
          Vaga: ${job.title}, Senioridade: ${job.seniority}, Requisitos: ${job.requirements.join(', ')}
          
          Forneça um JSON:
          {
            "justification": "Explicação curta (3 frases)",
            "semanticScore": número de 0 a 20,
            "strengths": ["ponto forte 1", "2"],
            "gaps": ["lacuna 1", "2"]
          }
        `;
        const result = await model.generateContent(prompt);
        const data = JSON.parse(result.response.text().replace(/```json|```/g, '').trim());
        aiExplanation = data.justification;
        semanticScore = data.semanticScore || 15;
      } catch (e) { console.warn("Gemini match failed, using defaults"); }
    }

    const finalScore = Math.round(mandatoryScore + desirableScore + seniorityScore + semanticScore);
    const recommendations = `Focar a entrevista na validação de **${job.requirements.filter(r => !candidate.skills.some(s => s.toLowerCase().includes(r.toLowerCase()))).slice(0,2).join(' e ')}**.`;

    return {
      id: `m-gen-${Date.now()}`,
      candidateId: candidate.id,
      resumeId: 'r-latest',
      jobId: job.id,
      compatibilityScore: finalScore,
      aiExplanation: aiExplanation,
      matchingSkills: candidate.skills.filter(s => job.requirements.some(r => s.toLowerCase().includes(r.toLowerCase()))),
      missingSkills: job.requirements.filter(r => !candidate.skills.some(s => s.toLowerCase().includes(r.toLowerCase()))),
      strengths: candidate.skills.filter(s => job.requirements.some(r => s.toLowerCase().includes(r.toLowerCase()))),
      gaps: job.requirements.filter(r => !candidate.skills.some(s => s.toLowerCase().includes(r.toLowerCase()))),
      recommendations,
      recommendationLevel: finalScore >= 85 ? 'Ideal' : finalScore >= 70 ? 'Alto' : finalScore >= 50 ? 'Médio' : 'Baixo',
      generatedAt: new Date().toISOString()
    };
  }

  /**
   * Generates a summary for a resume
   */
  static async summarizeResume(content: string): Promise<string> {
    if (!process.env.GEMINI_API_KEY) return "Análise executiva básica: Candidato com experiência em desenvolvimento de software e tecnologias web.";

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `Analise o seguinte conteúdo de currículo e gere um resumo profissional executivo de 3 frases, destacando skills principais e senioridade: \n\n ${content}`;
      const result = await model.generateContent(prompt);
      return result.response.text() || "Resumo não disponível.";
    } catch (error) {
      console.error("AI Summarization failed:", error);
      return "Erro ao processar o resumo com IA.";
    }
  }
}
