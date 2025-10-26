import React, { useState } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';

interface PatientStep4ExceptionsProps {
  initialData: string;
  onNext: (notes: string) => void;
  onBack: () => void;
}

const Patient_Step4_Exceptions: React.FC<PatientStep4ExceptionsProps> = ({ initialData, onNext, onBack }) => {
  const [notes, setNotes] = useState(initialData);

  const handleNext = () => {
    onNext(notes);
  };

  return (
    <Card className="max-w-4xl mx-auto animate-fade-in">
        <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Paso 4: El Milagro ya Sucedió (en parte)</h2>
            <p className="text-lg text-slate-600 mb-6">A veces, el futuro que deseamos ya ha asomado en nuestro pasado y presente.</p>
        </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column: Guidance */}
        <div className="bg-slate-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-blue-800 mb-4">La Pregunta Clave</h3>
          <p className="font-semibold text-lg text-slate-700">"Piensa en la última semana o el último mes. ¿Hubo algún momento, aunque fuera breve, en el que las cosas fueron un POCO como en tu día milagroso?"</p>
          <div className="mt-6 space-y-4 text-sm text-slate-600">
            <p><strong>Explora ese momento:</strong></p>
            <ul className="list-disc list-outside space-y-2 pl-5">
              <li>¿Qué era diferente en ese momento?</li>
              <li>¿Qué estabas haciendo tú de manera distinta?</li>
              <li>¿Qué hiciste para que ese momento sucediera? (¡Esto es importante!)</li>
              <li>¿Quién estaba contigo? ¿Cómo te sentías?</li>
              <li>Incluso un 5% de mejora cuenta. ¡Busca esos pequeños destellos!</li>
            </ul>
          </div>
        </div>
        {/* Right Column: Notes */}
        <div>
          <label htmlFor="notes" className="block text-lg font-semibold text-slate-700 mb-2">
            Mis Reflexiones: Destellos del Milagro
          </label>
          <p className="text-sm text-slate-500 mb-3">Documenta esos momentos en que el problema no tuvo tanto poder. ¿Qué te enseña eso sobre tus propias fortalezas?</p>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Recuerdo que el [día], me sentí un poco mejor porque..."
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            rows={15}
            aria-label="Mis Reflexiones: Destellos del Milagro"
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

export default Patient_Step4_Exceptions;
