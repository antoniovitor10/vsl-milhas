"use client";

import React, { useEffect, useRef } from "react";
import { HERO_VIDEO_AUTO_UNLOCK_SECONDS } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";
import VTurbPlayer from "./VTurbPlayer";

const HERO_VTURB_ID = "69f8c100d80c2e54d8dfaee5";

interface VSLPlayerProps {
  onUnlock: () => void;
  autoUnlockDelaySeconds?: number;
}

export default function VSLPlayer({
  onUnlock,
  autoUnlockDelaySeconds = HERO_VIDEO_AUTO_UNLOCK_SECONDS,
}: VSLPlayerProps) {
  const unlockedRef = useRef(false);

  useEffect(() => {
    let elapsedMs = 0;
    let lastTick: number | null = null;
    let isPlaying = false;
    let rafId: number | null = null;
    let attachedVideo: HTMLVideoElement | null = null;
    const targetMs = autoUnlockDelaySeconds * 1000;

    const tick = () => {
      if (unlockedRef.current) return;
      const now = performance.now();
      if (isPlaying && lastTick !== null) {
        elapsedMs += now - lastTick;
      }
      lastTick = now;
      if (elapsedMs >= targetMs) {
        unlockedRef.current = true;
        trackEvent("vsl_auto_unlock", { delay_seconds: autoUnlockDelaySeconds });
        onUnlock();
        return;
      }
      rafId = window.requestAnimationFrame(tick);
    };

    const onPlay = () => {
      if (isPlaying) return;
      isPlaying = true;
      lastTick = performance.now();
    };
    const onPause = () => {
      isPlaying = false;
    };

    const findVideo = (): HTMLVideoElement | null => {
      const wrapper = document.getElementById(`vid-${HERO_VTURB_ID}`);
      if (!wrapper) return null;
      const direct = wrapper.querySelector("video") as HTMLVideoElement | null;
      if (direct) return direct;
      const shadow = (wrapper as HTMLElement & { shadowRoot?: ShadowRoot | null })
        .shadowRoot;
      if (shadow) {
        return shadow.querySelector("video") as HTMLVideoElement | null;
      }
      return null;
    };

    const tryAttach = () => {
      if (attachedVideo) return;
      const video = findVideo();
      if (!video) return;
      attachedVideo = video;
      video.addEventListener("play", onPlay);
      video.addEventListener("playing", onPlay);
      video.addEventListener("pause", onPause);
      video.addEventListener("ended", onPause);
      video.addEventListener("waiting", onPause);
      if (!video.paused && !video.ended) onPlay();
    };

    const pollId = window.setInterval(tryAttach, 500);
    tryAttach();
    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.clearInterval(pollId);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      if (attachedVideo) {
        attachedVideo.removeEventListener("play", onPlay);
        attachedVideo.removeEventListener("playing", onPlay);
        attachedVideo.removeEventListener("pause", onPause);
        attachedVideo.removeEventListener("ended", onPause);
        attachedVideo.removeEventListener("waiting", onPause);
      }
    };
  }, [autoUnlockDelaySeconds, onUnlock]);

  return (
    <div className="w-full mt-8 relative z-10">
      <div className="relative mx-auto w-full max-w-[400px] rounded-xl sm:rounded-2xl overflow-hidden border border-slate-800 shadow-[0_0_60px_rgba(37,99,235,0.25),0_0_0_1px_rgba(37,99,235,0.2)] pulse-blue transition-all duration-300">
        <VTurbPlayer
          playerId={HERO_VTURB_ID}
          style={{ margin: "0 auto", maxWidth: 400 }}
        />
      </div>
    </div>
  );
}
