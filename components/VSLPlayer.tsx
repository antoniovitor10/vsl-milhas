"use client";

import React, { useEffect, useRef, useState } from "react";
import { VolumeX } from "lucide-react";
import { HERO_VIDEO_AUTO_UNLOCK_SECONDS, HERO_VIDEO_URL } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

// Velocidade relativa [5,4,3,2,1] em 5 trechos de 20% da barra.
// Limites de tempo do vídeo normalizados para a barra bater 100% exatamente no fim.
const BAR_SEGMENTS = [
  { vStart: 0,       vEnd: 12 / 137, bStart: 0,   bEnd: 0.2 },
  { vStart: 12 / 137, vEnd: 27 / 137, bStart: 0.2, bEnd: 0.4 },
  { vStart: 27 / 137, vEnd: 47 / 137, bStart: 0.4, bEnd: 0.6 },
  { vStart: 47 / 137, vEnd: 77 / 137, bStart: 0.6, bEnd: 0.8 },
  { vStart: 77 / 137, vEnd: 1,        bStart: 0.8, bEnd: 1 },
];

interface VSLPlayerProps {
  onUnlock: () => void;
  autoUnlockDelaySeconds?: number;
}

export default function VSLPlayer({
  onUnlock,
  autoUnlockDelaySeconds = HERO_VIDEO_AUTO_UNLOCK_SECONDS,
}: VSLPlayerProps) {
  const [progress, setProgress] = useState(0);
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [controlsUnlocked, setControlsUnlocked] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const milestonesTrackedRef = useRef<Set<number>>(new Set());
  const autoUnlockTrackedRef = useRef(false);
  const metadataTrackedRef = useRef(false);

  useEffect(() => {
    if (isUnlocked) return;

    const timeoutId = window.setTimeout(() => {
      setIsUnlocked(true);
      setControlsUnlocked(true);
      if (!autoUnlockTrackedRef.current) {
        autoUnlockTrackedRef.current = true;
        trackEvent("vsl_auto_unlock", { delay_seconds: autoUnlockDelaySeconds });
      }
      onUnlock();
    }, autoUnlockDelaySeconds * 1000);

    return () => window.clearTimeout(timeoutId);
  }, [autoUnlockDelaySeconds, isUnlocked, onUnlock]);

  const handlePlayClick = () => {
    setIsOverlayVisible(false);
    trackEvent("vsl_unmute_click");

    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => { });
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;

    if (!video || !Number.isFinite(video.duration) || video.duration <= 0) {
      return;
    }

    const rawProgress = Math.min(video.currentTime / video.duration, 1);

    const seg =
      BAR_SEGMENTS.find((s) => rawProgress <= s.vEnd) ??
      BAR_SEGMENTS[BAR_SEGMENTS.length - 1];
    const segWidth = Math.max(seg.vEnd - seg.vStart, 0.0001);
    const segProgress = (rawProgress - seg.vStart) / segWidth;
    const percent = (seg.bStart + segProgress * (seg.bEnd - seg.bStart)) * 100;
    setProgress(percent);

    const watchedPercent = rawProgress * 100;
    [25, 50, 75].forEach((milestone) => {
      if (watchedPercent >= milestone && !milestonesTrackedRef.current.has(milestone)) {
        milestonesTrackedRef.current.add(milestone);
        trackEvent("vsl_progress", { milestone_percent: milestone });
      }
    });
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;

    if (!video || metadataTrackedRef.current) {
      return;
    }

    metadataTrackedRef.current = true;
    trackEvent("vsl_loaded", { duration_seconds: Math.round(video.duration || 0) });
  };

  const handleVideoEnded = () => {
    setIsVideoEnded(true);
    setProgress(100);
  };

  const keepPlaying = () => {
    const video = videoRef.current;
    if (!video || controlsUnlocked || video.ended) return;
    video.play().catch(() => { });
  };

  return (
    <div className="w-full mt-8 relative z-10">
      <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[460px] md:max-w-[520px] aspect-[9/16] md:aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden border border-slate-800 bg-black shadow-[0_0_60px_rgba(37,99,235,0.25),0_0_0_1px_rgba(37,99,235,0.2)] pulse-blue transition-all duration-300">
        <div className="absolute inset-0 w-full h-full bg-black flex items-center justify-center z-10">
          {HERO_VIDEO_URL ? (
            <video
              ref={videoRef}
              className={`w-full h-full object-cover md:object-contain ${controlsUnlocked ? "" : "pointer-events-none"}`}
              src={HERO_VIDEO_URL}
              autoPlay
              muted
              playsInline
              preload="metadata"
              controls={controlsUnlocked}
              controlsList="nodownload"
              onPause={keepPlaying}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={handleVideoEnded}
              onContextMenu={(e) => e.preventDefault()}
            />
          ) : (
            <div className="text-white text-sm">Nenhum vídeo configurado em constants.ts (HERO_VIDEO_URL)</div>
          )}
        </div>

        {isOverlayVisible && (
          <div className="absolute inset-0 group z-30">
            <div className="absolute inset-0 bg-[#0A0A0A]/40 backdrop-blur-[2px]" />
            <div
              className="absolute inset-0 flex flex-col items-center justify-center transition-all cursor-pointer"
              onClick={handlePlayClick}
            >
              <div className="bg-[#2563EB] border-[3px] border-white/90 rounded-2xl px-6 py-6 md:px-10 md:py-8 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.5)] animate-pulse transition-transform group-hover:scale-105 mx-4 text-center">
                <span className="text-white font-bold text-sm md:text-base tracking-wide mb-3">Seu vídeo já começou</span>
                <VolumeX className="text-white w-16 h-16 md:w-20 md:h-20 drop-shadow-lg mb-3" />
                <span className="text-white drop-shadow-md font-black text-lg md:text-2xl tracking-tight mt-1">Clique para ouvir</span>
              </div>
            </div>
          </div>
        )}

        {!isVideoEnded && (
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/80 z-20 backdrop-blur-sm shadow-[0_-2px_10px_rgba(0,0,0,0.5)] pointer-events-none">
            <div
              className="h-full bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.8)]"
              style={{
                width: `${progress}%`,
                transition: "width 300ms linear",
              }}
            />
          </div>
        )}
      </div>

      {!isUnlocked && (
        <div className="mt-6 flex flex-col items-center justify-center gap-2 text-slate-500 text-xs md:text-sm">
          <span className="flex items-center gap-1">
            🔒 Suas informações de navegação são sigilosas e seguras.
          </span>
        </div>
      )}
    </div>
  );
}
