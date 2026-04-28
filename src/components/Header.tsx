import { useState, useEffect } from 'react';
import { Radio, Play, Pause, Menu, X } from 'lucide-react';

interface HeaderProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

const navLinks = [
  { label: 'EN DIRECT', href: '#live' },
  { label: 'PROGRAMMES', href: '#schedule' },
  { label: 'À PROPOS', href: '#about' },
  { label: 'ACTUALITÉS', href: '#news' },
];

export default function Header({ isPlaying, onTogglePlay }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c8973a] to-[#e8b84b] flex items-center justify-center shadow-lg shadow-[#c8973a]/30 group-hover:shadow-[#c8973a]/50 transition-shadow">
              <Radio className="w-5 h-5 text-[#0a0a0a]" />
            </div>
            {isPlaying && (
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-[#0a0a0a]" />
            )}
          </div>
          <div>
            <span className="font-bold text-white tracking-widest text-sm uppercase">Radio</span>
            <span className="font-bold text-[#c8973a] tracking-widest text-sm uppercase ml-1">Zigomar</span>
            <div className="text-[10px] text-white/40 tracking-[0.2em] uppercase">98.3 FM</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-widest text-white/60 hover:text-[#c8973a] transition-colors duration-200 uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Play button */}
        <div className="flex items-center gap-4">
          <button
            onClick={onTogglePlay}
            className={`hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-xs tracking-widest uppercase font-semibold transition-all duration-300 ${
              isPlaying
                ? 'bg-red-500/20 text-red-400 border border-red-500/40 hover:bg-red-500/30'
                : 'bg-[#c8973a] text-[#0a0a0a] hover:bg-[#e8b84b] shadow-lg shadow-[#c8973a]/20'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                En direct
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                Ecouter
              </>
            )}
          </button>

          {/* Mobile menu */}
          <button
            className="md:hidden text-white/70 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111]/98 backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm tracking-widest text-white/70 hover:text-[#c8973a] transition-colors uppercase"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { onTogglePlay(); setMenuOpen(false); }}
            className={`mt-2 flex items-center gap-2 px-5 py-3 rounded-full text-xs tracking-widest uppercase font-semibold justify-center transition-all ${
              isPlaying
                ? 'bg-red-500/20 text-red-400 border border-red-500/40'
                : 'bg-[#c8973a] text-[#0a0a0a]'
            }`}
          >
            {isPlaying ? <><Pause className="w-3.5 h-3.5" /> En direct</> : <><Play className="w-3.5 h-3.5 fill-current" /> Ecouter</>}
          </button>
        </div>
      )}
    </header>
  );
}
