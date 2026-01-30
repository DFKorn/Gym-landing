"use client";
import { useEffect, useState } from "react";

export const HeaderTimer = () => {
  const INITIAL_TIME = 2 * 60; // 2 минуты в секундах
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  const isDanger = timeLeft <= 30 && timeLeft > 0;

  let textColor = "text-accent";
  if (isDanger) textColor = "text-red-300 animate-pulse";
  if (timeLeft === 0) textColor = "text-white";

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
