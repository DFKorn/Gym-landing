import Image from "next/image";
import ModelImage from "../Offer/ModelImage";
import { NormalizedTariffs } from "../../lib/normalizeTariffs";

type PricingPageProps = {
  tariffs: NormalizedTariffs;
};

export default function PricingPage({ tariffs }: PricingPageProps) {
  const { best, otherTariffs } = tariffs;
  return (
    <>
      <main className="min-h-screen max-w-[1216px] mx-auto text-white mt-8">
        <div className="absolute top-[153] left-[357] w-full h-[2px] bg-red-500 z-[30]"></div>
        <h1 className="text-left text-[40px] font-bold mb-5 md:mb-25">
          Выбери подходящий для себя <span className="text-accent">тариф</span>
        </h1>
        <div className="relative mx-auto flex flex-col lg:flex-row gap-10 w-full lg:w-[1216px] lg:h-[867px] px-4 ">
          <div className="w-full flex justify-center items-center lg:w-[382px]">
            <ModelImage />
          </div>
          <div className="flex flex-col gap-4 w-full md:w-[748px] items-center lg:items-start ">
            <div className="grid grid-cols-1 gap-6">
              {/* Best tariff */}
              <div className="border border-orange-400 rounded-2xl p-6 relative bg-[#2a2f31] flex flex-col gap-2">
                {best.price !== best.full_price && (
                  <span className="absolute -top-3 left-6 bg-red-500 text-xs px-2 py-1 rounded">
                    {`-${Math.round(100 - (best.price / best.full_price) * 100)}%`}
                  </span>
                )}
                <span className="absolute top-3 right-4 text-orange-400 text-xs">
                  ХИТ!
                </span>
                <h2 className="text-lg">{best.period}</h2>
                <div className="text-3xl font-bold text-orange-400">
                  {best.price} ₽
                </div>
                <div className="text-sm line-through opacity-50">
                  {best.full_price} ₽
                </div>
                <p className="text-sm opacity-80">{best.text}</p>
              </div>
              {/* Other tariffs */}
              <div className="flex flex-col sm:flex-row gap-4">
                {otherTariffs.map((t) => (
                  <div
                    key={t.key}
                    className="bg-[#2a2f31] rounded-2xl p-4 relative flex-1 flex flex-col gap-1"
                  >
                    {t.price !== t.full_price && (
                      <span className="absolute -top-3 right-4 bg-red-500 text-xs px-2 py-1 rounded">
                        {`-${Math.round(100 - (t.price / t.full_price) * 100)}%`}
                      </span>
                    )}
                    <h3>{t.period}</h3>
                    <div className="text-xl font-semibold">{t.price} ₽</div>
                    <div className="text-xs line-through opacity-50">
                      {t.full_price} ₽
                    </div>
                    <p className="text-xs opacity-70 mt-auto">{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-xs opacity-70 flex items-start gap-2">
              <span className="text-yellow-400">!</span>
              <p>
                Следуя плану на 3 месяца и более, люди получают в 2 раза лучший
                результат, чем за 1 месяц
              </p>
            </div>
            <label className="flex items-center gap-2 text-xs opacity-70">
              <input type="checkbox" className="accent-orange-400" />Я согласен
              с офертой рекуррентных платежей и Политикой конфиденциальности
            </label>
            <button className="w-full bg-orange-400 hover:bg-orange-500 transition text-black font-semibold py-3 rounded-xl">
              Купить
            </button>
            <div className="border border-green-500 rounded-2xl p-5 text-sm">
              <span className="inline-block mb-2 px-3 py-1 text-green-400 border border-green-500 rounded-full">
                гарантия возврата 30 дней
              </span>
              <p className="opacity-80">
                Мы уверены, что наш план сработает для тебя и ты увидишь видимые
                результаты уже через 4 недели! Мы даже готовы полностью вернуть
                твои деньги в течение 30 дней с момента покупки, если ты не
                получишь видимых результатов.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
