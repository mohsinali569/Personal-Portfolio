"use client";

import { useEffect, useState } from "react";

interface Props {
  timeZone: string;
  className?: string;
}

/** Live clock for a given time zone. Renders a placeholder until mounted to avoid hydration mismatch. */
export default function LocalTime({ timeZone, className }: Props) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return (
    <time className={className} suppressHydrationWarning>
      {time ?? "--:--"}
    </time>
  );
}
