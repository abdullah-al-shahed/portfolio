/**
 * Site-wide configuration.
 *
 * TODO: Set NEXT_PUBLIC_SITE_URL in production (Vercel project settings)
 * to your real domain so canonical URLs, sitemap and Open Graph tags are correct.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://your-portfolio.vercel.app"
).replace(/\/$/, "");

export const siteName = "MD. Abdullah Al Shahed — Portfolio";
