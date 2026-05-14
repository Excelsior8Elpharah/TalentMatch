import React from 'react';
import { 
  Search, 
  MapPin, 
  Briefcase, 
  DollarSign, 
  Clock, 
  ChevronRight,
  Plus,
  Filter,
  Users,
  Target,
  ArrowRight
} from 'lucide-react';
import { JOBS } from '../constants';
import { Job, JobStatus } from '../types';
import { cn, formatCurrency } from '../lib/utils';
import { motion } from 'motion/react';

export function Jobs({ isExport = false }: { isExport?: boolean }) {
  const getStatusColor = (status: JobStatus) => {
    switch (status) {
      case 'Aberta': return 'text-green-600 bg-green-50 border-green-200';
      case 'Em Pausa': return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'Preenchida': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Cancelada': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {!isExport && (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-4 flex-1 w-full">
             <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Gestão de Oportunidades</h2>
             <div className="flex flex-wrap gap-4 items-center">
                <div className="relative flex-1 min-w-[300px]">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Pesquisar por cargo, departamento ou localidade..." 
                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all outline-none text-sm font-medium shadow-sm"
                  />
                </div>
                <button className="h-[54px] px-5 bg-white border border-slate-200 rounded-2xl flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
                   <Filter size={16} /> Filtros
                </button>
             </div>
          </div>

          <button className="btn-primary h-[54px] px-8 flex items-center gap-2 shadow-xl shadow-blue-500/20">
            <Plus size={20} />
            <span>Nova Vaga</span>
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {JOBS.map((job, idx) => (
          <motion.div 
            key={job.id} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl hover:border-blue-500/20 transition-all group relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[4rem] -mr-10 -mt-10 group-hover:bg-blue-100 transition-colors pointer-events-none" />
            
            <div className="relative z-10">
               <div className="flex justify-between items-start mb-8">
                  <div className="space-y-3">
                     <span className={cn(
                       "inline-flex px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border", 
                       getStatusColor(job.status)
                     )}>
                        {job.status}
                     </span>
                     <h3 className="text-2xl font-black text-slate-900 tracking-tighter leading-tight group-hover:text-blue-600 transition-colors uppercase">
                        {job.title}
                     </h3>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Briefcase size={12} /> {job.department}
                     </p>
                  </div>
                  <div className="text-right">
                     <p className="text-xl font-black text-slate-900 tracking-tighter">{formatCurrency(job.salary.min)}</p>
                     <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Base Inicial</p>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                     <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                        <MapPin size={12} /> Localidade
                     </div>
                     <p className="text-xs font-black text-slate-700 uppercase tracking-tighter">{job.location} ({job.workModel})</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                     <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                        <Target size={12} /> Senioridade
                     </div>
                     <p className="text-xs font-black text-slate-700 uppercase tracking-tighter">{job.seniority}</p>
                  </div>
               </div>

               <div className="mb-10">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Competências Mandatórias</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.slice(0, 4).map(req => (
                      <span key={req} className="bg-white text-slate-700 text-[10px] font-black px-3 py-1.5 rounded-xl border border-slate-200 uppercase tracking-tighter shadow-sm group-hover:border-blue-200 group-hover:text-blue-600 transition-all">
                        {req}
                      </span>
                    ))}
                    {job.requirements.length > 4 && (
                      <span className="text-[10px] text-slate-400 font-black flex items-center ml-1">+{job.requirements.length - 4} OUTRAS</span>
                    )}
                  </div>
               </div>

               <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                     <div className="flex -space-x-3">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="h-10 w-10 rounded-xl border-4 border-white bg-slate-900 flex items-center justify-center text-[10px] font-black text-white shadow-xl">
                            {i*5}
                          </div>
                        ))}
                     </div>
                     <div>
                        <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Triados</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Match Intelligence</p>
                     </div>
                  </div>
                  
                  <button className="flex items-center gap-2 text-xs font-black text-blue-600 hover:gap-3 transition-all uppercase tracking-widest">
                    Detalhes <ArrowRight size={16} />
                  </button>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
