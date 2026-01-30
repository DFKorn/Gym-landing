type Props = {
  price: number;
  full: number;
  discountActive: boolean;
};

export default function Price({ price, full, discountActive }: Props) {
  return (
    <div className="relative h-12 overflow-hidden">
      {/* Цена со скидкой */}
      <div
        className={`
          absolute inset-0 transition-all duration-500
          ${discountActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        <span className="text-2xl font-bold text-orange-400">{price} ₽</span>
        <span className="ml-2 text-sm line-through text-gray-400">
          {full} ₽
        </span>
      </div>

      {/* Цена без скидки */}
      <div
        className={`
          absolute inset-0 transition-all duration-500 delay-200
          ${discountActive ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"}
        `}
      >
        <span className="text-2xl font-bold">{full} ₽</span>
      </div>
    </div>
  );
}
