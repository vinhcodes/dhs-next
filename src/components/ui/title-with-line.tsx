import React from 'react'

interface TitleWithLineProps {
  titleText: string;
  className?: string;
}

const TitleWithLine: React.FC<TitleWithLineProps> = ({ titleText, className = "" }) => {
  return (
    <div className="relative text-start text-orange-400">
      <h2 className={`${className} relative inline-block pl-[3em]
                      before:content-[''] before:absolute before:block
                      before:left-0 before:top-[0.6em]
                      before:w-[2em] before:h-[0.12em] before:bg-orange-400`}>
        {titleText}
      </h2>
    </div>
  );
};

export default TitleWithLine;