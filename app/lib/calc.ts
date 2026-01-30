export function calcDiscount(discountPrice: number, fullPrice: number) {
  return Math.round(((fullPrice - discountPrice) / fullPrice) * 100);
}
