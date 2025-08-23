"use client";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null); // ✅ keep null, not 0

  useEffect(() => {
    if (typeof window !== "undefined" && !audioRef.current) {
      const audio = new Audio("https://cdn.pixabay.com/download/audio/2023/02/24/audio_2ddd022e1b.mp3");
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
      className="fixed bottom-26 right-9 p-3 z-50 rounded-full bg-white shadow"
    >
      {playing ? "🔊" : "🔇"}
    </button>
  );
}

// "use client";
// import { useEffect, useRef, useState } from "react";

// export default function MusicPlayer({
//   src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
//   volume = 0.35,
// }) {
//   const audioRef = useRef(null);
//   const [playing, setPlaying] = useState(false);
//   const [needsUnlock, setNeedsUnlock] = useState(false);

//   // Try to autoplay with sound
//   useEffect(() => {
//     if (audioRef.current) return;

//     const audio = new Audio(src);
//     audio.loop = true;
//     audio.volume = volume;
//     audioRef.current = audio;

//     audio.play()
//       .then(() => setPlaying(true))
//       .catch(() => {
//         // Autoplay blocked → wait for first user gesture anywhere
//         setNeedsUnlock(true);
//         setPlaying(false);
//       });

//     return () => {
//       audio.pause();
//       audioRef.current = null;
//     };
//   }, [src, volume]);

//   // Auto-unlock on first user interaction (tap/click/keypress)
//   useEffect(() => {
//     if (!needsUnlock) return;

//     const tryStart = () => {
//       const a = audioRef.current;
//       if (!a) return;
//       a.play()
//         .then(() => {
//           setPlaying(true);
//           setNeedsUnlock(false);
//         })
//         .catch(() => {});
//     };

//     // one-time listeners (any of these will start the music)
//     window.addEventListener("pointerdown", tryStart, { once: true });
//     window.addEventListener("keydown", tryStart, { once: true });
//     window.addEventListener("touchstart", tryStart, { once: true });

//     return () => {
//       window.removeEventListener("pointerdown", tryStart);
//       window.removeEventListener("keydown", tryStart);
//       window.removeEventListener("touchstart", tryStart);
//     };
//   }, [needsUnlock]);

//   const toggle = () => {
//     const a = audioRef.current;
//     if (!a) return;
//     if (a.paused) {
//       a.play().then(() => setPlaying(true));
//     } else {
//       a.pause();
//       setPlaying(false);
//     }
//   };

//   return (
//     <div className="fixed bottom-26 right-6 z-50 flex items-center gap-2">
//       {needsUnlock && (
//         <button
//           onClick={toggle}
//           className="px-3 py-2 rounded-full bg-black text-white text-sm shadow"
//           title="Your browser blocked autoplay with sound. Tap to enable."
//         >
//           Enable sound
//         </button>
//       )}
//       <button
//         onClick={toggle}
//         className="p-3 rounded-full bg-white shadow"
//         aria-label={playing ? "Mute music" : "Play music"}
//       >
        
//       </button>
//     </div>
//   );
// }
