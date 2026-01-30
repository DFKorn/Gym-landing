import { TariffApi } from "./types";
import { normalizeTariffs, NormalizedTariffs } from "./normalizeTariffs";

export async function getTariffs(): Promise<NormalizedTariffs> {
  const res = await fetch("https://t-core.fit-hub.pro/Test/GetTariffs", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch tariffs");
  }

  const data: TariffApi[] = await res.json();

  return normalizeTariffs(data);
}
