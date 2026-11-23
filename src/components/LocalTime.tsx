"use client";

import { useEffect, useState } from "react";

const format = () =>
  new Date().toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Jakarta",
  });

// Jam Bogor (WIB). Render "--.--" di server supaya tidak hydration mismatch.
export default function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(format());
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{time ?? "--.--"} WIB</span>;
}
