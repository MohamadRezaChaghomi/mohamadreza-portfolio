export default function sitemap() {
  const baseUrl = 'https://your-domain.com';
  const languages = ['fa', 'en'];
  const routes = ['', '/projects', '/about', '/contact'];

  const sitemapEntries = languages.flatMap(lang =>
    routes.map(route => ({
      url: `${baseUrl}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: route === '' ? 1 : 0.8,
    }))
  );

  return sitemapEntries;
}