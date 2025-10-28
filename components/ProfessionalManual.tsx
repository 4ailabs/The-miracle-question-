import React from 'react';
import Card from './common/Card';

const ManualSection: React.FC<{ title: string; children: React.ReactNode; startOpen?: boolean }> = ({ title, children, startOpen = false }) => {
  const [isOpen, setIsOpen] = React.useState(startOpen);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-3 px-3 flex justify-between items-center hover:bg-slate-50 transition"
      >
        <h3 className="text-sm lg:text-base font-bold text-slate-800">{title}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 text-slate-600 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 px-3 animate-fade-in text-xs lg:text-sm text-slate-700 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};

const ProfessionalManual: React.FC = () => {
  return (
    <Card className="max-w-5xl mx-auto animate-fade-in">
      <div className="text-center mb-4">
        <h1 className="text-xl lg:text-2xl font-bold text-slate-800 mb-1">Manual Profesional Integrado</h1>
        <p className="text-xs lg:text-sm text-slate-600">
          Metodología SFBT + Neuroterapia Aplicada
        </p>
      </div>

      <div className="bg-slate-50 p-3 rounded mb-4 border-l-4 border-slate-600">
        <p className="text-xs lg:text-sm leading-relaxed">
          Este manual representa la síntesis de cuarenta años de investigación en Terapia Breve Centrada en Soluciones (SFBT), 
          integrada con hallazgos contemporáneos en neurobiología del cambio, neuroplasticidad y trauma. No es un libro teórico 
          sino una guía de aplicación clínica directa para terapeutas que trabajan con clientes en contextos reales.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden max-h-[70vh] overflow-y-auto">
        {/* Parte Uno */}
        <ManualSection title="PARTE UNO: Fundamento Teóricos y Neurobiología" startOpen={true}>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-slate-800 mb-2">La Historia Detrás del Milagro</h4>
              <p className="mb-3">
                Steve de Shazer e Insoo Kim Berg desarrollaron la Miracle Question en el Instituto de Investigación Familiar de 
                Milwaukee a mediados de los años ochenta. Surgió de un cliente alcohólico que dijo: "Quizás sólo un milagro podría salvarme". 
                De Shazer preguntó: "¿Y si ese milagro hubiera ocurrido mientras dormías anoche?". La pregunta cambió el curso de la sesión.
              </p>
              <p className="mb-3">
                La Pregunta del Milagro fue diseñada para bypasear la resistencia del cliente sin confrontarla directamente. 
                No dice "vamos a resolver tu problema". Dice "imagina que está resuelto". Esa diferencia es crítica.
              </p>
            </div>

            <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
              <h4 className="font-bold text-slate-800 mb-2">Premisas Fundamentales de SFBT:</h4>
              <ul className="space-y-2 text-xs">
                <li><strong>1. El cambio es inevitable.</strong> El cambio ocurre constantemente en los sistemas humanos.</li>
                <li><strong>2. El cliente es el experto.</strong> El terapeuta facilita que el cliente descubra las respuestas que ya tiene.</li>
                <li><strong>3. Pequeños cambios generan cambios mayores.</strong> No es necesario resolver el "problema raíz".</li>
                <li><strong>4. La solución no necesita estar conectada causalmente al problema.</strong></li>
                <li><strong>5. Dónde pones tu atención es donde crece tu energía.</strong></li>
              </ul>
            </div>

            <div className="bg-slate-50 p-3 rounded">
              <h4 className="font-bold text-slate-800 mb-2">Base Neurobiológica: Por Qué Funciona</h4>
              <p className="mb-2">
                Cuando un cliente está en un problema crónico, su amígdala está sobreactivada (sistema de detección de amenaza). 
                El cortex prefrontal, que controla planeamiento y visión de futuro, está en segundo plano.
              </p>
              <p className="mb-2">
                <strong>Mecanismos neurobiológicos:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li>La Miracle Question invita al cerebro a salir del modo amenaza y entrar en modo exploración</li>
                <li>Activa el prefrontal cortex y calma la amígdala</li>
                <li>La imaginación vívida crea las mismas vías neuronales que la experiencia real</li>
                <li>Reconsolidación de memoria: crea nuevas memorias de "yo como persona que puede estar diferente"</li>
                <li>Neuroplasticidad: fortalece circuitos de solución a través de la práctica repetida</li>
              </ul>
            </div>

            <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
              <h4 className="font-bold text-slate-800 mb-2">Diferencia con Otros Enfoques</h4>
              <p className="text-xs">
                La visualización positiva típica dice "imagina tu meta futura". La Miracle Question dice "imagina que tu problema específico 
                está resuelto y describe con exactitud qué observarías". La precisión es lo que causa el cambio neurobiológico.
              </p>
            </div>
          </div>
        </ManualSection>

        {/* Parte Dos */}
        <ManualSection title="PARTE DOS: El Protocolo de las Seis Fases">
          <div className="space-y-3">
            <div className="bg-slate-50 p-3 rounded">
              <h5 className="font-bold text-slate-800 mb-1">Fase Cero: El Setup</h5>
              <p className="text-xs mb-2">Componentes críticos:</p>
              <ul className="text-xs space-y-1 list-disc list-inside">
                <li>Apertura cálida que valida y cambia el foco</li>
                <li>Normalización: reducir vergüenza</li>
                <li>Evaluación de capacidad emocional</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-3 rounded">
              <h5 className="font-bold text-slate-800 mb-1">Fase Uno: La Presentación</h5>
              <p className="text-xs mb-2">Forma lenta, hipnótica y ceremoniosa. Velocidad reducida al 50%, tono descendente, espacios entre frases. 
              Pausa crítica de 5-10 segundos de silencio absoluto.</p>
              <p className="text-xs italic">
                "Imagina que esta noche, mientras duermes, ocurre un milagro. El problema exacto por el que viniste desaparece completamente..."
              </p>
            </div>

            <div className="bg-slate-50 p-3 rounded">
              <h5 className="font-bold text-slate-800 mb-1">Fase Dos: Exploración Sensorial</h5>
              <p className="text-xs mb-2">El terapeuta como director de cine. Explorar sistemáticamente:</p>
              <ul className="text-xs space-y-1 list-disc list-inside">
                <li>Visual: ¿Qué ves? ¿Dónde estás? ¿Qué colores?</li>
                <li>Auditivo: ¿Qué escuchas? ¿Cómo suena tu voz?</li>
                <li>Cinestésico: ¿Cómo está tu cuerpo? ¿Dónde sientes el cambio?</li>
                <li>Conductual: ¿Qué haces primero? Describe paso a paso</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-3 rounded">
              <h5 className="font-bold text-slate-800 mb-1">Fase Tres: Identificación de Excepciones</h5>
              <p className="text-xs italic">
                "De todo lo que acabas de describir, ¿hay algo pequeño, aunque sea el 5%, que ya está ocurriendo?"
              </p>
              <p className="text-xs mt-1">Transforma excepciones en evidencia de capacidad existente.</p>
            </div>

            <div className="bg-slate-50 p-3 rounded">
              <h5 className="font-bold text-slate-800 mb-1">Fase Cuatro: La Escala y la Acción</h5>
              <p className="text-xs mb-2">"¿Dónde estás ahora? ¿Por qué no estás en el 2? Para pasar del [número] al [número+1], ¿qué es lo más mínimo?"</p>
              <p className="text-xs">Anclar en identidad: "Cuando hagas esto, ¿quién eres tú?"</p>
            </div>

            <div className="bg-slate-50 p-3 rounded">
              <h5 className="font-bold text-slate-800 mb-1">Fase Cinco: Cierre y Consolidación</h5>
              <p className="text-xs mb-2">Resumen reflexivo, validación profunda, tarea creativa, y pregunta de cierre:</p>
              <p className="text-xs italic">"¿Cómo sabremos que algo pequeño pero importante cambió?"</p>
            </div>

            <div className="bg-slate-50 p-3 rounded">
              <h5 className="font-bold text-slate-800 mb-1">Fase Seis: El Seguimiento</h5>
              <p className="text-xs italic">"¿Qué estuvo MEJOR desde la última vez?"</p>
              <p className="text-xs mt-1">La presunción de mejora entrena al cerebro a buscar evidencia de cambio.</p>
            </div>
          </div>
        </ManualSection>

        {/* Parte Tres */}
        <ManualSection title="PARTE TRES: Adaptaciones Clínicas por Diagnóstico">
          <div className="space-y-3">
            <div className="border border-blue-200 rounded p-2 bg-blue-50">
              <h5 className="font-bold text-slate-800 mb-1">Cliente con Ansiedad Generalizada</h5>
              <p className="text-xs italic">"Imagina que tu mente descubre una manera de estar en calma. No desaparece completamente, pero está en background, no en urgencia."</p>
              <p className="text-xs mt-1">Enfatizar separación entre emoción y acción: "puedes estar nerviosa y hacer cosas de todas formas".</p>
            </div>

            <div className="border border-blue-200 rounded p-2 bg-blue-50">
              <h5 className="font-bold text-slate-800 mb-1">Cliente con Trauma</h5>
              <p className="text-xs italic">"Imagina que has integrado completamente lo que pasó. No lo olvidas pero encuentras paz. Mañana, viviendo desde ese lugar, ¿qué ves diferente?"</p>
              <p className="text-xs mt-1">Primero: estabilización. Segundo: seguridad. Tercero: relación. Cuarto: Miracle Question.</p>
            </div>

            <div className="border border-blue-200 rounded p-2 bg-blue-50">
              <h5 className="font-bold text-slate-800 mb-1">Cliente Deprimido</h5>
              <p className="text-xs italic">"Mañana despiertas. ¿Qué es UNA cosa que es diferente? Puede ser pequeña."</p>
              <p className="text-xs mt-1">Acceder a la necesidad real (energía) sin prometer "felicidad".</p>
            </div>

            <div className="border border-blue-200 rounded p-2 bg-blue-50">
              <h5 className="font-bold text-slate-800 mb-1">Cliente Escéptico</h5>
              <p className="text-xs">Frame científico primero: "la neurociencia muestra que cuando imaginas algo vívidamente, el cerebro crea las mismas redes neuronales."</p>
            </div>

            <div className="border border-blue-200 rounded p-2 bg-blue-50">
              <h5 className="font-bold text-slate-800 mb-1">Cliente Joven/Adolescente</h5>
              <p className="text-xs">Adaptar horizonte temporal a un mes. Acceder a lo que importa al adolescente (pares, reconocimiento).</p>
            </div>
          </div>
        </ManualSection>

        {/* Parte Cuatro */}
        <ManualSection title="PARTE CUATRO: Casos Prácticos">
          <div className="space-y-3">
            <div className="bg-slate-50 p-3 rounded">
              <h5 className="font-bold text-slate-800 mb-1">Caso 1: María, Agorafobia Severa</h5>
              <p className="text-xs mb-2">
                María, 34 años, housebound durante 10 años. Terapeuta identificó excepción: "el viaje a la playa con mi mamá". 
                Recurso: seguridad con mamá. Acción inicial: 20 minutos en sala con mamá. Escala: 2→7 en sesión 20. 
                <strong> No "conquistó su miedo" → descubrió seguridad.</strong>
              </p>
            </div>

            <div className="bg-slate-50 p-3 rounded">
              <h5 className="font-bold text-slate-800 mb-1">Caso 2: Carlos, Trauma y Estancamiento</h5>
              <p className="text-xs mb-2">
                Estancado en 6/10. Terapeuta preguntó: "¿quién eres si SABES que puedes caer y levantarte?" 
                Cambió de "controlar para no caer" a "sé que puedo levantarme". Escala: 6→7.
              </p>
            </div>

            <div className="bg-slate-50 p-3 rounded">
              <h5 className="font-bold text-slate-800 mb-1">Caso 3: Laura, Escépticismo Racional</h5>
              <p className="text-xs mb-2">
                Ingeniera, no respondía a Miracle Question clásica. Terapeuta tradujo a lenguaje neurocientífico. 
                Enmarcó como experimento. Respondió bien cuando método fue traducido a su sistema de creencias.
              </p>
            </div>
          </div>
        </ManualSection>

        {/* Parte Cinco */}
        <ManualSection title="PARTE CINCO: Troubleshooting">
          <div className="space-y-3">
            <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded">
              <h5 className="font-bold text-slate-800 mb-1">Cliente No Puede Imaginar</h5>
              <p className="text-xs">Si disociación: acceder a modalidades no visuales. Si depresión: simplificar radicalmente. Si resistencia: despersonalizar.</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded">
              <h5 className="font-bold text-slate-800 mb-1">Cliente Dice "Todo Volvió Atrás"</h5>
              <p className="text-xs">Preguntar: "¿Qué NO volvió atrás?" Casi siempre 30-50% se mantiene. Reencuadrar: "mantuviste la mitad, ahora reforzamos".</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded">
              <h5 className="font-bold text-slate-800 mb-1">Cliente Muy Autocrítico</h5>
              <p className="text-xs">"Si tu mejor amiga hiciera exactamente lo que tú hiciste, ¿qué le dirías? ¿Por qué tú mereces menos generosidad?"</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded">
              <h5 className="font-bold text-slate-800 mb-1">Cliente Tiene Insight Pero No Actúa</h5>
              <p className="text-xs">Explorar obstáculo específico: miedo, pereza, incertidumbre. Reencuadrar "fallo" como información, no terminal.</p>
            </div>
          </div>
        </ManualSection>

        {/* Parte Seis */}
        <ManualSection title="PARTE SEIS: Matriz de Decisión">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded">
            <h5 className="font-bold text-slate-800 mb-2">Contraindicaciones:</h5>
            <ul className="text-xs space-y-1 list-disc list-inside">
              <li>Crisis aguda, ideación suicida activa</li>
              <li>Psicosis activa sin estabilización</li>
              <li>Disociación severa sin relación establecida</li>
              <li>Abuso activo sin seguridad</li>
              <li>Adicción activa sin estabilización</li>
            </ul>
            <p className="text-xs mt-2 font-semibold">Primero estabilización → Segundo seguridad → Tercero relación → Cuarto SFBT</p>
          </div>
        </ManualSection>

        {/* Parte Siete */}
        <ManualSection title="PARTE SIETE: Protocolo Post-Sesión">
          <div className="space-y-2 text-xs">
            <div className="bg-slate-50 p-2 rounded">
              <h5 className="font-bold text-slate-800 mb-1">Inmediatamente Después:</h5>
              <p>Notas en 2 minutos: escala inicial, escala cierre, insights, recursos, acción comprometida, señales de cambio.</p>
            </div>
            <div className="bg-slate-50 p-2 rounded">
              <h5 className="font-bold text-slate-800 mb-1">Sesión Siguiente:</h5>
              <p className="italic">"¿QUÉ ESTUVO MEJOR?" Presume mejora. Entrena cerebro a buscar lo mejorado.</p>
            </div>
            <div className="bg-slate-50 p-2 rounded">
              <h5 className="font-bold text-slate-800 mb-1">Evaluación Cada 3-4 Sesiones:</h5>
              <p>Escala comparativa, síntomas, comportamientos, identidad, relaciones. Cambio real es multidominio.</p>
            </div>
          </div>
        </ManualSection>

        {/* Parte Ocho */}
        <ManualSection title="PARTE OCHO: Frases y Scripts Naturales">
          <div className="space-y-3">
            <div className="bg-green-50 p-2 rounded border-l-4 border-green-400">
              <h5 className="font-bold text-slate-800 mb-1">Apertura:</h5>
              <p className="text-xs italic">
                "Sé que has pasado por [situación]. Eso requiere mucha energía. ¿Hay algo, aunque sea pequeño, que haya sido diferente positivamente?"
              </p>
            </div>

            <div className="bg-green-50 p-2 rounded border-l-4 border-green-400">
              <h5 className="font-bold text-slate-800 mb-1">Normalización:</h5>
              <p className="text-xs italic">
                "Lo que describes es una respuesta completamente normal. Tu cuerpo y mente están reaccionando lógicamente, no defectuosamente."
              </p>
            </div>

            <div className="bg-green-50 p-2 rounded border-l-4 border-green-400">
              <h5 className="font-bold text-slate-800 mb-1">Profundización:</h5>
              <p className="text-xs">
                "¿Qué ves exactamente? Pinta la imagen para mí... ¿Qué escuchas? ¿Cómo está tu cuerpo? ¿Dónde sientes el cambio?"
              </p>
            </div>

            <div className="bg-green-50 p-2 rounded border-l-4 border-green-400">
              <h5 className="font-bold text-slate-800 mb-1">Para Resistencia:</h5>
              <p className="text-xs italic">
                "Quizá, pero ¿qué sería diferente si sí funcionara? Solo por un momento, ¿qué sería?"
              </p>
            </div>
          </div>
        </ManualSection>

        {/* Parte Nueve */}
        <ManualSection title="PARTE NUEVE: Script Completo de Sesión">
          <div className="bg-blue-50 p-3 rounded">
            <p className="text-xs mb-2"><strong>Cliente Ansioso - Sesión Inicial</strong></p>
            <p className="text-xs mb-2">
              [0-5 min: Rapport] Terapeuta valida sufrimiento y busca excepciones: "¿hay algo pequeño que haya sido diferente?"
            </p>
            <p className="text-xs mb-2">
              [5-8 min: Presentación] Presenta Miracle Question lentamente, pausa 10 segundos
            </p>
            <p className="text-xs mb-2">
              [8-28 min: Profundización] Explora cada modalidad sensorial, identifica excepciones
            </p>
            <p className="text-xs mb-2">
              [28-38 min: Acción] Escala, "¿por qué no en 2?", próxima acción mínima, anclar en identidad
            </p>
            <p className="text-xs">
              [38-43 min: Cierre] Resumen, validación, pregunta de cierre: "¿cómo sabremos que algo cambió?"
            </p>
          </div>
        </ManualSection>

        {/* Conclusión */}
        <ManualSection title="Conclusión: El Arte y la Ciencia del Cambio">
          <div className="bg-slate-50 p-3 rounded">
            <p className="text-xs mb-2">
              La Miracle Question no es magia. Es neuroterapia inteligentemente aplicada. El cerebro es plástico. Los recursos ya existen. 
              Pequeños pasos generan cambios en cascada.
            </p>
            <p className="text-xs mb-2">
              El papel del terapeuta es facilitar, escuchar palabras de solución, hacer preguntas que entrenan al cerebro a buscar excepciones, 
              ser testigo del cambio que el cliente produce.
            </p>
            <p className="text-xs italic">
              "No presume que el problema reside en déficit. Presume que reside en acceso. El cliente ansioso no es 'deficiente en calma'. 
              El cliente tiene capacidades. El sistema de terapia simplemente las hace disponibles."
            </p>
          </div>
        </ManualSection>
      </div>

      <div className="mt-4 text-center text-xs text-slate-500">
        <p>Manual Profesional Integrado - SFBT + Neuroterapia Aplicada</p>
      </div>
    </Card>
  );
};

export default ProfessionalManual;
