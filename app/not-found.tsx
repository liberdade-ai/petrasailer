import type { Metadata } from "next";
import Link from "next/link";
// Gestaltung wie auf der Klarheitssitzungs-Seite.
import k from "./(website)/klarheitssitzung/page.module.css";
import styles from "./(website)/rechtliches.module.css";
import SiteNav from "./(website)/klarheitssitzung/SiteNav";
import SiteFooter from "./(website)/klarheitssitzung/SiteFooter";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  description: "Die angefragte Seite konnte nicht gefunden werden.",
  alternates: { canonical: "/404/" },
};

export default function NotFound() {
  return (
    <div className={k.page}>
      <a className={k.skipLink} href="#inhalt">Zum Inhalt springen</a>

      <header className={styles.hero}>
        <div className={k.wrap}>
          <SiteNav />
        </div>
      </header>

      <main id="inhalt" className={`${styles.hero} ${styles.notFound}`}>
        <div className={`${k.wrap} ${styles.heroContent}`}>
          <p className={styles.label}>Fehler 404</p>
          <h1>Seite nicht gefunden</h1>
          <p className={styles.heroText}>Die angefragte Seite gibt es nicht oder nicht mehr.</p>
          <div className={`${k.heroActions} ${styles.heroActions}`}>
            <Link className={k.btn} href="/">Zur Startseite</Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
