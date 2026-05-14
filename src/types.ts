export type Seniority = 'Estágio' | 'Júnior' | 'Pleno' | 'Sênior' | 'Especialista' | 'Diretoria';
export type JobStatus = 'Aberta' | 'Em Pausa' | 'Cancelada' | 'Preenchida';
export type CandidateStatus = 'Novo' | 'Análise' | 'Entrevista' | 'Teste Técnico' | 'Aprovado' | 'Reprovado';
export type ResumeStatus = 'Pendente' | 'Analisado' | 'Precisa Revisão';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'RECRUITER' | 'MANAGER';
}

export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  linkedinUrl?: string; // New: professional tracking
  seniority: Seniority;
  currentRole?: string;
  summary?: string; // New: AI generated short summary
  experienceYears: number;
  skills: string[];
  education: string;
  status: CandidateStatus;
  resumeUrl?: string;
  resumeContent?: string;
  aiSummary?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Resume {
  id: string;
  candidateId: string;
  fileName: string;
  fileReference: string; // New: for storage tracking
  rawText: string;
  parsedSummary: string;
  extractedSkills: string[];
  extractedExperience: string; 
  extractedEducation: string;
  detectedLanguages: string[];
  yearsOfExperience: number;
  parsingStatus: ResumeStatus;
  uploadedAt: string;
  analyzedAt?: string;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  seniority: Seniority;
  workModel: 'Remoto' | 'Presencial' | 'Híbrido';
  salary: {
    min: number;
    max: number;
  };
  description: string;
  requirements: string[]; // Mandatory skills
  desirable: string[]; // Desired skills
  responsibilities: string;
  status: JobStatus;
  recruiterOwner: string; // User ID
  createdAt: string;
  updatedAt: string;
}

export interface Application {
  id: string;
  candidateId: string;
  jobId: string;
  source: string; // New: tracking origin (LinkedIn, Referral, etc)
  stage: CandidateStatus;
  recruiterOwner: string;
  applicationDate: string;
  notes?: string;
}

export interface MatchResult {
  id: string;
  candidateId: string;
  resumeId: string;
  jobId: string;
  compatibilityScore: number;
  matchingSkills: string[];
  missingSkills: string[];
  strengths: string[];
  gaps: string[];
  aiExplanation: string;
  recommendations: string;
  recommendationLevel: 'Crítico' | 'Baixo' | 'Médio' | 'Alto' | 'Ideal';
  generatedAt: string;
}

export interface Stakeholder {
  id: string;
  name: string;
  role: string;
  interest: 'Baixo' | 'Médio' | 'Alto';
  influence: 'Baixo' | 'Médio' | 'Alto';
  impact: string;
  strategy: string;
  communication: string; // New: communication plan
}

export interface Risk {
  id: string;
  title: string;
  category: string; // New: Risk categorization
  probability: 'Baixa' | 'Média' | 'Alta';
  impact: 'Baixa' | 'Média' | 'Alta';
  mitigation: string;
  owner: string;
  status: string;
}

export interface RoadmapItem {
  id: string;
  phase: string;
  title: string;
  description: string;
  priority: 'Alta' | 'Média' | 'Baixa'; // New: priority field
  status: 'Concluído' | 'Em Andamento' | 'Planejado';
  quarter: string;
  responsavel?: string;
}

export interface KPI {
  id: string;
  label: string;
  value: string | number;
  baseline?: string | number; // New: for comparison
  target?: string | number; // New: goal
  trend: 'up' | 'down' | 'neutral';
  status: 'success' | 'warning' | 'alert';
  description: string;
}

export interface ActivityLog {
  id: string;
  userId: string;
  entityType: string;
  entityId: string;
  action: string;
  timestamp: string;
  details: string;
}

export interface StrategicDecision {
  problemContext: string;
  organizationalScenario: string;
  currentSystemChallenges: string[];
  impactOnBusiness: string;
  decisionLogic: {
    criteria: string;
    weight: number;
    description: string;
  }[];
}

export interface TechnicalDebt {
  metric: string;
  value: string;
  impactLabel: string;
  impactDescription: string;
  rationalResponse: string;
}

export interface StrategicComparison {
  feature: string;
  legacyImproved: string;
  totalModernization: string;
  winner: 'legacy' | 'modernization';
  tradeOff: string;
}

export interface ExecutiveRecommendation {
  shortTerm: string[];
  mediumTerm: string[];
  longTerm: string[];
  expectedBenefits: string[];
  finalJustification: string;
}

export type Module = 'dashboard' | 'candidates' | 'jobs' | 'matching' | 'resumes' | 'stakeholders' | 'kpis' | 'risks' | 'roadmap' | 'reports' | 'settings' | 'strategy';
