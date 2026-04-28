import { Play, Pause, Volume2, VolumeX, Radio } from 'lucide-react';

interface LivePlayerProps {
  isPlaying: boolean;
  volume: number;
  onTogglePlay: () => void;
  onVolumeChange: (v: number) => void;
}

export default function LivePlayer({ isPlaying, volume, onTogglePlay, onVolumeChange }: LivePlayerProps) {
  return (
    <section id="live" className="bg-[#111] border-y border-white/5 py-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Station info */}
          <div className="flex items-center gap-5 flex-1">
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c8973a] to-[#a06b20] flex items-center justify-center shadow-xl shadow-[#c8973a]/20">
                <Radio className="w-7 h-7 text-white" />
              </div>
              {isPlaying && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-[#111]" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                {isPlaying && (
                  <span className="text-xs bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded-full tracking-widest uppercase">
                    Live
                  </span>
                )}
                <span className="text-xs text-white/30 tracking-widest uppercase">98.3 FM</span>
              </div>
              <p className="font-bold text-white text-lg tracking-wide">Radio Zigomar</p>
              <p className="text-white/50 text-sm">La Matinale avec Dali — 06h-09h</p>
            </div>
          </div>

          {/* Waveform visual */}
          {isPlaying && (
            <div className="flex items-end gap-0.5 h-10 flex-shrink-0">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 bg-[#c8973a]/60 rounded-full"
                  style={{
                    height: `${25 + Math.sin(i * 0.8) * 60}%`,
                    animation: `wave ${0.6 + (i % 5) * 0.15}s ease-in-out infinite alternate`,
                    animationDelay: `${i * 0.05}s`,
                  }}
                />
              ))}
            </div>
          )}

          {/* Controls */}
          <div className="flex items-center gap-6">
            {/* Volume */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => onVolumeChange(volume === 0 ? 0.8 : 0)}
                className="text-white/40 hover:text-white/80 transition-colors"
              >
                {volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => onVolumeChange(Number(e.target.value))}
                className="w-24 accent-[#c8973a] cursor-pointer"
              />
            </div>

            {/* Play */}
            <button
              onClick={onTogglePlay}
              className={`w-14 h-14 rounded-full flex items-center justify-center font-semibold transition-all duration-300 flex-shrink-0 ${
                isPlaying
                  ? 'bg-red-500/20 text-red-400 border border-red-500/40 hover:bg-red-500/30'
                  : 'bg-[#c8973a] text-[#0a0a0a] hover:bg-[#e8b84b] shadow-lg shadow-[#c8973a]/30 hover:scale-105'
              }`}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes wave {
          from { transform: scaleY(0.4); }
          to { transform: scaleY(1); }
        }
      `}</style>
    </section>
  );
}
