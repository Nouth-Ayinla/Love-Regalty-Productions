import React, { useState, useEffect } from 'react';

interface LoaderScreenProps {
  onComplete: () => void;
}

const LoaderScreen: React.FC<LoaderScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    // Animation sequence
    const stage1Timer = setTimeout(() => setAnimationStage(1), 100);
    const stage2Timer = setTimeout(() => setAnimationStage(2), 600);
    const stage3Timer = setTimeout(() => setAnimationStage(3), 1200);
    const stage4Timer = setTimeout(() => setAnimationStage(4), 1800);

    // Complete animation timing
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300);
    }, 3500);

    return () => {
      clearTimeout(stage1Timer);
      clearTimeout(stage2Timer);
      clearTimeout(stage3Timer);
      clearTimeout(stage4Timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatUp ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              transform: 'translateZ(0)'
            }}
          />
        ))}
      </div>

      {/* Colorful gradient border - Fixed CSS conflict */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-orange-500 to-green-500 animate-[gradientShift_8s_ease-in-out_infinite]">
        <div className="absolute inset-4 bg-background rounded-lg"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4 md:p-8">
        <div className="text-center w-full max-w-6xl mx-auto px-4">
          {/* Main Text with enhanced animation */}
          <div className="mb-6 md:mb-12 flex flex-col items-center">
            <div className={`${animationStage >= 1 ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 bg-clip-text text-transparent">
                Hello.
              </span>
            </div>
            
            <div className={`mt-4 ${animationStage >= 2 ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.1s' }}>
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-foreground">
                We're
              </span>
            </div>
          </div>
          
          <div className="mb-6 md:mb-12">
            <div className={`${animationStage >= 3 ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.2s' }}>
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 bg-clip-text text-transparent">
                Love Regality
              </span>
            </div>
          </div>
          
          <div>
            <div className={`${animationStage >= 4 ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.3s' }}>
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-foreground">
                Productions
              </span>
            </div>
            <div className={`inline-block ${animationStage >= 4 ? 'animate-ping-slow' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-orange-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                .
              </span>
            </div>
          </div>
          
          {/* Animated Dots similar to Index page */}
          <div className={`flex justify-center mt-10 md:mt-16 ${animationStage >= 4 ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="flex space-x-3 md:space-x-4 p-4 md:p-6 rounded-full bg-background/20 backdrop-blur-sm border border-border/20">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                  style={{
                    animation: `pulse 1.5s infinite`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Subtitle */}
          <div className={`mt-8 md:mt-12 transition-all duration-1000 delay-1000 ease-out ${animationStage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
              Crafting exceptional visual stories
            </p>
          </div>
        </div>
      </div>

      {/* Add custom animation styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0.7;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes pingSlow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-ping-slow {
          animation: pingSlow 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default LoaderScreen;