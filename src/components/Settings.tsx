import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, Bell, Shield, Database, 
  Cpu, Users, Globe, Moon, Sun, Monitor, 
  RefreshCw, CheckCircle2, AlertTriangle, Key,
  Zap, Save, ExternalLink, Activity, Info, ChevronRight, Target
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export function Settings() {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'Geral', icon: SettingsIcon },
    { id: 'notifications', label: 'Notificações', icon: Bell },
    { id: 'ai-config', label: 'Configuração IA', icon: Cpu },
    { id: 'legacy-bridge', label: 'Ponte Legada', icon: Database },
    { id: 'security', label: 'Segurança', icon: Shield },
  ];

  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {/* Settings Navigation */}
      <div className="lg:w-72 shrink-0 space-y-6">
        <div>
           <h2 className="text-2xl font-black text-slate-900 tracking-tighter mb-1">Configurações</h2>
           <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Painel de Controle</p>
        </div>
        
        <nav className="space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all group",
                  isActive 
                    ? "bg-slate-900 text-white shadow-xl shadow-slate-200" 
                    : "text-slate-500 hover:bg-slate-50 border border-transparent hover:border-slate-100"
                )}
              >
                <div className="flex items-center gap-4">
                  <Icon size={20} className={cn(isActive ? "text-blue-400" : "text-slate-400 group-hover:text-slate-900")} />
                  <span className="text-sm font-black uppercase tracking-widest">{tab.label}</span>
                </div>
                {isActive && <ChevronRight size={16} className="text-blue-400" />}
              </button>
            );
          })}
        </nav>
        
        <div className="p-6 bg-blue-50 rounded-[2rem] border border-blue-100">
           <Zap size={24} className="text-blue-600 mb-3 fill-blue-600" />
           <p className="text-xs font-black text-blue-900 uppercase tracking-tight mb-2">Alpha v2.4.0</p>
           <p className="text-[11px] text-blue-700 leading-relaxed font-medium">Você está operando na versão mais recente da TalentMatch AI Engine.</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          {activeTab === 'general' && (
            <motion.div 
              key="general"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-10"
            >
              <section className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm">
                <h3 className="text-xl font-black text-slate-900 tracking-tighter mb-8 flex items-center gap-3">
                   <Monitor size={20} className="text-blue-600" /> Aparência do Workspace
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   {[
                     { id: 'light', label: 'Light Mode', icon: Sun, active: true },
                     { id: 'dark', label: 'Dark Mode', icon: Moon, active: false },
                     { id: 'system', label: 'System Mode', icon: Activity, active: false },
                   ].map((theme) => (
                     <button key={theme.id} className={cn(
                       "flex flex-col items-center gap-4 p-8 rounded-3xl border-2 transition-all group",
                       theme.active 
                        ? "border-blue-600 bg-blue-50 shadow-lg shadow-blue-500/10" 
                        : "border-slate-50 bg-slate-50/50 hover:border-slate-200"
                     )}>
                       <div className={cn(
                          "h-12 w-12 rounded-2xl flex items-center justify-center transition-all",
                          theme.active ? "bg-blue-600 text-white shadow-xl" : "bg-white text-slate-400 group-hover:text-slate-900 shadow-sm"
                       )}>
                          <theme.icon size={24} />
                       </div>
                       <span className={cn("text-[10px] font-black uppercase tracking-widest", theme.active ? "text-blue-700" : "text-slate-400")}>{theme.label}</span>
                     </button>
                   ))}
                </div>
              </section>

              <section className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm">
                <h3 className="text-xl font-black text-slate-900 tracking-tighter mb-8 flex items-center gap-3">
                   <Globe size={20} className="text-blue-600" /> Regionalização
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Idioma de Interface</label>
                    <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 text-sm font-black text-slate-700 uppercase tracking-tighter focus:ring-4 focus:ring-blue-500/10 transition-all outline-none">
                      <option>Português (Brasil)</option>
                      <option>English (US)</option>
                      <option>Español</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Fuso Horário Corporativo</label>
                    <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 text-sm font-black text-slate-700 uppercase tracking-tighter focus:ring-4 focus:ring-blue-500/10 transition-all outline-none">
                      <option>(GMT-03:00) São Paulo</option>
                      <option>(GMT-05:00) New York</option>
                      <option>(GMT+00:00) London</option>
                    </select>
                  </div>
                </div>
              </section>

              <div className="flex justify-end pt-4">
                 <button className="btn-primary h-14 px-10 flex items-center gap-2">
                    <Save size={20} /> Salvar Alterações
                 </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'ai-config' && (
            <motion.div 
              key="ai"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <section className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10">
                  <div className="flex items-center gap-3 px-4 py-2 bg-green-500 text-white rounded-full text-[10px] font-black border-4 border-slate-900 shadow-xl">
                    <span className="h-2 w-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]"></span>
                    ENGINE ONLINE
                  </div>
                </div>
                
                <div className="relative z-10 max-w-2xl">
                   <div className="h-14 w-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-500/20">
                      <Cpu size={32} />
                   </div>
                   <h3 className="text-3xl font-black tracking-tighter mb-3">TalentMatch AI Engine</h3>
                   <p className="text-slate-400 text-sm font-medium leading-relaxed mb-10">Orquestração semântica via Google Gemini 1.5 Flash. Gerencie chaves de API e parâmetros de processamento LLM.</p>
                   
                   <div className="space-y-8">
                     <div className="space-y-3">
                       <div className="flex items-center justify-between">
                         <label className="text-[10px] font-black text-blue-400 uppercase tracking-widest">GEMINI_API_KEY (Environment)</label>
                         <button className="text-[10px] font-black text-white hover:text-blue-400 flex items-center gap-2 transition-colors">
                            REVALIDAR CHAVE <ExternalLink size={12} />
                         </button>
                       </div>
                       <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-mono text-slate-500 flex items-center gap-4">
                         <Key size={18} className="text-blue-600" />
                         ••••••••••••••••••••••••••••••••••••••••
                       </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-3">
                         <label className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Modelo de Processamento</label>
                         <select className="w-full bg-white/5 border-2 border-white/10 rounded-2xl p-4 text-xs font-black text-white uppercase tracking-widest outline-none focus:border-blue-600 transition-all">
                           <option>Gemini 1.5 Flash (Latência Baixa)</option>
                           <option>Gemini 1.5 Pro (Nível Executivo)</option>
                         </select>
                       </div>
                       <div className="space-y-3">
                         <label className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Parâmetro de Temperatura (0.2)</label>
                         <input type="range" className="w-full accent-blue-600" min="0" max="1" step="0.1" defaultValue="0.2" />
                         <div className="flex justify-between text-[9px] font-black text-slate-500 uppercase tracking-widest">
                           <span>Rígido / Técnico</span>
                           <span>Dinâmico / Sugestivo</span>
                         </div>
                       </div>
                     </div>
                   </div>
                </div>

                <div className="absolute -bottom-12 -right-12 opacity-[0.03] pointer-events-none">
                   <Target size={300} />
                </div>
              </section>

              <div className="bg-blue-50 border border-blue-100 p-8 rounded-[2.5rem] flex items-center gap-8 group">
                 <div className="h-16 w-16 bg-blue-600 rounded-3xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                    <Activity size={32} />
                 </div>
                 <div className="flex-1">
                    <div className="flex justify-between items-end mb-3">
                       <div>
                          <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">Utilização de Quota Semântica</h4>
                          <p className="text-[11px] text-slate-500 font-medium">Consumo de tokens para currículos mapeados (Ciclo Mensal)</p>
                       </div>
                       <span className="text-xl font-black text-blue-600 leading-none">84%</span>
                    </div>
                    <div className="w-full h-3 bg-blue-100 rounded-full overflow-hidden shadow-inner">
                       <div className="h-full bg-blue-600 w-[84%] rounded-full shadow-lg" />
                    </div>
                 </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'legacy-bridge' && (
            <motion.div 
              key="legacy"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <section className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                   <div>
                      <h3 className="text-2xl font-black text-slate-900 tracking-tighter">Gateway Legado (SINC)</h3>
                      <p className="text-sm text-slate-500 font-medium mt-1">Conectores ativos entre TalentMatch Modern e Mainframe RH.</p>
                   </div>
                   <button className="h-12 px-6 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3">
                      <RefreshCw size={14} /> Re-Sincronizar Nodes
                   </button>
                </div>

                <div className="space-y-4">
                   {[
                     { name: 'Gateway Oracle Middleware', status: 'conected', latency: '42ms', load: '12%' },
                     { name: 'Terminal de Candidatos (Legacy)', status: 'conected', latency: '124ms', load: '45%' },
                     { name: 'Cluster de Banco de Dados V1', status: 'warning', latency: '850ms', load: '92%' },
                   ].map((bridge) => (
                     <div key={bridge.name} className="flex items-center justify-between p-6 bg-slate-50 border border-slate-100 rounded-[2rem] group hover:bg-white hover:shadow-xl transition-all">
                       <div className="flex items-center gap-6">
                          <div className={cn(
                             "h-12 w-12 rounded-2xl flex items-center justify-center transition-all",
                             bridge.status === 'conected' ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-600 animate-pulse"
                          )}>
                             {bridge.status === 'conected' ? <CheckCircle2 size={24} /> : <AlertTriangle size={24} />}
                          </div>
                          <div>
                             <p className="text-sm font-black text-slate-900 uppercase tracking-tight">{bridge.name}</p>
                             <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                                <span>Latência: {bridge.latency}</span>
                                <span className="h-1 w-1 bg-slate-200 rounded-full" />
                                <span>Carga: {bridge.load}</span>
                             </div>
                          </div>
                       </div>
                       <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:underline">Configurar Node</button>
                     </div>
                   ))}
                </div>
              </section>

              <div className="bg-amber-50 border-2 border-amber-100 p-8 rounded-[2.5rem] flex gap-6">
                 <div className="h-12 w-12 bg-amber-600 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-amber-200">
                    <Info size={24} />
                 </div>
                 <div>
                    <h4 className="text-sm font-black text-amber-900 uppercase tracking-tighter mb-1">Restrição de Protocolo Detectada</h4>
                    <p className="text-xs text-amber-700 leading-relaxed font-medium max-w-xl">
                      O sistema legado (V1) não suporta codificação UTF-8 para campos de "Bio Longa". Os dados estendidos serão armazenados exclusivamente na camada de persistência TalentMatch Alpha.
                    </p>
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
