import React from 'react';
import { 
  Users, 
  Briefcase, 
  Target, 
  Clock, 
  TrendingUp, 
  AlertCircle,
  CheckCircle2,
  Calendar,
  Plus,
  ShieldAlert,
  ChevronRight,
  Zap,
  BrainCircuit
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell
} from 'recharts';
import { KPIS, CANDIDATES, JOBS, STRATEGIC_DECISION, EXECUTIVE_RECOMMENDATION } from '../constants';
import { CandidateStatus } from '../types';
import { cn } from '../lib/utils';

export function Dashboard({ isExport = false }: { isExport?: boolean }) {
  const openJobsCount = JOBS.filter(j => j.status === 'Aberta').length;
  const pausedJobsCount = JOBS.filter(j => j.status === 'Em Pausa').length;
  const closedJobsCount = JOBS.filter(j => j.status === 'Preenchida').length;

  const VAGAS_DATA = [
    { name: 'Abertas', value: openJobsCount, color: '#2563eb' },
    { name: 'Pausadas', value: pausedJobsCount, color: '#94a3b8' },
    { name: 'Fechadas', value: closedJobsCount, color: '#10b981' },
  ];

  const getCandidatesByStage = (stage: CandidateStatus) => {
    return CANDIDATES.filter(c => c.status === stage).length;
  };

  const CANDIDATOS_DATA = [
    { stage: 'Novo', count: getCandidatesByStage('Novo') },
    { stage: 'Análise', count: getCandidatesByStage('Análise') },
    { stage: 'Entrev.', count: getCandidatesByStage('Entrevista') },
    { stage: 'Teste', count: getCandidatesByStage('Teste Técnico') },
    { stage: 'Aprov.', count: getCandidatesByStage('Aprovado') },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {!isExport && (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
           <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Overview Executivo</h2>
              <p className="text-slate-500 text-sm font-medium">Bem-vindo ao centro de comando TalentMatch RH.</p>
           </div>
           <div className="flex items-center gap-2">
              <button className="btn-secondary text-[10px] font-black uppercase tracking-widest px-6 h-12">Exportar BI</button>
              <div className="relative group">
                <button 
                  className="btn-primary text-[10px] font-black uppercase tracking-widest px-6 h-12 shadow-xl shadow-blue-500/20"
                >
                  Dossiê de Governança
                </button>
                <div className="absolute top-full right-0 mt-2 w-64 p-4 bg-slate-900 text-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-2xl border border-white/10">
                  <p className="text-[9px] font-black uppercase tracking-widest text-blue-400 mb-2">Insight de Gestão</p>
                  <p className="text-[10px] font-medium leading-relaxed italic">
                    Análise técnica sobre a mitigação de dívida técnica v.s. custo de oportunidade em sistemas core de 10 anos.
                  </p>
                </div>
              </div>
           </div>
        </div>
      )}

      {/* Strategic Alignment Alert (The "Why") */}
      <div className="bg-slate-900 rounded-[2rem] lg:rounded-[2.5rem] p-6 lg:p-10 text-white relative overflow-hidden shadow-2xl">
         <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
            <Target size={200} />
         </div>
         <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10 relative z-10">
            <div className="flex-1 space-y-6">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                  <Zap size={14} className="fill-white" /> Alinhamento Estratégico do Projeto
               </div>
               <h3 className="text-2xl lg:text-4xl font-black tracking-tighter leading-tight">
                 Modernização Incremental: <br className="hidden lg:block"/> Eficiência sobre Sistema Legado.
               </h3>
               <p className="text-slate-400 font-medium leading-relaxed max-w-2xl italic text-sm lg:text-base">
                 "{STRATEGIC_DECISION.problemContext}"
               </p>
               <div className="flex flex-wrap gap-4 pt-2 lg:pt-4">
                  {EXECUTIVE_RECOMMENDATION.expectedBenefits.slice(0, 2).map((b, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 lg:px-5 lg:py-3 rounded-2xl">
                       <div className="h-2 w-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
                       <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-slate-300">{b}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 lg:p-8 rounded-[2rem] w-full lg:w-96 backdrop-blur-md">
               <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Vetor de Decisão (Weighted Logic)</p>
               <div className="space-y-6">
                  {STRATEGIC_DECISION.decisionLogic.slice(0, 3).map((l, i) => (
                    <div key={i}>
                       <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-black uppercase tracking-tight text-slate-300">{l.criteria}</span>
                          <span className="text-xs font-black text-blue-400">{l.weight}%</span>
                       </div>
                       <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-600 rounded-full" style={{ width: `${l.weight}%` }} />
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPIS.map((kpi) => (
          <div key={kpi.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className={cn(
                "p-2.5 rounded-xl transition-colors",
                kpi.trend === 'up' ? 'bg-green-50 text-green-600' : kpi.trend === 'down' ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-400'
              )}>
                {kpi.trend === 'up' ? <TrendingUp size={20} /> : kpi.trend === 'down' ? <Clock size={20} /> : <Target size={20} />}
              </div>
              <span className={cn(
                "text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-wider",
                kpi.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
              )}>
                {kpi.trend === 'up' ? '+12.5%' : '-4%'}
              </span>
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{kpi.label}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-900 tracking-tighter">{kpi.value}</span>
            </div>
            <p className="mt-3 text-xs text-slate-500 font-medium leading-relaxed">{kpi.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
               <h3 className="font-black text-slate-900 text-lg tracking-tight">Pipeline de Talentos</h3>
               <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Status em Tempo Real</p>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg text-[10px] font-bold text-slate-500">
                <div className="w-2 h-2 bg-blue-600 rounded-full" /> Volume Total
              </div>
            </div>
          </div>
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CANDIDATOS_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="stage" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 800, fill: '#94a3b8' }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} 
                />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', padding: '12px' }}
                />
                <Bar dataKey="count" fill="#2563eb" radius={[6, 6, 0, 0]} barSize={48} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Side Stats */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
          <h3 className="font-black text-slate-900 text-lg tracking-tight mb-8">Gestão de Vagas</h3>
          <div className="h-[220px] w-full relative mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={VAGAS_DATA}
                  innerRadius={70}
                  outerRadius={95}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {VAGAS_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-4xl font-black text-slate-900 tracking-tighter">{JOBS.length}</span>
              <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Ativas</span>
            </div>
          </div>
          <div className="space-y-4">
            {VAGAS_DATA.map((item) => (
              <div key={item.name} className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: item.color }} />
                  <span className="text-sm font-bold text-slate-600 transition-colors group-hover:text-slate-900">{item.name}</span>
                </div>
                <div className="flex items-center gap-2">
                   <span className="h-0.5 w-8 bg-slate-100 rounded-full" />
                   <span className="font-black text-slate-900 text-sm">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Critical Alerts */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 bg-slate-50/50 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-black text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <AlertCircle size={18} className="text-amber-500" />
              Prioridades Operacionais
            </h3>
            <span className="text-[10px] font-black bg-amber-100 text-amber-700 px-3 py-1 rounded-full uppercase tracking-tighter shadow-sm">3 Ações Pendentes</span>
          </div>
          <div className="divide-y divide-slate-50">
            <div className="p-6 hover:bg-slate-50 transition-all flex gap-4 group cursor-pointer">
              <div className="h-10 w-10 shrink-0 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Triagem acumulada: Senior Frontend React</p>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">8 novos currículos com compatibilidade acima de 85% aguardando análise.</p>
              </div>
            </div>
            <div className="p-6 hover:bg-slate-50 transition-all flex gap-4 group cursor-pointer">
              <div className="h-10 w-10 shrink-0 bg-red-50 rounded-xl flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                <ShieldAlert size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Documentação pendente de compliance</p>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">Ana Silva (Aprovada) não concluiu o upload dos documentos obrigatórios.</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Suggestions */}
        <div className="bg-slate-900 text-white rounded-2xl shadow-xl shadow-slate-200 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Zap size={120} className="fill-white" />
          </div>
          <div className="p-6 bg-white/5 border-b border-white/5 flex items-center justify-between relative z-10">
            <h3 className="font-black text-xs uppercase tracking-widest flex items-center gap-2">
              <BrainCircuit size={18} className="text-blue-400" />
              TalentMatch Optimization
            </h3>
            <span className="text-[10px] font-black bg-blue-600 px-3 py-1 rounded-full uppercase tracking-tighter">AI Active</span>
          </div>
          <div className="p-8 space-y-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl group hover:bg-white/15 transition-all">
              <h4 className="text-sm font-black text-blue-400 mb-2">Insight de Mercado: Vaga de Java Sênior</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">A análise detectou que o requisito "Java 17" está limitando 60% dos candidatos qualificados no sistema legado. Sugerimos flexibilizar para Java 11+.</p>
              <button className="text-[10px] font-black bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 uppercase tracking-widest uppercase">
                Aplicar Otimização
              </button>
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-white/5 last:border-0 group cursor-pointer">
              <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">Processar matching semântico para 12 novos currículos</span>
              <ChevronRight size={14} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
            </div>
            <div className="flex items-center justify-between py-3 border-b border-white/5 last:border-0 group cursor-pointer">
              <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">Alertar gestores sobre baixa adesão na vaga de DevOps</span>
              <ChevronRight size={14} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
