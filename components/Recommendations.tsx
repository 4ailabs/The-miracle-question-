import React from 'react';
import Card from './common/Card';
import Accordion from './common/Accordion';

const InfoBlock: React.FC<{ title: string, children: React.ReactNode, type?: 'good' | 'bad' }> = ({ title, children, type }) => (
    <div>
        <h4 className={`font-bold ${type === 'good' ? 'text-green-700' : type === 'bad' ? 'text-red-700' : 'text-slate-800'}`}>{title}</h4>
        <div className="text-sm pl-2">{children}</div>
    </div>
);

const Recommendations: React.FC = () => {
  return (
    <Card className="max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-2">Recursos Clínicos</h1>
        <p className="text-slate-600 text-lg">Una guía de referencia rápida para La Pregunta del Milagro.</p>
      </div>

      <div className="space-y-2">
        <Accordion title="Fundamentos Teóricos" startOpen={true}>
          <InfoBlock title="Origen y Filosofía">
            <p>Desarrollada por Steve de Shazer en los años 80, es una técnica central de la Terapia Breve Centrada en Soluciones (SFBT). No es una simple pregunta, sino un proceso conversacional completo.</p>
          </InfoBlock>
          <InfoBlock title="Premisa Fundamental">
            <p>Diseñada para desviar la conversación del problema hacia la solución, permitiendo al cliente construir su futuro deseado, identificar recursos y generar metas concretas.</p>
          </InfoBlock>
          <InfoBlock title="Principios Psicológicos Clave">
             <ul className="list-disc list-outside pl-5 space-y-1">
                <li><strong>Orientación al futuro:</strong> Bypasea el análisis exhaustivo del problema.</li>
                <li><strong>Construccionismo social:</strong> El cliente construye activamente su realidad preferida.</li>
                <li><strong>Búsqueda de excepciones:</strong> Identifica momentos en que el problema estuvo ausente o fue menor.</li>
            </ul>
          </InfoBlock>
           <InfoBlock title="Indicado Para:" type="good">
             <ul className="list-disc list-outside pl-5 space-y-1">
                <li>Primera sesión terapéutica.</li>
                <li>Clientes con metas difusas o poco claras.</li>
                <li>Estancamiento en el proceso terapéutico.</li>
                <li>Ansiedad, depresión, problemas relacionales.</li>
                <li>Coaching y desarrollo personal.</li>
            </ul>
          </InfoBlock>
           <InfoBlock title="Contraindicado Para:" type="bad">
             <ul className="list-disc list-outside pl-5 space-y-1">
                <li>Crisis de seguridad inmediata (ideación suicida, violencia).</li>
                <li>Psicosis activa sin estabilización.</li>
                <li>Duelo agudo reciente (primeras 48-72 horas).</li>
                <li>Emergencias médicas.</li>
            </ul>
          </InfoBlock>
        </Accordion>
        
        <Accordion title="Habilidades Esenciales del Terapeuta">
           <ul className="list-disc list-outside pl-5 space-y-2">
                <li><strong>Escucha Profunda:</strong> Atención plena a las palabras exactas del cliente. Escuchar lo que NO se dice.</li>
                <li><strong>Manejo del Silencio:</strong> Tolerar silencios largos sin ansiedad. Reconocerlo como espacio terapéutico.</li>
                <li><strong>Curiosidad Genuina:</strong> Postura de "no saber". Preguntas abiertas genuinas. Asombro ante los recursos del cliente.</li>
                <li><strong>Orientación a Soluciones:</strong> Redirigir de problemas a soluciones. Búsqueda constante de excepciones.</li>
                <li><strong>Validación:</strong> Normalizar experiencias. Reconocer esfuerzos. Celebrar pequeños avances.</li>
            </ul>
        </Accordion>
        
        <Accordion title="Manejo de Respuestas Complejas">
            <InfoBlock title='Señal: Cliente que NO PUEDE imaginar el milagro ("No sé", "Es imposible")'>
                <p><strong>Intervenciones:</strong></p>
                <ul className="list-decimal list-outside pl-5 text-xs">
                    <li><strong>Normalización:</strong> "Es normal que esto sea difícil. Requiere imaginación."</li>
                    <li><strong>Modificación:</strong> "No tiene que ser un milagro completo. ¿Qué sería un poco mejor?"</li>
                    <li><strong>Concretización:</strong> "Imagina que mañana las cosas están 10% mejor. ¿Qué notarías?"</li>
                    <li><strong>Perspectiva Externa:</strong> "Si tu mejor amigo tuviera este problema, ¿qué notarías diferente en él?"</li>
                </ul>
            </InfoBlock>
            <InfoBlock title='Señal: Cliente que describe un milagro "IMPOSIBLE" ("Ganaría la lotería")'>
                 <p><strong>Intervenciones:</strong></p>
                 <ul className="list-decimal list-outside pl-5 text-xs">
                    <li><strong>Silencio Terapéutico:</strong> Esperar. Frecuentemente se auto-corrigen.</li>
                    <li><strong>Validación + Redirección:</strong> "Entiendo que eso sería maravilloso. Y si eso no pudiera pasar, pero el problema se resolviera de otra forma más alcanzable, ¿cómo sería?"</li>
                    <li><strong>Elementos Alcanzables:</strong> "¿Qué parte de eso SÍ está bajo tu control?"</li>
                </ul>
            </InfoBlock>
            <InfoBlock title='Señal: Cliente que se enfoca en CAMBIOS DE OTROS ("Mi esposo dejaría de beber")'>
                <p><strong>Intervenciones (Redirección a Agencia Propia):</strong></p>
                 <ul className="list-disc list-outside pl-5 text-xs">
                    <li>"Y cuando tu esposo deje de beber, ¿qué estarás haciendo TÚ diferente?"</li>
                    <li>"Si tu jefe fuera más justo, ¿cómo responderías tú?"</li>
                    <li>"¿Qué parte de esto puedes influenciar?"</li>
                </ul>
            </InfoBlock>
        </Accordion>
        
        <Accordion title="Errores Comunes y Soluciones">
           <InfoBlock title='Error 1: Interrumpir el silencio prematuramente.'>
                <p><strong>Consecuencia:</strong> Impide el procesamiento profundo.</p>
                <p><strong>Solución:</strong> Contar mentalmente hasta 15 antes de hablar. Confiar en el proceso.</p>
           </InfoBlock>
            <InfoBlock title='Error 2: Aceptar respuestas vagas sin concretizar.'>
                <p><strong>Consecuencia:</strong> Se pierde la oportunidad de claridad.</p>
                <p><strong>Solución:</strong> Siempre concretizar: "¿Cómo notarías que te sientes mejor? ¿Qué estarías haciendo?"</p>
           </InfoBlock>
            <InfoBlock title='Error 3: Olvidar la Fase 6 en sesiones subsecuentes.'>
                <p><strong>Consecuencia:</strong> Se pierde el enfoque en soluciones, se vuelve al análisis de problemas.</p>
                <p><strong>Solución:</strong> SIEMPRE empezar la sesión 2+ con "¿Qué está mejor?"</p>
           </InfoBlock>
            <InfoBlock title='Error 4: No identificar ninguna excepción.'>
                <p><strong>Consecuencia:</strong> El cliente se queda con la sensación de que nunca hay momentos buenos.</p>
                <p><strong>Solución:</strong> Persistir: "¿Alguna vez fue 5% mejor? ¿Un momento? ¿Un pensamiento diferente?"</p>
           </InfoBlock>
        </Accordion>
      </div>
    </Card>
  );
};

export default Recommendations;
