import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import MotionProvider from "@/components/providers/MotionProvider";
import { education, profile, skillCategories } from "@/data/portfolio";
import { siteName, siteUrl } from "@/lib/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = "MD. Abdullah Al Shahed | Junior Full Stack Developer";
const description =
  "Portfolio of MD. Abdullah Al Shahed, a Junior Full Stack Developer building modern web applications with JavaScript, React, Next.js, Node.js, Express, and MongoDB.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | MD. Abdullah Al Shahed`,
  },
  description,
  applicationName: siteName,
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  keywords: [
    "MD. Abdullah Al Shahed",
    "Abdullah Al Shahed",
    "Junior Full Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "Portfolio",
    "Bangladesh",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08090b",
  colorScheme: "dark",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.designation,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  url: siteUrl,
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: skillCategories.flatMap((category) =>
    category.skills.map((skill) => skill.name),
  ),
  alumniOf: {
    "@type": "EducationalOrganization",
    name: education.institution,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">
        <MotionProvider>
          <a
            href="#main-content"
            className="fixed left-4 top-3 z-[100] -translate-y-24 rounded-md bg-ink px-4 py-2 text-sm font-medium text-canvas transition-transform focus:translate-y-0"
          >
            Skip to content
          </a>
          <Navbar />
          {children}
          <Footer />
        </MotionProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
