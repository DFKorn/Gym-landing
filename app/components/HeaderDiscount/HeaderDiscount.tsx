import { HeaderDiscountTimer } from "./HeaderDiscountTimer";

export const HeaderDiscount = ({ expireAt }: { expireAt: number }) => {
  return (
    <div className="py-2 text-center bg-[#1E5B43] fixed left-0 right-0 top-0 z-50">
      <div
        className="
          max-w-7xl mx-auto
          flex flex-col items-center justify-center
          gap-1
          text-center
        "
      >
        <p className="text-white font-semibold text-lg md:text-2xl">
          Успейте открыть пробную неделю
        </p>

        <div
          className={`text-4xl font-bold font-mulish flex flex-row items-center justify-center gap-2`}
        >
          <span className="text-[14px]">✦</span>
          <div className="inline-block text-center">
            <HeaderDiscountTimer expireAt={expireAt} />
          </div>
          <span className="text-[14px]">✦</span>
        </div>
      </div>
    </div>
  );
};
