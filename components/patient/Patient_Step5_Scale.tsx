import React, { useState } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';

interface PatientStep5ScaleProps {
  initialData: { progressScale: number; halfPointStepNotes: string };
  onNext: (data: { progressScale: number; halfPointStepNotes: string }) => void;
  onBack: () => void;
}

const Patient_Step5_Scale: React.FC<PatientStep5ScaleProps> = ({ initialData, onNext, onBack }) => {
  const [progressScale, setProgressScale] = useState<number>(initialData.progressScale || 3);
  const [halfPointStepNotes, setHalfPointStepNotes] = useState(initialData.halfPointStepNotes);
  const [whyNotZero, setWhyNotZero] = useState('');
  const [whatKeepsMe, setWhatKeepsMe] = useState('');

  const handleNext = () => {
    onNext({ progressScale, halfPointStepNotes });
  };

  return (
    <Card className="max-w-4xl mx-auto animate-fade-in">
        <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Paso 5: La Escala de Progreso</h2>
            <p className="text-lg text-slate-600 mb-6">Vamos a medir dónde te encuentras ahora y a identificar el próximo pequeño paso.</p>
        </div>
       <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column: Guidance */}
        <div className="bg-slate-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Preguntas de Escala</h3>
          <ol className="list-decimal list-outside space-y-4 pl-5 text-slate-700">
            <li>"En una escala del 0 al 10, donde <strong>10</strong> es tu día milagroso y <strong>0</strong> es el momento más difícil del problema, ¿dónde te ubicarías <strong>AHORA MISMO</strong>?"</li>
            <li><strong>Pregunta Clave:</strong> "Sabiendo que estás en un {progressScale}, ¿qué necesitaría pasar para que subieras solo MEDIO PUNTO, a un {progressScale + 0.5}?"</li>
          </ol>
           <div className="mt-6 space-y-2 text-sm text-slate-600">
            <p><strong>Reflexión Importante:</strong></p>
            <p>El objetivo no es saltar al 10. Se trata de encontrar la acción más pequeña, concreta y realizable que puedas hacer. ¡El progreso se construye con pequeños pasos!</p>
          </div>
        </div>
        {/* Right Column: Notes & Scale */}
        <div className="space-y-8">
            <div>
                <label htmlFor="scale" className="block text-lg font-semibold text-slate-700 mb-2">
                    ¿Dónde estoy ahora?
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
                <label className="block text-lg font-semibold text-slate-700 mb-2">
                    ¿Qué te dice el hecho de estar en {progressScale} y no en 0?
                </label>
                <textarea
                    value={whyNotZero}
                    onChange={(e) => setWhyNotZero(e.target.value)}
                    placeholder="Esto te muestra que algo ya estás haciendo bien..."
                    className="w-full p-3 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition mb-4"
                    rows={3}
                />
            </div>
            <div>
                <label className="block text-lg font-semibold text-slate-700 mb-2">
                    ¿Qué estás haciendo que te mantiene en ese número?
                </label>
                <textarea
                    value={whatKeepsMe}
                    onChange={(e) => setWhatKeepsMe(e.target.value)}
                    placeholder="Identifica tus fortalezas y recursos actuales..."
                    className="w-full p-3 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition mb-4"
                    rows={3}
                />
            </div>
            <div>
                <label htmlFor="halfpoint" className="block text-lg font-semibold text-slate-700 mb-2">
                    Mi Próximo Medio Punto (a {progressScale + 0.5})
                </label>
                <p className="text-sm text-slate-500 mb-3">Describe esa pequeña acción concreta que te llevaría a un {progressScale + 0.5}.</p>
                <textarea
                    id="halfpoint"
                    value={halfPointStepNotes}
                    onChange={(e) => setHalfPointStepNotes(e.target.value)}
                    placeholder="Ej: Salir a caminar 10 minutos, hacer esa llamada pendiente, dedicar 5 minutos a..."
                    className="w-full p-3 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    rows={4}
                />
            </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between items-center">
        <Button onClick={onBack} variant="secondary">Atrás</Button>
        <Button onClick={handleNext} disabled={halfPointStepNotes.trim().length < 5}>
          Finalizar y Ver Mi Resumen
        </Button>
      </div>
    </Card>
  );
};

export default Patient_Step5_Scale;
