import React, { useState } from 'react';
import Card from './common/Card';
import Button from './common/Button';

interface Step0WelcomeProps {
  onStart: (problem: string, mode: 'therapist' | 'patient') => void;
}

const Step0_Welcome: React.FC<Step0WelcomeProps> = ({ onStart }) => {
  const [mode, setMode] = useState<'therapist' | 'patient' | null>(null);
  const [problem, setProblem] = useState('');

  const handleStart = () => {
    if (!mode) return;
    const defaultProblem = mode === 'therapist' ? 'los problemas que te trajeron aquí' : 'el problema que te trajo aquí';
    onStart(problem.trim() === '' ? defaultProblem : problem.trim(), mode);
  };
  
  const content = {
    therapist: {
      title: "Guía Profesional: La Pregunta del Milagro",
      desc1: "Esta herramienta está diseñada para guiarte como terapeuta a través del proceso de \"La Pregunta del Milagro\" de la Terapia Breve Centrada en Soluciones.",
      desc2: "En cada paso, encontrarás el script, preguntas clave de exploración y consejos terapéuticos para facilitar la sesión con tu cliente.",
      label: "Para comenzar la sesión, ingresa el problema presentado por el cliente. (Opcional)",
      placeholder: "Ej: Ansiedad, problemas de pareja, estancamiento profesional...",
      helper: "Esto personalizará el script en la Fase 1.",
      button: "Comenzar Sesión"
    },
    patient: {
      title: "Tu Viaje Personal: La Pregunta del Milagro",
      desc1: "Esta es una herramienta de auto-reflexión guiada, basada en una poderosa técnica terapéutica para ayudarte a visualizar un futuro sin el problema que te preocupa.",
      desc2: "Tómate tu tiempo en cada paso. No hay respuestas correctas o incorrectas, solo tu propia visión de un futuro mejor.",
      label: "Para comenzar, describe brevemente el problema en el que te gustaría enfocarte. (Opcional)",
      placeholder: "Ej: Me siento ansioso/a, tengo problemas con mi pareja, me siento estancado/a...",
      helper: "Esto personalizará la reflexión en el primer paso.",
      button: "Comenzar Mi Viaje"
    }
  }

  if (!mode) {
    return (
        <Card className="max-w-3xl mx-auto text-center animate-fade-in">
         <div className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-9-5.747h18" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.528 3.243l4.944 4.944m-5.657 8.485l4.95-4.95M3.243 9.528l4.944 4.944m8.485-5.657l-4.95 4.95" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.8,12a9.8,9.8,0,1,1-19.6,0,9.8,9.8,0,0,1,19.6,0Z"/>
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Bienvenido/a a la Guía de La Pregunta del Milagro</h1>
          <p className="text-slate-600 mb-8 text-lg">
            Por favor, elige tu rol para comenzar.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={() => setMode('therapist')} className="w-full sm:w-auto">
              Soy Terapeuta
            </Button>
            <Button onClick={() => setMode('patient')} variant="secondary" className="w-full sm:w-auto">
              Soy Paciente/Usuario
            </Button>
          </div>
        </Card>
    );
  }

  return (
    <Card className="max-w-3xl mx-auto text-center animate-fade-in">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">{content[mode].title}</h1>
      <p className="text-slate-600 mb-6 text-lg">{content[mode].desc1}</p>
      <p className="text-slate-600 mb-8">{content[mode].desc2}</p>
      
      <div className="text-left w-full">
        <label htmlFor="problem" className="block text-sm font-medium text-slate-700 mb-2">
          {content[mode].label}
        </label>
        <textarea
          id="problem"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          placeholder={content[mode].placeholder}
          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          rows={2}
        />
        <p className="text-xs text-slate-500 mt-1">{content[mode].helper}</p>
      </div>

      <div className="mt-8 flex justify-between items-center">
        <Button onClick={() => setMode(null)} variant="secondary">
          Volver
        </Button>
        <Button onClick={handleStart}>
          {content[mode].button}
        </Button>
      </div>
    </Card>
  );
};

export default Step0_Welcome;
