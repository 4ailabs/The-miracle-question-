import React, { useState, useEffect } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';

interface PatientStep1SetupProps {
  problem: string;
  onNext: () => void;
}

const scriptParts = [
  "Tengo una pregunta para ti, una pregunta algo inusual que requiere un poco de imaginación...",
  "Supón...",
  "Que esta noche, mientras duermes profundamente...",
  "Ocurre un milagro...",
  "Y ese problema que te trajo aquí se resuelve, ¡así de simple!...",
  "Pero como sucede mientras duermes, no te das cuenta de que ha ocurrido.",
  "Cuando te despiertas por la mañana..."
];

const Patient_Step1_Setup: React.FC<PatientStep1SetupProps> = ({ problem, onNext }) => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    if (visibleIndex < scriptParts.length) {
      const timer = setTimeout(() => {
        setVisibleIndex(visibleIndex + 1);
      }, visibleIndex === 0 ? 1000 : 3500);
      return () => clearTimeout(timer);
    }
  }, [visibleIndex]);
  
  const finalScript = scriptParts[4].replace("ese problema que te trajo aquí", `el problema de '${problem}'`);

  return (
    <Card className="max-w-4xl mx-auto animate-fade-in text-center">
       <h2 className="text-xl font-bold text-slate-800 mb-3">Paso 1: La Invitación a Imaginar</h2>
        <div className="space-y-3 text-base text-slate-700 min-h-[220px] bg-slate-50 p-5 rounded-lg flex flex-col justify-center shadow-inner">
            {scriptParts.map((part, index) => (
            <p
                key={index}
                className={`transition-opacity duration-1000 ${index < visibleIndex ? 'opacity-100' : 'opacity-0'}`}
            >
                {index === 4 ? finalScript : part}
            </p>
            ))}
        </div>
        <div className="mt-3 p-3 bg-slate-50 border-l-4 border-slate-400 rounded-r-lg text-left">
            <p className="text-xs text-slate-600">Respira hondo. No hay necesidad de pensar en CÓMO sucedió el milagro. Simplemente, permítete entrar en este espacio de imaginación.</p>
        </div>
      
      <div className="mt-4">
        <Button onClick={onNext} disabled={visibleIndex < scriptParts.length} className="px-5 py-2 text-sm">
          Estoy listo/a para continuar
        </Button>
      </div>
    </Card>
  );
};

export default Patient_Step1_Setup;
