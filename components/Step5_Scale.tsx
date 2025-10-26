import React, { useState } from 'react';
import Card from './common/Card';
import Button from './common/Button';

interface Step5ScaleProps {
  initialData: { progressScale: number; halfPointStepNotes: string };
  onNext: (data: { progressScale: number; halfPointStepNotes: string }) => void;
  onBack: () => void;
}

const GuidanceItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h4 className="font-semibold text-slate-800 mb-2 text-base">{title}</h4>
        <div className="text-sm text-slate-600 space-y-2 bg-slate-50 p-3 rounded-md border-l-4 border-slate-300">{children}</div>
    </div>
);

const Step5_Scale: React.FC<Step5ScaleProps> = ({ initialData, onNext, onBack }) => {
  const [progressScale, setProgressScale] = useState<number>(initialData.progressScale || 3);
  const [halfPointStepNotes, setHalfPointStepNotes] = useState(initialData.halfPointStepNotes);

  const handleNext = () => {
    onNext({ progressScale, halfPointStepNotes });
  };

  return (
    <Card className="max-w-4xl mx-auto animate-fade-in">
       <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column: Guidance */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Fase 5: Escala de Progreso</h2>
          <div className="space-y-6">
            <GuidanceItem title="Objetivo">
              <p>Crear una medida concreta y compartida del progreso, establecer una línea base y generar esperanza al constatar que raramente alguien está en 0.</p>
            </GuidanceItem>
            <GuidanceItem title="Preguntas de Escala">
              <ol className="list-decimal list-outside space-y-2 pl-4">
                <li><strong>Ubicación Actual:</strong> "En una escala del 0 al 10, donde 10 es el día del milagro y 0 es cómo estaban las cosas cuando llamó para la cita, ¿dónde diría que está AHORA?"</li>
                <li><strong>Perspectiva Externa:</strong> "En la misma escala, ¿dónde cree que su [persona significativa] diría que usted está?"</li>
                <li><strong>Ubicación de la Excepción:</strong> "En la misma escala, ¿dónde diría que estaba cuando ocurrió [la excepción que describió antes]?"</li>
              </ol>
            </GuidanceItem>
            <GuidanceItem title="Pregunta de Seguimiento CRUCIAL">
              <p className="font-semibold text-base text-blue-700">"¿Qué necesitaría pasar para que usted suba MEDIO PUNTO en esta escala?"</p>
              <p className="italic text-xs">Aclaración: "No un punto completo; medio punto es alcanzable y concreto."</p>
            </GuidanceItem>
          </div>
        </div>
        {/* Right Column: Notes & Scale */}
        <div className="space-y-8">
            <div>
                <label htmlFor="scale" className="block text-lg font-semibold text-slate-700 mb-2">
                    Posición Actual del Cliente
                </label>
                <div className="flex items-center space-x-4">
                    <span className="text-lg font-bold text-slate-500">0</span>
                    <input
                    id="scale"
                    type="range"
                    min="0"
                    max="10"
                    step="0.5"
                    value={progressScale}
                    onChange={(e) => setProgressScale(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                    aria-label="Escala de Progreso"
                    />
                    <span className="text-lg font-bold text-slate-500">10</span>
                </div>
                <div className="text-center text-5xl font-bold text-blue-600 mt-4">{progressScale}</div>
            </div>
             <div>
                <label htmlFor="halfpoint" className="block text-lg font-semibold text-slate-700 mb-2">
                    Notas: Próximo Medio Punto
                </label>
                <p className="text-sm text-slate-500 mb-3">Anota la acción más pequeña y concreta que el cliente identifica para subir a un {progressScale + 0.5}.</p>
                <textarea
                    id="halfpoint"
                    value={halfPointStepNotes}
                    onChange={(e) => setHalfPointStepNotes(e.target.value)}
                    placeholder="Ej: Salir a caminar 10 minutos, hacer esa llamada pendiente..."
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    rows={5}
                    aria-label="Notas del Próximo Medio Punto"
                />
            </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between items-center">
        <Button onClick={onBack} variant="secondary">Atrás</Button>
        <Button onClick={handleNext} disabled={halfPointStepNotes.trim().length < 5}>
          Finalizar y Ver Resumen
        </Button>
      </div>
    </Card>
  );
};

export default Step5_Scale;
