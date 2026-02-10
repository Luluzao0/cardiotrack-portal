import React from 'react';
import { ScreenType } from '../types';

interface LoginScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onNavigate }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login delay
    const btn = document.getElementById('login-btn') as HTMLButtonElement;
    if(btn) {
        btn.innerHTML = '<span class="material-symbols-outlined animate-spin text-xl">progress_activity</span>';
        setTimeout(() => {
            onNavigate('dashboard-v1');
        }, 800);
    }
  };

  return (
    <div className="h-screen w-full flex overflow-hidden bg-white">
      {/* Left Side - Hero Image */}
      <div className="hidden lg:block lg:w-1/2 relative bg-gray-900 h-full">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <img 
          alt="Medical professionals working with technology" 
          className="absolute inset-0 w-full h-full object-cover opacity-90" 
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
        />
        <div className="absolute bottom-0 left-0 right-0 p-12 z-20 text-white">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-3xl">health_metrics</span>
            <span className="text-xl font-semibold tracking-wide">CardioTrack</span>
          </div>
          <h2 className="text-4xl font-bold leading-tight mb-4">Transforming Patient Care Through Data Precision.</h2>
          <p className="text-lg text-gray-200 max-w-lg">Acesse análises de pressão arterial em tempo real e gerencie históricos de pacientes com segurança e eficiência.</p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 lg:p-16 bg-white overflow-y-auto">
        <div className="w-full max-w-md space-y-8">
          <div className="lg:hidden flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-2xl">local_hospital</span>
            </div>
            <span className="text-xl font-bold text-gray-900">CardioTrack</span>
          </div>
          
          <div className="text-center lg:text-left">
            <div className="hidden lg:flex w-12 h-12 bg-red-50 text-primary rounded-xl items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl">local_hospital</span>
            </div>
            <h1 className="text-3xl font-bold text-text-main tracking-tight">Portal Profissional</h1>
            <p className="mt-2 text-text-secondary">Bem-vindo de volta. Por favor, insira seus dados.</p>
          </div>

          <form action="#" className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-text-main mb-1.5" htmlFor="email">Email Corporativo</label>
                <div className="relative">
                  <input 
                    autoComplete="email" 
                    className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary shadow-input transition-all duration-200 sm:text-sm" 
                    id="email" 
                    name="email" 
                    placeholder="dr.nome@hospital.com" 
                    required 
                    type="email"
                    defaultValue="demo@cardiotrack.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-main mb-1.5" htmlFor="password">Senha</label>
                <div className="relative">
                  <input 
                    autoComplete="current-password" 
                    className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary shadow-input transition-all duration-200 sm:text-sm" 
                    id="password" 
                    name="password" 
                    placeholder="••••••••" 
                    required 
                    type="password"
                    defaultValue="password123" 
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input 
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer" 
                  id="remember-me" 
                  name="remember-me" 
                  type="checkbox"
                  defaultChecked 
                />
                <label className="ml-2 block text-sm text-text-secondary cursor-pointer" htmlFor="remember-me">
                  Manter conectado
                </label>
              </div>
              <div className="text-sm">
                <a className="font-medium text-primary hover:text-primary-hover transition-colors" href="#">
                  Esqueceu a senha?
                </a>
              </div>
            </div>

            <div>
              <button 
                id="login-btn"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 shadow-md hover:shadow-lg items-center gap-2" 
                type="submit"
              >
                Entrar no Sistema
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-text-secondary">Ainda não tem acesso?</span>
            <a className="font-medium text-primary hover:text-primary-hover transition-colors ml-1" href="#">
              Solicitar credenciais
            </a>
          </div>

          <div className="pt-8 mt-8 border-t border-gray-100 flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-1.5 text-xs font-medium text-gray-400 uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              <span>Powered by RLS Secure</span>
            </div>
            <p className="text-xs text-gray-400 text-center max-w-xs">
              Dados protegidos com criptografia de ponta a ponta. Acesso monitorado. © CardioTrack 2024.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;