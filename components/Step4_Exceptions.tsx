import React, { useState } from 'react';
import Card from './common/Card';
import Button from './common/Button';

interface Step4ExceptionsProps {
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

const Step4_Exceptions: React.FC<Step4ExceptionsProps> = ({ initialData, onNext, onBack }) => {
  const [notes, setNotes] = useState(initialData);

  const handleNext = () => {
    onNext(notes);
  };

  return (
    <Card className="max-w-6xl mx-auto animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
        {/* Left Column: Guidance */}
        <div className="order-2 lg:order-1">
          <h2 className="text-lg lg:text-xl font-bold text-slate-800 mb-2 lg:mb-3">Fase 4: Búsqueda de Excepciones</h2>
          <div className="space-y-3 lg:space-y-4">
            <GuidanceItem title="Objetivo">
              <p>Identificar momentos en que el "milagro" ya ocurrió parcialmente, revelando recursos y estrategias que el cliente ya posee.</p>
            </GuidanceItem>
             <GuidanceItem title="Importancia Terapéutica">
              <p>Esta es posiblemente la fase MÁS PODEROSA porque demuestra que el problema no es constante, identifica recursos existentes y cambia la narrativa de "imposible" a "ya lo logré antes".</p>
            </GuidanceItem>
            <GuidanceItem title="Pregunta Clave">
              <p className="font-semibold text-slate-700">"¿Cuándo fue la vez MÁS RECIENTE —tal vez días, horas, o semanas atrás— que usted puede recordar cuando las cosas fueron ALGO ASÍ como este día después del milagro?"</p>
            </GuidanceItem>
            <GuidanceItem title="Exploración Profunda de Excepciones">
               <ul className="list-decimal list-outside space-y-1 pl-4 text-xs">
                <li>¿Qué tenía diferente ese día/momento?</li>
                <li>¿Qué estaba haciendo usted de manera diferente?</li>
                <li>¿Qué NO estaba haciendo que normalmente sí hace?</li>
                <li>¿Quién estaba presente?</li>
                <li>¿Cómo se sentía?</li>
                <li>¿Qué había pasado antes de eso?</li>
                <li>¿Qué pensaba en ese momento?</li>
                <li>¿Qué hizo para que eso sucediera? (atribución interna)</li>
                <li>¿Cómo logró que continuara? (agencia)</li>
              </ul>
            </GuidanceItem>
          </div>
        </div>
        {/* Right Column: Notes */}
        <div className="order-1 lg:order-2">
          <label htmlFor="notes" className="block text-sm lg:text-base font-semibold text-slate-700 mb-1">
            Notas de la Sesión: Excepciones al Problema
          </label>
          <p className="text-xs text-slate-500 mb-2">Documenta los momentos en que el problema fue menos intenso. ¿Qué era diferente? ¿Qué hizo el cliente para que eso sucediera?</p>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="El cliente recordó que el [día], se sintió un poco mejor porque..."
            className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition text-sm"
            rows={12}
            aria-label="Notas de Búsqueda de Excepciones"
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

export default Step4_Exceptions;
