import ModelImage from "./ModelImage";
import {TariffList} from "../../components/Tariffs/TariffList";
import AgreementCheckbox from "../../components/Purchase/AgreementCheckbox";
import BuyButton from "../../components/Purchase/BuyButton";
import GuaranteeBox from "../../components/Guarantee/GuaranteeBox";

export default function OfferSection({ tariffs, discountActive }: any) {
  return (
    // <section className="bg-[#202626] rounded-t-4xl pt-24 pb-10 px-4 py-8 md:px-10">
    //   <h1 className="text-white text-xl md:text-3xl font-bold text-center mb-8">
    //     Выбери подходящий для себя{" "}
    //     <span className="text-orange-400">тариф</span>
    //   </h1>

    //   <div className="grid md:grid-cols-[1fr_1fr] gap-10 max-w-5xl mx-auto">
    //     <ModelImage />

    //     <div>
    //       <TariffList tariffs={tariffs} discountActive={discountActive} />

    //       <AgreementCheckbox />

    //       <BuyButton />

    //       <GuaranteeBox />
    //     </div>
    //   </div>
    // </section>
  );
}
