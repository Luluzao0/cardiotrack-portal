import React from 'react';
import { GridRecord, ScreenType } from '../types';

interface DataGridScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

const records: GridRecord[] = [
  { id: '#R-4923', patientName: 'João da Silva', date: '2024-05-12 09:00:15', systolic: 120, diastolic: 80, category: 'Normal', context: 'Repouso', status: 'Validado' },
  { id: '#R-4924', patientName: 'Maria Almeida', date: '2024-05-12 08:45:22', systolic: 150, diastolic: 95, category: 'Hipertensão 2', context: 'Pós-treino', status: 'Validado' },
  { id: '#R-4925', patientName: 'Carlos Pereira', date: '2024-05-11 22:15:00', systolic: 135, diastolic: 85, category: 'Elevada', context: 'Sintomático', status: 'Revisão' },
  { id: '#R-4926', patientName: 'Fernanda Costa', date: '2024-05-11 18:30:11', systolic: 118, diastolic: 76, category: 'Normal', context: 'Rotina', status: 'Validado' },
  { id: '#R-4927', patientName: 'Lucas Martins', date: '2024-05-11 14:15:33', systolic: 160, diastolic: 100, category: 'Hipertensão 2', context: 'Emergência', status: 'Pendente' },
  { id: '#R-4928', patientName: 'Ana Souza', date: '2024-05-11 10:22:45', systolic: 122, diastolic: 81, category: 'Normal', context: 'Manhã', status: 'Validado' },
  { id: '#R-4929', patientName: 'Roberto Lima', date: '2024-05-10 19:45:10', systolic: 138, diastolic: 88, category: 'Elevada', context: 'Estresse', status: 'Validado' },
  { id: '#R-4930', patientName: 'Paula Gomes', date: '2024-05-10 16:30:00', systolic: 125, diastolic: 82, category: 'Normal', context: 'Rotina', status: 'Validado' },
  { id: '#R-4931', patientName: 'Juliana Melo', date: '2024-05-10 14:15:22', systolic: 119, diastolic: 78, category: 'Normal', context: 'Pós-Almoço', status: 'Validado' },
  { id: '#R-4932', patientName: 'Marcos Rocha', date: '2024-05-10 09:10:05', systolic: 148, diastolic: 92, category: 'Hipertensão 1', context: 'Cansaço', status: 'Revisão' },
  { id: '#R-4933', patientName: 'Lúcia Silva', date: '2024-05-09 21:00:00', systolic: 115, diastolic: 75, category: 'Normal', context: 'Repouso', status: 'Validado' },
];

const DataGridScreen: React.FC<DataGridScreenProps> = ({ onNavigate }) => {
  return (
    <div className="bg-background-light text-text-light font-sans antialiased min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Sidebar (Similar to V1) */}
      <aside className="w-full md:w-64 bg-white border-r border-border-light flex-shrink-0 flex flex-col h-screen hidden md:flex z-30">
        <div className="h-14 flex items-center px-4 border-b border-border-light bg-gray-50 cursor-pointer" onClick={() => onNavigate('dashboard-v1')}>
          <span className="material-symbols-outlined text-primary mr-2">monitor_heart</span>
          <span className="font-bold text-gray-900 tracking-tight">CardioTrack Admin</span>
        </div>
        <nav className="flex-1 overflow-y-auto py-2">
          <div className="px-3 mb-2">
            <p className="px-2 text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 mt-4">Gestão de Dados</p>
            <button onClick={() => onNavigate('datagrid')} className="w-full flex items-center px-3 py-2 bg-primary text-white rounded-md text-sm font-medium">
              <span className="material-symbols-outlined text-[20px] mr-3">table_view</span>
              Grid Mestre
            </button>
            <button className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium mt-1">
              <span className="material-symbols-outlined text-[20px] mr-3">upload_file</span>
              Importações
            </button>
            <button className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium mt-1">
              <span className="material-symbols-outlined text-[20px] mr-3">download</span>
              Exportações
            </button>
          </div>
          <div className="px-3 mb-2">
            <p className="px-2 text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 mt-4">Entidades</p>
            <button onClick={() => onNavigate('dashboard-v1')} className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium">
              <span className="material-symbols-outlined text-[20px] mr-3">arrow_back</span>
              Voltar ao Início
            </button>
            <button className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium mt-1">
              <span className="material-symbols-outlined text-[20px] mr-3">person</span>
              Pacientes
            </button>
            <button className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium mt-1">
              <span className="material-symbols-outlined text-[20px] mr-3">medical_services</span>
              Médicos
            </button>
          </div>
        </nav>
        <div className="p-3 border-t border-border-light bg-gray-50 cursor-pointer hover:bg-gray-100" onClick={() => onNavigate('login')}>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded bg-gray-300 flex items-center justify-center text-xs font-bold text-gray-700">ADM</div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Admin Sys</p>
              <p className="text-xs text-gray-500">v3.4.0 (Stable)</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Grid Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-white">
        {/* Top Header */}
        <div className="h-16 border-b border-border-light flex items-center justify-between px-4 bg-white flex-shrink-0 z-20 shadow-sm">
          <div className="flex items-center space-x-4">
            <h1 className="text-lg font-semibold text-gray-800 flex items-center">
              <span className="material-symbols-outlined mr-2 text-gray-500">dataset</span>
              Base de Medições
            </h1>
            <div className="h-6 w-px bg-gray-300 mx-2"></div>
            <div className="text-sm text-gray-500">
              <span className="font-mono font-medium text-gray-900">12,482</span> registros totais
            </div>
            <div className="text-sm text-gray-500 hidden sm:block">
              • Última sync: <span className="font-mono">10:42:15</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative hidden lg:block">
              <span className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-gray-400 text-[18px]">search</span>
              </span>
              <input className="pl-8 pr-3 py-1.5 border border-gray-300 rounded text-sm bg-gray-50 text-gray-900 focus:ring-1 focus:ring-primary focus:border-primary w-64" placeholder="Buscar por ID, Nome ou CPF..." type="text"/>
            </div>
            <button className="flex items-center justify-center px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded text-sm font-medium transition-colors shadow-sm whitespace-nowrap">
              <span className="material-symbols-outlined text-[18px] mr-2">upload_file</span>
              Importar Excel
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 border border-gray-300 rounded bg-white" title="Configurações da Grade">
              <span className="material-symbols-outlined text-[20px]">settings</span>
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-gray-50 border-b border-border-light p-2 flex items-center space-x-2 flex-shrink-0 overflow-x-auto">
          <span className="text-xs font-bold text-gray-500 uppercase px-2">Filtros:</span>
          <div className="flex items-center bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded border border-blue-200">
            <span className="font-semibold mr-1">Status:</span> Ativo
            <button className="ml-2 hover:text-blue-600"><span className="material-symbols-outlined text-[14px]">close</span></button>
          </div>
          <div className="flex items-center bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded border border-blue-200">
            <span className="font-semibold mr-1">Data:</span> Últimos 30 dias
            <button className="ml-2 hover:text-blue-600"><span className="material-symbols-outlined text-[14px]">close</span></button>
          </div>
          <button className="flex items-center text-xs text-gray-600 hover:text-primary font-medium px-2 py-1 border border-dashed border-gray-300 rounded hover:border-primary hover:bg-white transition-colors">
            <span className="material-symbols-outlined text-[14px] mr-1">add</span>
            Adicionar Filtro
          </button>
          <div className="flex-grow"></div>
          <button className="text-xs text-gray-500 hover:text-gray-700 underline px-2">Limpar todos</button>
        </div>

        {/* Table Area */}
        <div className="flex-1 overflow-auto relative bg-white">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead className="bg-gray-100 text-gray-600 text-xs uppercase font-semibold border-b border-gray-300 shadow-sm sticky top-0 z-20">
              <tr>
                <th className="p-0 border-r border-gray-300 w-12 text-center bg-gray-100 sticky left-0 z-30">
                  <input className="rounded border-gray-400 text-primary focus:ring-primary h-4 w-4 mx-auto my-3 cursor-pointer" type="checkbox"/>
                </th>
                <th className="group relative px-3 py-3 border-r border-gray-300 cursor-pointer hover:bg-gray-200 select-none bg-gray-100">
                  <div className="flex items-center justify-between">
                    <span>ID Registro</span>
                    <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 text-gray-400">arrow_drop_down</span>
                  </div>
                </th>
                <th className="group relative px-3 py-3 border-r border-gray-300 cursor-pointer hover:bg-gray-200 select-none bg-gray-100">
                  <div className="flex items-center justify-between">
                    <span>Paciente</span>
                    <span className="material-symbols-outlined text-[16px] text-gray-600">sort</span>
                  </div>
                </th>
                <th className="group relative px-3 py-3 border-r border-gray-300 cursor-pointer hover:bg-gray-200 select-none bg-gray-100">
                  <div className="flex items-center justify-between">
                    <span>Data/Hora</span>
                  </div>
                </th>
                <th className="group relative px-3 py-3 border-r border-gray-300 cursor-pointer hover:bg-gray-200 select-none bg-gray-100">
                  <div className="flex items-center justify-between">
                    <span>Sistólica</span>
                  </div>
                </th>
                <th className="group relative px-3 py-3 border-r border-gray-300 cursor-pointer hover:bg-gray-200 select-none bg-gray-100">
                  <div className="flex items-center justify-between">
                    <span>Diastólica</span>
                  </div>
                </th>
                <th className="group relative px-3 py-3 border-r border-gray-300 cursor-pointer hover:bg-gray-200 select-none bg-gray-100">
                  <div className="flex items-center justify-between">
                    <span>Categoria</span>
                    <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 text-gray-400">filter_list</span>
                  </div>
                </th>
                <th className="group relative px-3 py-3 border-r border-gray-300 cursor-pointer hover:bg-gray-200 select-none bg-gray-100">
                  <div className="flex items-center justify-between">
                    <span>Contexto</span>
                    <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 text-gray-400">filter_list</span>
                  </div>
                </th>
                <th className="group relative px-3 py-3 border-r border-gray-300 cursor-pointer hover:bg-gray-200 select-none bg-gray-100">
                  <div className="flex items-center justify-between">
                    <span>Status</span>
                  </div>
                </th>
                <th className="px-3 py-3 bg-gray-100 text-right sticky right-0 z-30 shadow-[-5px_0_5px_-5px_rgba(0,0,0,0.1)] border-l border-gray-300">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-200 font-mono">
              {records.map((record, idx) => (
                <tr key={idx} className="hover:bg-blue-50 group transition-colors">
                  <td className="p-0 border-r border-gray-200 text-center sticky left-0 z-10 bg-white group-hover:bg-blue-50">
                    <input className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4 mx-auto cursor-pointer" type="checkbox"/>
                  </td>
                  <td className="px-3 py-2 border-r border-gray-200 font-medium text-gray-900">{record.id}</td>
                  <td className="px-3 py-2 border-r border-gray-200 text-gray-700 font-sans">{record.patientName}</td>
                  <td className="px-3 py-2 border-r border-gray-200 text-gray-600">{record.date}</td>
                  <td className={`px-3 py-2 border-r border-gray-200 text-right font-bold ${record.systolic > 140 ? 'text-red-600' : (record.systolic > 130 ? 'text-yellow-600' : 'text-gray-800')}`}>{record.systolic}</td>
                  <td className={`px-3 py-2 border-r border-gray-200 text-right font-bold ${record.diastolic > 90 ? 'text-red-600' : (record.diastolic > 85 ? 'text-yellow-600' : 'text-gray-800')}`}>{record.diastolic}</td>
                  <td className="px-3 py-2 border-r border-gray-200">
                    <span className={`inline-block px-2 py-0.5 text-xs font-sans font-medium rounded-sm border ${
                      record.category === 'Normal' ? 'bg-green-100 text-green-800 border-green-200' : 
                      record.category.includes('Hipertensão') ? 'bg-red-100 text-red-800 border-red-200' : 'bg-yellow-100 text-yellow-800 border-yellow-200'
                    }`}>
                      {record.category}
                    </span>
                  </td>
                  <td className="px-3 py-2 border-r border-gray-200 text-gray-600 font-sans text-xs">{record.context}</td>
                  <td className="px-3 py-2 border-r border-gray-200">
                    <span className={`flex items-center text-xs font-sans ${
                      record.status === 'Validado' ? 'text-green-600' :
                      record.status === 'Pendente' ? 'text-red-600' : 'text-amber-600'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                         record.status === 'Validado' ? 'bg-green-500' :
                         record.status === 'Pendente' ? 'bg-red-500' : 'bg-amber-500'
                      }`}></span>
                      {record.status}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-right sticky right-0 z-10 bg-white group-hover:bg-blue-50 shadow-[-5px_0_5px_-5px_rgba(0,0,0,0.1)] border-l border-gray-200">
                    <button className="text-gray-400 hover:text-primary"><span className="material-symbols-outlined text-[18px]">edit_square</span></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Pagination */}
        <div className="h-12 border-t border-border-light flex items-center justify-between px-4 bg-gray-50 flex-shrink-0 z-20">
          <div className="flex items-center text-sm text-gray-500">
            <span className="mr-2">Linhas por página:</span>
            <select className="form-select border-gray-300 py-1 pl-2 pr-8 text-xs rounded bg-white focus:ring-primary focus:border-primary">
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500 mr-4">1-25 de 12,482</span>
            <div className="flex rounded-md shadow-sm border border-gray-300 bg-white">
              <button className="px-2 py-1 text-gray-500 hover:text-gray-700 border-r border-gray-300 disabled:opacity-50">
                <span className="material-symbols-outlined text-[18px]">first_page</span>
              </button>
              <button className="px-2 py-1 text-gray-500 hover:text-gray-700 border-r border-gray-300 disabled:opacity-50">
                <span className="material-symbols-outlined text-[18px]">chevron_left</span>
              </button>
              <button className="px-2 py-1 text-gray-500 hover:text-gray-700 border-r border-gray-300">
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
              <button className="px-2 py-1 text-gray-500 hover:text-gray-700">
                <span className="material-symbols-outlined text-[18px]">last_page</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DataGridScreen;