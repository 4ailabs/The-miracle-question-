import React, { useState } from 'react';
import Card from './common/Card';
import Button from './common/Button';

interface Step2PersonalProps {
  initialData: string;
  onNext: (notes: string) => void;
  onBack: () => void;
}

const GuidanceItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h4 className="font-semibold text-slate-800 mb-1 text-sm">{title}</h4>
        <div className="text-sm text-slate-600 space-y-1 bg-slate-50 p-2.5 rounded-md border-l-4 border-slate-300">{children}</div>
    </div>
);

const Step2_Personal: React.FC<Step2PersonalProps> = ({ initialData, onNext, onBack }) => {
  const [notes, setNotes] = useState(initialData);

  const handleNext = () => {
    onNext(notes);
  };

  return (
    <Card className="max-w-6xl mx-auto animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
        {/* Left Column: Guidance */}
        <div className="order-2 lg:order-1">
          <h2 className="text-lg lg:text-xl font-bold text-slate-800 mb-2 lg:mb-3">Fase 2: Descubrimiento Personal</h2>
          <div className="space-y-3 lg:space-y-4">
            <GuidanceItem title="Objetivo">
              <p>Que el cliente describa concreta y detalladamente cómo será su día después del milagro desde su perspectiva personal.</p>
            </GuidanceItem>
            <GuidanceItem title="Pregunta Clave">
              <p className="font-semibold text-slate-700">"¿Cómo descubrirías que este milagro te ocurrió?"</p>
            </GuidanceItem>
            <GuidanceItem title="Versión Alternativa">
              <p className='text-xs mb-1'>Para adolescentes, clientes tímidos, o con dificultad introspectiva:</p>
              <p className="italic">"¿Cómo descubriría su mejor amigo/pareja/familiar que este milagro le ocurrió a usted?"</p>
            </GuidanceItem>
            <GuidanceItem title="Regla de Oro del Terapeuta: SILENCIO">
              <ul className="list-disc list-inside space-y-1">
                  <li>NO interrumpa el silencio del cliente.</li>
                  <li>Espere pacientemente (puede parecer eterno, no lo es).</li>
                  <li>El silencio permite un procesamiento profundo y da espacio para la construcción imaginativa.</li>
              </ul>
            </GuidanceItem>
          </div>
        </div>
        {/* Right Column: Notes */}
        <div className="order-1 lg:order-2">
          <label htmlFor="notes" className="block text-sm lg:text-base font-semibold text-slate-700 mb-1">
            Notas de la Sesión: El Día del Milagro
          </label>
          <p className="text-xs text-slate-500 mb-2">Anota aquí los detalles concretos que el cliente describe. ¿Qué es diferente? ¿Qué hace, piensa o siente?</p>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="El cliente describe que se despertaría sintiendo..."
            className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition text-sm"
            rows={12}
            aria-label="Notas de Descubrimiento Personal"
          />
        </div>
      </div>

      <div className="mt-3 lg:mt-4 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2 sm:gap-0">
        <Button onClick={onBack} variant="secondary" className="px-4 py-2.5 text-sm w-full sm:w-auto">Atrás</Button>
        <Button onClick={handleNext} disabled={notes.trim().length < 10} className="px-4 py-2.5 text-sm w-full sm:w-auto">
          Siguiente
        </Button>
      </div>
    </Card>
  );
};

export default Step2_Personal;
