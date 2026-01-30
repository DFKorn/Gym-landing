import { Tariff } from "../../lib/types";
// import Price from "./Price";
// import DiscountBadge from "./DiscountBadge";
import { calcDiscount } from "../../lib/calc";

type Props = {
  tariff: Tariff;
  variant?: "main" | "default";
  isSelected?: boolean;
  onSelect?: () => void;
};

export function TariffCard({
  tariff,
  variant = "default",
  isSelected = false,
  onSelect,
}: Props) {
  const isMain = variant === "main";
  const discount = calcDiscount(tariff.price, tariff.full_price || 0);
  const buttonClass =
    "relative text-left rounded-2xl bg-[#2b3031] p-6 border transition-all duration-200 " +
    "hover:scale-[1.03] hover:border-accent/60 " +
    (isSelected ? "border-accent scale-[1.03] " : "border-white/10 ") +
    (isMain ? "lg:p-8" : "");

  return (
    <button type="button" onClick={onSelect} className={buttonClass}>
      {/* badge */}
      {discount > 0 && (
        <span className="absolute top-3 left-3 rounded-md bg-red-500 px-2 py-1 text-xs font-semibold">
          -{discount}%
        </span>
      )}

      <h3 className="text-lg text-white">{tariff.period}</h3>

      {/* PRICE */}
      <div
        className={
          "mt-4 text-3xl font-bold transition-colors " +
          (isSelected ? "text-[#FDB056]" : "text-white")
        }
      >
        {tariff.price} ₽
      </div>

      {tariff.full_price && (
        <div className="text-sm text-white/40 line-through">
          {tariff.full_price} ₽
        </div>
      )}

      <p className="mt-2 text-sm text-white/70">{tariff.text}</p>
    </button>
  );
}
