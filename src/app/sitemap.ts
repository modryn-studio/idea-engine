import { MetadataRoute } from 'next';
import { site } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date('2026-03-23'),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
