import React, { useState, useEffect } from 'react';
import Card from './common/Card';
import Button from './common/Button';

interface Step1SetupProps {
  problem: string;
  onNext: () => void;
}

const scriptParts = [
  "Tengo una pregunta extraña, tal vez inusual, una pregunta que requiere algo de imaginación...",
  "Suponga...",
  "Que después de que terminemos aquí, usted se va a casa esta noche, ve televisión, hace sus tareas habituales, y luego se va a la cama y se duerme...",
  "Y mientras está durmiendo, ocurre un milagro...",
  "Y los problemas que lo trajeron aquí se resuelven, ¡así como así!...",
  "Pero esto sucede mientras usted está durmiendo, así que no puede saber que ha sucedido.",
  "Una vez que despierta en la mañana..."
];

const TherapistTip: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
        <h4 className="font-bold text-sm text-blue-800">{title}</h4>
        <div className="text-sm text-blue-700">{children}</div>
    </div>
);

const Step1_Setup: React.FC<Step1SetupProps> = ({ problem, onNext }) => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    if (visibleIndex < scriptParts.length) {
      const timer = setTimeout(() => {
        setVisibleIndex(visibleIndex + 1);
      }, visibleIndex === 0 ? 1000 : 3500); // Shorter delay for the first part
      return () => clearTimeout(timer);
    }
  }, [visibleIndex]);
  
  const finalScript = scriptParts[4].replace("los problemas que lo trajeron aquí", `el problema de '${problem}'`);

  return (
    <Card className="max-w-4xl mx-auto animate-fade-in">
       <div className="grid md:grid-cols-2 gap-8">
        
        {/* Left Column: Script */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center md:text-left">Fase 1: Preparación (Script)</h2>
          <div className="space-y-6 text-lg text-slate-700 min-h-[300px] bg-slate-50 p-6 rounded-lg">
            {scriptParts.map((part, index) => (
              <p
                key={index}
                className={`transition-opacity duration-1000 ${index < visibleIndex ? 'opacity-100' : 'opacity-0'}`}
              >
                {index === 4 ? finalScript : part}
              </p>
            ))}
          </div>
        </div>
        
        {/* Right Column: Therapist Guide */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 text-center md:text-left">Guía para el Terapeuta</h3>
          <div className="space-y-4">
            <TherapistTip title="OBJETIVO">
              Crear un contexto imaginativo que permita al cliente visualizar su vida sin el problema, sin necesidad de explicar cómo se resolvió.
            </TherapistTip>
            <TherapistTip title="ELEMENTOS CRÍTICOS">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Pregunta "extraña":</strong> Genera curiosidad y prepara para algo diferente.</li>
                <li><strong>Pausas estratégicas:</strong> Cada pausa tiene una función específica. No apresures el ritmo.</li>
                <li><strong>Contexto cotidiano:</strong> Anclar el ejercicio en la rutina normal lo hace más accesible.</li>
                <li><strong>Ocurre dormido:</strong> Bypasea las defensas y el análisis lógico del "cómo".</li>
              </ul>
            </TherapistTip>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <Button onClick={onNext} disabled={visibleIndex < scriptParts.length}>
          Continuar a Fase 2
        </Button>
      </div>
    </Card>
  );
};

export default Step1_Setup;
