"use client";

import React, { useEffect } from "react";
import { HERO_VIDEO_AUTO_UNLOCK_SECONDS } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";
import VTurbPlayer from "./VTurbPlayer";

const HERO_VTURB_ID = "69f505fa6b4ac768f951614c";

interface VSLPlayerProps {
  onUnlock: () => void;
  autoUnlockDelaySeconds?: number;
}

export default function VSLPlayer({
  onUnlock,
  autoUnlockDelaySeconds = HERO_VIDEO_AUTO_UNLOCK_SECONDS,
}: VSLPlayerProps) {
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      trackEvent("vsl_auto_unlock", { delay_seconds: autoUnlockDelaySeconds });
      onUnlock();
    }, autoUnlockDelaySeconds * 1000);

    return () => window.clearTimeout(timeoutId);
  }, [autoUnlockDelaySeconds, onUnlock]);

  return (
    <div className="w-full mt-8 relative z-10">
      <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[460px] md:max-w-[520px] rounded-xl sm:rounded-2xl overflow-hidden border border-slate-800 shadow-[0_0_60px_rgba(37,99,235,0.25),0_0_0_1px_rgba(37,99,235,0.2)] pulse-blue transition-all duration-300">
        <VTurbPlayer playerId={HERO_VTURB_ID} />
      </div>
    </div>
  );
}
