import { Play, Pause, ChevronDown } from 'lucide-react';

interface HeroProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export default function Hero({ isPlaying, onTogglePlay }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/50 to-[#0a0a0a]" />

      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-[#c8973a]/10 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs tracking-[0.25em] uppercase text-white/70">98.3 FM — La Radio des Aventuriers</span>
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-2 leading-none">
          <span className="text-white">Radio</span>
          <span className="text-[#c8973a]"> Zigomar</span>
        </h1>

        {/* Arabic subtitle */}
        <p
          className="text-2xl md:text-3xl text-white/50 mt-4 mb-3 font-light tracking-wider"
          dir="rtl"
          lang="ar"
        >
          راديو الزَيڨومار
        </p>

        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light">
          Café-radio franco-arabe — musique éclectique, chroniques incarnées et humour élégant pour les esprits libres.
        </p>

        {/* Play button */}
        <button
          onClick={onTogglePlay}
          className={`group relative inline-flex items-center gap-4 px-10 py-5 rounded-full text-base font-semibold tracking-widest uppercase transition-all duration-500 ${
            isPlaying
              ? 'bg-red-500/20 text-red-300 border border-red-500/40 hover:bg-red-500/30'
              : 'bg-[#c8973a] text-[#0a0a0a] hover:bg-[#e8b84b] shadow-2xl shadow-[#c8973a]/30 hover:shadow-[#c8973a]/50 hover:scale-105'
          }`}
        >
          {isPlaying ? (
            <>
              <Pause className="w-5 h-5" />
              Pause
            </>
          ) : (
            <>
              <Play className="w-5 h-5 fill-current" />
              Ecouter en direct
            </>
          )}
        </button>

        {/* Now playing indicator */}
        {isPlaying && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="flex items-end gap-0.5 h-5">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-1 bg-[#c8973a] rounded-full"
                  style={{
                    height: `${20 + Math.random() * 60}%`,
                    animation: `equalizer ${0.5 + i * 0.1}s ease-in-out infinite alternate`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
            <span className="text-white/50 text-sm tracking-widest uppercase">En direct</span>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <a
        href="#live"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </a>

      <style>{`
        @keyframes equalizer {
          from { transform: scaleY(0.3); }
          to { transform: scaleY(1); }
        }
      `}</style>
    </section>
  );
}
