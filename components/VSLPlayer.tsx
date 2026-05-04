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

type VTurbInstance = {
  getCurrentTime?: () => number;
  on?: (event: string, cb: (...args: unknown[]) => void) => void;
};

declare global {
  interface Window {
    smartplayer?: {
      instances?:
        | Record<string, VTurbInstance>
        | { get?: (id: string) => VTurbInstance | undefined };
    };
  }
}

export default function VSLPlayer({
  onUnlock,
  autoUnlockDelaySeconds = HERO_VIDEO_AUTO_UNLOCK_SECONDS,
}: VSLPlayerProps) {
  const unlockedRef = useRef(false);

  useEffect(() => {
    const targetSeconds = autoUnlockDelaySeconds;
    const wrapperId = `vid-${HERO_VTURB_ID}`;
    const wrapper = document.getElementById(wrapperId);

    let apiPollId: number | null = null;
    let videoPollId: number | null = null;
    let attachedVideo: HTMLVideoElement | null = null;

    const cleanupTimers = () => {
      if (apiPollId !== null) window.clearInterval(apiPollId);
      if (videoPollId !== null) window.clearInterval(videoPollId);
      apiPollId = null;
      videoPollId = null;
    };

    const fireUnlock = () => {
      if (unlockedRef.current) return;
      unlockedRef.current = true;
      trackEvent("vsl_auto_unlock", { delay_seconds: autoUnlockDelaySeconds });
      onUnlock();
      cleanupTimers();
    };

    const checkAndMaybeUnlock = (currentTime: number) => {
      if (typeof currentTime !== "number" || Number.isNaN(currentTime)) return;
      if (currentTime >= targetSeconds) fireUnlock();
    };

    const elHandler = (ev: Event) => {
      const detail = (ev as CustomEvent).detail as
        | { currentTime?: number; current_time?: number }
        | number
        | undefined;
      let ct: number | undefined;
      if (typeof detail === "number") ct = detail;
      else if (detail && typeof detail === "object")
        ct = detail.currentTime ?? detail.current_time;
      if (ct !== undefined) checkAndMaybeUnlock(ct);
    };
    const elEvents = ["timeupdate", "ended"];
    if (wrapper) {
      elEvents.forEach((e) => wrapper.addEventListener(e, elHandler));
    }

    const getInstance = (): VTurbInstance | null => {
      const inst = window.smartplayer?.instances;
      if (!inst) return null;
      if (typeof (inst as { get?: unknown }).get === "function") {
        return (
          (inst as { get: (id: string) => VTurbInstance | undefined }).get(
            HERO_VTURB_ID
          ) ?? null
        );
      }
      const rec = inst as Record<string, VTurbInstance>;
      return rec[HERO_VTURB_ID] ?? rec[wrapperId] ?? null;
    };

    let apiAttached = false;
    apiPollId = window.setInterval(() => {
      if (unlockedRef.current) return;
      if (!apiAttached) {
        const instance = getInstance();
        if (instance) {
          apiAttached = true;
          if (typeof instance.on === "function") {
            instance.on("timeupdate", (...args: unknown[]) => {
              const arg = args[0] as { currentTime?: number } | number | undefined;
              let ct: number | undefined;
              if (typeof arg === "number") ct = arg;
              else if (arg && typeof arg === "object") ct = arg.currentTime;
              if (ct === undefined && typeof instance.getCurrentTime === "function") {
                ct = instance.getCurrentTime();
              }
              if (ct !== undefined) checkAndMaybeUnlock(ct);
            });
            instance.on("ended", () => fireUnlock());
          }
        }
      }
      if (apiAttached) {
        const instance = getInstance();
        if (instance && typeof instance.getCurrentTime === "function") {
          checkAndMaybeUnlock(instance.getCurrentTime());
        }
      }
    }, 1000);

    const onVideoTime = () => {
      if (attachedVideo) checkAndMaybeUnlock(attachedVideo.currentTime);
    };
    const onVideoEnded = () => fireUnlock();

    videoPollId = window.setInterval(() => {
      if (unlockedRef.current || attachedVideo) return;
      const v = wrapper?.querySelector("video") as HTMLVideoElement | null;
      if (!v) return;
      attachedVideo = v;
      v.addEventListener("timeupdate", onVideoTime);
      v.addEventListener("ended", onVideoEnded);
    }, 500);

    return () => {
      cleanupTimers();
      if (wrapper) elEvents.forEach((e) => wrapper.removeEventListener(e, elHandler));
      if (attachedVideo) {
        attachedVideo.removeEventListener("timeupdate", onVideoTime);
        attachedVideo.removeEventListener("ended", onVideoEnded);
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
