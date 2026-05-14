import React, { useState } from 'react';
import { 
  Presentation, 
  ChevronLeft, 
  ChevronRight, 
  Zap, 
  TrendingUp, 
  ShieldAlert, 
  Target, 
  Cpu, 
  CheckCircle2, 
  BrainCircuit,
  MessageSquare,
  ArrowRight,
  Sparkles,
  BarChart3,
  Layers,
  ListTree,
  AlertTriangle,
  FileText
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { PESTEL_DATA, SWOT_DATA, STAKEHOLDERS, ROADMAP_ITEMS, STRATEGIC_DECISION } from '../constants';

const SLIDES = [
  {
    id: 'cover',
    title: 'TalentMatch RH',
    subtitle: 'Modernização Inteligente de Sistema Legado com IA',
    type: 'cover'
  },
  {
    id: 'problem',
    title: 'Visão Executiva',
    subtitle: 'O Problema Central e Impactos Críticos',
    type: 'problem'
  },
  {
    id: 'decision',
    title: 'Planejamento Estratégico',
    subtitle: 'Vetor de Decisão e Auditoria de Dívida Técnica',
    type: 'decision'
  },
  {
    id: 'comparison',
    title: 'Comparativo Estratégico',
    subtitle: 'Legado+ vs. Migração Total (Big Bang)',
    type: 'comparison'
  },
  {
    id: 'roadmap',
    title: 'Roadmap & Gantt Executivo',
    subtitle: 'Cronograma tático para a modernização em ciclos de 30 dias',
    type: 'roadmap'
  },
  {
    id: 'swot_risks',
    title: 'Governança & Riscos',
    subtitle: 'Análise SWOT e Matriz de Mitigação',
    type: 'swot_risks'
  },
  {
    id: 'architecture',
    title: 'A Mecânica da Modernização',
    subtitle: 'O Padrão Strangler Fig e Arquitetura Híbrida',
    type: 'architecture'
  },
  {
    id: 'conclusion',
    title: 'Conclusão Estratégica',
    subtitle: 'Resultados Esperados e Impacto no Negócio',
    type: 'conclusion'
  }
];

export function PresentationDeck({ isExport = false }: { isExport?: boolean }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    if (currentSlide < SLIDES.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  if (isExport) {
    return (
      <div className="space-y-12">
        {SLIDES.map((slide, idx) => (
          <div key={slide.id} className="bg-slate-900 rounded-[3rem] p-12 min-h-[600px] flex flex-col text-white break-inside-avoid">
             {/* Render same content but static */}
             {slide.type === 'cover' && (
               <div className="flex-1 flex flex-col justify-center items-center text-center space-y-12">
                  <div className="space-y-4">
                    <div className="h-24 w-24 bg-blue-600 rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl shadow-blue-500/20">
                      <Zap size={48} className="text-white fill-white" />
                    </div>
                    <h1 className="text-6xl font-black tracking-tighter leading-none mb-2">{slide.title}</h1>
                    <p className="text-xl text-blue-400 font-medium tracking-tight italic">{slide.subtitle}</p>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-6 w-full max-w-4xl">
                     {[
                       { label: 'Time-to-Fill', value: '-50%', color: 'blue' },
                       { label: 'Retenção', value: '+20%', color: 'green' },
                       { label: 'Matching IA', value: 'Google Gemini', color: 'indigo' },
                       { label: 'Legado', value: 'Strangler Fig', color: 'slate' }
                     ].map((stat, i) => (
                       <div key={i} className="bg-white/5 backdrop-blur-md p-6 rounded-[2rem] border border-white/10">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{stat.label}</p>
                          <p className="text-xl font-black text-white">{stat.value}</p>
                       </div>
                     ))}
                  </div>
               </div>
             )}

             {slide.type === 'problem' && (
               <div className="flex-1 flex flex-col justify-center space-y-12">
                 <div className="flex items-center gap-6">
                   <div className="h-14 w-14 bg-red-600 rounded-2xl flex items-center justify-center">
                     <AlertTriangle size={32} />
                   </div>
                   <div>
                     <h1 className="text-4xl font-black tracking-tighter">{slide.title}</h1>
                     <p className="text-slate-400 font-medium italic">{slide.subtitle}</p>
                   </div>
                 </div>

                 <div className="grid grid-cols-2 gap-12 items-center">
                   <div className="space-y-8">
                      <p className="text-xl text-slate-300 leading-relaxed font-medium border-l-4 border-blue-600 pl-6 italic">
                        "A TalentMatch opera com um sistema central de 10 anos que, embora estável, atingiu o limite de escalabilidade técnica e UX."
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                         {[
                           { label: 'Latência no Pico', val: '> 3s' },
                           { label: 'Custo Manutenção', val: '40% TI' },
                           { label: 'Time-to-Hire', val: '22 Dias' },
                           { label: 'Matching Manual', val: 'Lento' }
                         ].map((item, i) => (
                           <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/10">
                              <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-1">{item.label}</p>
                              <p className="text-lg font-black">{item.val}</p>
                           </div>
                         ))}
                      </div>
                   </div>
                   <div className="space-y-6">
                     <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Consequência Financeira</h3>
                     <div className="bg-red-950/20 p-8 rounded-[3rem] border border-red-500/20">
                        <p className="text-sm text-red-200 leading-relaxed font-medium">
                          Perda de talentos qualificados por demora no processo e aumento do custo por contratação em <span className="text-red-400 font-black">15% no último ano</span>. A dívida técnica tornou-se um obstáculo estratégico.
                        </p>
                     </div>
                   </div>
                 </div>
               </div>
             )}

             {slide.type === 'decision' && (
               <div className="flex-1 flex flex-col justify-center space-y-12">
                 <div className="flex items-center gap-6">
                   <div className="h-14 w-14 bg-indigo-600 rounded-2xl flex items-center justify-center">
                     <Target size={32} />
                   </div>
                   <div>
                     <h1 className="text-4xl font-black tracking-tighter">{slide.title}</h1>
                     <p className="text-slate-400 font-medium italic">{slide.subtitle}</p>
                   </div>
                 </div>

                 <div className="grid grid-cols-2 gap-12">
                    <div className="space-y-8">
                       <h3 className="text-xs font-black text-blue-400 uppercase tracking-widest">Matriz de Critérios Ponderados</h3>
                       <div className="space-y-6">
                          {[
                            { label: 'Continuidade Operacional', val: 40, color: 'blue' },
                            { label: 'Eficiência de Custo', val: 30, color: 'green' },
                            { label: 'Time-to-Market', val: 20, color: 'indigo' },
                            { label: 'Adoção Tecnológica', val: 10, color: 'slate' }
                          ].map(item => (
                            <div key={item.label} className="space-y-2">
                               <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                                  <span>{item.label}</span>
                                  <span>{item.val}%</span>
                               </div>
                               <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                  <div 
                                    style={{ width: `${item.val}%` }}
                                    className={cn(
                                      "h-full",
                                      item.color === 'blue' ? 'bg-blue-600' :
                                      item.color === 'green' ? 'bg-green-500' :
                                      item.color === 'indigo' ? 'bg-indigo-600' : 'bg-slate-400'
                                    )}
                                  />
                               </div>
                            </div>
                          ))}
                       </div>
                    </div>
                    <div className="bg-white/5 p-8 rounded-[3rem] border border-white/10">
                       <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Auditoria de Dívida Técnica</h3>
                       <div className="space-y-6">
                          <div className="flex justify-between items-center border-b border-white/10 pb-4">
                             <span className="text-sm font-medium">Complexidade de Código</span>
                             <span className="bg-red-500 text-[10px] font-black px-2 py-1 rounded">42 - CRÍTICO</span>
                          </div>
                          <div className="flex justify-between items-center border-b border-white/10 pb-4">
                             <span className="text-sm font-medium">Latência de Banco</span>
                             <span className="text-amber-400 font-bold">850ms</span>
                          </div>
                          <div className="flex justify-between items-center">
                             <span className="text-sm font-medium">Protocolos Legados</span>
                             <span className="text-slate-400 font-black uppercase tracking-widest">SOAP / Mainframe</span>
                          </div>
                       </div>
                    </div>
                 </div>
               </div>
             )}

             {slide.id === 'roadmap' && (
               <div className="flex-1 flex flex-col justify-center space-y-10">
                 <div className="flex items-center gap-6">
                   <div className="h-14 w-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                     <ListTree size={32} />
                   </div>
                   <div>
                     <h1 className="text-4xl font-black tracking-tighter">{slide.title}</h1>
                     <p className="text-slate-400 font-medium italic">{slide.subtitle}</p>
                   </div>
                 </div>

                 <div className="grid grid-cols-3 gap-8">
                    {[
                      { 
                        idx: 1, 
                        period: '0-6 Meses', 
                        title: 'Fase 1: Fundação', 
                        points: ['API Gateway & Dashboard Alpha', 'Indexação Vetorial de Dados', 'Compliance LGPD Base'] 
                      },
                      { 
                        idx: 2, 
                        period: '6-18 Meses', 
                        title: 'Fase 2: Expansão', 
                        points: ['Integração Total Gemini IA', 'Matching Preditivo Avançado', 'Transição Cloud Serverless'] 
                      },
                      { 
                        idx: 3, 
                        period: '18+ Meses', 
                        title: 'Fase 3: Consolidação', 
                        points: ['Migração do Core On-Premise', 'Shutdown Definitivo do Legado', 'Ecossistema 100% Nativo'] 
                      }
                    ].map(phase => (
                      <div key={phase.idx} className="bg-white/5 p-8 rounded-[3rem] border border-white/10 relative">
                         <div className="absolute top-6 right-8 text-4xl font-black opacity-10">{phase.idx}</div>
                         <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">{phase.period}</p>
                         <h4 className="text-xl font-black mb-6">{phase.title}</h4>
                         <ul className="space-y-3">
                            {phase.points.map(p => (
                              <li key={p} className="flex gap-2 text-sm text-slate-400">
                                 <span className="h-1.5 w-1.5 bg-blue-600 rounded-full shrink-0 mt-1.5" />
                                 <span>{p}</span>
                              </li>
                            ))}
                         </ul>
                      </div>
                    ))}
                 </div>
               </div>
             )}

             {slide.type === 'conclusion' && (
               <div className="flex-1 flex flex-col justify-center items-center text-center space-y-12">
                 <div className="space-y-4">
                   <div className="h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                     <CheckCircle2 size={32} />
                   </div>
                   <h1 className="text-5xl font-black tracking-tighter leading-none">{slide.title}</h1>
                   <p className="text-xl text-slate-400 font-medium">Investimento Estratégico com ROI em Curto Prazo</p>
                 </div>

                 <div className="grid grid-cols-4 gap-8 w-full max-w-5xl">
                    {[
                      { label: 'Eficiência', val: '+70%', desc: 'Mais triagem automática' },
                      { label: 'Cloud', val: '100% Native', desc: 'Escalabilidade ilimitada' },
                      { label: 'Custos', val: '-30%', desc: 'Menos bugs e infra fixa' },
                      { label: 'Compliance', val: 'LGPD OK', desc: 'Total governança de dados' }
                    ].map(item => (
                      <div key={item.label} className="space-y-3">
                         <p className="text-3xl font-black text-blue-400 tracking-tighter">{item.val}</p>
                         <p className="text-[10px] font-black text-white uppercase tracking-widest">{item.label}</p>
                         <p className="text-[10px] text-slate-500 font-bold uppercase">{item.desc}</p>
                      </div>
                    ))}
                 </div>
               </div>
             )}
             
             {slide.type === 'architecture' && (
               <div className="flex-1 flex flex-col justify-center space-y-12">
                 <div className="flex items-center gap-6">
                   <div className="h-14 w-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                     <Layers size={32} />
                   </div>
                   <div>
                     <h1 className="text-4xl font-black tracking-tighter">{slide.title}</h1>
                     <p className="text-slate-400 font-medium italic">{slide.subtitle}</p>
                   </div>
                 </div>

                 <div className="grid grid-cols-3 gap-8 items-center">
                    <div className="space-y-6 text-center">
                       <div className="h-24 w-24 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto border border-white/10">
                          <div className="h-16 w-16 bg-slate-700/50 rounded-xl" />
                       </div>
                       <p className="text-sm font-black text-slate-400 uppercase">Estado Atual</p>
                    </div>
                    <div className="space-y-6 text-center">
                       <div className="h-32 w-32 bg-blue-600/20 rounded-[2rem] flex items-center justify-center mx-auto border border-blue-500/30">
                          <Zap size={48} className="text-blue-500" />
                       </div>
                       <p className="text-sm font-black text-blue-400 uppercase">Fase de Intercepção</p>
                    </div>
                    <div className="space-y-6 text-center">
                       <div className="h-24 w-24 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                          <Cpu size={40} className="text-white" />
                       </div>
                       <p className="text-sm font-black text-white uppercase">Futuro Cloud Native</p>
                    </div>
                 </div>

                 <div className="bg-white/5 p-8 rounded-[3rem] text-center border border-white/10">
                    <p className="text-lg font-medium text-slate-300 italic">
                      "Novos serviços modernos estrangulam gradualmente as funções antigas através de uma camada de desacoplamento invisível para a operação."
                    </p>
                 </div>
               </div>
             )}
             
             {/* Swot & Risks and Comparison also need proper export render for full fidelity */}
             {slide.type === 'swot_risks' && (
               <div className="flex-1 flex flex-col justify-center space-y-12">
                  <div className="flex items-center gap-6">
                    <div className="h-14 w-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                      <ShieldAlert size={32} />
                    </div>
                    <div>
                      <h1 className="text-4xl font-black tracking-tighter">{slide.title}</h1>
                      <p className="text-slate-400 font-medium italic">{slide.subtitle}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                     <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem]">
                        <h4 className="text-xs font-black text-blue-400 uppercase mb-4">SWOT Síntese</h4>
                        <div className="space-y-2">
                           {SWOT_DATA.strengths.slice(0,2).map(s => <p key={s} className="text-xs">✓ {s}</p>)}
                           {SWOT_DATA.opportunities.slice(0,1).map(o => <p key={o} className="text-xs">✦ {o}</p>)}
                        </div>
                     </div>
                     <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem]">
                        <h4 className="text-xs font-black text-blue-400 uppercase mb-4">Riscos Ativos</h4>
                        <div className="space-y-2">
                           <p className="text-xs font-bold text-red-200">! Indisponibilidade API Legada</p>
                           <p className="text-xs text-slate-400">Mitigação: Cache & Retries</p>
                        </div>
                     </div>
                  </div>
               </div>
             )}

             {slide.type === 'comparison' && (
               <div className="flex-1 flex flex-col justify-center space-y-12">
                  <div className="flex items-center gap-6">
                    <div className="h-14 w-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                      <BarChart3 size={32} />
                    </div>
                    <div>
                      <h1 className="text-4xl font-black tracking-tighter">{slide.title}</h1>
                      <p className="text-slate-400 font-medium italic">{slide.subtitle}</p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-[2rem] border border-white/10 overflow-hidden">
                     <table className="w-full text-left text-sm">
                        <tr className="border-b border-white/10"><th className="p-4">Fator</th><th className="p-4 text-blue-400">Vantagem TalentMatch</th></tr>
                        <tr><td className="p-4">Custo</td><td className="p-4">70% mais eficiente</td></tr>
                        <tr><td className="p-4">Risco</td><td className="p-4">Mínimo / Incremental</td></tr>
                        <tr><td className="p-4">Velocidade</td><td className="p-4">Sprints de 30 dias</td></tr>
                     </table>
                  </div>
               </div>
             )}

             {/* For other types in export */}
             {!['cover', 'problem', 'decision', 'roadmap', 'conclusion', 'architecture', 'swot_risks', 'comparison'].includes(slide.type) && (
               <div className="flex-1 flex flex-col justify-center space-y-12">
                  <h1 className="text-4xl font-black tracking-tighter">{slide.title}</h1>
                  <p className="text-xl text-slate-400">{slide.subtitle}</p>
                  <p className="text-slate-500 font-bold uppercase italic">Consulte as seções seguintes do relatório para detalhamento completo desta análise.</p>
               </div>
             )}
          </div>
        ))}
      </div>
    );
  }

  const slide = SLIDES[currentSlide];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="max-w-6xl mx-auto h-[700px] flex flex-col pt-4 pb-12">
      <div className="flex items-center justify-between mb-8 px-4">
        <div>
          <h2 className="text-xl font-black text-slate-900 tracking-tighter uppercase">Boardroom Review</h2>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Pitch de Modernização TalentMatch</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            {SLIDES.map((_, i) => (
              <div 
                key={i} 
                className={cn(
                  "h-1 px-3 rounded-full transition-all duration-300",
                  currentSlide === i ? "bg-blue-600 w-8" : "bg-slate-200"
                )} 
              />
            ))}
          </div>
          <span className="text-[10px] font-black text-slate-400 uppercase ml-2">Slide {currentSlide + 1} de {SLIDES.length}</span>
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden rounded-[3rem] bg-slate-900 shadow-2xl border border-white/5">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0 p-12 lg:p-16 flex flex-col text-white"
          >
            {slide.type === 'cover' && (
              <div className="flex-1 flex flex-col justify-center items-center text-center space-y-12">
                <div className="space-y-4">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="h-24 w-24 bg-blue-600 rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl shadow-blue-500/20"
                  >
                    <Zap size={48} className="text-white fill-white" />
                  </motion.div>
                  <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none mb-2">{slide.title}</h1>
                  <p className="text-xl lg:text-2xl text-blue-400 font-medium tracking-tight italic">{slide.subtitle}</p>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl">
                   {[
                     { label: 'Time-to-Fill', value: '-50%', color: 'blue' },
                     { label: 'Retenção', value: '+20%', color: 'green' },
                     { label: 'Matching IA', value: 'Google Gemini', color: 'indigo' },
                     { label: 'Legado', value: 'Strangler Fig', color: 'slate' }
                   ].map((stat, i) => (
                     <div key={i} className="bg-white/5 backdrop-blur-md p-6 rounded-[2rem] border border-white/10">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{stat.label}</p>
                        <p className="text-xl font-black text-white">{stat.value}</p>
                     </div>
                   ))}
                </div>
              </div>
            )}

            {slide.type === 'problem' && (
              <div className="flex-1 flex flex-col justify-center space-y-12">
                <div className="flex items-center gap-6">
                  <div className="h-14 w-14 bg-red-600 rounded-2xl flex items-center justify-center">
                    <AlertTriangle size={32} />
                  </div>
                  <div>
                    <h1 className="text-4xl font-black tracking-tighter">{slide.title}</h1>
                    <p className="text-slate-400 font-medium italic">{slide.subtitle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                     <p className="text-xl text-slate-300 leading-relaxed font-medium border-l-4 border-blue-600 pl-6 italic">
                       "A TalentMatch opera com um sistema central de 10 anos que, embora estável, atingiu o limite de escalabilidade técnica e UX."
                     </p>
                     <div className="grid grid-cols-2 gap-4">
                        {[
                          { label: 'Latência no Pico', val: '> 3s' },
                          { label: 'Custo Manutenção', val: '40% TI' },
                          { label: 'Time-to-Hire', val: '22 Dias' },
                          { label: 'Matching Manual', val: 'Lento' }
                        ].map((item, i) => (
                          <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/10">
                             <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-1">{item.label}</p>
                             <p className="text-lg font-black">{item.val}</p>
                          </div>
                        ))}
                     </div>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Consequência Financeira</h3>
                    <div className="bg-red-950/20 p-8 rounded-[3rem] border border-red-500/20">
                       <p className="text-sm text-red-200 leading-relaxed font-medium">
                         Perda de talentos qualificados por demora no processo e aumento do custo por contratação em <span className="text-red-400 font-black">15% no último ano</span>. A dívida técnica tornou-se um obstáculo estratégico.
                       </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {slide.type === 'decision' && (
              <div className="flex-1 flex flex-col justify-center space-y-12">
                <div className="flex items-center gap-6">
                  <div className="h-14 w-14 bg-indigo-600 rounded-2xl flex items-center justify-center">
                    <Target size={32} />
                  </div>
                  <div>
                    <h1 className="text-4xl font-black tracking-tighter">{slide.title}</h1>
                    <p className="text-slate-400 font-medium italic">{slide.subtitle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                   <div className="space-y-8">
                      <h3 className="text-xs font-black text-blue-400 uppercase tracking-widest">Matriz de Critérios Ponderados</h3>
                      <div className="space-y-6">
                         {[
                           { label: 'Continuidade Operacional', val: 40, color: 'blue' },
                           { label: 'Eficiência de Custo', val: 30, color: 'green' },
                           { label: 'Time-to-Market', val: 20, color: 'indigo' },
                           { label: 'Adoção Tecnológica', val: 10, color: 'slate' }
                         ].map(item => (
                           <div key={item.label} className="space-y-2">
                              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                                 <span>{item.label}</span>
                                 <span>{item.val}%</span>
                              </div>
                              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                 <motion.div 
                                   initial={{ width: 0 }}
                                   animate={{ width: `${item.val}%` }}
                                   className={cn(
                                     "h-full",
                                     item.color === 'blue' ? 'bg-blue-600' :
                                     item.color === 'green' ? 'bg-green-500' :
                                     item.color === 'indigo' ? 'bg-indigo-600' : 'bg-slate-400'
                                   )}
                                 />
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                   <div className="bg-white/5 p-8 rounded-[3rem] border border-white/10">
                      <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Auditoria de Dívida Técnica</h3>
                      <div className="space-y-6">
                         <div className="flex justify-between items-center border-b border-white/10 pb-4">
                            <span className="text-sm font-medium">Complexidade de Código</span>
                            <span className="bg-red-500 text-[10px] font-black px-2 py-1 rounded">42 - CRÍTICO</span>
                         </div>
                         <div className="flex justify-between items-center border-b border-white/10 pb-4">
                            <span className="text-sm font-medium">Latência de Banco</span>
                            <span className="text-amber-400 font-bold">850ms</span>
                         </div>
                         <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Protocolos Legados</span>
                            <span className="text-slate-400 font-black uppercase tracking-widest">SOAP / Mainframe</span>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            )}

            {slide.type === 'comparison' && (
              <div className="flex-1 flex flex-col justify-center space-y-12">
                <div className="flex items-center gap-6">
                  <div className="h-14 w-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                    <BarChart3 size={32} />
                  </div>
                  <div>
                    <h1 className="text-4xl font-black tracking-tighter">{slide.title}</h1>
                    <p className="text-slate-400 font-medium italic">{slide.subtitle}</p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden">
                   <table className="w-full text-left">
                      <thead>
                         <tr className="border-b border-white/10">
                            <th className="p-6 lg:p-8 text-[10px] font-black text-slate-500 uppercase tracking-widest">Fator de Avaliação</th>
                            <th className="p-6 lg:p-8 text-[10px] font-black text-blue-400 uppercase tracking-widest bg-blue-600/10">RECOMENDADO (Legado+)</th>
                            <th className="p-6 lg:p-8 text-[10px] font-black text-slate-500 uppercase tracking-widest">Big Bang Migration</th>
                         </tr>
                      </thead>
                      <tbody className="text-sm divide-y divide-white/5">
                         {[
                           { factor: 'Eficiência de Custo', reco: '70% + Barato', other: 'Investimento Proibitivo' },
                           { factor: 'Risco Operacional', reco: 'Mínimo (Mitigado)', other: 'Crítico (Big Bang)' },
                           { factor: 'Time-to-Market', reco: 'Sprints 30 Dias', other: 'Ciclos de 2+ Anos' },
                           { factor: 'Inovação/UX', reco: 'Entrega Imediata', other: 'Futuro Incerto' }
                         ].map(row => (
                           <tr key={row.factor}>
                              <td className="p-6 lg:p-8 font-bold text-slate-300">{row.factor}</td>
                              <td className="p-6 lg:p-8 font-black text-blue-200 bg-blue-600/5">✓ {row.reco}</td>
                              <td className="p-6 lg:p-8 text-slate-500">✗ {row.other}</td>
                           </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
              </div>
            )}

            {slide.id === 'roadmap' && (
              <div className="flex-1 flex flex-col justify-center space-y-10">
                <div className="flex items-center gap-6">
                  <div className="h-14 w-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                    <ListTree size={32} />
                  </div>
                  <div>
                    <h1 className="text-4xl font-black tracking-tighter">{slide.title}</h1>
                    <p className="text-slate-400 font-medium italic">{slide.subtitle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                   {[
                     { 
                       idx: 1, 
                       period: '0-6 Meses', 
                       title: 'Fase 1: Fundação', 
                       points: ['API Gateway & Dashboard Alpha', 'Indexação Vetorial de Dados', 'Compliance LGPD Base'] 
                     },
                     { 
                       idx: 2, 
                       period: '6-18 Meses', 
                       title: 'Fase 2: Expansão', 
                       points: ['Integração Total Gemini IA', 'Matching Preditivo Avançado', 'Transição Cloud Serverless'] 
                     },
                     { 
                       idx: 3, 
                       period: '18+ Meses', 
                       title: 'Fase 3: Consolidação', 
                       points: ['Migração do Core On-Premise', 'Shutdown Definitivo do Legado', 'Ecossistema 100% Nativo'] 
                     }
                   ].map(phase => (
                     <div key={phase.idx} className="bg-white/5 p-8 rounded-[3rem] border border-white/10 relative">
                        <div className="absolute top-6 right-8 text-4xl font-black opacity-10">{phase.idx}</div>
                        <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">{phase.period}</p>
                        <h4 className="text-xl font-black mb-6">{phase.title}</h4>
                        <ul className="space-y-3">
                           {phase.points.map(p => (
                             <li key={p} className="flex gap-2 text-sm text-slate-400">
                                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full shrink-0 mt-1.5" />
                                <span>{p}</span>
                             </li>
                           ))}
                        </ul>
                     </div>
                   ))}
                </div>
              </div>
            )}

            {slide.type === 'swot_risks' && (
              <div className="flex-1 flex flex-col justify-center space-y-12">
                <div className="flex items-center gap-6">
                  <div className="h-14 w-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                    <ShieldAlert size={32} />
                  </div>
                  <div>
                    <h1 className="text-4xl font-black tracking-tighter">{slide.title}</h1>
                    <p className="text-slate-400 font-medium italic">{slide.subtitle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                   {/* SWOT Summary */}
                   <div className="space-y-6">
                      <h3 className="text-xs font-black text-blue-400 uppercase tracking-widest">Matriz SWOT Síntese</h3>
                      <div className="grid grid-cols-2 gap-4">
                         <div className="p-6 bg-green-900/10 border border-green-500/20 rounded-[2rem]">
                            <p className="text-[9px] font-black text-green-400 uppercase mb-2">Strengths</p>
                            <p className="text-xs font-bold leading-relaxed">Ponte de dados funcional & base histórica robusta.</p>
                         </div>
                         <div className="p-6 bg-amber-900/10 border border-amber-500/20 rounded-[2rem]">
                            <p className="text-[9px] font-black text-amber-400 uppercase mb-2">Weaknesses</p>
                            <p className="text-xs font-bold leading-relaxed">Dívida técnica paralisante & UX obsoleta.</p>
                         </div>
                         <div className="p-6 bg-blue-900/10 border border-blue-500/20 rounded-[2rem]">
                            <p className="text-[9px] font-black text-blue-400 uppercase mb-2">Opportunities</p>
                            <p className="text-xs font-bold leading-relaxed">Matching Semântico & Automação via Google Gemini.</p>
                         </div>
                         <div className="p-6 bg-red-900/10 border border-red-500/20 rounded-[2rem]">
                            <p className="text-[9px] font-black text-red-400 uppercase mb-2">Threats</p>
                            <p className="text-xs font-bold leading-relaxed">Disrupção por startups & Compliance LGPD/AI.</p>
                         </div>
                      </div>
                   </div>

                   {/* Risks */}
                   <div className="space-y-6">
                      <h3 className="text-xs font-black text-blue-400 uppercase tracking-widest">Matriz de Riscos & Mitigação</h3>
                      <div className="space-y-4">
                         {[
                           { r: 'Indisponibilidade API Legada', m: 'Cache Elástico & Retry Exponencial' },
                           { r: 'Baixa Adoção de IA', m: 'UAT Constante & Gamificação de Uso' },
                           { r: 'Custos de Token (IA)', m: 'Modelos Gemini Flash Otimizados' }
                         ].map(risk => (
                           <div key={risk.r} className="p-4 bg-white/5 rounded-2xl border border-white/10 flex justify-between items-center">
                              <span className="text-sm font-bold text-slate-300">{risk.r}</span>
                              <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">✓ {risk.m}</span>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
              </div>
            )}

            {slide.type === 'architecture' && (
              <div className="flex-1 flex flex-col justify-center space-y-12">
                <div className="flex items-center gap-6">
                  <div className="h-14 w-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                    <Layers size={32} />
                  </div>
                  <div>
                    <h1 className="text-4xl font-black tracking-tighter">{slide.title}</h1>
                    <p className="text-slate-400 font-medium italic">{slide.subtitle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                   <div className="space-y-6 text-center">
                      <div className="h-24 w-24 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto border border-white/10">
                         <div className="h-16 w-16 bg-slate-700/50 rounded-xl" />
                      </div>
                      <p className="text-sm font-black text-slate-400 uppercase">Estado Atual (Monolítico)</p>
                   </div>
                   <div className="space-y-6 text-center">
                      <div className="h-32 w-32 bg-blue-600/20 rounded-[2rem] flex items-center justify-center mx-auto border border-blue-500/30 relative">
                         <Zap size={48} className="text-blue-500 animate-pulse" />
                         <div className="absolute -top-4 -right-4 p-2 bg-blue-600 rounded-lg text-[8px] font-black uppercase">API Gateway</div>
                      </div>
                      <p className="text-sm font-black text-blue-400 uppercase">Fase de Intercepção</p>
                   </div>
                   <div className="space-y-6 text-center">
                      <div className="h-24 w-24 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-blue-500/20">
                         <Cpu size={40} className="text-white" />
                      </div>
                      <p className="text-sm font-black text-white uppercase">Futuro Cloud Native</p>
                   </div>
                </div>

                <div className="bg-white/5 p-8 rounded-[3rem] text-center border border-white/10">
                   <p className="text-lg font-medium text-slate-300 italic">
                     "Novos serviços modernos estrangulam gradualmente as funções antigas através de uma camada de desacoplamento invisível para a operação."
                   </p>
                </div>
              </div>
            )}

            {slide.type === 'conclusion' && (
              <div className="flex-1 flex flex-col justify-center items-center text-center space-y-12">
                <div className="space-y-4">
                  <div className="h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h1 className="text-5xl font-black tracking-tighter leading-none">{slide.title}</h1>
                  <p className="text-xl text-slate-400 font-medium">Investimento Estratégico com ROI em Curto Prazo</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl">
                   {[
                     { label: 'Eficiência', val: '+70%', desc: 'Mais triagem automática' },
                     { label: 'Cloud', val: '100% Native', desc: 'Escalabilidade ilimitada' },
                     { label: 'Custos', val: '-30%', desc: 'Menos bugs e infra fixa' },
                     { label: 'Compliance', val: 'LGPD OK', desc: 'Total governança de dados' }
                   ].map(item => (
                     <div key={item.label} className="space-y-3">
                        <p className="text-3xl font-black text-blue-400 tracking-tighter">{item.val}</p>
                        <p className="text-[10px] font-black text-white uppercase tracking-widest">{item.label}</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase">{item.desc}</p>
                     </div>
                   ))}
                </div>

                <div className="pt-12 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                   Apresentação de Governança TalentMatch © 2026
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center z-20 pointer-events-none">
           <button 
             onClick={prevSlide}
             disabled={currentSlide === 0}
             className={cn(
               "h-14 w-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all pointer-events-auto border border-white/10 shadow-2xl disabled:opacity-20",
               currentSlide === 0 ? "cursor-not-allowed" : "cursor-pointer"
             )}
           >
              <ChevronLeft size={24} />
           </button>
           <button 
             onClick={nextSlide}
             disabled={currentSlide === SLIDES.length - 1}
             className={cn(
               "h-14 w-14 bg-blue-600 hover:bg-blue-700 backdrop-blur-md rounded-full flex items-center justify-center transition-all pointer-events-auto shadow-2xl disabled:opacity-20",
               currentSlide === SLIDES.length - 1 ? "cursor-not-allowed" : "cursor-pointer"
             )}
           >
              <ChevronRight size={24} />
           </button>
        </div>
      </div>
    </div>
  );
}
