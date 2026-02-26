import { NextIntlClientProvider } from 'next-intl';

export function I18nProvider({ locale, children, messages }) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}