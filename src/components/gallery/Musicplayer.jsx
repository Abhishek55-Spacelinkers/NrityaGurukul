"use client";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null); // ✅ keep null, not 0

  useEffect(() => {
    if (typeof window !== "undefined" && !audioRef.current) {
      const audio = new Audio("/audio/music1.mp3");
      // const audio = new Audio("https://cdn.pixabay.com/download/audio/2023/02/24/audio_2ddd022e1b.mp3");
      audio.loop = true;
      audio.volume = 0.4;
      audio.muted = true;
      audio.play().catch(() => {});
      audioRef.current = audio;
    }
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.muted = true;
      setPlaying(false);
    } else {
      audio.muted = false;
      audio.play();
      setPlaying(true);
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-22 sm:bottom-24 right-3.5 sm:right-9 p-3 z-50 rounded-full bg-white shadow"
    >
      {playing ? "🔊" : "🔇"}
    </button>
  );
}