"use client";
import { getExpireAt } from "@/app/lib/timer";
import { useEffect, useRef, useState } from "react";

export const HeaderTimer = ({
  duration,
  onExpire,
}: {
  duration: number;
  onExpire: () => void;
}) => {
  const [remaining, setRemaining] = useState(() => {
    if (typeof window === "undefined") return 0;

    const expireAt = getExpireAt(duration);
    return Math.max(0, Math.floor((expireAt - Date.now()) / 1000));
  });
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const expireAt = getExpireAt(duration);

    const tick = () => {
      const diff = Math.max(0, Math.floor((expireAt - Date.now()) / 1000));

      setRemaining(diff);

      if (diff === 0) {
        onExpire();
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }
    };

    tick();
    intervalRef.current = window.setInterval(tick, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [duration, onExpire]);

  if (remaining === null) return null;

  const minutes = String(Math.floor(remaining / 60)).padStart(2, "0") ?? "00";
  const seconds = String(remaining % 60).padStart(2, "0") ?? "00";

  const isDanger = remaining <= 30 && remaining > 0;

  let textColor = "text-accent";
  if (isDanger) textColor = "text-red-300 animate-pulse";
  if (remaining === 0) textColor = "text-white";
  return (
    <div
      className={`text-4xl font-bold font-mulish flex flex-row items-center justify-center gap-2 ${textColor}`}
    >
      <span className="text-[14px]">✦</span>
      <span className="inline-block text-center tabular-nums">
        {minutes} : {seconds}
      </span>
      <span className="text-[14px]">✦</span>
    </div>
  );
};
