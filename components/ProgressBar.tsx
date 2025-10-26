import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepNames: string[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps, stepNames }) => {
  const progressPercentage = currentStep > 0 ? ((currentStep) / (totalSteps - 1)) * 100 : 0;

  return (
    <div className="w-full mb-8 animate-fade-in">
      <div className="flex justify-between mb-3 text-sm font-medium">
        <span className="font-bold text-slate-800 text-lg">{stepNames[currentStep] || 'Inicio'}</span>
        <span className="text-slate-600 bg-slate-100 px-3 py-1 rounded-full">Fase {currentStep} de {totalSteps - 1}</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3 shadow-inner">
        <div 
          className="bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 h-3 rounded-full transition-all duration-700 ease-out shadow-lg" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
