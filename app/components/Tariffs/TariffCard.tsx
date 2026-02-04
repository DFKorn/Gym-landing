import { Tariff } from "../../lib/types";
// import Price from "./Price";
// import DiscountBadge from "./DiscountBadge";
import { calcDiscount } from "../../lib/calc";
import DiscountBadge from "./DiscountBadge";

type Props = {
  tariff: Tariff;
  variant?: "main" | "default";
  discountActive?: boolean;
  isSelected?: boolean;
  onSelect?: () => void;
};

export function TariffCard({
  tariff,
  variant = "default",
  isSelected = false,
  onSelect,
  discountActive = false,
}: Props) {
  const isMain = variant === "main";

  const discount = calcDiscount(tariff.price, tariff.full_price || 0);
  const buttonClass =
    "relative text-left rounded-3xl bg-[#313637] cursor-pointer p-[20px] border transition-all duration-200 " +
    "hover:scale-[1.03] hover:border-accent/60 w-full " +
    (isSelected ? "border-accent scale-[1.03] " : "border-white/10 ") +
    (isMain
      ? "lg:p-8 lg:h-[190px] md:p-[16px_20px] lg:p-[30px_50px_26px_19px] "
      : "lg:h-[335px] lg:p-[70px_21px_26px_21px]");

  return (
    <button type="button" onClick={onSelect} className={buttonClass}>
      {/* badge */}
      {discount > 0 && discountActive && (
        <DiscountBadge percent={discount} active={true} />
      )}

      {/* Best badge */}
      {isMain && (
        <div className="absolute top-2 md:top-4 right-4  text-accent text-[13px] sm:text-base lg:text-[22px] font-medium">
          ХИТ!
        </div>
      )}

      {/* Main info*/}
      <div
        className={`pt-4 lg:pt-0 flex md:flex-col items-center justify-between  gap-6 h-full ${isMain ? "lg:ml-[100px] md:flex-row md:justify-between" : "md:justify-start"} `}
      >
        {/* TITLE + Price*/}
        <div className="flex flex-col items-start lg:items-center gap-5">
          <h3 className="text-[16px] sm:text-[18px] lg:text-[26px] text-white  font-medium tracking-wider">
            {tariff.period}
          </h3>

          {/* PRICE */}
          <div className="flex flex-col items-end leading-none">
            <div
              className={
                "text-[30px] sm:text-[30px] lg:text-[50px] font-semibold whitespace-nowrap transition-colors relative " +
                (isSelected ? "text-accent" : "text-white")
              }
            >
              <div className="relative inline-block">
                <div className="opacity-0 pointer-events-none whitespace-nowrap">
                  {tariff.full_price} ₽
                </div>
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    discountActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2"
                  }`}
                >
                  {tariff.price} ₽
                </div>
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    discountActive
                      ? "opacity-0 translate-y-2"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  {tariff.full_price ?? tariff.price} ₽
                </div>
              </div>
            </div>

            {tariff.full_price && (
              <div
                className={`${discountActive ? "opacity-100" : "opacity-0"} font-normal text-[14px] sm:text-[16px] lg:text-[24px] text-white/40 line-through transition-opacity duration-300`}
              >
                {tariff.full_price} ₽
              </div>
            )}
          </div>
        </div>
        <div
          className={`max-w-[260px] sm:max-w-[320px] w-full ${!isMain && "lg:mt-4"}`}
        >
          <p className="text-[14px] text-center md:text-left md:text-[16px] font-normal text-white/90">
            {tariff.text}
          </p>
        </div>
      </div>
    </button>
  );
}
