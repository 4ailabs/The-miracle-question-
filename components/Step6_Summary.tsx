import React, { useState } from 'react';
import type { SessionData } from '../types';
import Card from './common/Card';
import Button from './common/Button';

interface Step6SummaryProps {
  data: SessionData;
  onRestart: () => void;
}

const SummaryItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-slate-50 p-4 rounded-lg shadow-sm">
    <h3 className="text-sm font-semibold text-blue-700 mb-2 uppercase tracking-wider">{title}</h3>
    <div className="text-slate-800 whitespace-pre-wrap font-serif">{children || <span className="text-slate-400 italic">No se tomaron notas para esta sección.</span>}</div>
  </div>
);


const Step6_Summary: React.FC<Step6SummaryProps> = ({ data, onRestart }) => {
  const [copyStatus, setCopyStatus] = useState('Copiar al Portapapeles');

  const generateSummaryText = () => {
    return `
RESUMEN DE SESIÓN: LA PREGUNTA DEL MILAGRO
=========================================

PROBLEMA PRESENTADO:
${data.problem}

FASE 2: DESCUBRIMIENTO PERSONAL (EL DÍA MILAGROSO)
${data.personalDiscoveryNotes}

FASE 3: DESCUBRIMIENTO RELACIONAL (PERSPECTIVA EXTERNA)
${data.relationalDiscoveryNotes}

FASE 4: BÚSQUEDA DE EXCEPCIONES (EL MILAGRO YA SUCEDIÓ)
${data.exceptionNotes}

FASE 5: ESCALA DE PROGRESO
- Nivel Actual: ${data.progressScale} / 10
- Próximo Medio Punto: ${data.halfPointStepNotes}
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
    a.download = `resumen-sesion-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadJson = () => {
    const content = {
      problema: data.problem,
      descubrimientoPersonal: data.personalDiscoveryNotes,
      descubrimientoRelacional: data.relationalDiscoveryNotes,
      excepciones: data.exceptionNotes,
      progreso: data.progressScale,
      proximoMedioPunto: data.halfPointStepNotes,
      fecha: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `resumen-sesion-${new Date().toISOString().split('T')[0]}.json`;
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
        <h2 className="text-3xl font-bold text-slate-800 mt-4">Resumen de la Sesión</h2>
        <p className="text-slate-600 mt-2">Aquí tienes un resumen de las notas de la sesión. Puedes copiarlo para tus registros clínicos.</p>
      </div>

      <div className="space-y-6">
        <SummaryItem title="Problema Presentado">{data.problem}</SummaryItem>
        <SummaryItem title="El Día Milagroso (Descubrimiento Personal)">{data.personalDiscoveryNotes}</SummaryItem>
        <SummaryItem title="Perspectiva Externa (Descubrimiento Relacional)">{data.relationalDiscoveryNotes}</SummaryItem>
        <SummaryItem title="Una Vez que el Milagro ya Sucedió (Excepción)">{data.exceptionNotes}</SummaryItem>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-4 rounded-lg text-center shadow-sm">
                <h3 className="text-sm font-semibold text-blue-700 mb-2 uppercase tracking-wider">Progreso Actual</h3>
                <p className="text-5xl font-bold text-blue-600">{data.progressScale}<span className="text-2xl text-slate-400">/10</span></p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-sm font-semibold text-blue-700 mb-2 uppercase tracking-wider">Próximo Pequeño Paso (+0.5)</h3>
                <p className="text-slate-800 font-medium font-serif">{data.halfPointStepNotes}</p>
            </div>
        </div>
      </div>
       
      <div className="mt-8 bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
          <h3 className="font-bold text-amber-800">Para la Próxima Sesión</h3>
          <p className="text-amber-700 mt-2 text-sm">Recuerda la advertencia de Steve de Shazer: es crucial comenzar las sesiones subsecuentes con la pregunta:</p>
          <p className="font-semibold italic text-amber-900 mt-2 text-center text-lg">"Entonces, ¿qué está MEJOR?"</p>
          <p className="text-amber-700 mt-1 text-xs">Esto presupone la mejora, orienta la atención a lo que funciona y refuerza el enfoque en soluciones.</p>
      </div>

      <div className="mt-8 space-y-4">
        <div className="bg-slate-50 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-slate-700 mb-3 text-center">Exportar Resumen de Sesión</h3>
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
            Iniciar Nueva Sesión
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Step6_Summary;
