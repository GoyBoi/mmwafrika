import React from 'react';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb.jsx';

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
      <Breadcrumb>
        <BreadcrumbList>
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <BreadcrumbItem>
                {step.id < currentStep ? (
                  <BreadcrumbLink 
                    href={step.path} 
                    onClick={(e) => {
                      e.preventDefault();
                      if (onStepChange) onStepChange(step.id);
                    }}
                    className="text-amber-600 hover:text-amber-700"
                  >
                    {step.label}
                  </BreadcrumbLink>
                ) : step.id === currentStep ? (
                  <BreadcrumbPage className="font-semibold text-gray-900">
                    {step.label}
                  </BreadcrumbPage>
                ) : (
                  <span className="text-gray-400">
                    {step.label}
                  </span>
                )}
              </BreadcrumbItem>
              {index < steps.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      
      {/* Progress bar for mobile */}
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