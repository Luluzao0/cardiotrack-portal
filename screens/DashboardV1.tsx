import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartData, ScreenType } from '../types';

interface DashboardV1Props {
  onNavigate: (screen: ScreenType) => void;
}

const data: ChartData[] = [
  { name: 'Seg', systolic: 120, diastolic: 80 },
  { name: 'Ter', systolic: 119, diastolic: 79 },
  { name: 'Qua', systolic: 122, diastolic: 81 },
  { name: 'Qui', systolic: 121, diastolic: 78 },
  { name: 'Sex', systolic: 124, diastolic: 82 },
  { name: 'Sáb', systolic: 123, diastolic: 80 },
  { name: 'Dom', systolic: 125, diastolic: 81 },
];

const DashboardV1: React.FC<DashboardV1Props> = ({ onNavigate }) => {
  return (
    <div className="bg-bg-main text-slate-900 font-sans antialiased min-h-screen flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-border-color flex-shrink-0 flex flex-col h-screen z-10 hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-border-color cursor-pointer" onClick={() => onNavigate('dashboard-v1')}>
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center mr-3">
            <span className="material-symbols-outlined text-white text-xl">cardiology</span>
          </div>
          <span className="text-lg font-bold text-slate-900 tracking-tight">CardioTrack</span>
        </div>
        <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
          <div className="px-3 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Principal</div>
          <button onClick={() => onNavigate('dashboard-v1')} className="w-full flex items-center px-3 py-2.5 text-sm font-medium bg-red-50 text-primary rounded-md gap-3">
            <span className="material-symbols-outlined filled">home</span>
            Visão Geral
          </button>
          <button onClick={() => onNavigate('datagrid')} className="w-full flex items-center px-3 py-2.5 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors gap-3">
            <span className="material-symbols-outlined">groups</span>
            Pacientes
          </button>
          <button onClick={() => onNavigate('dashboard-v2')} className="w-full flex items-center px-3 py-2.5 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors gap-3">
            <span className="material-symbols-outlined">monitoring</span>
            Monitoramento
          </button>
          <div className="px-3 mb-2 mt-6 text-xs font-semibold text-slate-400 uppercase tracking-wider">Dados</div>
          <button onClick={() => onNavigate('datagrid')} className="w-full flex items-center px-3 py-2.5 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors gap-3">
            <span className="material-symbols-outlined">upload_file</span>
            Importações
          </button>
          <button className="w-full flex items-center px-3 py-2.5 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors gap-3">
            <span className="material-symbols-outlined">table_chart</span>
            Relatórios
          </button>
          <div className="px-3 mb-2 mt-6 text-xs font-semibold text-slate-400 uppercase tracking-wider">Sistema</div>
          <button className="w-full flex items-center px-3 py-2.5 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors gap-3">
            <span className="material-symbols-outlined">settings</span>
            Configurações
          </button>
        </nav>
        <div className="p-4 border-t border-border-color cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => onNavigate('login')}>
          <div className="flex items-center gap-3">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
              alt="Admin"
              className="w-9 h-9 rounded-full object-cover border border-gray-200"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">Dr. Admin</p>
              <p className="text-xs text-slate-500 truncate">admin@cardiotrack.com</p>
            </div>
            <span className="material-symbols-outlined text-slate-400 text-sm">logout</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <header className="h-16 bg-white border-b border-border-color flex items-center justify-between px-6 z-10 flex-shrink-0">
          <div className="flex items-center">
            <button className="md:hidden mr-4 text-slate-500">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h1 className="text-xl font-semibold text-slate-800">Visão Geral da Clínica</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-slate-500 hover:text-slate-700 relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="h-6 w-px bg-border-color"></div>
            <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-hover flex items-center gap-2 transition-colors shadow-sm">
              <span className="material-symbols-outlined text-[20px]">add</span>
              Novo Paciente
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-border-color rounded-lg p-5 flex flex-col justify-between h-32 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate('datagrid')}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Total de Registros</p>
                    <h3 className="text-3xl font-bold text-slate-900 mt-1">24.593</h3>
                  </div>
                  <span className="p-2 bg-slate-50 rounded-md text-slate-400">
                    <span className="material-symbols-outlined">database</span>
                  </span>
                </div>
                <div className="flex items-center text-xs font-medium text-green-600">
                  <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                  <span>+8.2% este mês</span>
                </div>
              </div>
              <div className="bg-white border border-border-color rounded-lg p-5 flex flex-col justify-between h-32 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate('datagrid')}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Pacientes Ativos</p>
                    <h3 className="text-3xl font-bold text-slate-900 mt-1">1.204</h3>
                  </div>
                  <span className="p-2 bg-slate-50 rounded-md text-slate-400">
                    <span className="material-symbols-outlined">diversity_1</span>
                  </span>
                </div>
                <div className="flex items-center text-xs font-medium text-green-600">
                  <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                  <span>+24 novos esta semana</span>
                </div>
              </div>
              <div className="bg-white border border-border-color rounded-lg p-5 flex flex-col justify-between h-32 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate('dashboard-v2')}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Alertas Críticos</p>
                    <h3 className="text-3xl font-bold text-primary mt-1">12</h3>
                  </div>
                  <span className="p-2 bg-red-50 rounded-md text-primary">
                    <span className="material-symbols-outlined">warning</span>
                  </span>
                </div>
                <div className="flex items-center text-xs font-medium text-red-600">
                  <span>Requer atenção imediata</span>
                </div>
              </div>
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Chart */}
              <div className="lg:col-span-2 bg-white border border-border-color rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-slate-800">Tendência de Pressão Arterial</h3>
                  <div className="flex items-center gap-2">
                    <select className="text-sm border-slate-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary/20 py-1 bg-white">
                      <option>Últimos 7 Dias</option>
                      <option>Últimos 30 Dias</option>
                      <option>Este Ano</option>
                    </select>
                    <button className="p-1 text-slate-400 hover:text-slate-600">
                      <span className="material-symbols-outlined">download</span>
                    </button>
                  </div>
                </div>
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorSys" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#a8000b" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#a8000b" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} domain={[60, 160]} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '4px', color: '#fff' }}
                        itemStyle={{ color: '#fff' }}
                        labelStyle={{ fontWeight: 'bold', color: '#94a3b8' }}
                      />
                      <Area type="monotone" dataKey="systolic" stroke="#a8000b" strokeWidth={2} fillOpacity={1} fill="url(#colorSys)" dot={{ r: 4, strokeWidth: 2, fill: '#fff', stroke: '#a8000b' }} name="Sistólica Média" />
                      <Area type="monotone" dataKey="diastolic" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" fill="transparent" dot={{ r: 3, fill: '#fff', stroke: '#94a3b8' }} name="Diastólica Média" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Data Management/Upload */}
              <div className="bg-white border border-border-color rounded-lg p-6 flex flex-col shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-2">Gestão de Dados</h3>
                <p className="text-sm text-slate-500 mb-6">Carregue registros de pacientes via CSV ou Excel.</p>
                <div onClick={() => onNavigate('datagrid')} className="flex-1 border-2 border-dashed border-slate-300 rounded-lg bg-slate-50 flex flex-col items-center justify-center p-6 text-center hover:bg-slate-100 transition-colors cursor-pointer group mb-4">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-2xl">upload_file</span>
                  </div>
                  <p className="text-sm font-medium text-slate-700">Arraste arquivos aqui</p>
                  <p className="text-xs text-slate-500 mt-1">ou clique para buscar</p>
                  <button className="mt-4 px-4 py-2 bg-white border border-slate-300 shadow-sm rounded-md text-sm font-medium text-slate-700 hover:text-primary hover:border-primary transition-colors">
                    Selecionar Arquivo
                  </button>
                </div>
                <div className="pt-4 border-t border-border-color">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-slate-500 uppercase">Importações Recentes</span>
                    <button onClick={() => onNavigate('datagrid')} className="text-xs text-primary hover:underline">Ver Todas</button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                        <span className="text-slate-700">lote_maio_23.csv</span>
                      </div>
                      <span className="text-slate-400 text-xs">2h atrás</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                        <span className="text-slate-700">clinica_norte_dados.xlsx</span>
                      </div>
                      <span className="text-slate-400 text-xs">Ontem</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div className="bg-white border border-border-color rounded-lg overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-border-color flex justify-between items-center bg-slate-50/50">
                <h3 className="text-base font-bold text-slate-800">Atividade Recente</h3>
                <div className="flex gap-2">
                  <input className="text-sm border-slate-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary/20 py-1 px-3 w-48" placeholder="Buscar paciente..." type="text"/>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-600">
                  <thead className="bg-slate-50 text-slate-500 font-semibold uppercase text-xs">
                    <tr>
                      <th className="px-6 py-3 border-b border-border-color">Paciente</th>
                      <th className="px-6 py-3 border-b border-border-color">Última Leitura</th>
                      <th className="px-6 py-3 border-b border-border-color">Sistólica/Diastólica</th>
                      <th className="px-6 py-3 border-b border-border-color">Status</th>
                      <th className="px-6 py-3 border-b border-border-color text-right">Ação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-color bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">JS</div>
                          João da Silva
                        </div>
                      </td>
                      <td className="px-6 py-4">Hoje, 09:42 AM</td>
                      <td className="px-6 py-4 font-mono text-slate-700">124 / 82</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-700">Normal</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary">
                          <span className="material-symbols-outlined">visibility</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-red-100 text-primary flex items-center justify-center text-xs font-bold">MA</div>
                          Maria Almeida
                        </div>
                      </td>
                      <td className="px-6 py-4">Hoje, 08:15 AM</td>
                      <td className="px-6 py-4 font-mono text-slate-700 font-bold text-red-600">150 / 95</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-700">Risco Alto</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary">
                          <span className="material-symbols-outlined">visibility</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center text-xs font-bold">CP</div>
                          Carlos Pereira
                        </div>
                      </td>
                      <td className="px-6 py-4">Ontem, 4:30 PM</td>
                      <td className="px-6 py-4 font-mono text-slate-700">135 / 88</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">Elevado</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary">
                          <span className="material-symbols-outlined">visibility</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <footer className="mt-8 text-center text-xs text-slate-400 pb-6">
            © 2024 CardioTrack Admin. Todos os sistemas operacionais.
          </footer>
        </div>
      </main>
    </div>
  );
};

export default DashboardV1;