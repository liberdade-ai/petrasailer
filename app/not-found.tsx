import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  description: "Die angefragte Seite konnte nicht gefunden werden.",
  alternates: { canonical: "/404/" },
};

export default function NotFound() {
  return (
    <main>
      <h1>Seite nicht gefunden</h1>
      <p>Die angefragte Seite gibt es nicht oder nicht mehr.</p>
      <Link href="/">Zur Startseite</Link>
    </main>
  );
}
