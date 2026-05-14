import React from 'react';
import { Dashboard } from './Dashboard';
import { Candidates } from './Candidates';
import { Jobs } from './Jobs';
import { StrategyModules } from './StrategyModules';
import { Reports } from './Reports';
import { PresentationDeck } from './PresentationDeck';
import { Zap } from 'lucide-react';

export function FullReportExport() {
  return (
    <div id="full-dashboard-report" className="bg-[#f8fafc] p-12 space-y-20 w-[1200px]">
      {/* Header for PDF */}
      <div className="flex items-center justify-between border-b-4 border-slate-900 pb-8">
        <div className="flex items-center gap-4">
          <div className="bg-blue-600 p-4 rounded-2xl shadow-xl">
            <Zap size={32} className="text-white fill-white" />
          </div>
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">TalentMatch RH</h1>
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">Relatório Consolidado de Inteligência</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Data de Emissão</p>
          <p className="text-lg font-black text-slate-900">{new Date().toLocaleDateString('pt-BR')}</p>
        </div>
      </div>

      {/* Module 0: Pitch Deck */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-2 bg-blue-600 rounded-full" />
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">I. Pitch Deck de Modernização</h2>
        </div>
        <PresentationDeck isExport />
      </section>

      {/* Module 1: Executive Dashboard */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-2 bg-blue-600 rounded-full" />
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">II. Visão Executiva Estendida</h2>
        </div>
        <Dashboard isExport />
      </section>

      {/* Module 2: Strategy */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-2 bg-blue-600 rounded-full" />
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">III. Planejamento Estratégico</h2>
        </div>
        <StrategyModules module="strategy" isExport />
      </section>

      {/* Module 3: KPIs & Risks */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-2 bg-blue-600 rounded-full" />
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">IV. Indicadores de Performance & Riscos</h2>
        </div>
        <StrategyModules module="kpis" isExport />
        <div className="mt-10">
          <StrategyModules module="risks" isExport />
        </div>
      </section>

      {/* Module 4: Roadmap */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-2 bg-blue-600 rounded-full" />
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">V. Roadmap de Implementação</h2>
        </div>
        <StrategyModules module="roadmap" isExport />
      </section>

      {/* Module 4.1: SWOT & PESTEL */}
      <section className="space-y-10">
        <div className="flex items-center gap-3">
          <div className="h-8 w-2 bg-blue-600 rounded-full" />
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">VI. Análises Estratégicas (SWOT & PESTEL)</h2>
        </div>
        <StrategyModules module="swot" isExport />
        <div className="mt-10">
          <StrategyModules module="pestel" isExport />
        </div>
      </section>

      {/* Module 5: Stakeholders */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-2 bg-blue-600 rounded-full" />
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">VII. Matriz de Stakeholders</h2>
        </div>
        <StrategyModules module="stakeholders" isExport />
      </section>

      {/* Module 7: Talent Pool */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-2 bg-blue-600 rounded-full" />
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">VIII. Pool de Talentos</h2>
        </div>
        <Candidates isExport />
      </section>

      {/* Module 8: Jobs */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-2 bg-blue-600 rounded-full" />
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">IX. Gestão de Oportunidades</h2>
        </div>
        <Jobs isExport />
      </section>

      {/* Module 9: BI Reports */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-2 bg-blue-600 rounded-full" />
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">X. Business Intelligence (BI)</h2>
        </div>
        <Reports isExport />
      </section>

      {/* Footer */}
      <div className="pt-20 border-t border-slate-200 flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
        <span>Geração Automática - Motor de IA TalentMatch</span>
        <span>Relatório Consolidado de Governança corporativa</span>
      </div>
    </div>
  );
}
