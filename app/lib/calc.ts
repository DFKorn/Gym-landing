export function calcDiscount(price: number, full: number) {
  return Math.round(((full - price) / full) * 100);
}
