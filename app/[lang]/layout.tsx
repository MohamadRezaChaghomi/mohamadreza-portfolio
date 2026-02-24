import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import SmoothScroll from '@/components/SmoothScroll';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'محمدرضا چاقمی - توسعه‌دهنده فرانت‌اند',
  description: 'پورتفولیوی محمدرضا چاقمی، توسعه‌دهنده فرانت‌اند با تخصص در React و Next.js',
  keywords: 'فرانت‌اند, React, Next.js, توسعه‌دهنده, پورتفولیو',
  authors: [{ name: 'محمدرضا چاقمی' }],
  openGraph: {
    title: 'محمدرضا چاقمی - توسعه‌دهنده فرانت‌اند',
    description: 'پورتفولیوی محمدرضا چاقمی',
    url: 'https://your-domain.com',
    siteName: 'MRCh Portfolio',
    images: [
      {
        url: '/images/profile/mohamadreza.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
};

export function generateStaticParams() {
  return [{ lang: 'fa' }, { lang: 'en' }];
}

import enMessages from '@/messages/en.json';
import faMessages from '@/messages/fa.json';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  // In Next.js App Router, params is always sync in layout/page, so no need for await
  const lang = params.lang;
  const messages = lang === 'fa' ? faMessages : enMessages;

  return (
    <html lang={lang} dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider locale={lang} messages={messages}>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}