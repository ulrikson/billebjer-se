import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: '/private/', // Example: Disallow crawling of a /private directory
    },
    sitemap: 'https://billebjer.se/sitemap.xml',
  }
} 