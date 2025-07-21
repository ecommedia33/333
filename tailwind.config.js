/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        // AZUL MÉDICO DOMINANTE - Color principal
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',  // Azul médico principal
          600: '#2563eb',  // Azul médico intenso
          700: '#1d4ed8',  // Azul médico profundo
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // ROJO MÉDICO DOMINANTE - Color de urgencia
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',  // Rojo médico principal
          600: '#dc2626',  // Rojo médico intenso
          700: '#b91c1c',  // Rojo médico profundo
          800: '#991b1b',
          900: '#7f1d1d',
        },
        // Azul eléctrico para efectos
        electric: {
          400: '#06b6d4',
          500: '#0891b2',
          600: '#0e7490',
        },
        // Verde médico para éxito
        success: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
        // Oro para destacar
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        // Grises médicos optimizados
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-fast': 'bounce 0.8s infinite',
        'spin-fast': 'spin 0.8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'electric': 'electric 1.5s ease-in-out infinite',
        'urgent': 'urgent 0.8s ease-in-out infinite',
        'spectacular': 'spectacular 3s ease-in-out infinite',
        'gradient': 'gradient 3s ease infinite',
      },
      keyframes: {
        glow: {
          'from': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' },
          'to': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)' },
        },
        electric: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(239, 68, 68, 0.8)',
            transform: 'scale(1.02)'
          },
        },
        urgent: {
          '0%, 100%': { 
            boxShadow: '0 0 15px rgba(239, 68, 68, 0.6)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(239, 68, 68, 1)',
            transform: 'scale(1.05)'
          },
        },
        spectacular: {
          '0%, 100%': { 
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 60px rgba(34, 197, 94, 0.6)',
            transform: 'scale(1.02)'
          },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #1d4ed8 50%, #ef4444 75%, #3b82f6 100%)',
        'danger-gradient': 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 25%, #dc2626 50%, #ef4444 75%, #f87171 100%)',
        'pattern-grid': 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)',
        'pattern-primary': 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.1) 1px, transparent 0)',
      },
      boxShadow: {
        'primary': '0 10px 40px rgba(59, 130, 246, 0.2)',
        'danger': '0 10px 40px rgba(239, 68, 68, 0.2)',
        'electric': '0 10px 40px rgba(6, 182, 212, 0.2)',
        'success': '0 10px 40px rgba(34, 197, 94, 0.2)',
        'spectacular': '0 25px 80px rgba(59, 130, 246, 0.3), 0 10px 40px rgba(239, 68, 68, 0.2)',
      },
      backgroundSize: {
        'pattern': '20px 20px',
      }
    },
  },
  plugins: [],
};