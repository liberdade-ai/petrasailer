import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://petrasailer.com"),
  title: {
    default: "Petra Sailer – Dem Eigenen folgen",
    template: "%s | Petra Sailer",
  },
  description:
    "Eigene Antworten statt fremder Ratschläge: Petra Sailer begleitet Menschen dabei, klar zu erkennen, was für sie stimmt, und danach zu handeln.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: "Petra Sailer – Dem Eigenen folgen",
    description:
      "Eigene Antworten. Bewusste Wahl. Konkrete Schritte.",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Petra Sailer – Dem Eigenen folgen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Petra Sailer – Dem Eigenen folgen",
    description: "Eigene Antworten. Bewusste Wahl. Konkrete Schritte.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/petra-sailer-logo.svg",
    shortcut: "/petra-sailer-logo.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <head>
        <script
          defer
          src="https://analytics.christiansailer.com/script.js"
          data-website-id="3c112496-17ee-40ac-af86-a304e9898464"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=DM+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
