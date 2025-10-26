import React, { useState } from 'react';
import Card from './common/Card';
import Button from './common/Button';

interface Step3RelationalProps {
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

const Step3_Relational: React.FC<Step3RelationalProps> = ({ initialData, onNext, onBack }) => {
  const [notes, setNotes] = useState(initialData);

  const handleNext = () => {
    onNext(notes);
  };

  return (
    <Card className="max-w-6xl mx-auto animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
        {/* Left Column: Guidance */}
        <div className="order-2 lg:order-1">
          <h2 className="text-lg lg:text-xl font-bold text-slate-800 mb-2 lg:mb-3">Fase 3: Descubrimiento Relacional</h2>
          <div className="space-y-3 lg:space-y-4">
            <GuidanceItem title="Objetivo">
              <p>Obtener una perspectiva externa del cambio, validación social del mismo, y ampliar la descripción del día-milagro.</p>
            </GuidanceItem>
            <GuidanceItem title="Preguntas Clave">
              <p className="font-semibold text-slate-700">"¿Cómo descubriría su [esposo/a, mejor amigo/a, hijo/a, jefe/a] que este milagro le ocurrió a usted?"</p>
              <p className="font-semibold text-slate-700 mt-2">"Sin que usted le diga nada, ¿qué notarían diferente en usted?"</p>
            </GuidanceItem>
            <GuidanceItem title="Técnicas de Exploración">
              <ul className="list-disc list-outside space-y-2 pl-4">
                <li><strong>Perspectiva Múltiple:</strong> "¿Qué notaría su pareja? ¿Y su mejor amigo? ¿Sus compañeros de trabajo?"</li>
                <li><strong>Conductas Observables:</strong> "¿Qué verían en su cara? ¿En su tono de voz? ¿En su postura corporal?"</li>
                <li><strong>Interacciones:</strong> "¿Cómo sería su conversación con [persona importante]? ¿De qué hablarían?"</li>
              </ul>
            </GuidanceItem>
          </div>
        </div>
        {/* Right Column: Notes */}
        <div className="order-1 lg:order-2">
          <label htmlFor="notes" className="block text-sm lg:text-base font-semibold text-slate-700 mb-1">
            Notas de la Sesión: Perspectiva Externa
          </label>
          <p className="text-xs text-slate-500 mb-2">Anota quién notaría el cambio y qué conductas, palabras o interacciones específicas observarían en el cliente.</p>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="El cliente cree que su [persona] notaría que..."
            className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition text-sm"
            rows={12}
            aria-label="Notas de Descubrimiento Relacional"
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

export default Step3_Relational;
