"use client";

import React, { useEffect } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "vturb-smartplayer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { id?: string },
        HTMLElement
      >;
    }
  }
}

const ACCOUNT_ID = "ab98406f-b96d-4059-a1b9-abd513177fe5";

interface VTurbPlayerProps {
  playerId: string;
  className?: string;
  style?: React.CSSProperties;
  useIframe?: boolean;
}

export default function VTurbPlayer({
  playerId,
  className,
  style,
  useIframe = false,
}: VTurbPlayerProps) {
  useEffect(() => {
    const domId = `vturb-script-${playerId}`;
    if (document.getElementById(domId)) return;
    const s = document.createElement("script");
    s.id = domId;
    s.src = `https://scripts.converteai.net/${ACCOUNT_ID}/players/${playerId}/v4/player.js?mac=0`;
    s.async = true;
    document.head.appendChild(s);
  }, [playerId]);

  return (
    <vturb-smartplayer
      id={`vid-${playerId}`}
      className={className}
      style={{ display: "block", width: "100%", ...style }}
    />
  );
}
