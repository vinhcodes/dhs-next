export const LetterAvatar: React.FC<{ name: string }> = ({ name }) => {
    const letter = name.charAt(0).toUpperCase();
    
    // Generate consistent color based on name
    const colors = [
      'bg-blue-500',
      'bg-green-500', 
      'bg-purple-500',
      'bg-pink-500',
      'bg-indigo-500',
      'bg-red-500',
      'bg-yellow-500',
      'bg-teal-500'
    ];
    
    const colorIndex = name.charCodeAt(0) % colors.length;
    const bgColor = colors[colorIndex];
    
    return (
      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${bgColor} flex items-center justify-center text-white font-semibold text-sm md:text-base`}>
        {letter}
      </div>
    );
  };
