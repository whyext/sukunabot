import Link from "next/link";
import React from 'react';

const Sitemap = () => {
  const urls = [
    {
      loc: 'https://sukunabot.vercel.app/',
      lastmod: '2024-03-30T10:45:50+00:00',
      priority: 1.00
    },
    {
      loc: 'https://sukunabot.vercel.app/commands',
      lastmod: '2024-03-30T10:45:50+00:00',
      priority: 0.80
    },
    {
      loc: 'https://sukunabot.vercel.app/partners',
      lastmod: '2024-03-30T10:45:50+00:00',
      priority: 0.80
    },
    {
      loc: 'https://sukunabot.vercel.app/tos',
      lastmod: '2024-03-30T10:45:50+00:00',
      priority: 0.80
    },
    {
      loc: 'https://sukunabot.vercel.app/privacy',
      lastmod: '2024-03-30T10:45:50+00:00',
      priority: 0.80
    }
  ];

  return (
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      {/* created with Free Online Sitemap Generator www.xml-sitemaps.com */}
      {urls.map((url, index) => (
        <url key={index}>
          <loc>{url.loc}</loc>
          <lastmod>{url.lastmod}</lastmod>
          <priority>{url.priority}</priority>
        </url>
      ))}
    </urlset>
  );
}

export default Sitemap;

