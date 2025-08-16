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

// Reusable ProcessCard Component
const ProcessCard: React.FC<ProcessCardProps> = ({ steps, className = "" }) => {
  return (
    <ul className={`flex flex-col gap-4 px-4 text-gray-900 ${className}`}>
      {steps.map((step) => (
        <li 
          key={step.id} 
          className="bg-gradient-to-r from-slate-50/90 to-transparent rounded-md p-4 space-y-2"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold leading-tight flex gap-2">
            <span className='bg-orange-400 flex justify-center w-10 h-full rounded-full text-slate-100'>{step.id}</span> {step.title}
          </h3>
          
          <p className="pl-6 text-xl italic font-normal text-orange-500">
            "{step.subtitle}"
          </p>
          
          <ul className="pl-8 font-light leading-relaxed tracking-tight text-2xl">
            <span className="font-semibold">{step.label}:</span>
            {step.items.map((item, index) => (
              <li key={index} className="list-disc marker:text-orange-500">
                {item}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default ProcessCard;