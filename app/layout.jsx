import { Vazirmatn } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const vazir = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata = {
  title: "محمدرضا چاقمی - توسعه‌دهنده فرانت‌اند",
  description: "پورتفولیوی محمدرضا چاقمی، توسعه‌دهنده فرانت‌اند با تخصص در React و Next.js",
  keywords: "فرانت‌اند, React, Next.js, توسعه‌دهنده, پورتفولیو",
  authors: [{ name: "محمدرضا چاقمی" }],
  openGraph: {
    title: "محمدرضا چاقمی - توسعه‌دهنده فرانت‌اند",
    description: "پورتفولیوی محمدرضا چاقمی",
    url: "https://your-domain.com",
    siteName: "MRCh Portfolio",
    images: [
      {
        url: "/images/profile/mohamadreza.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" suppressHydrationWarning>
      <body className={`${vazir.variable} antialiased bg-[var(--bg-primary)] text-[var(--text-primary)]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}