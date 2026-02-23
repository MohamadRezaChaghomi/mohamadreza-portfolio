import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [{ lang: 'fa' }, { lang: 'en' }];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  let messages;
  try {
    messages = (await import(`../../../messages/${params.lang}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.lang} dir={params.lang === 'fa' ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider locale={params.lang} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}