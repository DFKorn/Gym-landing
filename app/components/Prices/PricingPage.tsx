"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ModelImage from "../Offer/ModelImage";
import { NormalizedTariffs } from "../../lib/normalizeTariffs";
import { TariffList } from "../Tariffs/TariffList";
import Checkbox from "../Purchase/Checkbox";
import BuyButton from "../Purchase/BuyButton";
import GuaranteeBox from "../Guarantee/GuaranteeBox";
import { Header } from "../Header/Header";

type PricingPageProps = {
  tariffs: NormalizedTariffs;
};

export default function PricingPage({ tariffs }: PricingPageProps) {
  const { best, otherTariffs } = tariffs;
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);
  const [discountActive, setDiscountActive] = useState(true);

  useEffect(() => {
    const expireAt = localStorage.getItem("discount_expire_at");

    if (expireAt && Date.now() >= Number(expireAt)) {
      setDiscountActive(false);
    }
  }, []);
  return (
    <>
      <TariffList
        mainTariff={best}
        otherTariffs={otherTariffs}
        discountActive={discountActive}
      />

      <div className="text-xs leading-[1.4] md:text-base opacity-70 flex items-start gap-2 w-full rounded-[20px] bg-[#313637] p-[18px_20px] lg:w-[499px] lg:h-[78px] ">
        <span className="text-accent leading-none text-xl font-bold">!</span>
        <p>
          Следуя плану на 3 месяца и более, люди получают в 2 раза лучший
          результат, чем за 1 месяц
        </p>
      </div>
      <Checkbox
        checked={isCheckboxChecked}
        onChange={(checked) => {
          setIsCheckboxChecked(checked);
          setCheckboxError(false);
        }}
        error={checkboxError}
        className="text-xs md:text-base"
      >
        Я согласен с{" "}
        <span className="underline">офертой рекуррентных платежей</span> и{" "}
        <span className="underline">Политикой конфиденциальности</span>
      </Checkbox>
      <BuyButton
        isCheckboxChecked={isCheckboxChecked}
        onCheckboxError={setCheckboxError}
      />
    </>
  );
}
