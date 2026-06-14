import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Play, ShoppingBag } from "lucide-react";

import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";
import fashion from "@/assets/fashion.jpg";
import outdoor from "@/assets/outdoor.jpg";
import beauty from "@/assets/beauty.jpg";

type Reel = {
  id: number;
  video: string;
  poster: string;
};

const reels: Reel[] = [
  {
    id: 1,
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    poster: hero1,
  },
  {
    id: 2,
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    poster: outdoor,

  },
  {
    id: 3,
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster: fashion,

  },
  {
    id: 4,
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    poster: beauty,

  },
  {
    id: 5,
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    poster: hero2,
  },
  {
    id: 6,
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    poster: hero3,
  },
];

function ReelCard({ reel, muted, onToggleMute }: { reel: Reel; muted: boolean; onToggleMute: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
          v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        } else {
          v.pause();
          setPlaying(false);
        }
      },
      { threshold: [0, 0.6, 1] }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="relative shrink-0 w-[260px] sm:w-[280px] aspect-[9/16] rounded-2xl overflow-hidden bg-warm-900 group snap-center shadow-xl">
      <video
        ref={videoRef}
        src={reel.video}
        poster={reel.poster}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
        onClick={togglePlay}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 pointer-events-none" />

      {/* Play overlay when paused */}
      {!playing && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center"
          aria-label="Play"
        >
          <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center backdrop-blur-sm">
            <Play className="w-6 h-6 text-warm-900 fill-warm-900 ml-1" />
          </span>
        </button>
      )}

      {/* Top badges */}
      <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
        <button
          onClick={onToggleMute}
          className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-colors"
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      </div>

    </div>
  );
}

export function ReelsSlider() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);

  const scroll = (dir: number) => {
    scrollerRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-28 bg-warm-900 text-warm-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
          <div>
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-terracotta-light font-body font-semibold mb-3">
              Watch & Shop
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-2xl">
              Stories in motion
            </h2>
            <p className="mt-4 text-warm-200/80 max-w-md font-body font-light">
              Real products, real moments. Swipe through bite-sized reels and tap to shop the look.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-11 h-11 rounded-full border border-warm-400/30 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-11 h-11 rounded-full border border-warm-400/30 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 lg:px-12 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="shrink-0 w-0 lg:w-[max(0px,calc((100vw-80rem)/2))]" aria-hidden />
        {reels.map((r) => (
          <ReelCard key={r.id} reel={r} muted={muted} onToggleMute={() => setMuted((m) => !m)} />
        ))}
        <div className="shrink-0 w-6" aria-hidden />
      </div>
    </section>
  );
}
