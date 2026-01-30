export type TariffApi = {
  id: string;
  period: string;
  price: number;
  full_price: number;
  is_best: boolean;
  text: string;
};

export type Tariff = TariffApi & {
  key: string; // безопасный key для React
};
