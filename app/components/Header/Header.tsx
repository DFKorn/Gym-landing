import { HeaderTimer } from "./HeaderTimer";

export const Header = ({ onTimerEnd }: { onTimerEnd: () => void }) => {
  return (
    <header
      className="
         py-2 text-center bg-[#1E5B43]
      "
    >
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

        <HeaderTimer duration={5} onExpire={onTimerEnd} />
      </div>
    </header>
  );
};
