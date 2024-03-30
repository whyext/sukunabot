import Link from "next/link";
import React from 'react';

const Sitemap = () => {
  const xmlContent = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://sukunabot.vercel.app/</loc>
        <lastmod>2024-03-30T10:45:50+00:00</lastmod>
        <priority>1.00</priority>
    </url>
    <url>
        <loc>https://sukunabot.vercel.app/commands</loc>
        <lastmod>2024-03-30T10:45:50+00:00</lastmod>
        <priority>0.80</priority>
    </url>
    <url>
        <loc>https://sukunabot.vercel.app/partners</loc>
        <lastmod>2024-03-30T10:45:50+00:00</lastmod>
        <priority>0.80</priority>
    </url>
    <url>
        <loc>https://sukunabot.vercel.app/tos</loc>
        <lastmod>2024-03-30T10:45:50+00:00</lastmod>
        <priority>0.80</priority>
    </url>
    <url>
        <loc>https://sukunabot.vercel.app/privacy</loc>
        <lastmod>2024-03-30T10:45:50+00:00</lastmod>
        <priority>0.80</priority>
    </url>
</urlset>
  `;

  return <>{xmlContent}</>;
};

export default Sitemap;
