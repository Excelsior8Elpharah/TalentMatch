import React, { useState } from 'react';
import { 
  Zap, 
  BrainCircuit, 
  CheckCircle2, 
  AlertTriangle,
  TrendingUp,
  RotateCcw,
  ArrowRight,
  Info,
  Target,
  BarChart3
} from 'lucide-react';
import { CANDIDATES, JOBS } from '../constants';
import { Candidate, Job, MatchResult } from '../types';
import { AIService } from '../services/aiService';
import { cn } from '../lib/utils';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'motion/react';

export function MatchingAI() {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [matchingResults, setMatchingResults] = useState<{ job: Job; match: MatchResult }[]>([]);

  const handleRunMatch = async (candidate: Candidate) => {
    setSelectedCandidate(candidate);
    setIsProcessing(true);
    setMatchingResults([]);
    
    // Simulate thinking
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const results = await Promise.all(
      JOBS.slice(0, 3).map(async (job) => {
        const match = await AIService.calculateMatch(candidate, job);
        return { job, match };
      })
    );

    // Sort by score
    results.sort((a, b) => b.match.compatibilityScore - a.match.compatibilityScore);
    setMatchingResults(results);
    setIsProcessing(false);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-50 border-green-200';
    if (score >= 60) return 'text-blue-600 bg-blue-50 border-blue-200';
    if (score >= 40) return 'text-amber-600 bg-amber-50 border-amber-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const renderRanking = () => {
    if (!matchingResults.length) return null;

    return (
      <div className="mt-12 space-y-8 animate-in slide-in-from-bottom-5 duration-700">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <h3 className="text-xl font-black text-slate-900 flex items-center gap-3">
             <div className="p-2 bg-blue-600 rounded-xl text-white">
                <TrendingUp size={20} />
             </div>
             Ranking de Melhores Vagas
          </h3>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Baseado em Perfil Semântico</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {matchingResults.map(({ job, match }, idx) => (
            <div 
              key={job.id} 
              className={cn(
                "p-6 rounded-3xl border-2 transition-all relative overflow-hidden group hover:scale-[1.02]",
                idx === 0 ? "border-blue-600 bg-blue-50/30 shadow-xl shadow-blue-500/10" : "border-slate-100 bg-white hover:border-slate-200"
              )}
            >
              {idx === 0 && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-bl-2xl uppercase tracking-widest shadow-sm">
                  Recomendação IA
                </div>
              )}
              <div className="flex items-center justify-between mb-4">
                <div className={cn(
                  "h-14 w-14 rounded-2xl flex items-center justify-center text-xl font-black border-2",
                  idx === 0 ? "bg-white border-blue-600 text-blue-600" : "bg-slate-50 border-slate-100 text-slate-400"
                )}>
                  {match.compatibilityScore}%
                </div>
                <div className={cn(
                  "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter",
                  match.recommendationLevel === 'Ideal' ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                )}>
                  Nível {match.recommendationLevel}
                </div>
              </div>
              <h4 className="font-black text-slate-900 text-base mb-1 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{job.title}</h4>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-6">{job.department}</p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {match.matchingSkills.slice(0, 3).map(s => (
                    <span key={s} className="text-[9px] bg-white text-slate-600 px-2 py-1 rounded-lg font-bold border border-slate-200 uppercase tracking-tighter">
                      {s}
                    </span>
                  ))}
                </div>
                <button className={cn(
                  "w-full py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                  idx === 0 ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" : "bg-slate-900 text-white"
                )}>
                  Analisar Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 lg:space-y-10 animate-in fade-in duration-700 pb-20">
      <div className="bg-slate-900 p-6 lg:p-12 rounded-[2rem] lg:rounded-[2.5rem] text-white shadow-2xl overflow-hidden relative border border-white/5">
        <div className="absolute top-0 right-0 w-full lg:w-1/3 h-full bg-gradient-to-t lg:bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl text-center lg:text-left">
             <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-widest">
               <Zap size={14} className="fill-blue-400" /> Powered by Gemini 1.5 Flash
             </div>
             <h2 className="text-3xl lg:text-5xl font-black tracking-tighter leading-[1.1] lg:leading-[0.9]">
               TalentMatch <br/>
               <span className="text-slate-500">AI Engine</span>
             </h2>
             <p className="text-slate-400 text-xs lg:text-sm font-medium leading-relaxed">
               Nossa IA analisa padrões semânticos, experiência real e soft skills para garantir a melhor aderência entre candidatos e oportunidades.
             </p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl p-6 lg:p-8 rounded-3xl border border-white/10 w-full lg:w-auto min-w-[280px]">
            <h3 className="font-black text-[10px] lg:text-xs uppercase tracking-widest mb-4 lg:mb-6 text-blue-400">Iniciar Novo Matching</h3>
            <div className="space-y-4">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Selecione o Candidato</p>
              <div className="grid grid-cols-2 gap-2">
                {CANDIDATES.slice(0, 4).map(c => (
                  <button 
                    key={c.id} 
                    onClick={() => handleRunMatch(c)}
                    className={cn(
                      "px-3 lg:px-4 py-2 lg:py-2.5 rounded-xl text-[9px] lg:text-[10px] font-black transition-all border uppercase tracking-tighter",
                      selectedCandidate?.id === c.id 
                        ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/40" 
                        : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                    )}
                  >
                    {c.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isProcessing && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-20 flex flex-col items-center justify-center space-y-6"
          >
            <div className="relative">
              <div className="h-20 w-20 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin" />
              <Zap size={24} className="absolute inset-0 m-auto text-blue-600 animate-pulse" />
            </div>
            <div className="text-center">
               <p className="text-sm font-black text-slate-900 uppercase tracking-widest">Processando Camadas Semânticas</p>
               <p className="text-xs text-slate-400 font-bold mt-1 uppercase tracking-tighter">Extraindo vetores de competência...</p>
            </div>
          </motion.div>
        )}

        {selectedCandidate && matchingResults.length > 0 && !isProcessing && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-12"
          >
            {matchingResults.slice(0, 1).map(({ job, match }) => (
              <div key={job.id} className="bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Left Analysis Panel */}
                  <div className="lg:w-2/5 p-10 bg-slate-50 border-r border-slate-200">
                    <div className="mb-10">
                      <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-3 block">Top Match Analysis</span>
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "h-24 w-24 rounded-3xl flex items-center justify-center text-4xl font-black border-4 shadow-xl",
                          getScoreColor(match.compatibilityScore)
                        )}>
                          {match.compatibilityScore}%
                        </div>
                        <div>
                          <h3 className="text-2xl font-black text-slate-900 leading-tight uppercase tracking-tighter">{job.title}</h3>
                          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">{job.department} | {job.location}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                       <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Composição da Inteligência</h4>
                          <div className="space-y-3">
                             {[
                               { label: 'Mandatórios', score: '40%' },
                               { label: 'Desejáveis', score: '20%' },
                               { label: 'Senioridade', score: '20%' },
                               { label: 'Ajuste Semântico', score: '20%' }
                             ].map(p => (
                               <div key={p.label} className="flex items-center justify-between">
                                  <span className="text-[10px] font-bold text-slate-600">{p.label}</span>
                                  <div className="h-1 flex-1 mx-4 bg-slate-100 rounded-full overflow-hidden">
                                     <div className="h-full bg-blue-600" style={{ width: p.score }} />
                                  </div>
                                  <span className="text-[10px] font-black text-slate-900">{p.score}</span>
                               </div>
                             ))}
                          </div>
                       </div>
                       
                       <div className="p-5 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-500/20">
                          <h4 className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">Recomendação Final</h4>
                          <p className="text-lg font-black tracking-tight">{match.recommendationLevel}</p>
                          <p className="text-[10px] font-bold mt-2 leading-relaxed opacity-80">
                            {match.compatibilityScore > 80 
                              ? "Perfil com alta aderência técnica e fit cultural. Recomendado processo acelerado."
                              : "Match parcial com lacunas mapeadas. Recomendado teste técnico específico."}
                          </p>
                       </div>
                    </div>
                  </div>

                  {/* Right Explanation Panel */}
                  <div className="lg:w-3/5 p-10 space-y-8">
                     <div>
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                           <Info size={14} /> Justificativa da IA TalentMatch
                        </h4>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 italic text-slate-700 text-sm leading-relaxed">
                           <ReactMarkdown>{match.aiExplanation}</ReactMarkdown>
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                           <h4 className="text-[10px] font-black text-green-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                              <CheckCircle2 size={14} /> Pontos de Alta Aderência
                           </h4>
                           <div className="flex flex-wrap gap-2">
                              {match.matchingSkills.map(s => (
                                <span key={s} className="bg-green-50 text-green-700 text-[10px] font-black px-3 py-1.5 rounded-lg border border-green-100 uppercase tracking-tighter">
                                  {s}
                                </span>
                              ))}
                           </div>
                        </div>
                        <div>
                           <h4 className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                              <AlertTriangle size={14} /> Lacunas Identificadas
                           </h4>
                           <div className="flex flex-wrap gap-2">
                              {match.missingSkills.map(s => (
                                <span key={s} className="bg-amber-50 text-amber-700 text-[10px] font-black px-3 py-1.5 rounded-lg border border-amber-100 uppercase tracking-tighter">
                                  {s}
                                </span>
                              ))}
                           </div>
                        </div>
                     </div>

                     <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                           <div className="h-12 w-12 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black text-xs uppercase">
                              {selectedCandidate.name.charAt(0)}
                           </div>
                           <div>
                              <p className="text-sm font-black text-slate-900 tracking-tight">{selectedCandidate.name}</p>
                              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{selectedCandidate.seniority}</p>
                           </div>
                        </div>
                        <div className="flex gap-2">
                           <button className="btn-secondary" onClick={() => setSelectedCandidate(null)}>Trocar Perfil</button>
                           <button className="btn-primary">Iniciar Entrevista</button>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            ))}
            
            {renderRanking()}
          </motion.div>
        )}
      </AnimatePresence>

      {!selectedCandidate && !isProcessing && (
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in slide-in-from-bottom-8 duration-1000">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-all group">
               <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BrainCircuit size={24} />
               </div>
               <h4 className="font-black text-lg text-slate-900 mb-2 uppercase tracking-tight">Análise Semântica</h4>
               <p className="text-xs text-slate-500 leading-relaxed font-medium">Extraímos o real conhecimento técnico além das palavras-chave, identificando competências implícitas.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-all group">
               <div className="h-12 w-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target size={24} />
               </div>
               <h4 className="font-black text-lg text-slate-900 mb-2 uppercase tracking-tight">Foco em Aderência</h4>
               <p className="text-xs text-slate-500 leading-relaxed font-medium">O score é calculado com base em pesos executivos reais: compulsórios, desejáveis e fit cultural.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-all group">
               <div className="h-12 w-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 size={24} />
               </div>
               <h4 className="font-black text-lg text-slate-900 mb-2 uppercase tracking-tight">Visão de Ranking</h4>
               <p className="text-xs text-slate-500 leading-relaxed font-medium">Otimizamos o tempo do recrutador apresentando primeiro os perfis que realmente fazem sentido.</p>
            </div>
         </div>
      )}
    </div>
  );
}
