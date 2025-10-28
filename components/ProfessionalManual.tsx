import React from 'react';
import Card from './common/Card';

const ManualSection: React.FC<{ title: string; children: React.ReactNode; startOpen?: boolean }> = ({ title, children, startOpen = false }) => {
  const [isOpen, setIsOpen] = React.useState(startOpen);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 px-4 flex justify-between items-center hover:bg-slate-50 transition"
      >
        <h3 className="text-base lg:text-lg font-bold text-slate-800">{title}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-slate-600 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 px-4 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
};

const ProfessionalManual: React.FC = () => {
  return (
    <Card className="max-w-5xl mx-auto animate-fade-in">
      <div className="text-center mb-6">
        <h1 className="text-xl lg:text-2xl font-bold text-slate-800 mb-2">Manual Profesional Integrado</h1>
        <p className="text-sm lg:text-base text-slate-600">
          Metodología SFBT + Neuroterapia Aplicada
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
        <ManualSection title="Fundamentos Teóricos y Neurobiología" startOpen={true}>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              Este manual representa la síntesis de cuarenta años de investigación en Terapia Breve Centrada en Soluciones (SFBT), 
              integrada con hallazgos contemporáneos en neurobiología del cambio, neuroplasticidad y trauma.
            </p>
            <p>
              La Pregunta del Milagro fue desarrollada por Steve de Shazer e Insoo Kim Berg. Surgió de un cliente alcohólico que dijo: 
              "Quizás sólo un milagro podría salvarme". De Shazer preguntó: "¿Y si ese milagro hubiera ocurrido mientras dormías anoche?".
            </p>
            <div className="bg-slate-50 border-l-4 border-slate-600 p-4 rounded my-4">
              <p className="font-semibold text-slate-800 mb-2">¿Por qué funciona?</p>
              <p className="text-sm">
                La Miracle Question accede a recursos que el cliente no sabía que tenía. Cambia el foco del cerebro de la amenaza 
                a la solución. Activa la capacidad de imaginar, que es precisamente lo que muchos problemas crónicos han atrofiado.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-bold text-slate-800 mb-2">Premisas Fundamentales de SFBT:</h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>El cambio es inevitable.</strong> El cambio ocurre constantemente en los sistemas humanos.</li>
                <li>• <strong>El cliente es el experto.</strong> El terapeuta facilita que el cliente descubra las respuestas que ya tiene.</li>
                <li>• <strong>Pequeños cambios generan cambios mayores.</strong> No es necesario resolver el "problema raíz".</li>
                <li>• <strong>La solución no necesita estar conectada causalmente al problema.</strong></li>
                <li>• <strong>Dónde pones tu atención es donde crece tu energía.</strong></li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h4 className="font-bold text-slate-800 mb-2">Base Neurobiológica:</h4>
              <p className="text-sm mb-2">Cuando un cliente está en un problema crónico:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Su amígdala está sobreactivada (sistema de amenaza)</li>
                <li>La Miracle Question invita al cerebro a salir del modo amenaza</li>
                <li>Activa el prefrontal cortex (planeamiento y visión de futuro)</li>
                <li>Calma la amígdala y reduce cortisol</li>
              </ul>
            </div>
          </div>
        </ManualSection>

        <ManualSection title="El Protocolo de las Seis Fases">
          <div className="space-y-3">
            <div className="bg-slate-50 p-3 rounded text-sm">
              <h5 className="font-bold text-slate-800 mb-1">Fase Cero: El Setup</h5>
              <p className="text-xs">Crear seguridad, establecer relación, y evaluar readiness. Normalización y evaluación de capacidad emocional.</p>
            </div>
            <div className="bg-slate-50 p-3 rounded text-sm">
              <h5 className="font-bold text-slate-800 mb-1">Fase Uno: La Presentación</h5>
              <p className="text-xs">Forma lenta, hipnótica y ceremoniosa de presentar la pregunta. Pausas estratégicas.</p>
            </div>
            <div className="bg-slate-50 p-3 rounded text-sm">
              <h5 className="font-bold text-slate-800 mb-1">Fase Dos: Exploración Sensorial</h5>
              <p className="text-xs">Explorar visual, auditivo, cinestésico y conductual. El terapeuta como director de cine.</p>
            </div>
            <div className="bg-slate-50 p-3 rounded text-sm">
              <h5 className="font-bold text-slate-800 mb-1">Fase Tres: Excepciones y Recursos</h5>
              <p className="text-xs">"¿Hay algo pequeño que ya está ocurriendo?" Identificar capacidad existente.</p>
            </div>
            <div className="bg-slate-50 p-3 rounded text-sm">
              <h5 className="font-bold text-slate-800 mb-1">Fase Cuatro: La Escala y la Acción</h5>
              <p className="text-xs">¿Dónde estás ahora? ¿Por qué no en el 2? ¿Qué necesitaría pasar para subir medio punto?</p>
            </div>
            <div className="bg-slate-50 p-3 rounded text-sm">
              <h5 className="font-bold text-slate-800 mb-1">Fase Cinco: Cierre y Consolidación</h5>
              <p className="text-xs">Resumen reflexivo, validación profunda, y tarea creativa que surge de la sesión.</p>
            </div>
            <div className="bg-slate-50 p-3 rounded text-sm">
              <h5 className="font-bold text-slate-800 mb-1">Fase Seis: El Seguimiento</h5>
              <p className="text-xs">"¿Qué estuvo MEJOR?" La presunción de mejora entrena al cerebro a buscar evidencia de cambio.</p>
            </div>
          </div>
        </ManualSection>

        <ManualSection title="Adaptaciones por Diagnóstico">
          <div className="space-y-3">
            <div className="border border-slate-200 rounded p-3 bg-slate-50">
              <h5 className="font-bold text-slate-800 mb-1 text-sm">Ansiedad Generalizada</h5>
              <p className="italic text-xs text-slate-600">"Imagina que tu mente descubre una manera de estar en calma. No desaparece completamente, pero está en background."</p>
            </div>
            <div className="border border-slate-200 rounded p-3 bg-slate-50">
              <h5 className="font-bold text-slate-800 mb-1 text-sm">Trauma</h5>
              <p className="italic text-xs text-slate-600">"Imagina que has integrado completamente lo que pasó. No lo olvidas pero encuentras paz."</p>
            </div>
            <div className="border border-slate-200 rounded p-3 bg-slate-50">
              <h5 className="font-bold text-slate-800 mb-1 text-sm">Depresión</h5>
              <p className="italic text-xs text-slate-600">"Mañana despiertas con un poco más de energía. Solo un poco. ¿Qué haces diferente?"</p>
            </div>
          </div>
        </ManualSection>

        <ManualSection title="Contraindicaciones">
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
            <ul className="list-disc list-inside space-y-1 text-sm text-slate-800">
              <li>Crisis de seguridad inmediata (ideación suicida, violencia)</li>
              <li>Psicosis activa sin estabilización</li>
              <li>Duelo agudo reciente (primeras 48-72 horas)</li>
              <li>Cliente severamente disociado sin relación de confianza</li>
            </ul>
          </div>
        </ManualSection>

        <ManualSection title="Frases y Scripts Naturales">
          <div className="space-y-4">
            <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded text-sm">
              <p className="font-semibold mb-2">Para respuestas vagas:</p>
              <p className="italic text-xs text-slate-700">"Mejor, ¿cómo exactamente? ¿Cómo se vería eso en tu vida real, concretamente?"</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded text-sm">
              <p className="font-semibold mb-2">Para identificar excepciones:</p>
              <p className="italic text-xs text-slate-700">"De todo lo que acabas de describir, ¿hay algo pequeño que ya está pasando?"</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded text-sm">
              <p className="font-semibold mb-2">Para la escala:</p>
              <p className="italic text-xs text-slate-700">"Para moverte del [número] al [número+1], ¿qué es lo más mínimo que podría ocurrir?"</p>
            </div>
          </div>
        </ManualSection>
      </div>

      <div className="mt-6 text-center text-xs text-slate-500">
        <p>Manual Profesional Integrado - SFBT + Neuroterapia Aplicada</p>
      </div>
    </Card>
  );
};

export default ProfessionalManual;

