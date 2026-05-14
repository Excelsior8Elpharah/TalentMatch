/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sidebar, Header } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { Candidates } from './components/Candidates';
import { Jobs } from './components/Jobs';
import { MatchingAI } from './components/MatchingAI';
import { Resumes } from './components/Resumes';
import { StrategyModules } from './components/StrategyModules';
import { Reports } from './components/Reports';
import { Settings } from './components/Settings';
import { PresentationDeck } from './components/PresentationDeck';
import { FullReportExport } from './components/FullReportExport';
import { exportToPdf } from './services/pdfService';
import { Candidate } from './types';
import { BrainCircuit, Sparkles, FileText, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedCandidateForProfile, setSelectedCandidateForProfile] = useState<Candidate | null>(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const handleExportPdf = async () => {
    setIsGeneratingPdf(true);
    // Wait for render
    setTimeout(async () => {
      await exportToPdf('full-dashboard-report', `TalentMatch_RH_Completo_${new Date().toISOString().split('T')[0]}.pdf`);
      setIsGeneratingPdf(false);
    }, 1000);
  };

  const renderContent = () => {
    // Priority: Detail views
    if (selectedCandidateForProfile) {
      return (
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <button 
            onClick={() => setSelectedCandidateForProfile(null)}
            className="group flex items-center gap-2 text-xs font-black text-slate-400 hover:text-slate-900 transition-all uppercase tracking-widest"
          >
            <div className="h-8 w-8 bg-white border border-slate-200 rounded-xl flex items-center justify-center group-hover:border-slate-900 transition-colors">
               ←
            </div>
            Voltar para Pool de Talentos
          </button>

          <div className="bg-white p-6 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] border border-slate-200 shadow-2xl overflow-hidden relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[4rem] pointer-events-none" />
             
             <div className="flex flex-col lg:flex-row gap-12 relative z-10">
               <div className="flex-1 space-y-10">
                  <div className="flex items-center gap-6">
                    <div className="h-16 w-16 lg:h-20 lg:w-20 bg-slate-900 rounded-[2rem] flex items-center justify-center text-white text-2xl lg:text-3xl font-black shadow-2xl shadow-slate-200">
                      {selectedCandidateForProfile.name[0]}
                    </div>
                    <div>
                      <h2 className="text-2xl lg:text-4xl font-black text-slate-900 tracking-tighter leading-tight lg:leading-none">{selectedCandidateForProfile.name}</h2>
                      <p className="text-[10px] text-blue-600 font-black uppercase tracking-widest mt-2">{selectedCandidateForProfile.currentRole || 'Candidato Especialista'}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">E-mail Corporativo</p>
                      <p className="text-sm text-slate-900 font-black tracking-tight">{selectedCandidateForProfile.email}</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Localização</p>
                      <p className="text-sm text-slate-900 font-black tracking-tight">{selectedCandidateForProfile.location}</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Nível de Senioridade</p>
                      <p className="text-sm text-blue-600 font-black tracking-tight uppercase">{selectedCandidateForProfile.seniority}</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Ciclos de Experiência</p>
                      <p className="text-sm text-slate-900 font-black tracking-tight">{selectedCandidateForProfile.experienceYears} Anos Efetivos</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Mapeamento de Competências</h4>
                    <div className="flex flex-wrap gap-2">
                       {selectedCandidateForProfile.skills.map(s => (
                         <span key={s} className="px-4 py-2 bg-white text-slate-700 text-[10px] font-black rounded-xl border border-slate-200 uppercase tracking-tighter shadow-sm">
                           {s}
                         </span>
                       ))}
                    </div>
                  </div>
               </div>

               <div className="lg:w-80 space-y-6">
                  <div className="bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden shadow-2xl">
                     <div className="absolute top-0 right-0 p-4 opacity-[0.05]">
                        <BrainCircuit size={80} />
                     </div>
                     <div className="flex items-center gap-3 mb-6 relative z-10">
                        <div className="p-2 bg-blue-600 rounded-xl">
                           <Sparkles size={16} className="fill-white" />
                        </div>
                        <h3 className="font-black text-xs uppercase tracking-widest">AI Synopsis</h3>
                     </div>
                     <p className="text-sm text-slate-300 leading-relaxed italic mb-8 relative z-10 font-medium">
                       "{selectedCandidateForProfile.resumeContent || 'Candidato com sólida formação técnica e experiência em projetos complexos, demonstrando alta adaptabilidade.'}"
                     </p>
                     
                     <button 
                       onClick={() => {
                         setSelectedCandidateForProfile(null);
                         setActiveModule('matching');
                       }}
                       className="w-full py-4 bg-white text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                     >
                       🚀 Iniciar Matching IA
                     </button>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                     <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Arquivos Vinculados</h4>
                     <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200">
                        <FileText size={18} className="text-blue-600" />
                        <span className="text-[10px] font-black text-slate-900 uppercase truncate">resume_final_2024.pdf</span>
                     </div>
                  </div>
               </div>
             </div>
          </div>
        </div>
      );
    }

    switch (activeModule) {
      case 'dashboard': return <Dashboard />;
      case 'candidates': return <Candidates onViewProfile={setSelectedCandidateForProfile} />;
      case 'jobs': return <Jobs />;
      case 'matching': return <MatchingAI />;
      case 'resumes': return <Resumes />;
      case 'presentation': return <PresentationDeck />;
      case 'stakeholders':
      case 'kpis':
      case 'risks':
      case 'roadmap':
      case 'swot':
      case 'pestel':
      case 'strategy':
        return <StrategyModules module={activeModule} />;
      case 'reports': return <Reports />;
      case 'settings': return <Settings />;
      default:
        return (
          <div className="flex flex-col items-center justify-center py-24 text-slate-400 gap-4">
             <div className="h-16 w-16 bg-slate-100 rounded-full flex items-center justify-center">?</div>
             <p className="font-bold uppercase tracking-widest">Módulo {activeModule} em construção</p>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar 
        activeModule={activeModule} 
        setActiveModule={(m) => {
          setActiveModule(m);
          setSelectedCandidateForProfile(null);
        }}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        onExportPdf={handleExportPdf}
        isExporting={isGeneratingPdf}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <Header 
          activeModule={activeModule} 
          onMenuClick={() => setMobileOpen(true)} 
        />
        <main className="p-4 md:p-10 flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>

      {/* Hidden Export Container */}
      {isGeneratingPdf && (
        <div className="fixed top-[-9999px] left-[-9999px] z-[-100] overflow-visible">
          <FullReportExport />
        </div>
      )}
    </div>
  );
}
