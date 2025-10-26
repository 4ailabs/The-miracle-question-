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
        <h4 className="font-semibold text-slate-800 mb-2 text-base">{title}</h4>
        <div className="text-sm text-slate-600 space-y-2 bg-slate-50 p-3 rounded-md border-l-4 border-slate-300">{children}</div>
    </div>
);

const Step2_Personal: React.FC<Step2PersonalProps> = ({ initialData, onNext, onBack }) => {
  const [notes, setNotes] = useState(initialData);

  const handleNext = () => {
    onNext(notes);
  };

  return (
    <Card className="max-w-4xl mx-auto animate-fade-in">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column: Guidance */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Fase 2: Descubrimiento Personal</h2>
          <div className="space-y-6">
            <GuidanceItem title="Objetivo">
              <p>Que el cliente describa concreta y detalladamente cómo será su día después del milagro desde su perspectiva personal.</p>
            </GuidanceItem>
            <GuidanceItem title="Pregunta Clave">
              <p className="font-semibold text-base text-blue-700">"¿Cómo descubrirías que este milagro te ocurrió?"</p>
            </GuidanceItem>
            <GuidanceItem title="Versión Alternativa">
              <p className='text-xs mb-1'>Para adolescentes, clientes tímidos, o con dificultad introspectiva:</p>
              <p className="italic">"¿Cómo descubriría su mejor amigo/pareja/familiar que este milagro le ocurrió a usted?"</p>
            </GuidanceItem>
            <GuidanceItem title="Regla de Oro del Terapeuta: SILENCIO">
              <ul className="list-disc list-inside">
                  <li>NO interrumpa el silencio del cliente.</li>
                  <li>Espere pacientemente (puede parecer eterno, no lo es).</li>
                  <li>El silencio permite un procesamiento profundo y da espacio para la construcción imaginativa.</li>
              </ul>
            </GuidanceItem>
          </div>
        </div>
        {/* Right Column: Notes */}
        <div>
          <label htmlFor="notes" className="block text-lg font-semibold text-slate-700 mb-2">
            Notas de la Sesión: El Día del Milagro
          </label>
          <p className="text-sm text-slate-500 mb-3">Anota aquí los detalles concretos que el cliente describe. ¿Qué es diferente? ¿Qué hace, piensa o siente?</p>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="El cliente describe que se despertaría sintiendo..."
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            rows={15}
            aria-label="Notas de Descubrimiento Personal"
          />
        </div>
      </div>

      <div className="mt-8 flex justify-between items-center">
        <Button onClick={onBack} variant="secondary">Atrás</Button>
        <Button onClick={handleNext} disabled={notes.trim().length < 10}>
          Siguiente
        </Button>
      </div>
    </Card>
  );
};

export default Step2_Personal;
