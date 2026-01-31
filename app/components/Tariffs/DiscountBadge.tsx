type Props = {
  percent: number;
  active: boolean;
};

export default function DiscountBadge({ percent, active }: Props) {
  return (
    <div
      className={`
        absolute top-0 left-10
        bg-[#FD5656] text-white text-xs px-2 py-1 rounded-b-md font-medium text-[13px] sm:text-base lg:text-[22px]
        transition-all duration-300
        ${active ? "opacity-100 scale-100" : "opacity-0 scale-75"}
      `}
    >
      -{percent}%
    </div>
  );
}
