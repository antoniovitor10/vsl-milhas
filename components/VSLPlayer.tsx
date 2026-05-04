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
    let attachedVideo: HTMLVideoElement | null = null;
    const targetSeconds = autoUnlockDelaySeconds;

    const checkUnlock = () => {
      if (unlockedRef.current || !attachedVideo) return;
      if (attachedVideo.currentTime >= targetSeconds) {
        unlockedRef.current = true;
        trackEvent("vsl_auto_unlock", { delay_seconds: autoUnlockDelaySeconds });
        onUnlock();
      }
    };

    const onTimeUpdate = () => checkUnlock();
    const onEnded = () => {
      if (unlockedRef.current) return;
      unlockedRef.current = true;
      trackEvent("vsl_auto_unlock", { delay_seconds: autoUnlockDelaySeconds });
      onUnlock();
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
      video.addEventListener("timeupdate", onTimeUpdate);
      video.addEventListener("ended", onEnded);
      checkUnlock();
    };

    const pollId = window.setInterval(tryAttach, 500);
    tryAttach();

    return () => {
      window.clearInterval(pollId);
      if (attachedVideo) {
        attachedVideo.removeEventListener("timeupdate", onTimeUpdate);
        attachedVideo.removeEventListener("ended", onEnded);
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
