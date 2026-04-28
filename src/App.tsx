import { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LivePlayer from './components/LivePlayer';
import Schedule from './components/Schedule';
import About from './components/About';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = volume;
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.src = '';
    } else {
      audioRef.current.src = 'https://stream.zeno.fm/ljjignydycktv';
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolume = (v: number) => {
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <Header isPlaying={isPlaying} onTogglePlay={togglePlay} />
      <Hero isPlaying={isPlaying} onTogglePlay={togglePlay} />
      <LivePlayer
        isPlaying={isPlaying}
        volume={volume}
        onTogglePlay={togglePlay}
        onVolumeChange={handleVolume}
      />
      <Schedule />
      <About />
      <NewsSection />
      <Footer />
    </div>
  );
}
