import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area 
} from 'recharts';
import { 
  FileText, TrendingUp, Users, Target, Clock, AlertCircle, 
  Download, Calendar, Filter, ChevronDown, Sparkles, Zap, ArrowRight, Activity, ShieldAlert
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

const COLORS = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#d1e9ff'];

const performanceData = [
  { month: 'JAN', processed: 450, qualified: 120, hired: 12 },
  { month: 'FEV', processed: 520, qualified: 145, hired: 15 },
  { month: 'MAR', processed: 480, qualified: 130, hired: 18 },
  { month: 'ABR', processed: 610, qualified: 190, hired: 22 },
];

const aiAccuracyData = [
  { name: 'JAN', accuracy: 82 },
  { name: 'FEV', accuracy: 85 },
  { name: 'MAR', accuracy: 84 },
  { name: 'ABR', accuracy: 91 },
];

const sourceData = [
  { name: 'LinkedIn', value: 400 },
  { name: 'Indicação', value: 300 },
  { name: 'Gupy', value: 200 },
  { name: 'Direto', value: 100 },
];

export function Reports({ isExport = false }: { isExport?: boolean }) {
  return (
    <div className="max-w-6xl mx-auto space-y-8 lg:space-y-10 animate-in fade-in duration-700 pb-20">
      {!isExport && (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-1">
          <div>
             <h2 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tighter uppercase lg:normal-case">Business Intelligence</h2>
             <p className="text-slate-500 text-xs lg:text-sm font-medium">Análise de performance e ROI do motor de talentos.</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 lg:px-4 py-2.5 lg:py-3 bg-white border border-slate-200 rounded-2xl text-[9px] lg:text-[10px] font-black text-slate-600 uppercase tracking-widest shadow-sm">
              <Calendar size={14} className="text-blue-600" />
              Últimos 90 Dias
              <ChevronDown size={14} />
            </div>
            <button className="btn-primary h-[48px] px-6 flex items-center gap-2 shadow-xl shadow-blue-500/20 text-xs">
              <Download size={18} />
              <span>Exportar Relatório</span>
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {[
          { label: 'Time-to-Hire Médio', value: '22 d', trend: 'down', trendVal: '-14%', icon: Clock, color: 'blue' },
          { label: 'Quality of Hire', value: '94%', trend: 'up', trendVal: '+2.1%', icon: Target, color: 'green' },
          { label: 'Conversão em Oferta', value: '4.8%', trend: 'up', trendVal: '+0.4%', icon: TrendingUp, color: 'purple' },
          { label: 'Acurácia Semântica', value: '91%', trend: 'up', trendVal: '+6%', icon: Activity, color: 'indigo' },
        ].map((stat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-2xl transition-all"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <div className="h-10 w-10 lg:h-12 lg:w-12 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <stat.icon size={20} />
                </div>
                <div className={cn(
                  "flex items-center gap-1 text-[9px] lg:text-[10px] font-black px-2 py-0.5 lg:px-2.5 lg:py-1 rounded-full uppercase tracking-widest shadow-sm",
                  stat.trend === 'up' ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                )}>
                  {stat.trendVal}
                </div>
              </div>
              <p className="text-[9px] lg:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tighter leading-none">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        <div className="lg:col-span-2 bg-white p-6 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] border border-slate-200 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 lg:mb-10">
            <div>
              <h3 className="text-xl lg:text-2xl font-black text-slate-900 tracking-tighter">Eficiência de Seleção</h3>
              <p className="text-[9px] lg:text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">Comparativo Mensal de Performance</p>
            </div>
            <div className="flex gap-4">
               <div className="flex items-center gap-2 text-[9px] font-black text-slate-500 uppercase">
                  <div className="h-2 w-2 rounded-full bg-blue-600 shadow-sm shadow-blue-200" /> Processados
               </div>
               <div className="flex items-center gap-2 text-[9px] font-black text-slate-500 uppercase">
                  <div className="h-2 w-2 rounded-full bg-blue-200 shadow-sm shadow-blue-100" /> Qualificados
               </div>
            </div>
          </div>
          <div className="h-[250px] lg:h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData} margin={{ top: 10, right: 10, left: -30, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 9, fontWeight: 900, fill: '#94a3b8' }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 9, fontWeight: 700, fill: '#94a3b8' }} 
                />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', fontSize: '10px', fontWeight: 900 }}
                />
                <Bar dataKey="processed" fill="#2563eb" radius={[4, 4, 0, 0]} barSize={30} />
                <Bar dataKey="qualified" fill="#d1e9ff" radius={[4, 4, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col">
          <h3 className="text-xl lg:text-2xl font-black text-slate-900 tracking-tighter mb-1">Origem</h3>
          <p className="text-[9px] lg:text-[10px] text-slate-400 font-black uppercase tracking-widest mb-6 lg:mb-8">Canais de Aquisição</p>
          <div className="h-[200px] lg:h-[240px] relative mb-6 lg:mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {sourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tighter">1k+</span>
              <span className="text-[8px] lg:text-[9px] uppercase font-black text-slate-400 tracking-widest leading-none">Leads</span>
            </div>
          </div>
          <div className="space-y-3 lg:space-y-4">
            {sourceData.map((s, i) => (
              <div key={i} className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                  <span className="text-[10px] lg:text-xs font-black text-slate-700 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{s.name}</span>
                </div>
                <div className="flex items-center gap-2">
                   <div className="h-px w-6 lg:w-8 bg-slate-100 rounded-full" />
                   <span className="text-[10px] lg:text-xs font-black text-slate-900">{(s.value / 10).toFixed(0)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="bg-white p-6 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] border border-slate-200 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 lg:mb-10">
            <div>
              <h3 className="text-xl lg:text-2xl font-black text-slate-900 tracking-tighter">Machine Learning Growth</h3>
              <p className="text-[9px] lg:text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">Motor Semântico</p>
            </div>
            <div className="h-12 w-12 lg:h-14 lg:w-14 bg-slate-900 text-blue-500 rounded-2xl flex items-center justify-center font-black text-base border-2 border-slate-800 shadow-2xl shrink-0">91%</div>
          </div>
          <div className="h-[180px] lg:h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={aiAccuracyData} margin={{ top: 10, right: 10, left: -30, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAcc" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 9, fontWeight: 900, fill: '#94a3b8' }} 
                />
                <Tooltip />
                <Area type="monotone" dataKey="accuracy" stroke="#2563eb" fillOpacity={1} fill="url(#colorAcc)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[2rem] lg:rounded-[2.5rem] p-6 lg:p-10 text-white relative overflow-hidden shadow-2xl group">
           <div className="absolute top-0 right-0 p-8 lg:p-12 opacity-[0.03] group-hover:scale-110 transition-transform pointer-events-none">
              <Sparkles size={240} className="fill-white" />
           </div>
           <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 rounded-full text-[9px] lg:text-[10px] font-black uppercase mb-6 lg:mb-8">
                    <Zap size={14} className="fill-white" /> AI Executive Insight
                 </div>
                 <h3 className="text-2xl lg:text-3xl font-black tracking-tighter mb-6 leading-tight">Ganhos de <br/> Produtividade</h3>
                 <div className="space-y-4 lg:space-y-6">
                    <div className="flex gap-4 p-4 lg:p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                       <div className="h-10 w-10 shrink-0 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 font-bold border border-blue-500/30 text-xs">
                          65%
                       </div>
                       <div>
                          <p className="text-xs lg:text-sm font-black text-blue-50">Redução de Gargalos</p>
                          <p className="text-[10px] lg:text-[11px] text-slate-400 mt-1 leading-relaxed font-medium">Redução de triagem manual em <span className="text-white font-bold">2.4 dias</span>.</p>
                       </div>
                    </div>
                    <div className="flex gap-4 p-4 lg:p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                       <div className="h-10 w-10 shrink-0 bg-green-600/20 rounded-xl flex items-center justify-center text-green-400 font-bold border border-green-500/30 text-xs">
                          20%
                       </div>
                       <div>
                          <p className="text-xs lg:text-sm font-black text-green-50">Aumento na Retenção</p>
                          <p className="text-[10px] lg:text-[11px] text-slate-400 mt-1 leading-relaxed font-medium">Match Score preditivo reduz turnover cultural no primeiro ano.</p>
                       </div>
                    </div>
                 </div>
              </div>
              
              <button className="w-full mt-8 lg:mt-10 py-4 bg-white text-slate-900 rounded-2xl text-[9px] lg:text-[10px] font-black uppercase tracking-widest hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                 Simular Crescimento <ArrowRight size={14} />
              </button>
           </div>
        </div>
      </div>

      {/* Infrastructure & Audit Section */}
      <section className="bg-slate-900 rounded-[2rem] lg:rounded-[3rem] p-6 lg:p-12 text-white relative overflow-hidden shadow-2xl">
         <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
            <Activity size={240} className="fill-white" />
         </div>
         <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-black tracking-tighter mb-8 lg:mb-10 flex items-center gap-3 lg:gap-4 leading-tight">
               <div className="h-10 w-10 lg:h-12 lg:w-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <ShieldAlert size={20} />
               </div>
               Auditoria & Compliance
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <div className="space-y-4 lg:space-y-6">
                  <p className="text-[9px] lg:text-[10px] font-black text-blue-400 uppercase tracking-widest border-b border-white/10 pb-2">Logs de Integridade</p>
                  <div className="space-y-3">
                     {[
                        { time: '10:42:01', msg: 'Ponte Mainframe OK.', status: 'OK' },
                        { time: '09:15:45', msg: 'Limpeza cache vetores.', status: 'OK' },
                        { time: '08:00:12', msg: 'Backup Alpha realizado.', status: 'OK' }
                     ].map((log, i) => (
                        <div key={i} className="flex gap-4 font-mono text-[9px] lg:text-[10px]">
                           <span className="text-slate-500 shrink-0">{log.time}</span>
                           <span className="text-slate-300 flex-1 truncate">{log.msg}</span>
                           <span className="text-green-500 font-black">{log.status}</span>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="space-y-4 lg:space-y-6">
                  <p className="text-[9px] lg:text-[10px] font-black text-blue-400 uppercase tracking-widest border-b border-white/10 pb-2">Uso API (Gemini)</p>
                  <div className="bg-white/5 border border-white/10 p-5 lg:p-6 rounded-2xl">
                     <div className="flex justify-between items-baseline mb-3 lg:mb-4">
                        <span className="text-xl lg:text-2xl font-black tracking-tight">1.2M</span>
                        <span className="text-[8px] lg:text-[9px] font-black text-slate-500 uppercase font-mono">Tokens / Mês</span>
                     </div>
                     <div className="h-1 lg:h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: '45%' }} />
                     </div>
                     <p className="text-[8px] lg:text-[9px] font-medium text-slate-400 mt-3 italic leading-relaxed">Uso dentro da cota prevista para Alpha.</p>
                  </div>
               </div>

               <div className="space-y-4 lg:space-y-6 flex flex-col justify-between">
                  <p className="text-[9px] lg:text-[10px] font-black text-blue-400 uppercase tracking-widest border-b border-white/10 pb-2">Certificações</p>
                  <div className="flex flex-wrap gap-2 lg:gap-3">
                     {['SOC2', 'LGPD', 'ISO 27001', 'Strangler'].map(tag => (
                        <span key={tag} className="px-2 py-1 lg:px-3 lg:py-1.5 bg-white/10 rounded-lg text-[8px] lg:text-[9px] font-black uppercase tracking-widest border border-white/10">
                           {tag}
                        </span>
                     ))}
                  </div>
                  <button className="w-full py-4 bg-blue-600 rounded-2xl text-[9px] lg:text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 mt-4">
                     Segurança <ArrowRight size={14} className="inline ml-1" />
                  </button>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
