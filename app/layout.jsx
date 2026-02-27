import { Vazirmatn } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import "@/styles/hero.css";
import "@/styles/skills.css";
import "@/styles/projects.css";
import "@/styles/about.css";
import "@/styles/contact.css";
import "@/styles/components.css";
import "@/styles/project-detail.css";
import "@/styles/error.css";

const vazir = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata = {
  title: "Mohammad Reza Chaghomi - Frontend Developer",
  description: "Portfolio of Mohammad Reza Chaghomi, a front-end developer specializing in React and Next.js",
  keywords: "frontend, React, Next.js, developer, portfolio",
  authors: [{ name: "Mohammad Reza Chaghomi" }],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  metadataBase: new URL("https://mohamadreza-portfolio.vercel.app"),
  openGraph: {
    title: "Mohammad Reza Chaghomi - Frontend Developer",
    description: "Portfolio of Mohammad Reza Chaghomi",
    url: "https://mohamadreza-portfolio.vercel.app",
    siteName: "MRCh Portfolio",
    images: [
      {
        url: "/images/profile/mohamadreza.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport = "width=device-width, initial-scale=1.0, maximum-scale=5.0";

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