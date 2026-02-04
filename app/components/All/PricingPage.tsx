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
      <Header onTimerEnd={() => setDiscountActive(false)} />
      <main className="min-h-screen max-w-[1216px] mx-auto text-white mt-8">
        <h1 className="text-left ml-4 md:text-center lg:text-left text-[22px] sm:text-[24px] lg:text-[40px] font-bold my-4 mb-5 lg:mb-25">
          Выбери подходящий для себя <span className="text-accent">тариф</span>
        </h1>
        <div className="relative mx-auto flex flex-col lg:flex-row justify-between w-full lg:max-w-[1216px] lg:h-[867px] px-4 lg:pr-4 lg:pl-0">
          <div className="w-full flex justify-center items-center lg:w-[382px]">
            <ModelImage />
          </div>
          <div className="flex flex-col gap-4 w-full md:w-[748px] m-auto lg:m-0 items-center lg:items-start ">
            <TariffList
              mainTariff={best}
              otherTariffs={otherTariffs}
              discountActive={discountActive}
            />

            <div className="text-xs leading-[1.4] md:text-base opacity-70 flex items-start gap-2 w-full rounded-[20px] bg-[#313637] p-[18px_20px] lg:w-[499px] lg:h-[78px] ">
              <span className="text-accent leading-none text-xl font-bold">
                !
              </span>
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
            <p className="text-[10px] sm:text-[14px] leading-[1.2] text-[#9B9B9B] mt-[10px]">
              Нажимая кнопку «Купить», Пользователь соглашается на разовое
              списание денежных средств для получения пожизненного доступа к
              приложению. Пользователь соглашается, что данные
              кредитной/дебетовой карты будут сохранены для осуществления
              покупок дополнительных услуг сервиса в случае желания
              пользователя.
            </p>
          </div>
        </div>
        <GuaranteeBox />
      </main>
    </>
  );
}
