import React, { useState } from 'react';
import type { SessionData } from './types';
import Step0_Welcome from './components/Step0_Welcome';

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
    window.scrollTo(0, 0);
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
        className={`w-1/2 py-2 px-4 text-sm font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-200 ${isActive ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:bg-slate-300'}`}
      >
        {children}
      </button>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 font-sans">
      <header className="w-full max-w-5xl mb-6">
          {mode === 'therapist' && (
            <div className="flex justify-center bg-slate-200 p-1 rounded-lg max-w-sm mx-auto">
              <TabButton currentView={view} targetView='guide' setView={setView}>Guía de Sesión</TabButton>
              <TabButton currentView={view} targetView='recommendations' setView={setView}>Recursos Clínicos</TabButton>
            </div>
          )}
          {mode === 'patient' && (
            <div className="text-center">
              <h1 className="text-2xl font-bold text-slate-700">Tu Viaje Personal</h1>
            </div>
          )}
      </header>
      <main className="w-full max-w-5xl">
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
      <footer className="text-center mt-8 text-slate-500 text-sm">
        <p>Basado en la Terapia Breve Centrada en Soluciones de Steve de Shazer & Insoo Kim Berg.</p>
        <p>Esta es una herramienta de apoyo y no reemplaza el juicio clínico profesional.</p>
      </footer>
    </div>
  );
}

export default App;
