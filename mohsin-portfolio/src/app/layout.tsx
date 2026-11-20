import type { Metadata, Viewport } from "next";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { profile } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL to your live domain after deploying (e.g. on Vercel)
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: `${profile.name} | ${profile.title}`,
  description: profile.tagline,
  keywords: [
    profile.name,
    profile.title,
    "Customer Service",
    "Account Management",
    "Data Analysis",
    "Portfolio",
  ],
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description: profile.tagline,
    images: [profile.photo],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1120",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
