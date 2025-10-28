import React, { useState } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';

interface PatientStep4ExceptionsProps {
  initialData: string;
  onNext: (notes: string) => void;
  onBack: () => void;
}

const Patient_Step4_Exceptions: React.FC<PatientStep4ExceptionsProps> = ({ initialData, onNext, onBack }) => {
  const [moment1When, setMoment1When] = useState('');
  const [moment1Different, setMoment1Different] = useState('');
  const [moment1Doing, setMoment1Doing] = useState('');
  const [moment1Feeling, setMoment1Feeling] = useState('');
  const [moment2When, setMoment2When] = useState('');
  const [moment2Different, setMoment2Different] = useState('');
  const [moment2Doing, setMoment2Doing] = useState('');
  const [moment2Feeling, setMoment2Feeling] = useState('');

  const handleNext = () => {
    const combinedNotes = `
MOMENTO 1 - La vez más reciente donde las cosas estuvieron mejor:
¿Cuándo fue? ${moment1When}
¿Qué tenía diferente ese momento? ${moment1Different}
¿Qué estabas haciendo de manera diferente? ${moment1Doing}
¿Cómo te sentías? ${moment1Feeling}

MOMENTO 2 - Otro momento donde las cosas estuvieron mejor:
¿Cuándo fue? ${moment2When}
¿Qué tenía diferente ese momento? ${moment2Different}
¿Qué estabas haciendo de manera diferente? ${moment2Doing}
¿Cómo te sentías? ${moment2Feeling}
    `.trim();
    onNext(combinedNotes);
  };

  return (
    <Card className="max-w-6xl mx-auto animate-fade-in">
       <div className="text-center mb-4">
            <h2 className="text-xl lg:text-2xl font-bold text-slate-800 mb-2">Paso 4: Buscando Tus Recursos</h2>
            <p className="text-sm lg:text-base text-slate-600">Piensa en momentos recientes donde las cosas fueron algo parecido a tu día del milagro. Cualquier pequeño momento cuenta.</p>
        </div>
      <div className="space-y-6">
        {/* Momento 1 */}
        <div className="bg-slate-50 p-4 rounded-lg">
          <h3 className="text-base font-bold text-slate-800 mb-3">Momento 1 - La vez más reciente:</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                ¿Cuándo fue? (día/hora aproximada):
              </label>
              <textarea
                value={moment1When}
                onChange={(e) => setMoment1When(e.target.value)}
                placeholder="Ej: El martes pasado, hace 3 días..."
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition text-sm"
                rows={2}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                ¿Qué tenía diferente ese momento?
              </label>
              <textarea
                value={moment1Different}
                onChange={(e) => setMoment1Different(e.target.value)}
                placeholder="¿Qué era diferente? ¿Quién estaba ahí?"
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition text-sm"
                rows={2}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                ¿Qué estabas haciendo de manera diferente?
              </label>
              <textarea
                value={moment1Doing}
                onChange={(e) => setMoment1Doing(e.target.value)}
                placeholder="¿Qué hacías que era diferente? ¿Qué NO hacías que normalmente sí haces?"
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition text-sm"
                rows={2}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                ¿Cómo te sentías?
              </label>
              <textarea
                value={moment1Feeling}
                onChange={(e) => setMoment1Feeling(e.target.value)}
                placeholder="¿Cómo te sentías en ese momento?"
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition text-sm"
                rows={2}
              />
            </div>
          </div>
        </div>

        {/* Momento 2 */}
        <div className="bg-slate-50 p-4 rounded-lg">
          <h3 className="text-base font-bold text-slate-800 mb-3">Momento 2 - Otro momento donde las cosas estuvieron mejor:</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                ¿Cuándo fue? (día/hora aproximada):
              </label>
              <textarea
                value={moment2When}
                onChange={(e) => setMoment2When(e.target.value)}
                placeholder="Ej: La semana pasada, hace un mes..."
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition text-sm"
                rows={2}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                ¿Qué tenía diferente ese momento?
              </label>
              <textarea
                value={moment2Different}
                onChange={(e) => setMoment2Different(e.target.value)}
                placeholder="¿Qué era diferente? ¿Quién estaba ahí?"
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition text-sm"
                rows={2}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                ¿Qué estabas haciendo de manera diferente?
              </label>
              <textarea
                value={moment2Doing}
                onChange={(e) => setMoment2Doing(e.target.value)}
                placeholder="¿Qué hacías que era diferente? ¿Qué NO hacías que normalmente sí haces?"
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition text-sm"
                rows={2}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                ¿Cómo te sentías?
              </label>
              <textarea
                value={moment2Feeling}
                onChange={(e) => setMoment2Feeling(e.target.value)}
                placeholder="¿Cómo te sentías en ese momento?"
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition text-sm"
                rows={2}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2 sm:gap-0">
        <Button onClick={onBack} variant="secondary" className="px-4 py-2.5 text-sm w-full sm:w-auto">Atrás</Button>
        <Button onClick={handleNext} disabled={!moment1When || !moment1Different || !moment1Feeling} className="px-4 py-2.5 text-sm w-full sm:w-auto">
          Siguiente
        </Button>
      </div>
    </Card>
  );
};

export default Patient_Step4_Exceptions;
