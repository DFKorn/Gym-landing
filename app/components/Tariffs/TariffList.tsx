import { Tariff } from "../../lib/types";
import TariffCard from "./TariffCard";

type Props = {
  tariffs: Tariff[];
  discountActive: boolean;
};

export default function TariffList({ tariffs, discountActive }: Props) {
  return (
    <div className="space-y-4">
      {tariffs.map((tariff) => (
        <TariffCard
          key={tariff.key}
          tariff={tariff}
          discountActive={discountActive}
        />
      ))}
    </div>
  );
}
