import { TariffApi, Tariff } from "./types";

export interface NormalizedTariffs {
  best: Tariff;
  otherTariffs: Tariff[];
}

export function normalizeTariffs(data: TariffApi[]): NormalizedTariffs {
  const usedKeys = new Set<string>();

  let best: Tariff | null = null;
  let bestPrice = -Infinity;

  let fallbackBest: Tariff | null = null;
  let fallbackPrice = -Infinity;

  const otherTariffs: Tariff[] = [];

  for (let i = 0; i < data.length; i++) {
    const t = data[i];

    let key = t.is_best ? "best" : `${t.period}-${t.price}`;
    if (usedKeys.has(key)) key += `-${i}`;
    usedKeys.add(key);

    const tariff: Tariff = { ...t, key };

    // основной best (is_best)
    if (t.is_best) {
      if (!best || t.price > bestPrice) {
        best = tariff;
        bestPrice = t.price;
      }
      continue;
    }

    // fallback best (max price)
    if (t.price > fallbackPrice) {
      fallbackBest = tariff;
      fallbackPrice = t.price;
    }

    otherTariffs.push(tariff);
  }

  const finalBest = best ?? fallbackBest;

  if (!finalBest) {
    return { best: null as any, otherTariffs: [] };
  }

  // Убираем best из других и сортируем
  const filtered = [];
  for (let i = 0; i < otherTariffs.length; i++) {
    if (otherTariffs[i].key !== finalBest.key) {
      filtered.push(otherTariffs[i]);
    }
  }

  filtered.sort((a, b) => b.price - a.price);

  return { best: finalBest, otherTariffs: filtered };
}
