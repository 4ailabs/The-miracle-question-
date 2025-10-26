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
        <h4 className="font-semibold text-slate-800 mb-2 text-base">{title}</h4>
        <div className="text-sm text-slate-600 space-y-2 bg-slate-50 p-3 rounded-md border-l-4 border-slate-300">{children}</div>
    </div>
);

const Step3_Relational: React.FC<Step3RelationalProps> = ({ initialData, onNext, onBack }) => {
  const [notes, setNotes] = useState(initialData);

  const handleNext = () => {
    onNext(notes);
  };

  return (
    <Card className="max-w-4xl mx-auto animate-fade-in">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column: Guidance */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Fase 3: Descubrimiento Relacional</h2>
          <div className="space-y-6">
            <GuidanceItem title="Objetivo">
              <p>Obtener una perspectiva externa del cambio, validación social del mismo, y ampliar la descripción del día-milagro.</p>
            </GuidanceItem>
            <GuidanceItem title="Preguntas Clave">
              <p className="font-semibold text-base text-blue-700">"¿Cómo descubriría su [esposo/a, mejor amigo/a, hijo/a, jefe/a] que este milagro le ocurrió a usted?"</p>
              <p className="font-semibold text-base text-blue-700 mt-2">"Sin que usted le diga nada, ¿qué notarían diferente en usted?"</p>
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
        <div>
          <label htmlFor="notes" className="block text-lg font-semibold text-slate-700 mb-2">
            Notas de la Sesión: Perspectiva Externa
          </label>
          <p className="text-sm text-slate-500 mb-3">Anota quién notaría el cambio y qué conductas, palabras o interacciones específicas observarían en el cliente.</p>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="El cliente cree que su [persona] notaría que..."
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            rows={15}
            aria-label="Notas de Descubrimiento Relacional"
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

export default Step3_Relational;
