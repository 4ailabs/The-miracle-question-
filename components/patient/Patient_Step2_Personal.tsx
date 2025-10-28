import React, { useState } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';

interface PatientStep2PersonalProps {
  initialData: string;
  onNext: (notes: string) => void;
  onBack: () => void;
}

const Patient_Step2_Personal: React.FC<PatientStep2PersonalProps> = ({ initialData, onNext, onBack }) => {
  const [morning, setMorning] = useState('');
  const [daytime, setDaytime] = useState('');
  const [afternoon, setAfternoon] = useState('');
  const [night, setNight] = useState('');
  const [firstSign, setFirstSign] = useState('');

  const handleNext = () => {
    const combinedNotes = `
PRIMERA SEÑAL DEL MILAGRO:
${firstSign}

MI DÍA MILAGROSO:

En la mañana (al despertar):
${morning}

Durante el día (trabajo/escuela/actividades):
${daytime}

En la tarde (interacciones con otros):
${afternoon}

En la noche (antes de dormir):
${night}
    `.trim();
    onNext(combinedNotes);
  };

  return (
    <Card className="max-w-6xl mx-auto animate-fade-in">
       <div className="text-center mb-4">
            <h2 className="text-xl lg:text-2xl font-bold text-slate-800 mb-2">Paso 2: Tu Día Completo Después del Milagro</h2>
            <p className="text-sm lg:text-base text-slate-600">Describe cómo sería tu día completo después del milagro. Sé específico y concreto.</p>
        </div>
      <div className="space-y-4">
        {/* Primera Señal */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            ¿Cuál sería la PRIMERA señal pequeña de que el milagro ocurrió?
          </label>
          <textarea
            value={firstSign}
            onChange={(e) => setFirstSign(e.target.value)}
            placeholder="Lo primero que notaría al despertar es..."
            className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition text-sm"
            rows={3}
          />
        </div>

        {/* Mañana */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            En la mañana (al despertar):
          </label>
          <textarea
            value={morning}
            onChange={(e) => setMorning(e.target.value)}
            placeholder="Cómo me despierto, qué hago, qué pienso, cómo me siento..."
            className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition text-sm"
            rows={3}
          />
        </div>

        {/* Día */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Durante el día (trabajo/escuela/actividades):
          </label>
          <textarea
            value={daytime}
            onChange={(e) => setDaytime(e.target.value)}
            placeholder="Qué hago diferente, cómo me siento, cómo son mis interacciones..."
            className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition text-sm"
            rows={3}
          />
        </div>

        {/* Tarde */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            En la tarde (interacciones con otros):
          </label>
          <textarea
            value={afternoon}
            onChange={(e) => setAfternoon(e.target.value)}
            placeholder="Cómo interactúo, qué conversaciones tendría, cómo respondo..."
            className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition text-sm"
            rows={3}
          />
        </div>

        {/* Noche */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            En la noche (antes de dormir):
          </label>
          <textarea
            value={night}
            onChange={(e) => setNight(e.target.value)}
            placeholder="Cómo termino mi día, qué siento, qué pienso..."
            className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition text-sm"
            rows={3}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2 sm:gap-0">
        <Button onClick={onBack} variant="secondary" className="px-4 py-2.5 text-sm w-full sm:w-auto">Atrás</Button>
        <Button onClick={handleNext} disabled={!firstSign || !morning || !daytime || !afternoon || !night} className="px-4 py-2.5 text-sm w-full sm:w-auto">
          Siguiente
        </Button>
      </div>
    </Card>
  );
};

export default Patient_Step2_Personal;
