import React from 'react';

const CheckoutProgress = ({ currentStep, onStepChange }) => {
  const steps = [
    { id: 0, label: 'Cart', path: '/cart' },
    { id: 1, label: 'Shipping', path: '/checkout' },
    { id: 2, label: 'Payment', path: '/checkout' },
    { id: 3, label: 'Review', path: '/checkout' },
    { id: 4, label: 'Complete', path: '/checkout' }
  ];

  return (
    <div className="mb-8">
      {/* Desktop progress indicator */}
      <div className="hidden md:flex justify-between mb-4">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step.id < currentStep 
                  ? 'bg-green-600 text-white' 
                  : step.id === currentStep 
                    ? 'bg-amber-600 text-white border-2 border-amber-600' 
                    : 'bg-gray-200 text-gray-500'
              }`}
            >
              {step.id < currentStep ? '✓' : step.id + 1}
            </div>
            <span 
              className={`ml-2 text-sm font-medium ${
                step.id <= currentStep ? 'text-gray-900' : 'text-gray-400'
              }`}
            >
              {step.label}
            </span>
            {index < steps.length - 1 && (
              <div 
                className={`w-16 h-0.5 mx-2 ${
                  step.id < currentStep ? 'bg-green-600' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>
      
      {/* Mobile progress bar */}
      <div className="mt-4 md:hidden">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-amber-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>Start</span>
          <span>Complete</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProgress;