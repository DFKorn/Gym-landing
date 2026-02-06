"use client";

import { useEffect, useState } from "react";
import { getOrCreateExpireAt } from "./discountStorage";
import PricingPage from "../Prices/PricingPage";
import { HeaderDiscount } from "../Header/HeaderDiscount";
import { NormalizedTariffs } from "@/app/lib/normalizeTariffs";

export default function DiscountClient({
  tariffs,
}: {
  tariffs: NormalizedTariffs;
}) {
  const [expireAt, setExpireAt] = useState<number | null>(null);
  const [, force] = useState(0);

  useEffect(() => {
    const exp = getOrCreateExpireAt();
    setExpireAt(exp);

    const remaining = exp - Date.now();

    if (remaining > 0) {
      const t = setTimeout(() => {
        force((v) => v + 1);
      }, remaining);

      return () => clearTimeout(t);
    }
  }, []);

  if (!expireAt) return null;

  return (
    <>
      <HeaderDiscount expireAt={expireAt} />
      <PricingPage expireAt={expireAt} tariffs={tariffs} />
    </>
  );
}
