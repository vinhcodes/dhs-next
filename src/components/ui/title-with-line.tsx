import React from 'react'

interface TitleWithLineProps {
  titleText: string;
  className?: string;
  alignment?: 'left' | 'center' | 'right';
  lineColor?: string;
}

const TitleWithLine: React.FC<TitleWithLineProps> = ({ 
  titleText, 
  className = "",
  alignment = 'center',
  lineColor = 'bg-blue-600'
}) => {
  
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const lineAlignmentClasses = {
    left: 'mx-0',
    center: 'mx-auto', 
    right: 'ml-auto mr-0'
  };

  return (
    <div className={`${alignmentClasses[alignment]} space-y-4`}>
      <h2 className={`font-bold text-gray-900 leading-tight ${className}`}>
        {titleText}
      </h2>
      <div className={`w-16 h-1 ${lineColor} ${lineAlignmentClasses[alignment]} rounded-full`}></div>
    </div>
  );
};

export default TitleWithLine;