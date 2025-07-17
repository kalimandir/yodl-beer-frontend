import { useEffect, useState } from 'react';

interface CheeersAnimationProps {
  onComplete?: () => void;
}

export default function CheeersAnimation({ onComplete }: CheeersAnimationProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start animation after a brief delay
    const startTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 100);

    // Complete animation after 2.5 seconds
    const completeTimer = setTimeout(() => {
      onComplete?.();
    }, 2500);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className='fixed inset-0 z-50 bg-white flex items-center justify-center'>
      <div className='relative w-80 h-60 flex items-center justify-center'>
        {/* Left beer glass */}
        <img 
          src='/beer-left.png' 
          alt='Beer glass left'
          className={`absolute w-24 h-32 transition-transform duration-1000 ease-out ${
            isAnimating ? 'translate-x-8 -rotate-12' : '-translate-x-12'
          }`}
        />
        
        {/* Right beer glass */}
        <img 
          src='/beer-right.png' 
          alt='Beer glass right'
          className={`absolute w-24 h-32 transition-transform duration-1000 ease-out ${
            isAnimating ? '-translate-x-8 rotate-12' : 'translate-x-12'
          }`}
        />
      </div>
    </div>
  );
} 