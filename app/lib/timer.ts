const DISCOUNT_KEY = "discount_expire_at";

export function getExpireAt(durationSec: number) {
  const stored = localStorage.getItem(DISCOUNT_KEY);
  if (stored) return Number(stored);

  const expireAt = Date.now() + durationSec * 1000;
  localStorage.setItem(DISCOUNT_KEY, String(expireAt));
  return expireAt;
}

export function clearExpireAt() {
  localStorage.removeItem(DISCOUNT_KEY);
}
