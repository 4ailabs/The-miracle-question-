import React, { useState, useEffect } from 'react';
import type { SessionData } from './types';
import Step0_Welcome from './components/Step0_Welcome';
import Button from './components/common/Button';

// Therapist components
import Step1_Setup from './components/Step1_Setup';
import Step2_Personal from './components/Step2_Personal';
import Step3_Relational from './components/Step3_Relational';
import Step4_Exceptions from './components/Step4_Exceptions';
import Step5_Scale from './components/Step5_Scale';
import Step6_Summary from './components/Step6_Summary';

// Patient components
import Patient_Step1_Setup from './components/patient/Patient_Step1_Setup';
import Patient_Step2_Personal from './components/patient/Patient_Step2_Personal';
import Patient_Step3_Relational from './components/patient/Patient_Step3_Relational';
import Patient_Step4_Exceptions from './components/patient/Patient_Step4_Exceptions';
import Patient_Step5_Scale from './components/patient/Patient_Step5_Scale';
import Patient_Step6_Summary from './components/patient/Patient_Step6_Summary';


import ProgressBar from './components/ProgressBar';
import Recommendations from './components/Recommendations';

const TOTAL_STEPS = 7;
const THERAPIST_STEP_NAMES = [
    'Bienvenida',
    'Fase 1: Preparación',
    'Fase 2: Desc. Personal',
    'Fase 3: Desc. Relacional',
    'Fase 4: Excepciones',
    'Fase 5: Escala',
    'Fase 6: Resumen',
];

const PATIENT_STEP_NAMES = [
    'Bienvenida',
    'Paso 1: La Invitación',
    'Paso 2: Mi Día Milagroso',
    'Paso 3: Quién lo Notaría',
    'Paso 4: El Milagro ya Ocurrió',
    'Paso 5: La Escala',
    'Paso 6: Mi Resumen',
];


const initialData: SessionData = {
  problem: '',
  personalDiscoveryNotes: '',
  relationalDiscoveryNotes: '',
  exceptionNotes: '',
  progressScale: 3,
  halfPointStepNotes: '',
};

type View = 'guide' | 'recommendations';
type Mode = 'therapist' | 'patient';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [sessionData, setSessionData] = useState<SessionData>(initialData);
  const [view, setView] = useState<View>('guide');
  const [mode, setMode] = useState<Mode | null>(null);

  // Cargar estado guardado del localStorage al iniciar
  useEffect(() => {
    try {
      const savedData = localStorage.getItem('miracle-question-data');
      const savedStep = localStorage.getItem('miracle-question-step');
      const savedMode = localStorage.getItem('miracle-question-mode');
      const savedView = localStorage.getItem('miracle-question-view');

      if (savedData && savedStep) {
        const parsedData = JSON.parse(savedData);
        setSessionData(parsedData);
        setCurrentStep(parseInt(savedStep));
        if (savedMode) setMode(savedMode as Mode);
        if (savedView) setView(savedView as View);
      }
    } catch (error) {
      console.error('Error loading from localStorage:', error);
      // Limpiar localStorage corrupto
      localStorage.removeItem('miracle-question-data');
      localStorage.removeItem('miracle-question-step');
      localStorage.removeItem('miracle-question-mode');
      localStorage.removeItem('miracle-question-view');
    }
  }, []);

  // Guardar estado en localStorage cada vez que cambie
  useEffect(() => {
    try {
      localStorage.setItem('miracle-question-data', JSON.stringify(sessionData));
      localStorage.setItem('miracle-question-step', currentStep.toString());
      if (mode) localStorage.setItem('miracle-question-mode', mode);
      if (view) localStorage.setItem('miracle-question-view', view);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [sessionData, currentStep, mode, view]);

  const handleNext = (data: Partial<SessionData> = {}) => {
    setSessionData(prev => ({ ...prev, ...data }));
    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep(prev => prev + 1);
    }
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
    window.scrollTo(0, 0);
  };

  const handleStart = (problem: string, selectedMode: Mode) => {
    setSessionData(prev => ({ ...initialData, problem }));
    setMode(selectedMode);
    setCurrentStep(1);
    window.scrollTo(0, 0);
  };
  
  const handleRestart = () => {
    setSessionData(initialData);
    setMode(null);
    setCurrentStep(0);
    setView('guide');
    // Limpiar localStorage
    localStorage.removeItem('miracle-question-data');
    localStorage.removeItem('miracle-question-step');
    localStorage.removeItem('miracle-question-mode');
    localStorage.removeItem('miracle-question-view');
    window.scrollTo(0, 0);
  };

  const handleGoHome = () => {
    if (confirm('¿Estás seguro de que quieres volver al inicio? Se perderá el progreso actual.')) {
      handleRestart();
    }
  };

  const renderTherapistStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1_Setup problem={sessionData.problem} onNext={handleNext} />;
      case 2:
        return <Step2_Personal 
                  initialData={sessionData.personalDiscoveryNotes} 
                  onNext={(notes) => handleNext({ personalDiscoveryNotes: notes })} 
                  onBack={handleBack} />;
      case 3:
        return <Step3_Relational 
                  initialData={sessionData.relationalDiscoveryNotes}
                  onNext={(notes) => handleNext({ relationalDiscoveryNotes: notes })} 
                  onBack={handleBack} />;
      case 4:
        return <Step4_Exceptions 
                  initialData={sessionData.exceptionNotes}
                  onNext={(notes) => handleNext({ exceptionNotes: notes })} 
                  onBack={handleBack} />;
      case 5:
        return <Step5_Scale 
                  initialData={{ progressScale: sessionData.progressScale, halfPointStepNotes: sessionData.halfPointStepNotes }}
                  onNext={(data) => handleNext(data)} 
                  onBack={handleBack} />;
      case 6:
        return <Step6_Summary data={sessionData} onRestart={handleRestart} />;
      default:
        return <Step0_Welcome onStart={handleStart} />;
    }
  };

  const renderPatientStep = () => {
    switch (currentStep) {
      case 1:
        return <Patient_Step1_Setup problem={sessionData.problem} onNext={handleNext} />;
      case 2:
        return <Patient_Step2_Personal
                  initialData={sessionData.personalDiscoveryNotes} 
                  onNext={(notes) => handleNext({ personalDiscoveryNotes: notes })} 
                  onBack={handleBack} />;
      case 3:
        return <Patient_Step3_Relational
                  initialData={sessionData.relationalDiscoveryNotes}
                  onNext={(notes) => handleNext({ relationalDiscoveryNotes: notes })} 
                  onBack={handleBack} />;
      case 4:
        return <Patient_Step4_Exceptions
                  initialData={sessionData.exceptionNotes}
                  onNext={(notes) => handleNext({ exceptionNotes: notes })} 
                  onBack={handleBack} />;
      case 5:
        return <Patient_Step5_Scale
                  initialData={{ progressScale: sessionData.progressScale, halfPointStepNotes: sessionData.halfPointStepNotes }}
                  onNext={(data) => handleNext(data)} 
                  onBack={handleBack} />;
      case 6:
        return <Patient_Step6_Summary data={sessionData} onRestart={handleRestart} />;
      default:
        return <Step0_Welcome onStart={handleStart} />;
    }
  };

  const renderStep = () => {
    if(currentStep === 0) return <Step0_Welcome onStart={handleStart} />;
    if(mode === 'therapist') return renderTherapistStep();
    if(mode === 'patient') return renderPatientStep();
    return <Step0_Welcome onStart={handleStart} />;
  }

  const TabButton: React.FC<{ currentView: View, targetView: View, setView: (view: View) => void, children: React.ReactNode }> = ({ currentView, targetView, setView, children }) => {
    const isActive = currentView === targetView;
    return (
      <button 
        onClick={() => setView(targetView)} 
        className={`w-1/2 py-3 px-5 text-sm font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-1 ${isActive ? 'bg-gradient-to-r from-slate-600 to-slate-700 text-white shadow-lg transform scale-105' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
      >
        {children}
      </button>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center py-3 sm:py-4 lg:py-6 px-3 sm:px-4 font-sans bg-gradient-to-br from-slate-50 via-slate-50/95 to-slate-100/95">
      <header className="w-full max-w-5xl mb-3 sm:mb-4 lg:mb-6">
          {/* Botón Volver al Inicio */}
          {currentStep > 0 && (
            <div className="mb-3 flex justify-start">
              <Button onClick={handleGoHome} variant="secondary" className="text-xs py-2 px-3">
                Volver al Inicio
              </Button>
            </div>
          )}
          {mode === 'therapist' && (
            <div className="flex justify-center bg-white/80 backdrop-blur-sm p-1 rounded-xl max-w-md mx-auto shadow-md border border-slate-200/50">
              <TabButton currentView={view} targetView='guide' setView={setView}>Guía de Sesión</TabButton>
              <TabButton currentView={view} targetView='recommendations' setView={setView}>Recursos Clínicos</TabButton>
            </div>
          )}
      </header>
      <main className="w-full max-w-4xl flex-1">
        {view === 'guide' || mode === 'patient' ? (
          <>
            {currentStep > 0 && currentStep < TOTAL_STEPS - 1 && (
              <ProgressBar 
                currentStep={currentStep} 
                totalSteps={TOTAL_STEPS - 1} 
                stepNames={mode === 'therapist' ? THERAPIST_STEP_NAMES : PATIENT_STEP_NAMES} 
              />
            )}
            {renderStep()}
          </>
        ) : (
          <Recommendations />
        )}
      </main>
      <footer className="text-center mt-6 text-slate-500 text-sm max-w-3xl mx-auto py-2">
        <p className="font-medium mb-1">Basado en la Terapia Breve Centrada en Soluciones de Steve de Shazer & Insoo Kim Berg.</p>
        <p className="text-xs">Esta es una herramienta de apoyo y no reemplaza el juicio clínico profesional.</p>
      </footer>
    </div>
  );
}

export default App;
