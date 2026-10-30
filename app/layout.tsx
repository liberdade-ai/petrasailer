import type { Metadata } from "next";
import JsonLd from "./JsonLd";
import { SITE_NAME, SITE_URL, siteGraph } from "./seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | Petra Sailer",
  },
  description:
    "Eigene Antworten statt fremder Ratschläge: Petra Sailer begleitet Menschen dabei, klar zu erkennen, was für sie stimmt, und danach zu handeln.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description:
      "Eigene Antworten. Bewusste Wahl. Konkrete Schritte.",
    images: [
      {
        url: "/og-allgemein.png",
        width: 1200,
        height: 630,
        alt: "Petra Sailer lacht. Daneben steht: Dem Eigenen Folgen.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Petra Sailer – Dem Eigenen Folgen",
    description: "Eigene Antworten. Bewusste Wahl. Konkrete Schritte.",
    images: ["/og-allgemein.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  authors: [{ name: "Petra Sailer", url: SITE_URL }],
  creator: "Petra Sailer",
  publisher: "Petra Sailer",
  referrer: "strict-origin-when-cross-origin",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de-DE">
      <head>
        <JsonLd data={siteGraph} />
        <script
          defer
          src="https://analytics.christiansailer.com/script.js"
          data-website-id="3c112496-17ee-40ac-af86-a304e9898464"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
