"use client";

import { useEffect, useState } from "react";
import { getOrCreateExpireAt } from "./discountStorage";
import PricingPage from "../Prices/PricingPage";
import { HeaderDiscount } from "../HeaderDiscount/HeaderDiscount";
import { NormalizedTariffs } from "@/app/lib/normalizeTariffs";

export default function DiscountClient({
  tariffs,
}: {
  tariffs: NormalizedTariffs;
}) {
  const [expireAt, setExpireAt] = useState<number | null>(null);

  useEffect(() => {
    setExpireAt(getOrCreateExpireAt());
  }, []);

  if (!expireAt) return null;

  return (
    <>
      <HeaderDiscount expireAt={expireAt} />
      <PricingPage expireAt={expireAt} tariffs={tariffs} />
    </>
  );
}
