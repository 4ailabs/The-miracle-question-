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
      <div className="flex justify-between mb-2 text-sm font-medium text-slate-600">
        <span className="font-bold">{stepNames[currentStep] || 'Inicio'}</span>
        <span>Fase {currentStep} de {totalSteps - 1}</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
