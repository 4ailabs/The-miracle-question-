import React, { useState } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';

interface PatientStep3RelationalProps {
  initialData: string;
  onNext: (notes: string) => void;
  onBack: () => void;
}

const Patient_Step3_Relational: React.FC<PatientStep3RelationalProps> = ({ initialData, onNext, onBack }) => {
  const [notes, setNotes] = useState(initialData);

  const handleNext = () => {
    onNext(notes);
  };

  return (
    <Card className="max-w-4xl mx-auto animate-fade-in">
        <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Paso 3: Quién lo Notaría</h2>
            <p className="text-lg text-slate-600 mb-6">El cambio en ti también se refleja en cómo interactúas con los demás.</p>
        </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column: Guidance */}
        <div className="bg-slate-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-blue-800 mb-4">La Pregunta Clave</h3>
          <p className="font-semibold text-lg text-slate-700">"Sin que digas una palabra, ¿quién sería la primera persona en notar que el milagro ha ocurrido? ¿Qué verían diferente en ti?"</p>
           <div className="mt-6 space-y-4 text-sm text-slate-600">
            <p><strong>Piensa en:</strong></p>
            <ul className="list-disc list-outside space-y-2 pl-5">
              <li>Tu pareja, un familiar, tu mejor amigo/a, un compañero/a de trabajo...</li>
              <li><strong>Conductas observables:</strong> ¿Tu tono de voz? ¿Tu sonrisa? ¿Tu postura?</li>
              <li><strong>Interacciones:</strong> ¿Cómo sería una conversación con ellos? ¿De qué hablarían? ¿Cómo responderías de forma diferente?</li>
            </ul>
          </div>
        </div>
        {/* Right Column: Notes */}
        <div>
          <label htmlFor="notes" className="block text-lg font-semibold text-slate-700 mb-2">
            Mis Reflexiones: El Mundo me ve Diferente
          </label>
          <p className="text-sm text-slate-500 mb-3">Describe qué notarían los demás y cómo cambiarían tus interacciones.</p>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Creo que [nombre de la persona] notaría que yo..."
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            rows={15}
            aria-label="Mis Reflexiones: El Mundo me ve Diferente"
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

export default Patient_Step3_Relational;
