"use client";

import { useEffect, useRef } from "react";

export function HeaderDiscountTimer({ expireAt }: { expireAt: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const lastSec = useRef<number | null>(null);
  const raf = useRef<number>(null);
  const lastClass = useRef<string | null>(null);

  useEffect(() => {
    function tick() {
      const el = ref.current;
      if (!el) return;
      const remaining = Math.max(0, expireAt - Date.now());
      const sec = Math.floor(remaining / 1000);

      let nextClass = "text-accent";

      if (remaining === 0) {
        nextClass = "text-white";
      } else if (remaining < 30000) {
        nextClass = "text-[#FF4E4E] animate-pulse";
      }

      // обновляем class только если изменился
      if (nextClass !== lastClass.current) {
        lastClass.current = nextClass;
        el.className = nextClass;
      }

      if (sec !== lastSec.current && ref.current) {
        lastSec.current = sec;

        const m = String(Math.floor(sec / 60)).padStart(2, "0");
        const s = String(sec % 60).padStart(2, "0");

        el.textContent = `${m}:${s}`;
      }

      if (remaining > 0) {
        raf.current = requestAnimationFrame(tick);
      }
    }

    tick();
    return () => cancelAnimationFrame(raf.current!);
  }, [expireAt]);

  return <span ref={ref}>00:00</span>;
}
