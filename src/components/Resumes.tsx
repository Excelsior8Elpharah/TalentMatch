import React, { useState } from 'react';
import { 
  FileText, 
  Upload, 
  Search, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  BrainCircuit,
  Eye,
  Trash2,
  Sparkles,
  Zap,
  Info,
  ChevronRight,
  Target,
  BarChart3
} from 'lucide-react';
import { CANDIDATES } from '../constants';
import { cn } from '../lib/utils';
import { AIService } from '../services/aiService';
import { motion, AnimatePresence } from 'motion/react';

export function Resumes() {
  const [isUploading, setIsUploading] = useState(false);
  const [analyzingResumeId, setAnalyzingResumeId] = useState<string | null>(null);
  const [viewingAnalysis, setViewingAnalysis] = useState<any | null>(null);

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => setIsUploading(false), 2000);
  };

  const handleAISummary = async (candidateId: string) => {
    setAnalyzingResumeId(candidateId);
    const candidate = CANDIDATES.find(c => c.id === candidateId);
    if (candidate) {
      const mockRawContent = `${candidate.name} is a ${candidate.seniority} developer with skills in ${candidate.skills.join(', ')}. Located in ${candidate.location}.`;
      const parsingResult = await AIService.parseResume(mockRawContent);
      setViewingAnalysis({ ...parsingResult, candidateName: candidate.name });
    }
    setAnalyzingResumeId(null);
  };

  const renderAnalysisModal = () => {
    if (!viewingAnalysis) return null;

    return (
      <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-50 flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          <div className="bg-slate-900 p-8 text-white flex justify-between items-center shrink-0">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <BrainCircuit size={24} className="fill-white" />
              </div>
              <div>
                <h3 className="text-xl font-black tracking-tighter">Relatório de Extração IA</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none mt-1">{viewingAnalysis.candidateName}</p>
              </div>
            </div>
            <button 
              onClick={() => setViewingAnalysis(null)}
              className="h-10 w-10 rounded-xl hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10"
            >
              <Trash2 size={18} />
            </button>
          </div>
          
          <div className="p-10 space-y-10 overflow-y-auto">
            <div className="relative">
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-blue-600 rounded-full" />
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Executive Synopsis</h4>
              <p className="text-lg font-bold text-slate-800 leading-relaxed italic">"{viewingAnalysis.parsedSummary}"</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="space-y-6">
                   <div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                       <Zap size={14} className="text-blue-600" /> Hard Skills Extraídas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {viewingAnalysis.extractedSkills?.map((s: string) => (
                        <span key={s} className="bg-slate-50 text-slate-700 text-[10px] font-black px-3 py-1.5 rounded-lg border border-slate-200 uppercase tracking-tighter">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Nível Hierárquico</h4>
                    <span className="bg-indigo-600 text-white text-[10px] font-black px-4 py-2 rounded-xl uppercase tracking-widest shadow-lg shadow-indigo-500/20">
                      {viewingAnalysis.seniority}
                    </span>
                  </div>
               </div>

               <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Senioridade Efetiva</h4>
                    <div className="flex items-end gap-2">
                       <p className="text-4xl font-black text-slate-900 tracking-tighter leading-none">{viewingAnalysis.yearsOfExperience}</p>
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">ANOS DE EXP.</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Idiomas Detectados</h4>
                    <div className="flex flex-wrap gap-2">
                      {viewingAnalysis.detectedLanguages?.map((l: string) => (
                        <span key={l} className="bg-blue-50 text-blue-700 text-[10px] font-black px-3 py-1.5 rounded-lg border border-blue-100 uppercase tracking-tighter">
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
               </div>

               <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Info size={14} /> Insights de Integração
                  </h4>
                  <div className="space-y-4">
                     <div className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                        <p className="text-[11px] font-bold text-slate-600 leading-normal">Estrutura de dados compatível com sistema legado.</p>
                     </div>
                     <div className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                        <p className="text-[11px] font-bold text-slate-600 leading-normal">Mapeamento de skills normalizado por Ontologia RH.</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-[2rem] text-white flex items-center justify-between shadow-2xl relative overflow-hidden">
               <div className="relative z-10 flex items-center gap-6">
                  <div className="h-14 w-14 bg-white/10 rounded-2xl flex items-center justify-center text-white border border-white/10">
                     <Target size={28} />
                  </div>
                  <div>
                     <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Formação & Academic Background</p>
                     <p className="text-lg font-black tracking-tighter">{viewingAnalysis.extractedEducation}</p>
                  </div>
               </div>
               <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none" />
            </div>
          </div>
          
          <div className="p-8 bg-slate-50 border-t border-slate-100 flex justify-end shrink-0">
            <button 
              onClick={() => setViewingAnalysis(null)}
              className="btn-primary"
            >
              Confirmar & Ingerir no Sistema
            </button>
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in duration-700 pb-20">
      <AnimatePresence>
        {renderAnalysisModal()}
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Upload Terminal */}
        <div className="lg:col-span-4 bg-slate-900 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden flex flex-col justify-between group">
           <div className="relative z-10">
              <div className="h-14 w-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform">
                 <Upload size={28} className="fill-white" />
              </div>
              <h3 className="text-3xl font-black tracking-tighter leading-tight mb-4">Ingestão de <br/> Currículos</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed mb-10">Upload direto para análise semântica imediata. Suporta PDF, DOCX e TXT.</p>
           </div>
           
           <div className="relative z-10 space-y-4">
              <div className="p-6 border-2 border-dashed border-white/20 rounded-[2rem] bg-white/5 group-hover:border-blue-500 transition-colors text-center cursor-pointer">
                 <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Arraste arquivos aqui</p>
              </div>
              <button 
                disabled={isUploading}
                onClick={handleUpload}
                className="w-full bg-white text-slate-900 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-xl"
              >
                {isUploading ? (
                   <div className="flex items-center gap-2">
                       <div className="h-3 w-3 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                       ENVIANDO...
                   </div>
                ) : 'SELECIONAR ARQUIVO'}
              </button>
           </div>

           <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
              <FileText size={200} />
           </div>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-3 bg-white p-6 rounded-3xl border border-slate-200 flex items-center justify-between">
             <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                   <Search size={22} />
                </div>
                <div>
                   <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">Filtro Global de Documentos</h4>
                   <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none mt-1">Busque por conteúdo estruturado</p>
                </div>
             </div>
             <div className="flex gap-2">
                <button className="px-4 py-2 bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-xl hover:text-slate-900 transition-colors">Semana</button>
                <button className="px-4 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl">Todos</button>
             </div>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col items-center text-center">
             <div className="h-10 w-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle2 size={24} />
             </div>
             <p className="text-3xl font-black text-slate-900 tracking-tighter">1,248</p>
             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Analisados</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col items-center text-center">
             <div className="h-10 w-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                <Clock size={24} />
             </div>
             <p className="text-3xl font-black text-slate-900 tracking-tighter">14</p>
             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Fila Global</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:bg-slate-900 transition-all hover:border-slate-800">
             <div className="h-10 w-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Sparkles size={24} className="fill-current" />
             </div>
             <p className="text-3xl font-black text-slate-900 tracking-tighter group-hover:text-white transition-colors">92%</p>
             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1 group-hover:text-slate-500 transition-colors">AI Trust Score</p>
          </div>

          <div className="md:col-span-3 bg-white rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden p-2">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-separate border-spacing-0">
                <thead>
                  <tr className="bg-slate-900">
                    <th className="px-8 py-5 text-[10px] uppercase font-black tracking-widest text-white/50 first:rounded-tl-2xl">Identificador do Arquivo</th>
                    <th className="px-8 py-5 text-[10px] uppercase font-black tracking-widest text-white/50">Vínculo de Perfil</th>
                    <th className="px-8 py-5 text-[10px] uppercase font-black tracking-widest text-white/50">Status de Extração</th>
                    <th className="px-8 py-5 text-[10px] uppercase font-black tracking-widest text-white/50 last:rounded-tr-2xl text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {CANDIDATES.slice(0, 8).map((c, idx) => (
                    <tr key={c.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                           <div className="h-10 w-10 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-slate-900 transition-colors">
                              <FileText size={20} />
                           </div>
                           <span className="text-sm font-black text-slate-900 tracking-tight">cv_{c.name.split(' ')[0].toLowerCase()}_2024.pdf</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                         <div className="flex items-center gap-2">
                            <span className="text-xs font-black text-blue-600 uppercase tracking-tighter">{c.name}</span>
                            <ChevronRight size={14} className="text-slate-300" />
                         </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                           <div className={cn("h-2 w-2 rounded-full", idx % 3 === 0 ? "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" : "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]")} />
                           <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">{idx % 3 === 0 ? 'Pendente' : 'Processado'}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                           <button 
                             onClick={() => handleAISummary(c.id)}
                             className={cn(
                               "h-10 w-10 flex items-center justify-center rounded-xl transition-all", 
                               analyzingResumeId === c.id ? "bg-blue-600 text-white animate-pulse" : "bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-white hover:shadow-lg border border-slate-100"
                             )}
                           >
                             <BrainCircuit size={18} />
                           </button>
                           <button className="h-10 w-10 flex items-center justify-center bg-slate-50 text-slate-400 hover:text-slate-900 border border-slate-100 rounded-xl transition-all hover:scale-105">
                             <Eye size={18} />
                           </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
