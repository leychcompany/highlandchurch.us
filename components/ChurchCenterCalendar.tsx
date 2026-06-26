"use client";

import { useEffect } from "react";

export function ChurchCenterCalendar() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://highlnd.churchcenter.com/assets/calendar_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      className="church-center-calendar mx-auto max-w-5xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
      data-height="600px"
    />
  );
}
