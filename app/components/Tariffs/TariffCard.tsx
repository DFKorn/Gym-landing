import { Tariff } from "../../lib/types";
// import Price from "./Price";
// import DiscountBadge from "./DiscountBadge";
import { calcDiscount } from "../../lib/calc";
import DiscountBadge from "./DiscountBadge";

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
    "relative text-left rounded-3xl bg-[#313637] cursor-pointer p-[20px]  border transition-all duration-200 " +
    "hover:scale-[1.03] hover:border-accent/60 h-[335px] " +
    (isSelected ? "border-accent scale-[1.03] " : "border-white/10 ") +
    (isMain
      ? "lg:p-8 lg:h-[190px] md:p-[16px_20px] lg:p-[30px_50px_26px_19px] "
      : "");

  return (
    <button type="button" onClick={onSelect} className={buttonClass}>
      {/* badge */}
      {discount > 0 && <DiscountBadge percent={discount} active={true} />}

      {/* Best badge */}
      {isMain && (
        <div className="absolute top-4 right-4  text-accent text-[13px] sm:text-base lg:text-[22px] font-medium">
          ХИТ!
        </div>
      )}

      {/* Main info*/}
      <div className="flex items-start md:items-center justify-between gap-6 lg:ml-[100px] ">
        {/* TITLE + Price*/}
        <div className="flex flex-col items-center gap-5">
          <h3 className="text-[16px] sm:text-[18px] lg:text-[26px] text-white  font-medium tracking-wider">
            {tariff.period}
          </h3>

          {/* PRICE */}
          <div className="flex flex-col items-end leading-none">
            <div
              className={
                "text-[30px] sm:text-[30px] lg:text-[50px] font-semibold whitespace-nowrap transition-colors " +
                (isSelected ? "text-[#FDB056]" : "text-white")
              }
            >
              {tariff.price} ₽
            </div>

            {tariff.full_price && (
              <div className="font-normal text-[146px] sm:text-[16px] lg:text-[24px] text-white/40 line-through">
                {tariff.full_price} ₽
              </div>
            )}
          </div>
        </div>
        <div className="w-[120px] md:w-[328px]">
          <p className="mt-2 text-[14px] md:text-[16px] font-normal text-white/90">
            {tariff.text}
          </p>
        </div>
      </div>
    </button>
  );
}
