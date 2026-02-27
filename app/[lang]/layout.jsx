import SmoothScroll from '@/components/SmoothScroll';

export default async function LocaleLayout({ children, params }) {
  const { lang } = await params;
  const direction = lang === 'fa' ? 'rtl' : 'ltr';

  return (
    <div dir={direction} lang={lang}>
      <SmoothScroll>
        {children}
      </SmoothScroll>
    </div>
  );
}