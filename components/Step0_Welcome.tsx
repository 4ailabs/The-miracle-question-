import React, { useState } from 'react';
import Card from './common/Card';
import Button from './common/Button';
import { Sparkles } from 'lucide-react';

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
      title: "La Pregunta del Milagro",
      desc1: "Esta es una herramienta de auto-reflexión guiada, basada en una poderosa técnica terapéutica para ayudarte a visualizar un futuro sin el problema que te preocupa.",
      desc2: "Tómate tu tiempo en cada paso. No hay respuestas correctas o incorrectas, solo tu propia visión de un futuro mejor.",
      label: "Para comenzar, describe brevemente el problema en el que te gustaría enfocarte. (Opcional)",
      placeholder: "Ej: Me siento ansioso/a, tengo problemas con mi pareja, me siento estancado/a...",
      helper: "Esto personalizará la reflexión en el primer paso.",
      button: "Comenzar"
    }
  }

  if (!mode) {
    return (
        <Card className="max-w-2xl mx-auto text-center animate-fade-in">
         <div className="mb-3">
            <div className="h-14 w-14 sm:h-16 sm:w-16 mx-auto bg-slate-700 rounded-full flex items-center justify-center">
              <Sparkles className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
            </div>
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-slate-800 px-2">
            Bienvenido/a a la Guía de La Pregunta del Milagro
          </h1>
          <p className="text-slate-600 mb-4 sm:mb-5 text-xs sm:text-sm mt-2 px-2">
            Por favor, elige tu rol para comenzar.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <Button onClick={() => setMode('therapist')} className="w-full sm:w-auto text-sm">
              Soy Terapeuta
            </Button>
            <Button onClick={() => setMode('patient')} variant="secondary" className="w-full sm:w-auto text-sm">
              Soy Paciente/Usuario
            </Button>
          </div>
        </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto text-center animate-fade-in">
      <h1 className="text-xl sm:text-2xl font-bold mb-2 text-slate-800">{content[mode].title}</h1>
      <p className="text-slate-600 mb-3 text-sm leading-relaxed">{content[mode].desc1}</p>
      <p className="text-slate-600 mb-4 text-xs leading-relaxed">{content[mode].desc2}</p>
      
      <div className="text-left w-full">
        <label htmlFor="problem" className="block text-sm font-semibold text-slate-700 mb-1">
          {content[mode].label}
        </label>
        <textarea
          id="problem"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          placeholder={content[mode].placeholder}
          className="w-full p-3 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition duration-300 resize-none text-sm"
          rows={2}
        />
        <p className="text-xs text-slate-500 mt-1">{content[mode].helper}</p>
      </div>

      <div className="mt-5 flex justify-between items-center gap-3">
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
