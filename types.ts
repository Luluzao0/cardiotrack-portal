export type ScreenType = 'login' | 'dashboard-v1' | 'dashboard-v2' | 'datagrid';

export interface ChartData {
  name: string;
  systolic: number;
  diastolic: number;
}

export interface Patient {
  id: string;
  name: string;
  initials: string;
  initialsColor: string;
  lastReading: string;
  systolic: number;
  diastolic: number;
  status: 'Normal' | 'High Risk' | 'Elevated';
}

export interface GridRecord {
  id: string;
  patientName: string;
  date: string;
  systolic: number;
  diastolic: number;
  category: string;
  context: string;
  status: 'Validado' | 'Revisão' | 'Pendente';
}