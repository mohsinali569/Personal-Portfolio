import type { Metadata, Viewport } from "next";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource-variable/manrope";
import { profile } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL to your live domain after deploying (e.g. on Vercel)
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: `${profile.name} — ${profile.title}`,
  description: profile.tagline,
  keywords: [profile.name, profile.title, "Customer Service", "Account Management", "Data Analysis", "Portfolio"],
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
    images: [profile.photo],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fef4dc" },
    { media: "(prefers-color-scheme: dark)", color: "#2e0000" },
  ],
};

// Runs before the page paints, so the saved theme is applied without a flash.
const themeScript = `(function(){try{var d=document.documentElement;d.classList.add('js');var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}d.setAttribute('data-theme',t)}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
