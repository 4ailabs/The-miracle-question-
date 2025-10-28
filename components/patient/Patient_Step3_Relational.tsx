import React, { useState } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';

interface PatientStep3RelationalProps {
  initialData: string;
  onNext: (notes: string) => void;
  onBack: () => void;
}

const Patient_Step3_Relational: React.FC<PatientStep3RelationalProps> = ({ initialData, onNext, onBack }) => {
  const [friend, setFriend] = useState('');
  const [family, setFamily] = useState('');
  const [work, setWork] = useState('');
  const [others, setOthers] = useState('');

  const handleNext = () => {
    const combinedNotes = `
Tu mejor amigo/a notaría:
${friend}

Tu familia notaría:
${family}

Tus compañeros de trabajo/escuela notarían:
${work}

Otras personas importantes notarían:
${others}
    `.trim();
    onNext(combinedNotes);
  };

  return (
    <Card className="max-w-6xl mx-auto animate-fade-in">
       <div className="text-center mb-4">
            <h2 className="text-xl lg:text-2xl font-bold text-slate-800 mb-2">Paso 3: ¿Cómo Te Verían los Demás?</h2>
            <p className="text-sm lg:text-base text-slate-600">Sin que les digas nada, ¿qué notarían diferente en ti?</p>
        </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Tu mejor amigo/a notaría:
          </label>
          <textarea
            value={friend}
            onChange={(e) => setFriend(e.target.value)}
            placeholder="¿Qué verían diferente? ¿Tu tono de voz? ¿Tu sonrisa? ¿Tu postura?"
            className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition text-sm"
            rows={2}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Tu familia notaría:
          </label>
          <textarea
            value={family}
            onChange={(e) => setFamily(e.target.value)}
            placeholder="¿Qué notarían tus familiares en ti? ¿Cómo interactuarías diferente?"
            className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition text-sm"
            rows={2}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Tus compañeros de trabajo/escuela notarían:
          </label>
          <textarea
            value={work}
            onChange={(e) => setWork(e.target.value)}
            placeholder="¿Qué verían en tu forma de trabajar, comunicarte, o participar?"
            className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition text-sm"
            rows={2}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Otras personas importantes notarían:
          </label>
          <textarea
            value={others}
            onChange={(e) => setOthers(e.target.value)}
            placeholder="¿Hay alguien más que notaría el cambio en ti?"
            className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition text-sm"
            rows={2}
          />
        </div>
      </div>
      
      <div className="mt-4 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2 sm:gap-0">
        <Button onClick={onBack} variant="secondary" className="px-4 py-2.5 text-sm w-full sm:w-auto">Atrás</Button>
        <Button onClick={handleNext} disabled={!friend || !family || !work} className="px-4 py-2.5 text-sm w-full sm:w-auto">
          Siguiente
        </Button>
      </div>
    </Card>
  );
};

export default Patient_Step3_Relational;
