import React, { useState, useEffect } from 'react';

interface LoaderScreenProps {
  onComplete: () => void;
}

const LoaderScreen: React.FC<LoaderScreenProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);
  const [screenShake, setScreenShake] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 200),      // L drops
      setTimeout(() => {
        setScreenShake(true);
        setTimeout(() => setScreenShake(false), 200);
      }, 800),
      setTimeout(() => setStage(2), 1000),     // L landed
      setTimeout(() => setStage(3), 1400),     // R drops
      setTimeout(() => {
        setScreenShake(true);
        setTimeout(() => setScreenShake(false), 200);
      }, 2000),
      setTimeout(() => setStage(4), 2200),     // R landed
      setTimeout(() => setStage(5), 2600),     // P drops
      setTimeout(() => {
        setScreenShake(true);
        setTimeout(() => setScreenShake(false), 200);
      }, 3200),
      setTimeout(() => setStage(6), 3400),     // P landed
      setTimeout(() => setStage(7), 3800),     // Merge to card
      setTimeout(() => setStage(8), 4400),     // Pulse
      setTimeout(() => setStage(9), 5000),     // Fade out
      setTimeout(onComplete, 5500)
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-white flex items-center justify-center overflow-hidden transition-transform duration-200 ${screenShake ? 'animate-shake' : ''}`}>
      {/* Dust particles on impact */}
      {(stage === 2 || stage === 4 || stage === 6) && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gray-400 rounded-full opacity-60"
              style={{
                left: stage === 2 ? '35%' : stage === 4 ? '50%' : '65%',
                top: '55%',
                animation: `dustParticle 0.6s ease-out forwards`,
                animationDelay: `${i * 0.05}s`,
                transform: `rotate(${i * 45}deg)`
              }}
            />
          ))}
        </div>
      )}

      <div className="relative w-full max-w-2xl mx-auto px-4">
        {stage < 7 ? (
          // Individual letters falling
          <div className="flex justify-center items-end gap-8 h-64">
            {/* Letter L */}
            <div className="relative flex flex-col items-center">
              <div
                className={`text-9xl font-black transition-all duration-500 ${
                  stage >= 1 ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  color: '#FF6B35',
                  transform: stage === 1 ? 'translateY(-400px)' : stage >= 2 ? 'translateY(0)' : 'translateY(-400px)',
                  transition: stage === 1 ? 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'none',
                  textShadow: stage >= 2 ? '0 8px 20px rgba(255, 107, 53, 0.3)' : 'none'
                }}
              >
                L
              </div>
              {/* Camera lens on L */}
              {stage >= 2 && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-gray-300 flex items-center justify-center shadow-lg animate-fade-in">
                    <div className={`w-3 h-3 rounded-full ${stage >= 2 ? 'bg-orange-500 animate-blink' : 'bg-gray-400'}`} />
                  </div>
                </div>
              )}
            </div>

            {/* Letter R */}
            {stage >= 3 && (
              <div className="relative">
                <div
                  className="text-6xl sm:text-7xl md:text-9xl font-black"
                  style={{
                    color: '#4A90E2',
                    transform: stage === 3 ? 'translateY(-400px)' : stage >= 4 ? 'translateY(0)' : 'translateY(-400px)',
                    transition: stage === 3 ? 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'none',
                    textShadow: stage >= 4 ? '0 8px 20px rgba(74, 144, 226, 0.3)' : 'none'
                  }}
                >
                  R
                </div>
              </div>
            )}

            {/* Letter P */}
            {stage >= 5 && (
              <div className="relative">
                <div
                  className="text-6xl sm:text-7xl md:text-9xl font-black"
                  style={{
                    color: '#50C878',
                    transform: stage === 5 ? 'translateY(-400px)' : stage >= 6 ? 'translateY(0)' : 'translateY(-400px)',
                    transition: stage === 5 ? 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'none',
                    textShadow: stage >= 6 ? '0 8px 20px rgba(80, 200, 120, 0.3)' : 'none'
                  }}
                >
                  P
                </div>
              </div>
            )}
          </div>
        ) : (
          // Merged card/logo
          <div className={`flex justify-center items-center transition-all duration-700 ${stage === 9 ? 'opacity-0 scale-110' : 'opacity-100'}`}>
            <div className={`relative bg-white rounded-3xl p-12 border-4 border-gray-200 shadow-2xl transition-all duration-500 ${stage >= 7 ? 'scale-100' : 'scale-0'}`}>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <span className="text-8xl font-black" style={{ color: '#FF6B35' }}>L</span>
                  {/* Camera with pulse */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className={`w-12 h-12 rounded-full bg-white border-4 border-gray-300 flex items-center justify-center shadow-lg ${stage >= 8 ? 'animate-pulse-ring' : ''}`}>
                      <div className={`w-3 h-3 rounded-full ${stage >= 8 ? 'bg-orange-500 animate-pulse-glow' : 'bg-orange-500'}`} />
                    </div>
                  </div>
                </div>
                <span className="text-8xl font-black" style={{ color: '#4A90E2' }}>R</span>
                <span className="text-8xl font-black" style={{ color: '#50C878' }}>P</span>
              </div>
              
              {/* Light sweep effect */}
              {stage >= 8 && (
                <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl">
                  <div className="w-20 sm:w-24 md:w-32 h-full bg-gradient-to-r from-transparent via-gray-200/50 to-transparent animate-sweep" />
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Subtitle */}
      {stage >= 7 && stage < 9 && (
        <div className="absolute bottom-16 sm:bottom-20 left-0 right-0 text-center px-4">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light animate-fade-in">
            Love Regality Productions
          </p>
        </div>
      )}

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        @keyframes dustParticle {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          100% {
            transform: translate(var(--tx, 40px), var(--ty, -40px)) scale(0);
            opacity: 0;
          }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(255, 107, 53, 0.8),
                        0 0 20px rgba(255, 107, 53, 0.6),
                        0 0 30px rgba(255, 107, 53, 0.4);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 107, 53, 1),
                        0 0 40px rgba(255, 107, 53, 0.8),
                        0 0 60px rgba(255, 107, 53, 0.6);
          }
        }
        @keyframes pulseRing {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 107, 53, 0.7);
          }
          70% {
            box-shadow: 0 0 0 20px rgba(255, 107, 53, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 107, 53, 0);
          }
        }
        @keyframes sweep {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(500%);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-shake {
          animation: shake 0.2s ease-in-out;
        }
        .animate-blink {
          animation: blink 1s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        .animate-pulse-ring {
          animation: pulseRing 2s ease-out infinite;
        }
        .animate-sweep {
          animation: sweep 1.5s ease-in-out;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .dustParticle:nth-child(1) { --tx: 40px; --ty: -40px; }
        .dustParticle:nth-child(2) { --tx: -40px; --ty: -40px; }
        .dustParticle:nth-child(3) { --tx: 40px; --ty: 40px; }
        .dustParticle:nth-child(4) { --tx: -40px; --ty: 40px; }
        .dustParticle:nth-child(5) { --tx: 60px; --ty: -20px; }
        .dustParticle:nth-child(6) { --tx: -60px; --ty: -20px; }
        .dustParticle:nth-child(7) { --tx: 20px; --ty: -60px; }
        .dustParticle:nth-child(8) { --tx: -20px; --ty: -60px; }
      `}</style>
    </div>
  );
};

export default LoaderScreen;
