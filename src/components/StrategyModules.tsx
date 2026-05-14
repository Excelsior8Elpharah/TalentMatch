import React from 'react';
import { 
  Users, 
  Target, 
  ShieldAlert, 
  ListTree, 
  TrendingUp, 
  TrendingDown, 
  ArrowRight,
  Info,
  CheckCircle2,
  Clock,
  Circle,
  Zap,
  Layers,
  ChevronRight,
  AlertTriangle
} from 'lucide-react';
import { 
  STAKEHOLDERS, 
  KPIS, 
  RISKS, 
  ROADMAP_ITEMS,
  SWOT_DATA,
  STRATEGIC_DECISION,
  TECHNICAL_DEBT,
  STRATEGIC_COMPARISONS,
  EXECUTIVE_RECOMMENDATION,
  PESTEL_DATA
} from '../constants';
import { cn } from '../lib/utils';
import { 
  Globe, 
  Wallet, 
  Smile, 
  Cpu, 
  Leaf, 
  Gavel,
  Calendar,
  LayoutGrid
} from 'lucide-react';
import { motion } from 'motion/react';

export function StrategyModules({ module, isExport = false }: { module: string; isExport?: boolean }) {
  if (module === 'strategy') {
    return (
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
        {/* Executive Header: Problem & Context */}
        <section className="bg-slate-900 rounded-[2rem] lg:rounded-[3rem] p-6 lg:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-12 opacity-[0.05] pointer-events-none">
            <Target size={300} />
          </div>
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 rounded-full text-[10px] font-black uppercase mb-6 lg:mb-8">
              <Zap size={14} className="fill-white" /> Contexto do Problema & Cenário Organizacional
            </div>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tighter mb-6 lg:mb-8 leading-tight">
              Acelerando a Transformação Digital <br className="hidden lg:block"/> sem Comprometer a Estabilidade.
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
               <div className="space-y-4 lg:space-y-6">
                  <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest border-b border-white/10 pb-2">O Desafio</h4>
                  <p className="text-base lg:text-lg text-slate-300 font-medium leading-relaxed italic">
                    "{STRATEGIC_DECISION.problemContext}"
                  </p>
                  <p className="text-xs lg:text-sm text-slate-400 font-medium leading-relaxed">
                    {STRATEGIC_DECISION.organizationalScenario}
                  </p>
               </div>
               <div className="space-y-6 bg-white/5 p-6 lg:p-8 rounded-[2rem] border border-white/10 backdrop-blur-md">
                  <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Impactos Críticos no Negócio</h4>
                  <ul className="space-y-4">
                    {STRATEGIC_DECISION.currentSystemChallenges.map((challenge, i) => (
                      <li key={i} className="flex gap-3 text-sm font-medium text-slate-300">
                         <div className="h-5 w-5 shrink-0 bg-red-500/20 rounded-full flex items-center justify-center text-red-500 text-[10px]">!</div>
                         {challenge}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-white/10 mt-6">
                     <p className="text-xs font-black text-red-400 uppercase tracking-widest">Consequência Financeira</p>
                     <p className="text-sm font-bold text-white mt-1">{STRATEGIC_DECISION.impactOnBusiness}</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Decision Logic & Technical Debt */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 tracking-tighter mb-8 flex items-center gap-3">
                 <ListTree size={24} className="text-blue-600" /> Matriz de Critérios de Decisão
              </h3>
              <div className="space-y-8">
                {STRATEGIC_DECISION.decisionLogic.map((logic, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-end mb-3">
                      <div>
                        <p className="text-sm font-black text-slate-900 uppercase tracking-tight">{logic.criteria}</p>
                        <p className="text-[11px] text-slate-500 font-medium mt-1">{logic.description}</p>
                      </div>
                      <span className="text-xl font-black text-blue-600">{logic.weight}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${logic.weight}%` }}
                        transition={{ delay: i * 0.2, duration: 1 }}
                        className={cn("h-full rounded-full shadow-lg", i === 0 ? 'bg-blue-600' : 'bg-slate-900')} 
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-6 bg-blue-50 rounded-[2rem] border border-blue-100 flex gap-4">
                 <Info size={20} className="text-blue-600 shrink-0" />
                 <p className="text-xs text-blue-800 font-semibold leading-relaxed">
                   A decisão estratégica favorece a **Estabilidade e ROI**, garantindo que as operações críticas não sejam afetadas pela modernização.
                 </p>
              </div>
           </div>

           <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 tracking-tighter mb-8 flex items-center gap-3">
                 <ShieldAlert size={24} className="text-amber-500" /> Auditoria de Dívida Técnica (Tech Debt)
              </h3>
              <div className="space-y-6">
                {TECHNICAL_DEBT.map((debt, i) => (
                  <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:shadow-xl transition-all group">
                    <div className="flex justify-between items-start mb-4">
                       <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Métrica Detectada</p>
                          <p className="text-lg font-black text-slate-900 tracking-tight">{debt.metric}</p>
                       </div>
                       <span className="px-3 py-1 bg-red-100 text-red-700 text-[10px] font-black uppercase rounded-lg border border-red-200">{debt.value}</span>
                    </div>
                    <div className="space-y-3">
                       <div>
                          <span className="text-[10px] font-black text-slate-900 transition-colors uppercase tracking-widest flex items-center gap-2">
                             <Circle size={8} className="fill-red-500 text-red-500" /> Impacto em {debt.impactLabel}
                          </span>
                          <p className="text-[11px] text-slate-500 font-medium mt-1 leading-relaxed">{debt.impactDescription}</p>
                       </div>
                       <div className="bg-green-50 p-3 rounded-xl border border-green-100">
                          <p className="text-[9px] font-black text-green-700 uppercase tracking-widest mb-1 flex items-center gap-1"><CheckCircle2 size={10} /> Resposta Racional Proposta</p>
                          <p className="text-[11px] text-green-900 font-bold leading-relaxed">{debt.rationalResponse}</p>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* Strategic Comparison Table */}
        <section className="bg-white rounded-[3rem] border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-10 border-b border-slate-100">
             <h3 className="text-3xl font-black text-slate-900 tracking-tighter">Comparativo Estratégico</h3>
             <p className="text-slate-500 text-sm font-medium mt-1">Legado Melhorado vs Modernização Integral (Trade-offs).</p>
          </div>
          <div className="overflow-x-auto">
             <table className="w-full text-left order-collapse">
                <thead>
                   <tr className="bg-slate-900">
                      <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Fator de Avaliação</th>
                      <th className="px-10 py-6 text-[10px] font-black text-blue-400 uppercase tracking-widest">Estratégia Recomendada (Legado+)</th>
                      <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Migração Total (Big Bang)</th>
                      <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Outcome</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                   {STRATEGIC_COMPARISONS.map((comp, i) => (
                     <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-10 py-8">
                           <p className="text-sm font-black text-slate-900 tracking-tight">{comp.feature}</p>
                           <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Trade-off: {comp.tradeOff}</p>
                        </td>
                        <td className="px-10 py-8">
                           <div className="flex items-center gap-3">
                              <div className="h-6 w-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                                 <CheckCircle2 size={14} />
                              </div>
                              <span className="text-sm font-bold text-slate-700">{comp.legacyImproved}</span>
                           </div>
                        </td>
                        <td className="px-10 py-8">
                           <span className="text-sm font-medium text-slate-400">{comp.totalModernization}</span>
                        </td>
                        <td className="px-10 py-8 text-center">
                           <span className={cn(
                             "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                             comp.winner === 'legacy' ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-600"
                           )}>
                             {comp.winner === 'legacy' ? 'Vantagem Legado' : 'Vantagem Moderno'}
                           </span>
                        </td>
                     </tr>
                   ))}
                </tbody>
             </table>
          </div>
        </section>

        {/* Executive Recommendation */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
           <div className="lg:col-span-8 bg-slate-900 rounded-[2rem] lg:rounded-[3rem] p-6 lg:p-12 text-white relative overflow-hidden shadow-2xl group">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-110 transition-transform pointer-events-none">
                 <Target size={240} className="fill-white" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                 <div>
                    <h3 className="text-3xl lg:text-4xl font-black tracking-tighter mb-8 lg:mb-10 leading-tight">Recomendação Executiva <br className="hidden lg:block"/> & Justificativa de Governança</h3>
                    <p className="text-base lg:text-xl text-slate-300 font-medium italic leading-relaxed mb-8 lg:mb-12 border-l-4 border-blue-600 pl-6 lg:pl-8">
                       "{EXECUTIVE_RECOMMENDATION.finalJustification}"
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                       <div className="space-y-4">
                          <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Curto Prazo (0-6 meses)</p>
                          <ul className="space-y-2">
                             {EXECUTIVE_RECOMMENDATION.shortTerm.map((s, i) => <li key={i} className="text-xs font-bold text-slate-400 flex gap-2"> <ArrowRight size={14} className="shrink-0 text-blue-600" /> {s}</li>)}
                          </ul>
                       </div>
                       <div className="space-y-4">
                          <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Médio Prazo (6-18 meses)</p>
                          <ul className="space-y-2">
                             {EXECUTIVE_RECOMMENDATION.mediumTerm.map((s, i) => <li key={i} className="text-xs font-bold text-slate-400 flex gap-2"> <ArrowRight size={14} className="shrink-0 text-blue-600" /> {s}</li>)}
                          </ul>
                       </div>
                       <div className="space-y-4">
                          <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Longo Prazo (18+ meses)</p>
                          <ul className="space-y-2">
                             {EXECUTIVE_RECOMMENDATION.longTerm.map((s, i) => <li key={i} className="text-xs font-bold text-slate-400 flex gap-2"> <ArrowRight size={14} className="shrink-0 text-blue-600" /> {s}</li>)}
                          </ul>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm h-full flex flex-col justify-between">
                 <div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-10 flex items-center gap-2">
                       <TrendingUp size={14} /> Benefícios Esperados
                    </h4>
                    <div className="space-y-8">
                       {EXECUTIVE_RECOMMENDATION.expectedBenefits.map((benefit, i) => (
                         <div key={i} className="flex gap-4">
                            <div className="h-10 w-10 shrink-0 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-black">
                               {i + 1}
                            </div>
                            <p className="text-sm font-black text-slate-900 tracking-tight leading-snug">{benefit}</p>
                         </div>
                       ))}
                    </div>
                 </div>
                 <button className="w-full mt-12 py-5 bg-slate-900 text-white rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-blue-600 transition-all flex items-center justify-center gap-3">
                    Aprovar Plano de Modernização <ArrowRight size={16} />
                 </button>
              </div>
           </div>
        </section>
      </div>
    );
  }

  if (module === 'stakeholders') {
    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="flex items-center justify-between">
           <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Matriz de Stakeholders</h2>
              <p className="text-slate-500 text-sm font-medium">Gestão de influência e interesse na modernização TalentMatch.</p>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {STAKEHOLDERS.map((s, idx) => (
            <motion.div 
              key={s.id} 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-slate-200 group-hover:scale-110 transition-transform">
                  {s.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900 leading-tight">{s.name}</p>
                  <p className="text-[10px] text-blue-600 font-black uppercase tracking-widest mt-0.5">{s.role}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                 <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Interesse</span>
                    <div className="flex items-center gap-2">
                       <div className="h-1.5 w-16 bg-slate-100 rounded-full overflow-hidden">
                          <div className={cn("h-full rounded-full", s.interest === 'Alto' ? 'bg-green-500 w-full' : 'bg-amber-500 w-1/2')} />
                       </div>
                       <span className={cn("text-[10px] font-black uppercase", s.interest === 'Alto' ? 'text-green-600' : 'text-amber-600')}>{s.interest}</span>
                    </div>
                 </div>
                 <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Influência</span>
                    <div className="flex items-center gap-2">
                       <div className="h-1.5 w-16 bg-slate-100 rounded-full overflow-hidden">
                          <div className={cn("h-full rounded-full", s.influence === 'Alto' ? 'bg-green-500 w-full' : 'bg-amber-500 w-1/2')} />
                       </div>
                       <span className={cn("text-[10px] font-black uppercase", s.influence === 'Alto' ? 'text-green-600' : 'text-amber-600')}>{s.influence}</span>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
           <div className="p-6 bg-slate-50/50 border-b border-slate-100">
              <h3 className="font-black text-xs uppercase tracking-widest text-slate-500">Mapeamento Tático de Engajamento</h3>
           </div>
           
           {/* Desktop Table */}
           <div className="overflow-x-auto hidden lg:block">
              <table className="w-full text-left border-collapse">
                 <thead>
                   <tr className="bg-slate-900">
                     <th className="px-8 py-5 text-[10px] uppercase font-black tracking-widest text-white/60">Stakeholder</th>
                     <th className="px-8 py-5 text-[10px] uppercase font-black tracking-widest text-white/60">Impacto no Projeto</th>
                     <th className="px-8 py-5 text-[10px] uppercase font-black tracking-widest text-white/60">Estratégia de Retenção</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100">
                   {STAKEHOLDERS.map(s => (
                     <tr key={s.id} className="hover:bg-slate-50/80 transition-colors">
                       <td className="px-8 py-6">
                         <p className="font-black text-slate-900 text-sm tracking-tight">{s.name}</p>
                         <p className="text-[10px] text-slate-400 font-bold uppercase">{s.role}</p>
                       </td>
                       <td className="px-8 py-6 text-xs text-slate-600 leading-relaxed font-medium max-w-xs">{s.impact}</td>
                       <td className="px-8 py-6">
                          <div className="bg-blue-50/50 border border-blue-100/50 p-3 rounded-xl text-[11px] text-blue-700 font-medium italic">
                             "{s.strategy}"
                          </div>
                       </td>
                     </tr>
                   ))}
                 </tbody>
              </table>
           </div>

           {/* Mobile List */}
           <div className="lg:hidden divide-y divide-slate-100">
              {STAKEHOLDERS.map(s => (
                <div key={s.id} className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-black text-slate-900 text-sm tracking-tight">{s.name}</p>
                      <p className="text-[9px] text-slate-400 font-black uppercase">{s.role}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Impacto</p>
                    <p className="text-[11px] text-slate-600 font-medium leading-relaxed">{s.impact}</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl">
                    <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-1">Estratégia</p>
                    <p className="text-[11px] text-blue-700 font-medium italic">"{s.strategy}"</p>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    );
  }

  if (module === 'kpis') {
    return (
      <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
               <h2 className="text-2xl font-black text-slate-900 tracking-tight">Métricas de Governança</h2>
               <p className="text-slate-500 text-sm font-medium">Indicadores chave de performance da transição digital.</p>
            </div>
         </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {KPIS.map((kpi, idx) => (
             <motion.div 
              key={kpi.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-2xl transition-all"
             >
               <div className="relative z-10">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{kpi.label}</p>
                  <p className="text-4xl font-black text-slate-900 tracking-tighter mb-4">{kpi.value}</p>
                  <div className="flex items-center gap-2">
                    <div className={cn(
                      "p-1 rounded-lg",
                      kpi.trend === 'up' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                    )}>
                      {kpi.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    </div>
                    <span className={cn("text-xs font-black uppercase tracking-tighter", kpi.trend === 'up' ? 'text-green-600' : 'text-blue-600')}>
                      {kpi.trend === 'up' ? '+8.4%' : '-12.0%'}
                    </span>
                  </div>
               </div>
               <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-[0.08] transition-all group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <Target size={140} />
               </div>
             </motion.div>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-[10px] font-black uppercase mb-6">
                   <Layers size={14} /> Contexto Estratégico
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tighter mb-4 leading-none">Modernização sob Encomenda</h3>
                <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-medium">
                  <p>
                    A TalentMatch optou por uma estratégia de **Strangler Fig Pattern**, onde novas funcionalidades inteligentes (IA) são construídas em torno do sistema legado de 10 anos, sem interromper as operações críticas.
                  </p>
                  <p>
                    Esta abordagem prioriza o "Time-to-Value", permitindo que o time de recrutamento utilize ferramentas de ponta enquanto o Mainframe continua garantindo a integridade dos dados históricos.
                  </p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-slate-900 rounded-[2rem] text-white flex items-center gap-6 relative overflow-hidden shadow-xl shadow-slate-200">
                 <div className="h-14 w-14 shrink-0 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <Zap size={24} className="fill-white" />
                 </div>
                 <div>
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Impacto Previsto (Q2)</p>
                    <p className="text-xl font-black tracking-tight leading-none">Redução de 70% no tempo de triagem manual.</p>
                 </div>
              </div>
           </div>

           <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white overflow-hidden relative shadow-2xl">
              <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
                 <Target size={240} className="fill-white" />
              </div>
              <h4 className="text-sm font-black uppercase tracking-widest mb-10 flex items-center gap-3">
                 <span className="w-8 h-px bg-blue-500 rounded-full" /> Matriz de Evolução (SWOT)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                <div className="space-y-3">
                   <h5 className="text-[10px] font-black text-green-400 uppercase tracking-widest flex items-center gap-2">
                     <CheckCircle2 size={14} /> Forças Internas
                   </h5>
                   <ul className="space-y-2">
                     {SWOT_DATA.strengths.map(s => <li key={s} className="text-xs text-slate-300 font-medium flex gap-3 leading-relaxed"> <ChevronRight size={14} className="mt-0.5 text-slate-600" /> {s}</li>)}
                   </ul>
                </div>
                <div className="space-y-3">
                   <h5 className="text-[10px] font-black text-blue-400 uppercase tracking-widest flex items-center gap-2">
                     <TrendingUp size={14} /> Oportunidades de Mercado
                   </h5>
                   <ul className="space-y-2">
                     {SWOT_DATA.opportunities.map(s => <li key={s} className="text-xs text-slate-300 font-medium flex gap-3 leading-relaxed"> <ChevronRight size={14} className="mt-0.5 text-slate-600" /> {s}</li>)}
                   </ul>
                </div>
                <div className="space-y-3">
                   <h5 className="text-[10px] font-black text-amber-500 uppercase tracking-widest flex items-center gap-2">
                     <AlertTriangle size={14} /> Fraquezas Operacionais
                   </h5>
                   <ul className="space-y-2">
                     {SWOT_DATA.weaknesses.map(s => <li key={s} className="text-xs text-slate-400 font-medium flex gap-3 leading-relaxed"> <ChevronRight size={14} className="mt-0.5 text-slate-800" /> {s}</li>)}
                   </ul>
                </div>
                <div className="space-y-3">
                   <h5 className="text-[10px] font-black text-red-500 uppercase tracking-widest flex items-center gap-2">
                     <ShieldAlert size={14} /> Ameaças Externas
                   </h5>
                   <ul className="space-y-2">
                     {SWOT_DATA.threats.map(s => <li key={s} className="text-xs text-slate-400 font-medium flex gap-3 leading-relaxed"> <ChevronRight size={14} className="mt-0.5 text-slate-800" /> {s}</li>)}
                   </ul>
                </div>
              </div>
           </div>
        </div>
      </div>
    );
  }

  if (module === 'risks') {
    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="flex items-center justify-between">
           <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Análise de Riscos</h2>
              <p className="text-slate-500 text-sm font-medium">Controles e mitigações para operação segura do sistema.</p>
           </div>
        </div>

        <div className="bg-white rounded-[2rem] lg:rounded-[2.5rem] border border-slate-200 shadow-2xl overflow-hidden p-2">
          {/* Desktop Table View */}
          <div className="overflow-x-auto hidden lg:block">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 rounded-2xl">
                  <th className="px-8 py-5 text-[10px] uppercase font-black tracking-widest text-white/50 first:rounded-tl-[2rem]">Identificação</th>
                  <th className="px-8 py-5 text-[10px] uppercase font-black tracking-widest text-white/50">Mitigação Estratégica</th>
                  <th className="px-8 py-5 text-[10px] uppercase font-black tracking-widest text-white/50">Probabilidade</th>
                  <th className="px-8 py-5 text-[10px] uppercase font-black tracking-widest text-white/50 last:rounded-tr-[2rem]">Impacto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {RISKS.map(risk => (
                  <tr key={risk.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-6">
                       <div className="flex items-center gap-4">
                          <div className={cn(
                            "h-10 w-10 flex items-center justify-center rounded-xl",
                            risk.impact === 'Alta' ? 'bg-red-50 text-red-500' : 'bg-amber-50 text-amber-500'
                          )}>
                             <ShieldAlert size={20} />
                          </div>
                          <div>
                             <p className="text-sm font-black text-slate-900 tracking-tight">{risk.title}</p>
                             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Responsável: {risk.owner}</p>
                          </div>
                       </div>
                    </td>
                    <td className="px-8 py-6">
                       <p className="text-xs text-slate-600 font-medium max-w-sm leading-relaxed">{risk.mitigation}</p>
                    </td>
                    <td className="px-8 py-6">
                       <span className={cn(
                         "px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter",
                         risk.probability === 'Alta' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                       )}>
                         {risk.probability}
                       </span>
                    </td>
                    <td className="px-8 py-6">
                       <span className={cn(
                         "px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter",
                         risk.impact === 'Alta' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                       )}>
                         {risk.impact}
                       </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden p-4 space-y-4">
            {RISKS.map(risk => (
              <div key={risk.id} className="p-6 bg-white border border-slate-100 rounded-2xl space-y-4">
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className={cn(
                        "h-10 w-10 flex items-center justify-center rounded-xl",
                        risk.impact === 'Alta' ? 'bg-red-50 text-red-500' : 'bg-amber-50 text-amber-500'
                      )}>
                         <ShieldAlert size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-black text-slate-900 leading-tight">{risk.title}</p>
                        <p className="text-[9px] text-slate-400 font-black uppercase">Responsável: {risk.owner}</p>
                      </div>
                   </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Mitigação</p>
                  <p className="text-[11px] text-slate-600 font-medium leading-relaxed">{risk.mitigation}</p>
                </div>
                <div className="flex items-center justify-between pt-2">
                   <div className="space-y-1">
                      <p className="text-[8px] font-black text-slate-400 uppercase">Probabilidade</p>
                      <span className={cn(
                        "px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-tighter",
                        risk.probability === 'Alta' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                      )}>
                        {risk.probability}
                      </span>
                   </div>
                   <div className="space-y-1 text-right">
                      <p className="text-[8px] font-black text-slate-400 uppercase">Impacto</p>
                      <span className={cn(
                        "px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-tighter",
                        risk.impact === 'Alta' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                      )}>
                        {risk.impact}
                      </span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (module === 'roadmap') {
     return (
       <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-4 px-4">
             <div className="h-16 w-16 bg-blue-600 rounded-[1.5rem] lg:rounded-[2rem] flex items-center justify-center text-white shadow-xl shadow-blue-500/20 mb-2">
                <Calendar size={32} />
             </div>
             <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter">Roadmap & Gantt Executivo</h2>
             <p className="text-slate-500 text-xs lg:text-sm font-medium leading-relaxed">
                Visualização de cronograma tático para a modernização do ecossistema TalentMatch.
             </p>
          </div>

          {/* Gantt Chart Visualization */}
          <section className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden p-8 lg:p-12 mx-auto max-w-5xl">
             <div className="flex items-center justify-between mb-10">
                <h3 className="text-xl font-black text-slate-900 tracking-tighter uppercase">Cronograma de Entrega (Gantt)</h3>
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                   <div className="flex items-center gap-2">
                      <div className="h-3 w-3 bg-green-500 rounded" /> Q2
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="h-3 w-3 bg-blue-600 rounded" /> Q3
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="h-3 w-3 bg-slate-200 rounded" /> Q4
                   </div>
                </div>
             </div>

             <div className="space-y-4 overflow-x-auto">
                <div className="min-w-[600px]">
                   <div className="grid grid-cols-12 border-b border-slate-100 pb-4 mb-6">
                      <div className="col-span-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Iniciativa Estratégica</div>
                      <div className="col-span-8 grid grid-cols-3 gap-1">
                         <div className="text-center text-[10px] font-black text-slate-900 uppercase tracking-widest bg-slate-50 py-1 rounded-lg">Abr/Mai/Jun</div>
                         <div className="text-center text-[10px] font-black text-slate-900 uppercase tracking-widest bg-slate-50 py-1 rounded-lg">Jul/Ago/Set</div>
                         <div className="text-center text-[10px] font-black text-slate-900 uppercase tracking-widest bg-slate-50 py-1 rounded-lg">Out/Nov/Dez</div>
                      </div>
                   </div>

                   {ROADMAP_ITEMS.map((item, idx) => (
                     <div key={item.id} className="grid grid-cols-12 items-center py-4 border-b border-slate-50 last:border-0 group">
                        <div className="col-span-4 pr-6">
                           <p className="text-sm font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors uppercase">{item.title}</p>
                           <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">{item.phase}</p>
                        </div>
                        <div className="col-span-8 relative h-10 bg-slate-50 rounded-2xl flex items-center px-1 overflow-hidden">
                           <motion.div 
                             initial={{ scaleX: 0, originX: 0 }}
                             animate={{ scaleX: 1 }}
                             transition={{ delay: idx * 0.2, duration: 1 }}
                             className={cn(
                               "absolute h-6 rounded-xl shadow-lg flex items-center justify-center px-4",
                               item.quarter.includes('Q2') ? "bg-green-500 left-[2%] w-[30%]" :
                               item.quarter.includes('Q3') ? "bg-blue-600 left-[34%] w-[30%]" :
                               "bg-slate-300 left-[67%] w-[30%]"
                             )}
                           >
                              <span className={cn(
                                "text-[9px] font-black uppercase tracking-widest whitespace-nowrap",
                                item.quarter.includes('Q4') ? "text-slate-500" : "text-white"
                              )}>
                                 {item.status}
                              </span>
                           </motion.div>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </section>

          <div className="max-w-4xl mx-auto py-6 lg:py-10 relative">
             <div className="absolute left-[29px] lg:left-[39px] top-10 bottom-10 w-0.5 bg-slate-200 z-0" />
             
             <div className="space-y-10 lg:space-y-16">
                {ROADMAP_ITEMS.map((item) => (
                  <div key={item.id} className="relative z-10 pl-16 lg:pl-24 group">
                     {/* Visual Dot/Icon */}
                     <div className={cn(
                       "absolute left-0 top-0 h-14 w-14 lg:h-20 lg:w-20 rounded-[1.2rem] lg:rounded-[2rem] flex items-center justify-center border-4 lg:border-8 border-slate-50 shadow-2xl transition-all group-hover:scale-110",
                       item.status === 'Concluído' ? 'bg-green-100 text-green-600' :
                       item.status === 'Em Andamento' ? 'bg-slate-900 text-white animate-pulse' :
                       'bg-white text-slate-300 border-slate-100'
                     )}>
                       {item.status === 'Concluído' ? <CheckCircle2 className="w-6 h-6 lg:w-8 lg:h-8" /> : 
                        item.status === 'Em Andamento' ? <Zap className="w-6 h-6 lg:w-8 lg:h-8 fill-blue-400 text-blue-400" /> : 
                        <Circle className="w-6 h-6 lg:w-8 lg:h-8" />}
                     </div>

                     <div className="bg-white p-6 lg:p-10 rounded-[1.5rem] lg:rounded-[2.5rem] border border-slate-200 shadow-sm group-hover:shadow-2xl transition-all relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 lg:p-8">
                           <span className="text-[8px] lg:text-[10px] font-black text-slate-300 bg-slate-50 px-3 py-1 rounded-full uppercase tracking-widest">{item.quarter}</span>
                        </div>
                        
                        <div className="inline-flex px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[8px] lg:text-[10px] font-black uppercase tracking-widest mb-4 lg:mb-6">
                           {item.phase}
                        </div>
                        
                        <h4 className="text-xl lg:text-2xl font-black text-slate-900 mb-2 lg:mb-4 tracking-tighter">{item.title}</h4>
                        <p className="text-slate-500 text-xs lg:text-base leading-relaxed font-medium mb-6 lg:mb-8 max-w-xl">{item.description}</p>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-slate-50 pt-4 lg:pt-6 gap-4">
                           <div className={cn(
                             "flex items-center gap-2",
                             item.status === 'Concluído' ? 'text-green-600' :
                             item.status === 'Em Andamento' ? 'text-blue-600' :
                             'text-slate-400'
                           )}>
                              <span className="h-2 w-2 rounded-full bg-current" />
                              <span className="text-[10px] lg:text-xs font-black uppercase tracking-widest">{item.status}</span>
                           </div>
                           {!isExport && (
                             <button className="text-[9px] lg:text-[10px] font-black text-blue-600 hover:text-blue-700 flex items-center gap-2 transition-all group-hover:translate-x-1">
                                DETALHAR FRAMEWORK <ArrowRight size={14} />
                             </button>
                           )}
                        </div>
                     </div>
                  </div>
                ))}
             </div>
          </div>
       </div>
     );
  }

  if (module === 'swot') {
    return (
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20">
        <div className="max-w-4xl">
           <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">Análise SWOT Estratégica</h2>
           <p className="text-slate-500 font-medium italic">Cruzamento de forças internas e externos para o projeto TalentMatch.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {/* Strengths */}
           <div className="bg-green-50 p-10 rounded-[3rem] border border-green-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:scale-110 transition-transform">
                 <Target size={120} className="text-green-900" />
              </div>
              <h3 className="text-2xl font-black text-green-900 tracking-tighter mb-8 flex items-center gap-3 lowercase sm:uppercase">
                 <div className="h-10 w-10 bg-green-600 rounded-xl flex items-center justify-center text-white shadow-lg">S</div>
                 Forças (Strengths)
              </h3>
              <ul className="space-y-6">
                 {SWOT_DATA.strengths.map((s, i) => (
                   <li key={i} className="flex gap-4">
                      <div className="h-6 w-6 shrink-0 bg-green-200 text-green-700 rounded-lg flex items-center justify-center text-[10px] font-black">{i+1}</div>
                      <p className="text-sm font-bold text-green-800 leading-relaxed">{s}</p>
                   </li>
                 ))}
              </ul>
           </div>

           {/* Weaknesses */}
           <div className="bg-amber-50 p-10 rounded-[3rem] border border-amber-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:scale-110 transition-transform">
                 <AlertTriangle size={120} className="text-amber-900" />
              </div>
              <h3 className="text-2xl font-black text-amber-900 tracking-tighter mb-8 flex items-center gap-3 lowercase sm:uppercase">
                 <div className="h-10 w-10 bg-amber-500 rounded-xl flex items-center justify-center text-white shadow-lg">W</div>
                 Fraquezas (Weaknesses)
              </h3>
              <ul className="space-y-6">
                 {SWOT_DATA.weaknesses.map((w, i) => (
                   <li key={i} className="flex gap-4">
                      <div className="h-6 w-6 shrink-0 bg-amber-200 text-amber-700 rounded-lg flex items-center justify-center text-[10px] font-black">{i+1}</div>
                      <p className="text-sm font-bold text-amber-800 leading-relaxed">{w}</p>
                   </li>
                 ))}
              </ul>
           </div>

           {/* Opportunities */}
           <div className="bg-blue-50 p-10 rounded-[3rem] border border-blue-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:scale-110 transition-transform">
                 <TrendingUp size={120} className="text-blue-900" />
              </div>
              <h3 className="text-2xl font-black text-blue-900 tracking-tighter mb-8 flex items-center gap-3 lowercase sm:uppercase">
                 <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">O</div>
                 Oportunidades (Opportunities)
              </h3>
              <ul className="space-y-6">
                 {SWOT_DATA.opportunities.map((o, i) => (
                   <li key={i} className="flex gap-4">
                      <div className="h-6 w-6 shrink-0 bg-blue-200 text-blue-700 rounded-lg flex items-center justify-center text-[10px] font-black">{i+1}</div>
                      <p className="text-sm font-bold text-blue-800 leading-relaxed">{o}</p>
                   </li>
                 ))}
              </ul>
           </div>

           {/* Threats */}
           <div className="bg-red-50 p-10 rounded-[3rem] border border-red-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:scale-110 transition-transform">
                 <ShieldAlert size={120} className="text-red-900" />
              </div>
              <h3 className="text-2xl font-black text-red-900 tracking-tighter mb-8 flex items-center gap-3 lowercase sm:uppercase">
                 <div className="h-10 w-10 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-lg">T</div>
                 Ameaças (Threats)
              </h3>
              <ul className="space-y-6">
                 {SWOT_DATA.threats.map((t, i) => (
                   <li key={i} className="flex gap-4">
                      <div className="h-6 w-6 shrink-0 bg-red-200 text-red-700 rounded-lg flex items-center justify-center text-[10px] font-black">{i+1}</div>
                      <p className="text-sm font-bold text-red-800 leading-relaxed">{t}</p>
                   </li>
                 ))}
              </ul>
           </div>
        </div>

        <div className="bg-slate-900 text-white p-12 rounded-[3.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-12 opacity-[0.05] pointer-events-none">
              <Target size={240} className="fill-white" />
           </div>
           <div className="relative z-10 max-w-3xl">
              <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-6">Conclusão da Análise</h4>
              <p className="text-xl font-medium leading-relaxed italic">
                 "A modernização via Strangler Pattern mitiga as **fraquezas técnicas** imediatas enquanto explora as **oportunidades de IA**, mantendo a **força** dos dados históricos intacta."
              </p>
           </div>
        </div>
      </div>
    );
  }

  if (module === 'pestel') {
    return (
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20">
        <div className="max-w-4xl">
           <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">Análise PESTEL Contextual</h2>
           <p className="text-slate-500 font-medium italic">Fatores macroambientais que influenciam a modernização tecnológica.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             { id: 'p', label: 'Político', color: 'blue', icon: Globe, items: PESTEL_DATA.political },
             { id: 'e', label: 'Econômico', color: 'indigo', icon: Wallet, items: PESTEL_DATA.economic },
             { id: 's', label: 'Social', color: 'purple', icon: Smile, items: PESTEL_DATA.social },
             { id: 't', label: 'Tecnológico', color: 'cyan', icon: Cpu, items: PESTEL_DATA.technological },
             { id: 'env', label: 'Ambiental', color: 'green', icon: Leaf, items: PESTEL_DATA.environmental },
             { id: 'l', label: 'Legal', color: 'red', icon: Gavel, items: PESTEL_DATA.legal },
           ].map((factor, idx) => (
             <motion.div 
               key={factor.id}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
             >
                <div className="flex items-center gap-4 mb-8">
                   <div className={cn(
                     "h-14 w-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 shadow-lg",
                     factor.color === 'blue' ? 'bg-blue-600 text-white' :
                     factor.color === 'indigo' ? 'bg-indigo-600 text-white' :
                     factor.color === 'purple' ? 'bg-purple-600 text-white' :
                     factor.color === 'cyan' ? 'bg-cyan-600 text-white' :
                     factor.color === 'green' ? 'bg-green-600 text-white' :
                     'bg-red-600 text-white'
                   )}>
                      <factor.icon size={28} />
                   </div>
                   <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Dimensão</p>
                      <h4 className="text-xl font-black text-slate-900 tracking-tight uppercase">{factor.label}</h4>
                   </div>
                </div>
                <ul className="space-y-4">
                   {factor.items.map((item, i) => (
                     <li key={i} className="flex gap-3">
                        <div className="h-1.5 w-1.5 shrink-0 bg-slate-300 rounded-full mt-1.5" />
                        <p className="text-[13px] font-medium text-slate-600 leading-relaxed">{item}</p>
                     </li>
                   ))}
                </ul>
             </motion.div>
           ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-12 text-center text-slate-500 italic font-bold">Iniciando protocolo de governança...</div>
  );
}
