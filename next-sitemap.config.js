/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://megaplywood.id',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin/*', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    additionalSitemaps: [
      'https://megaplywood.id/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    const customPriority = {
      '/': 1.0,
      '/produk': 0.9,
      '/spesifikasi': 0.9,
      '/samples': 0.8,
      '/sejarah': 0.7,
      '/tentang': 0.7,
      '/kontak': 0.6,
    }

    const customChangeFreq = {
      '/': 'daily',
      '/produk': 'weekly',
      '/spesifikasi': 'monthly',
      '/samples': 'weekly',
      '/sejarah': 'yearly',
      '/tentang': 'monthly',
      '/kontak': 'monthly',
    }

    return {
      loc: path,
      changefreq: customChangeFreq[path] || 'monthly',
      priority: customPriority[path] || 0.5,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}
