type Props = {
  price: number;
  full_price: number;
  discountActive: boolean;
  isSelected?: boolean;
};

export default function Price({
  price,
  full_price,
  discountActive,
  isSelected,
}: Props) {
  return (
    <div className="flex flex-col items-end leading-none">
      <div
        className={
          "text-[30px] sm:text-[30px] lg:text-[50px] font-semibold whitespace-nowrap transition-colors relative " +
          (isSelected ? "text-accent" : "text-white")
        }
      >
        <div className="relative inline-block">
          <div className="opacity-0 pointer-events-none whitespace-nowrap">
            {full_price} ₽
          </div>
          <div
            className={`absolute inset-0 transition-all duration-500 ${
              discountActive
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2"
            }`}
          >
            {price} ₽
          </div>
          <div
            className={`absolute inset-0 transition-all duration-500 ${
              discountActive
                ? "opacity-0 translate-y-2"
                : "opacity-100 translate-y-0"
            }`}
          >
            {full_price ?? price} ₽
          </div>
        </div>
      </div>

      {full_price && (
        <div
          className={`${discountActive ? "opacity-100" : "opacity-0"} font-normal text-[14px] sm:text-[16px] lg:text-[24px] text-white/40 line-through transition-opacity duration-300`}
        >
          {full_price} ₽
        </div>
      )}
    </div>
  );
}
