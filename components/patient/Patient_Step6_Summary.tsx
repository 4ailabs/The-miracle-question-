import React, { useState } from 'react';
import type { SessionData } from '../../types';
import Card from '../common/Card';
import Button from '../common/Button';

interface PatientStep6SummaryProps {
  data: SessionData;
  onRestart: () => void;
}

const SummaryItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-slate-50 p-4 rounded-lg shadow-sm">
    <h3 className="text-sm font-semibold text-blue-700 mb-2 uppercase tracking-wider">{title}</h3>
    <div className="text-slate-800 whitespace-pre-wrap font-serif">{children || <span className="text-slate-400 italic">No escribiste nada en esta sección.</span>}</div>
  </div>
);


const Patient_Step6_Summary: React.FC<PatientStep6SummaryProps> = ({ data, onRestart }) => {
  const [copyStatus, setCopyStatus] = useState('Copiar al Portapapeles');

  const generateSummaryText = () => {
    return `
RESUMEN: LA PREGUNTA DEL MILAGRO
=================================

EL PROBLEMA EN EL QUE ME ENFOQUÉ:
${data.problem}

ASÍ SERÍA MI DÍA MILAGROSO:
${data.personalDiscoveryNotes}

ASÍ NOTARÍAN LOS DEMÁS EL CAMBIO:
${data.relationalDiscoveryNotes}

DESTELLOS DEL MILAGRO QUE YA EXISTEN EN MI VIDA:
${data.exceptionNotes}

MI PROGRESO Y PRÓXIMO PASO:
- Mi Nivel Actual: ${data.progressScale} / 10
- Mi Próximo Pequeño Paso: ${data.halfPointStepNotes}
    `.trim();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateSummaryText()).then(() => {
      setCopyStatus('¡Copiado!');
      setTimeout(() => setCopyStatus('Copiar al Portapapeles'), 2000);
    }, () => {
      setCopyStatus('Error al copiar');
    });
  };

  const handleDownloadTxt = () => {
    const content = generateSummaryText();
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mi-pregunta-del-milagro.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadJson = () => {
    const content = {
      problema: data.problem,
      diaMilagroso: data.personalDiscoveryNotes,
      perspectivaDemas: data.relationalDiscoveryNotes,
      excepciones: data.exceptionNotes,
      progreso: data.progressScale,
      proximoPaso: data.halfPointStepNotes,
      fecha: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mi-pregunta-del-milagro.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="max-w-3xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-3xl font-bold text-slate-800 mt-4">Resumen</h2>
        <p className="text-slate-600 mt-2">¡Felicidades por completar este ejercicio! Aquí tienes un resumen de tus reflexiones. Guárdalo para recordarte tus fortalezas y tu camino a seguir.</p>
      </div>

      <div className="space-y-6">
        <SummaryItem title="Problema Enfocado">{data.problem}</SummaryItem>
        <SummaryItem title="Mi Día Milagroso">{data.personalDiscoveryNotes}</SummaryItem>
        <SummaryItem title="La Perspectiva de los Demás">{data.relationalDiscoveryNotes}</SummaryItem>
        <SummaryItem title="Mis Fortalezas en Acción (Excepciones)">{data.exceptionNotes}</SummaryItem>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-4 rounded-lg text-center shadow-sm">
                <h3 className="text-sm font-semibold text-blue-700 mb-2 uppercase tracking-wider">Mi Progreso Hoy</h3>
                <p className="text-5xl font-bold text-blue-600">{data.progressScale}<span className="text-2xl text-slate-400">/10</span></p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-sm font-semibold text-blue-700 mb-2 uppercase tracking-wider">Mi Próximo Pequeño Paso</h3>
                <p className="text-slate-800 font-medium font-serif">{data.halfPointStepNotes}</p>
            </div>
        </div>
      </div>
       
      <div className="mt-8 bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
          <h3 className="font-bold text-amber-800">Un Recordatorio para Ti</h3>
          <p className="text-amber-700 mt-2 text-sm">Este ejercicio muestra que ya posees los recursos para crear el cambio que deseas. Concéntrate en ese próximo pequeño paso.</p>
          <p className="font-semibold italic text-amber-900 mt-2 text-center text-lg">El progreso, no la perfección, es la meta.</p>
      </div>

      <div className="mt-8 space-y-4">
        <div className="bg-slate-50 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-slate-700 mb-3 text-center">Exportar Mi Resumen</h3>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Button onClick={handleDownloadTxt} variant="secondary" className="px-4 py-2.5 text-sm w-full sm:w-auto">
              📄 Descargar como TXT
            </Button>
            <Button onClick={handleDownloadJson} variant="secondary" className="px-4 py-2.5 text-sm w-full sm:w-auto">
              📋 Descargar como JSON
            </Button>
            <Button onClick={handleCopy} className="px-4 py-2.5 text-sm w-full sm:w-auto">
              {copyStatus}
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Button onClick={onRestart} variant="secondary" className="px-6 py-3 text-base">
            Iniciar Nueva Reflexión
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Patient_Step6_Summary;
