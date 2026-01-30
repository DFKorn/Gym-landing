import Price from "./Price";
import DiscountBadge from "./DiscountBadge";
import { calcDiscount } from "../../lib/calc";

export default function TariffCard({ tariff, discountActive }: any) {
  const discount = calcDiscount(tariff.price, tariff.full_price);

  return (
    <div
      className={`
        relative rounded-2xl p-4
        bg-[#2A2F2F] border transition
        ${tariff.is_best ? "border-orange-400" : "border-transparent"}
      `}
    >
      <DiscountBadge percent={discount} active={discountActive} />

      <div className="text-sm text-gray-300 mb-1">{tariff.period}</div>

      <Price
        price={tariff.price}
        full={tariff.full_price}
        discountActive={discountActive}
      />

      <p className="mt-2 text-xs text-gray-400">{tariff.text}</p>
    </div>
  );
}
