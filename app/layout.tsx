
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={`${vazir.variable} antialiased bg-[var(--bg-primary)] text-[var(--text-primary)]`}>
        {children}
      </body>
    </html>
  );
}
