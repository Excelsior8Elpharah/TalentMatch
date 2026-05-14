import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  Eye, 
  FileUp, 
  MapPin, 
  Layers,
  ChevronRight,
  Sparkles,
  Zap
} from 'lucide-react';
import { CANDIDATES } from '../constants';
import { Candidate, CandidateStatus } from '../types';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface CandidatesProps {
  onViewProfile?: (candidate: Candidate) => void;
  isExport?: boolean;
}

export function Candidates({ onViewProfile, isExport = false }: CandidatesProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<CandidateStatus | 'Todos'>('Todos');

  const filteredCandidates = CANDIDATES.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'Todos' || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: CandidateStatus) => {
    switch (status) {
      case 'Novo': return 'text-blue-600 bg-blue-50 border-blue-100';
      case 'Análise': return 'text-amber-600 bg-amber-50 border-amber-100';
      case 'Entrevista': return 'text-purple-600 bg-purple-50 border-purple-100';
      case 'Teste Técnico': return 'text-indigo-600 bg-indigo-50 border-indigo-100';
      case 'Aprovado': return 'text-green-600 bg-green-50 border-green-100';
      case 'Reprovado': return 'text-red-600 bg-red-50 border-red-100';
      default: return 'text-slate-600 bg-slate-50 border-slate-100';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {!isExport && (
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div className="space-y-4 w-full">
             <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Pool de Talentos</h2>
             <div className="flex flex-wrap gap-4 items-center">
                <div className="relative flex-1 min-w-[300px]">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Pesquisar por nome, tecnologia ou competência..." 
                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all outline-none text-sm font-medium shadow-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2">
                   <div className="relative">
                      <select 
                        className="appearance-none pl-4 pr-10 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm font-black uppercase tracking-widest focus:ring-2 focus:ring-blue-500 outline-none shadow-sm min-w-[180px]"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value as any)}
                      >
                        <option value="Todos">Status (Todos)</option>
                        <option value="Novo">Novo</option>
                        <option value="Análise">Análise</option>
                        <option value="Entrevista">Entrevista</option>
                        <option value="Aprovado">Aprovado</option>
                      </select>
                      <Filter className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                   </div>
                </div>
             </div>
          </div>
          
          <div className="flex items-center gap-3 shrink-0">
            <button className="btn-secondary h-[54px] px-6">Exportar CSV</button>
            <button className="btn-primary h-[54px] px-6 flex items-center gap-2">
              <Plus size={20} />
              <span>Adicionar Talento</span>
            </button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden p-2">
        <div className="overflow-x-auto hidden lg:block">
          <table className="w-full text-left border-separate border-spacing-0">
            <thead>
              <tr className="bg-slate-900">
                <th className="px-8 py-5 text-[10px] uppercase font-black tracking-widest text-white/50 first:rounded-tl-2xl">Candidato</th>
                <th className="px-8 py-5 text-[10px] uppercase font-black tracking-widest text-white/50">Qualificação Técnica</th>
                <th className="px-8 py-5 text-[10px] uppercase font-black tracking-widest text-white/50">Stack Principal</th>
                <th className="px-8 py-5 text-[10px] uppercase font-black tracking-widest text-white/50">Status Atual</th>
                <th className="px-8 py-5 text-[10px] uppercase font-black tracking-widest text-white/50 last:rounded-tr-2xl text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <AnimatePresence>
                {filteredCandidates.map((candidate, idx) => (
                  <motion.tr 
                    key={candidate.id} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="hover:bg-slate-50/50 transition-colors group"
                  >
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-slate-900 flex items-center justify-center text-white font-black group-hover:scale-110 transition-transform shadow-lg shadow-slate-200">
                          {candidate.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-900 tracking-tight">{candidate.name}</p>
                          <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                             <MapPin size={10} /> {candidate.location}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-slate-900 font-black uppercase tracking-tighter">{candidate.seniority}</span>
                        <div className="flex items-center gap-1.5">
                           <div className="flex">
                              {[1, 2, 3, 4, 5].map(star => (
                                 <div key={star} className={cn("w-2 h-2 rounded-full mr-0.5", star <= 4 ? "bg-blue-600" : "bg-slate-200")} />
                              ))}
                           </div>
                           <span className="text-[10px] font-bold text-slate-400">Puntuação IA</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-wrap gap-1.5 max-w-[240px]">
                        {candidate.skills.slice(0, 3).map(skill => (
                          <span key={skill} className="text-[9px] bg-slate-50 text-slate-600 px-2 py-1 rounded-lg border border-slate-200 font-black uppercase tracking-tighter group-hover:border-blue-200 group-hover:text-blue-600 transition-colors">
                            {skill}
                          </span>
                        ))}
                        {candidate.skills.length > 3 && (
                          <span className="text-[9px] text-slate-400 font-black uppercase self-center ml-1">+{candidate.skills.length - 3}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className={cn(
                        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border", 
                        getStatusColor(candidate.status)
                      )}>
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {candidate.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => onViewProfile(candidate)}
                          className="h-10 w-10 flex items-center justify-center bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 border border-slate-100 rounded-xl transition-all hover:scale-105"
                          title="Ficha Técnica"
                        >
                          <Eye size={18} />
                        </button>
                        <button className="h-10 w-10 flex items-center justify-center bg-slate-50 text-slate-400 hover:text-slate-900 border border-slate-100 rounded-xl transition-all hover:scale-105">
                          <Plus size={18} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {/* Mobile-only cards */}
        <div className="lg:hidden p-4 space-y-4">
          {filteredCandidates.map((candidate) => (
            <div 
              key={candidate.id} 
              onClick={() => onViewProfile(candidate)}
              className="p-5 bg-white border border-slate-200 rounded-2xl active:scale-[0.98] transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-black">
                    {candidate.name[0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900">{candidate.name}</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{candidate.location}</p>
                  </div>
                </div>
                <span className={cn(
                  "px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border", 
                  getStatusColor(candidate.status)
                )}>
                  {candidate.status}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {candidate.skills.slice(0, 3).map(skill => (
                  <span key={skill} className="text-[8px] bg-slate-50 px-2 py-1 rounded-md border border-slate-100 font-black uppercase text-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                 <div className="text-[10px] font-black text-slate-400 uppercase">
                   {candidate.seniority}
                 </div>
                 <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
                   Ver Perfil &rarr;
                 </div>
              </div>
            </div>
          ))}
        </div>
        {filteredCandidates.length === 0 && (
          <div className="p-20 text-center bg-slate-50/50 rounded-b-3xl">
            <Layers className="mx-auto text-slate-300 mb-4" size={48} />
            <p className="text-slate-500 font-black uppercase tracking-widest">Nenhum talento encontrado</p>
            <p className="text-xs text-slate-400 mt-2 font-medium">Tente ajustar seus critérios de busca ou filtros de status.</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
         <div className="bg-slate-900 p-8 rounded-[2rem] text-white flex items-center gap-6 relative overflow-hidden group">
            <div className="h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-xl shadow-blue-500/20">
               <Sparkles size={28} className="fill-white" />
            </div>
            <div>
               <h4 className="text-xl font-black tracking-tighter mb-1 uppercase">Triagem Expressa IA</h4>
               <p className="text-xs text-slate-400 font-medium leading-relaxed">Deixe o Gemini 1.5 Flash analisar os novos candidatos e sugerir os matches imediatos para as vagas críticas.</p>
            </div>
            <div className="absolute -top-6 -right-6 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
               <Zap size={140} />
            </div>
         </div>
         <div className="bg-white p-8 rounded-[2rem] border border-slate-200 flex items-center gap-6 group hover:shadow-xl transition-all">
            <div className="h-16 w-16 bg-slate-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
               <FileUp size={28} className="text-slate-900" />
            </div>
            <div className="flex-1">
               <h4 className="text-xl font-black text-slate-900 tracking-tighter mb-1 uppercase">Importação em Lote</h4>
               <p className="text-xs text-slate-500 font-medium leading-relaxed">Carregue arquivos JSON ou CSV para integrar novos portfólios no banco de dados da TalentMatch.</p>
            </div>
            <ChevronRight className="text-slate-300 group-hover:translate-x-1 transition-transform" size={24} />
         </div>
      </div>
    </div>
  );
}
