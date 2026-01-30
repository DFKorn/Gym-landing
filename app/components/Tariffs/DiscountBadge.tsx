type Props = {
  percent: number;
  active: boolean;
};

export default function DiscountBadge({ percent, active }: Props) {
  return (
    <div
      className={`
        absolute top-2 right-2
        bg-red-500 text-white text-xs px-2 py-1 rounded-full
        transition-all duration-300
        ${active ? "opacity-100 scale-100" : "opacity-0 scale-75"}
      `}
    >
      -{percent}%
    </div>
  );
}
