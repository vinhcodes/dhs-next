import React from 'react';

// TypeScript interfaces
export interface ProcessStep {
  id: number;
  title: string;
  subtitle: string;
  label: string;
  items: string[];
}

interface ProcessCardProps {
  steps: ProcessStep[];
  className?: string;
}

// Modern ProcessCard Component
const ProcessCard: React.FC<ProcessCardProps> = ({ steps, className = "" }) => {
  return (
    <div className={`space-y-8 ${className}`}>
      {steps.map((step, index) => (
        <div 
          key={step.id} 
          className="group relative"
        >
          {/* Connecting Line (except for last item) */}
          {index < steps.length - 1 && (
            <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-200 -z-10"></div>
          )}
          
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 relative">
            {/* Step Number */}
            <div className="flex items-start gap-6">
              <div className="h-6 w-6 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 group-hover:bg-blue-700 transition-colors">
                {step.id}
              </div>
              
              <div className="flex-1 min-w-0">
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                  {step.title}
                </h3>
                
                {/* Subtitle */}
                <p className="text-blue-600 font-medium italic mb-6 text-lg">
                  "{step.subtitle}"
                </p>
                
                {/* Label and Items */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 text-base">
                    {step.label}:
                  </h4>
                  
                  <ul className="grid gap-3">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessCard;