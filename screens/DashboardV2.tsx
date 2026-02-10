import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ScreenType } from '../types';

interface DashboardV2Props {
  onNavigate: (screen: ScreenType) => void;
}

const data = [
  { time: '00:00', sys: 118, dia: 75 },
  { time: '04:00', sys: 115, dia: 72 },
  { time: '08:00', sys: 125, dia: 80 },
  { time: '12:00', sys: 132, dia: 85 },
  { time: '16:00', sys: 128, dia: 82 },
  { time: '20:00', sys: 124, dia: 78 },
  { time: '23:59', sys: 119, dia: 76 },
];

const DashboardV2: React.FC<DashboardV2Props> = ({ onNavigate }) => {
  return (
    <div className="bg-background-light text-text-light font-sans min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white border-b border-border-light sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => onNavigate('dashboard-v1')}>
                <div className="w-8 h-8 bg-v2-primary rounded-md flex items-center justify-center mr-3 shadow-sm">
                  <span className="material-symbols-outlined text-white text-xl">cardiology</span>
                </div>
                <span className="font-bold text-xl text-gray-900 tracking-tight">CardioTrack</span>
                <span className="ml-2 px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">ADMIN</span>
              </div>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <button onClick={() => onNavigate('dashboard-v2')} className="border-b-2 border-v2-primary text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">Monitoramento</button>
                <button onClick={() => onNavigate('datagrid')} className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors">Pacientes</button>
                <button onClick={() => onNavigate('datagrid')} className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors">Medições</button>
                <button onClick={() => onNavigate('dashboard-v1')} className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors">Visão Geral</button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-gray-500 transition-colors">
                <span className="material-symbols-outlined">search</span>
              </button>
              <button className="relative text-gray-400 hover:text-gray-500 transition-colors">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-v2-primary ring-2 ring-white"></span>
              </button>
              <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden cursor-pointer border border-gray-300">
                <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                    alt="Dr. Admin"
                    className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (Main Stats) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-end justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Monitoramento</h1>
                <p className="text-sm text-gray-500 mt-1">Status em tempo real da base de pacientes.</p>
              </div>
              <div className="hidden sm:flex space-x-3">
                <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  Sistema Online
                </span>
              </div>
            </div>

            {/* Sync Card */}
            <div className="bg-white rounded-lg shadow-sm border border-border-light p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-v2-primary">cloud_sync</span>
                    <h3 className="text-lg font-semibold text-gray-900">Sincronização de Dados</h3>
                  </div>
                  <p className="text-sm text-gray-500 max-w-md">Importe novos registros de pacientes via Excel ou sincronize diretamente com o app CardioTrack.</p>
                  <div className="mt-4 flex items-center text-xs text-gray-400">
                    <span className="material-symbols-outlined text-sm mr-1">schedule</span>
                    Última sincronização: <span className="font-medium text-gray-700 ml-1">Hoje, 09:42 AM</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                    <span className="material-symbols-outlined text-lg mr-2">refresh</span> Sync DB
                  </button>
                  <button onClick={() => onNavigate('datagrid')} className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-v2-primary hover:bg-[#660000] transition-colors">
                    <span className="material-symbols-outlined text-lg mr-2">upload_file</span> Importar Excel
                  </button>
                </div>
              </div>
              <div className="mt-6 w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                <div className="bg-v2-primary h-1.5 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>

            {/* Stats Cards */}
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Status dos Pacientes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Card 1 */}
              <div className="bg-white p-5 rounded-lg border-l-4 border-green-500 shadow-sm border-t border-r border-b border-gray-200 transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-md" onClick={() => onNavigate('datagrid')}>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase">Normotensos</p>
                    <h3 className="mt-1 text-3xl font-bold text-gray-900">812</h3>
                  </div>
                  <span className="p-2 bg-green-50 rounded-md text-green-600">
                    <span className="material-symbols-outlined">sentiment_satisfied</span>
                  </span>
                </div>
                <div className="mt-4 flex items-center text-xs">
                  <span className="text-green-600 font-medium flex items-center">
                    <span className="material-symbols-outlined text-sm mr-0.5">trending_up</span> 2.5%
                  </span>
                  <span className="text-gray-400 ml-2">vs mês anterior</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-5 rounded-lg border-l-4 border-yellow-400 shadow-sm border-t border-r border-b border-gray-200 transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-md" onClick={() => onNavigate('datagrid')}>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase">Pré-Hipertensos</p>
                    <h3 className="mt-1 text-3xl font-bold text-gray-900">249</h3>
                  </div>
                  <span className="p-2 bg-yellow-50 rounded-md text-yellow-600">
                    <span className="material-symbols-outlined">warning</span>
                  </span>
                </div>
                <div className="mt-4 flex items-center text-xs">
                  <span className="text-red-600 font-medium flex items-center">
                    <span className="material-symbols-outlined text-sm mr-0.5">trending_up</span> 4.1%
                  </span>
                  <span className="text-gray-400 ml-2">vs mês anterior</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-5 rounded-lg border-l-4 border-v2-primary shadow-sm border-t border-r border-b border-gray-200 transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-md" onClick={() => onNavigate('datagrid')}>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase">Hipertensos</p>
                    <h3 className="mt-1 text-3xl font-bold text-gray-900">187</h3>
                  </div>
                  <span className="p-2 bg-red-50 rounded-md text-v2-primary">
                    <span className="material-symbols-outlined">medical_services</span>
                  </span>
                </div>
                <div className="mt-4 flex items-center text-xs">
                  <span className="text-green-600 font-medium flex items-center">
                    <span className="material-symbols-outlined text-sm mr-0.5">trending_down</span> 1.2%
                  </span>
                  <span className="text-gray-400 ml-2">vs mês anterior</span>
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-white rounded-lg shadow-sm border border-border-light p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-semibold text-gray-900">Tendência de Pressão Arterial (Média Geral)</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600">Semana</button>
                  <button className="px-3 py-1 text-xs font-medium rounded-full text-gray-500 hover:bg-gray-50">Mês</button>
                </div>
              </div>
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorSysV2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8B0000" stopOpacity={0.05}/>
                        <stop offset="95%" stopColor="#8B0000" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11}} domain={[60, 150]} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: 'none', borderRadius: '4px', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="sys" stroke="#8B0000" strokeWidth={2} fillOpacity={1} fill="url(#colorSysV2)" dot={{ r: 4, strokeWidth: 2, fill: '#fff', stroke: '#8B0000' }} name="Sistólica Média" />
                    <Area type="monotone" dataKey="dia" stroke="#6b7280" strokeWidth={2} strokeDasharray="5 5" fill="transparent" dot={false} name="Diastólica Média" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Right Column (Activities) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-border-light h-full flex flex-col">
              <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <h3 className="font-semibold text-gray-900 flex items-center">
                  <span className="material-symbols-outlined text-gray-400 mr-2 text-xl">feed</span>
                  Atividades Recentes
                </h3>
                <span className="text-xs text-v2-primary font-medium cursor-pointer hover:underline">Ver todas</span>
              </div>
              <div className="p-0 overflow-y-auto flex-1 max-h-[800px]">
                <ul className="divide-y divide-gray-100">
                  <li className="p-4 hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center ring-2 ring-white">
                          <span className="material-symbols-outlined text-v2-primary text-sm">priority_high</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">Alerta: Pressão Crítica</p>
                        <p className="text-xs text-gray-500 mt-0.5">Paciente <span className="font-medium text-gray-700">Roberto Silva</span> registrou 180/110 mmHg.</p>
                        <p className="text-xs text-gray-400 mt-1">há 12 min</p>
                      </div>
                      <div className="hidden group-hover:block">
                        <span className="material-symbols-outlined text-gray-300 text-sm">chevron_right</span>
                      </div>
                    </div>
                  </li>
                  <li className="p-4 hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center ring-2 ring-white">
                          <span className="material-symbols-outlined text-blue-600 text-sm">person_add</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">Novo Paciente Cadastrado</p>
                        <p className="text-xs text-gray-500 mt-0.5"><span className="font-medium text-gray-700">Ana Souza</span> foi adicionada via importação.</p>
                        <p className="text-xs text-gray-400 mt-1">há 45 min</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-4 hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center ring-2 ring-white">
                          <span className="material-symbols-outlined text-green-600 text-sm">check_circle</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">Meta Atingida</p>
                        <p className="text-xs text-gray-500 mt-0.5">Paciente <span className="font-medium text-gray-700">Carlos M.</span> manteve estabilidade por 30 dias.</p>
                        <p className="text-xs text-gray-400 mt-1">há 2 horas</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-4 hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center ring-2 ring-white">
                          <span className="material-symbols-outlined text-gray-600 text-sm">cloud_upload</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">Sincronização Automática</p>
                        <p className="text-xs text-gray-500 mt-0.5">Backup do banco de dados concluído com sucesso.</p>
                        <p className="text-xs text-gray-400 mt-1">há 3 horas</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-4 hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center ring-2 ring-white">
                          <span className="material-symbols-outlined text-v2-primary text-sm">medication</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">Ajuste de Medicação</p>
                        <p className="text-xs text-gray-500 mt-0.5">Dr. Luis atualizou a prescrição de <span className="font-medium text-gray-700">Julia P.</span></p>
                        <p className="text-xs text-gray-400 mt-1">há 5 horas</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="p-4 border-t border-gray-100 text-center">
                  <button className="text-sm text-gray-500 hover:text-gray-700 font-medium">Carregar mais</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-12 text-center text-xs text-gray-400 border-t border-border-light pt-6">
          <div className="flex justify-center space-x-6 mb-2">
            <a className="hover:text-gray-600" href="#">Suporte</a>
            <a className="hover:text-gray-600" href="#">Termos</a>
            <a className="hover:text-gray-600" href="#">Privacidade</a>
          </div>
          © 2024 CardioTrack Admin Panel. Versão 2.1.0
        </footer>
      </main>
    </div>
  );
};

export default DashboardV2;