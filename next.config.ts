import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    serverActions: true,
    // Add next-intl config for app router
    // https://next-intl.dev/docs/getting-started/app-router#configuration
    i18n: {
      locales: ['fa', 'en'],
      defaultLocale: 'fa',
    },
    // If you want to use next-intl automatic detection
    // localeDetection: true,
  },
};

export default nextConfig;
