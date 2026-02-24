// i18n.config.ts - i18n configuration
export const locales = ["fa", "en"] as const;
export const defaultLocale = "fa";

export const messages: Record<
  (typeof locales)[number],
  () => Promise<Record<string, any>>
> = {
  fa: () => import("./messages/fa.json").then((m) => m.default),
  en: () => import("./messages/en.json").then((m) => m.default),
};
