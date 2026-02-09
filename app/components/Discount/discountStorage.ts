export const STORAGE_KEY = "discount_expire_at";

export function getOrCreateExpireAt(DURATION = 1 * 20 * 1000) {
  let saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    saved = (Date.now() + DURATION).toString();
    localStorage.setItem(STORAGE_KEY, saved);
  }

  return Number(saved);
}
