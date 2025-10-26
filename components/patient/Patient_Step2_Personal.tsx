import React, { useState } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';

interface PatientStep2PersonalProps {
  initialData: string;
  onNext: (notes: string) => void;
  onBack: () => void;
}

const Patient_Step2_Personal: React.FC<PatientStep2PersonalProps> = ({ initialData, onNext, onBack }) => {
  const [notes, setNotes] = useState(initialData);

  const handleNext = () => {
    onNext(notes);
  };

  return (
    <Card className="max-w-4xl mx-auto animate-fade-in">
       <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Paso 2: Tu Día Milagroso</h2>
            <p className="text-lg text-slate-600 mb-6">Te despiertas y el milagro ha ocurrido. El problema se ha ido.</p>
        </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column: Guidance */}
        <div className="bg-slate-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-blue-800 mb-4">La Pregunta Clave</h3>
          <p className="font-semibold text-lg text-slate-700">"¿Qué es lo primero que notarías que te haría darte cuenta de que el milagro ha ocurrido?"</p>
          <div className="mt-6 space-y-4 text-sm text-slate-600">
            <p><strong>Consejos para tu reflexión:</strong></p>
            <ul className="list-disc list-outside space-y-2 pl-5">
              <li><strong>Sé concreto.</strong> ¿Qué verías, oirías o sentirías diferente?</li>
              <li><strong>Empieza por lo pequeño.</strong> ¿Cómo te levantas de la cama? ¿Qué piensas al mirarte al espejo?</li>
              <li><strong>Tómate tu tiempo.</strong> Cierra los ojos si te ayuda. El silencio es tu amigo aquí.</li>
              <li><strong>Describe acciones.</strong> ¿Qué HACES diferente en la primera hora de tu día?</li>
            </ul>
          </div>
        </div>
        {/* Right Column: Notes */}
        <div>
          <label htmlFor="notes" className="block text-lg font-semibold text-slate-700 mb-2">
            Mis Reflexiones: El Comienzo del Día
          </label>
          <p className="text-sm text-slate-500 mb-3">Escribe aquí todo lo que se te ocurra. No lo juzgues, solo descríbelo.</p>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Lo primero que noto es que me despierto sintiendo..."
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            rows={15}
            aria-label="Mis Reflexiones: El Comienzo del Día"
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

export default Patient_Step2_Personal;
