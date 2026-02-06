import GuaranteeBox from "../Guarantee/GuaranteeBox";
import ModelImage from "../Offer/ModelImage";
import { getTariffs } from "../../lib/api";
import PricingPage from "../Prices/PricingPage";
import DiscountClient from "../Discount/DiscountClient";

export default async function MainInfo() {
  const tariffs = await getTariffs();

  return (
    <>
      <main className="min-h-screen max-w-[1216px] mx-auto text-white mt-8">
        <h1 className="text-left ml-4 md:text-center lg:text-left text-[22px] sm:text-[24px] lg:text-[40px] font-bold my-4 mb-5 lg:mb-25">
          Выбери подходящий для себя <span className="text-accent">тариф</span>
        </h1>
        <div className="relative mx-auto flex flex-col lg:flex-row justify-between w-full lg:max-w-[1216px] lg:h-[867px] px-4 lg:pr-4 lg:pl-0">
          <div className="w-full flex justify-center items-center lg:w-[382px]">
            <ModelImage />
          </div>
          <div className="flex flex-col gap-4 w-full md:w-[748px] m-auto lg:m-0 items-center lg:items-start ">
            <DiscountClient tariffs={tariffs} />
          </div>
        </div>
        <GuaranteeBox />
      </main>
    </>
  );
}
