"use client";
import { useState } from "react";
import { Tariff } from "../../lib/types";
import { TariffCard } from "./TariffCard";

type Props = {
  mainTariff: Tariff;
  otherTariffs: Tariff[];
  discountActive: boolean;
};

export function TariffList({
  mainTariff,
  otherTariffs,
  discountActive,
}: Props) {
  const [selectedKey, setSelectedKey] = useState<string | null>(
    mainTariff?.key || null,
  );

  return (
    <section className="mx-auto max-w-[748px] w-full">
      <div className="flex flex-col gap-6">
        {mainTariff && (
          <TariffCard
            tariff={mainTariff}
            variant="main"
            discountActive={discountActive}
            isSelected={selectedKey === mainTariff.key}
            onSelect={() => setSelectedKey(mainTariff.key)}
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {otherTariffs.map((tariff) => (
            <TariffCard
              key={tariff.key}
              tariff={tariff}
              discountActive={discountActive}
              isSelected={selectedKey === tariff.key}
              onSelect={() => setSelectedKey(tariff.key)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
