"use client";

interface BuyButtonProps {
  isCheckboxChecked: boolean;
  onCheckboxError?: (error: boolean) => void;
}

export default function BuyButton({
  isCheckboxChecked,
  onCheckboxError,
}: BuyButtonProps) {
  const handleClick = () => {
    if (!isCheckboxChecked) {
      onCheckboxError?.(true);
      return;
    }
    // Здесь будет логика покупки
    console.log("Purchase initiated");
  };

  return (
    <button
      // disabled={isCheckboxChecked}
      onClick={handleClick}
      className={`
        w-full md:max-w-[352px] mt-4 py-4 rounded-xl
        bg-accent text-[#191E1F] font-semibold 
        ${isCheckboxChecked ? "animate-pulse cursor-pointer" : "bg-gray-400 cursor-not-allowed opacity-50"}`}
    >
      Купить
    </button>
  );
}
