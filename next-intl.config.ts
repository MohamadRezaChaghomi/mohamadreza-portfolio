import { getRequestConfig } from "next-intl/server";
import { locales, messages } from "./i18n.config";

export default getRequestConfig(async ({ requestLocale }) => {
  // Validate that the requested locale exists
  const locale = (locales as readonly string[]).includes(requestLocale)
    ? (requestLocale as (typeof locales)[number])
    : "fa";

  return {
    messages: await messages[locale](),
  };
});
