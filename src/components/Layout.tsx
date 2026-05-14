import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Zap, 
  FileText, 
  BarChart3, 
  UserSquare2, 
  Target, 
  ShieldAlert, 
  ListTree, 
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Bell,
  Search,
  Menu,
  Moon,
  Sun,
  BrainCircuit,
  Layers,
  Presentation,
  X
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface SidebarProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  onExportPdf?: () => void;
  isExporting?: boolean;
}

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'candidates', label: 'Candidatos', icon: Users },
  { id: 'jobs', label: 'Vagas', icon: Briefcase },
  { id: 'matching', label: 'Matching IA', icon: Zap },
  { id: 'resumes', label: 'Currículos', icon: FileText },
  { id: 'reports', label: 'Relatórios', icon: BarChart3 },
  { separator: true },
  { id: 'presentation', label: 'Pitch Executivo', icon: Presentation },
  { id: 'strategy', label: 'Estratégia & Gov', icon: Target },
  { id: 'stakeholders', label: 'Stakeholders', icon: UserSquare2 },
  { id: 'kpis', label: 'KPIs do Projeto', icon: Layers },
  { id: 'risks', label: 'Análise de Riscos', icon: ShieldAlert },
  { id: 'roadmap', label: 'Roadmap', icon: ListTree },
  { id: 'swot', label: 'Análise SWOT', icon: Target },
  { id: 'pestel', label: 'Análise PESTEL', icon: Target },
  { id: 'settings', label: 'Configurações', icon: Settings },
];

export function Sidebar({ 
  activeModule, 
  setActiveModule, 
  collapsed, 
  setCollapsed, 
  mobileOpen, 
  setMobileOpen,
  onExportPdf,
  isExporting
}: SidebarProps) {
  return (
    <>
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[55] lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{ 
          width: collapsed ? 80 : 280,
          x: mobileOpen ? 0 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? -280 : 0)
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={cn(
          "bg-slate-900 text-slate-300 h-screen sticky top-0 flex flex-col border-r border-slate-800 transition-all z-[60] shadow-2xl",
          "fixed lg:sticky",
          !mobileOpen && "max-lg:-translate-x-full"
        )}
      >
        <div className="p-6 flex items-center h-20 border-b border-slate-800/50">
          {!collapsed ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="flex items-center gap-3 overflow-hidden whitespace-nowrap"
            >
              <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-500/20">
                <Zap size={22} className="text-white fill-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-white tracking-tighter text-xl leading-none">TalentMatch</span>
                <span className="text-blue-400 font-bold text-[10px] uppercase tracking-widest mt-1">Recruitment Intelligence</span>
              </div>
            </motion.div>
          ) : (
            <div className="bg-blue-600 p-2 rounded-xl mx-auto shadow-lg shadow-blue-500/20">
              <Zap size={22} className="text-white fill-white" />
            </div>
          )}
        </div>

        <nav className="flex-1 py-6 px-4 overflow-y-auto custom-scrollbar space-y-1">
          {NAV_ITEMS.map((item, idx) => {
            if (item.separator) {
              return (
                <div key={`sep-${idx}`} className="py-4 px-2">
                  <div className="h-px bg-slate-800/50 w-full" />
                  {!collapsed && <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest mt-4 block">Estratégia & Gov</span>}
                </div>
              );
            }

            const Icon = item.icon!;
            const isActive = activeModule === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveModule(item.id!);
                  if (window.innerWidth < 1024) setMobileOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative",
                  isActive 
                    ? "bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/20" 
                    : "hover:bg-slate-800/50 text-slate-400 hover:text-white"
                )}
                title={collapsed ? item.label : undefined}
              >
                <Icon size={18} className={cn(isActive ? "text-white" : "text-slate-500 group-hover:text-blue-400 transition-colors")} />
                {!collapsed && <span className="text-xs font-black uppercase tracking-tight">{item.label}</span>}
                
                {/* Governance Indicator */}
                {['strategy', 'stakeholders', 'kpis', 'risks', 'roadmap'].includes(item.id!) && !collapsed && !isActive && (
                  <div className="absolute right-3 w-1.5 h-1.5 bg-blue-500/50 rounded-full" />
                )}

                {isActive && !collapsed && (
                  <motion.div 
                    layoutId="active-nav"
                    className="absolute left-0 w-1 h-6 bg-white rounded-r-full"
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className={cn("p-4 border-t border-slate-800/50", collapsed ? "flex justify-center" : "")}>
          <div className={cn("bg-slate-800/30 rounded-2xl p-3 border border-white/5", collapsed ? "w-10 h-10 flex items-center justify-center p-0" : "")}>
             {!collapsed ? (
               <div className="space-y-3">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Legacy Bridge</span>
                     </div>
                     <span className="text-[9px] font-black text-green-500 uppercase">Online</span>
                  </div>
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <BrainCircuit size={12} className="text-blue-400" />
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">AI Agent</span>
                     </div>
                     <span className="text-[9px] font-black text-blue-400 uppercase">Ready</span>
                  </div>
               </div>
             ) : (
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
             )}
          </div>
        </div>

        <div className="p-4 border-t border-slate-800/50 bg-slate-900/50 backdrop-blur-sm space-y-3">
          {onExportPdf && (
            <button 
              onClick={onExportPdf}
              disabled={isExporting}
              className={cn(
                "w-full flex items-center justify-center gap-2 p-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                isExporting 
                  ? "bg-slate-800 text-slate-500 cursor-not-allowed" 
                  : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20"
              )}
            >
              {isExporting ? (
                <>
                  <div className="h-3 w-3 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
                  {collapsed ? "" : "Gerando PDF..."}
                </>
              ) : (
                <>
                  <FileText size={16} className={cn(collapsed ? "" : "text-blue-200")} />
                  {!collapsed && "Exportar Dashboard"}
                </>
              )}
            </button>
          )}

          <button 
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-800 text-slate-400 transition-colors group hidden lg:flex"
          >
            {!collapsed && <span className="text-xs font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100">Painel</span>}
            {collapsed ? <ChevronRight size={20} className="mx-auto" /> : <ChevronLeft size={20} />}
          </button>
          
          <button 
            onClick={() => setMobileOpen(false)}
            className="lg:hidden w-full flex items-center gap-2 p-3 rounded-xl bg-slate-800 text-white font-black text-[10px] uppercase tracking-widest"
          >
             <X size={16} /> Fechar Menu
          </button>
        </div>
      </motion.aside>
    </>
  );
}

export function Header({ 
  activeModule, 
  onMenuClick
}: { 
  activeModule: string; 
  onMenuClick: () => void;
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const moduleLabels: Record<string, string> = {
    dashboard: 'Executivo',
    candidates: 'Candidatos',
    jobs: 'Vagas',
    matching: 'Matching IA',
    resumes: 'Currículos',
    reports: 'Relatórios',
    presentation: 'Apresentação Executiva',
    strategy: 'Estratégia & Governância',
    stakeholders: 'Stakeholders',
    kpis: 'KPIs',
    risks: 'Análise de Riscos',
    roadmap: 'Roadmap',
    swot: 'Análise SWOT',
    pestel: 'Análise PESTEL',
    settings: 'Configurações'
  };

  return (
    <header className="h-20 border-b border-slate-200 bg-white/80 backdrop-blur-md flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40 transition-all">
      <div className="flex items-center gap-4 lg:gap-6">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl"
        >
          <Menu size={24} />
        </button>
        <div className="flex items-center gap-2 text-slate-400">
          <span className="text-[10px] font-black uppercase tracking-widest opacity-50 hidden sm:block">Plataforma</span>
          <ChevronRight size={12} className="opacity-30 hidden sm:block" />
          <h1 className="text-sm font-black text-slate-900 uppercase tracking-tight">{moduleLabels[activeModule]}</h1>
        </div>
        <div className="hidden lg:flex items-center bg-blue-50 text-blue-600 border border-blue-100 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider">
           Ambiente de Governança Digital
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative group hidden xl:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
          <input 
            type="text" 
            placeholder="Pesquisar em toda a rede..." 
            className="pl-11 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl w-72 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm transition-all focus:bg-white"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2.5 text-slate-500 hover:bg-slate-50 rounded-xl border border-transparent hover:border-slate-200 transition-all">
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button className="relative p-2.5 text-slate-500 hover:bg-slate-50 rounded-xl border border-transparent hover:border-slate-200 transition-all">
            <Bell size={18} />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-blue-600 rounded-full border-2 border-white"></span>
          </button>
        </div>

        <div className="h-8 w-px bg-slate-200 mx-1"></div>

        <div className="flex items-center gap-4 pl-2 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-black text-slate-900 leading-tight">Admin Executivo</p>
            <p className="text-[10px] text-blue-600 font-bold uppercase tracking-tighter">Fase de Modernização</p>
          </div>
          <div className="h-10 w-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black text-sm shadow-lg shadow-slate-200 group-hover:scale-105 transition-transform">
            AD
          </div>
        </div>
      </div>
    </header>
  );
}
