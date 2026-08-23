import type { Metadata } from "next";
import Link from "next/link";
import shell from "../(website)/base.module.css";
import siteStyles from "../(website)/page.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Vielen Dank für deine Buchung",
  description: "Bestätigung deiner Buchung der Klarheitssitzung bei Petra Sailer.",
  alternates: { canonical: "/danke-klarheitssitzung/" },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function DankeKlarheitssitzung() {
  return (
    <div className={`${shell.page} ${styles.thanksPage}`}>
      <a className={shell.skipLink} href="#inhalt">Zum Inhalt springen</a>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link className={shell.brand} href="/" aria-label="Petra Sailer – Dem Eigenen folgen">
            <strong>Petra Sailer</strong>
            <span>Dem Eigenen folgen</span>
          </Link>
          <Link className={styles.backLink} href="/">
            Zur Website
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </header>

      <main id="inhalt">
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.heroMeta}>DEINE KLARHEITSSITZUNG</p>
            <div className={styles.heroMain}>
              <h1>Vielen Dank für deine Buchung.</h1>
              <div className={styles.confirmation}>
                <p className={styles.lead}>Ich melde mich innerhalb eines Werktages persönlich per E-Mail bei dir, damit wir einen Termin für deine Klarheitssitzung vereinbaren. Den Link für unsere Online-Sitzung erhältst du anschließend ebenfalls per E-Mail.</p>
              </div>
            </div>
            <div className={styles.nextStep}>
              <h2 className={styles.subheading}>Du musst nichts vorbereiten.</h2>
              <div className={styles.nextCopy}>
                <p className={styles.subText}>Es reicht, wenn du den einen Punkt mitbringst, bei dem du gerade nicht weiterkommst.</p>
                <p className={styles.closing}>Ich freue mich auf unsere gemeinsame Sitzung.</p>
                <p className={styles.legalNote}>Die Abbuchung erfolgt über Digistore24.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={`${shell.footer} ${siteStyles.siteFooter}`}>
        <Link className={shell.footerBrand} href="/"><strong>Petra Sailer</strong><span>Dem Eigenen folgen</span></Link>
        <nav aria-label="Footer-Navigation"><a href="/ueber-mich">ÜBER MICH</a><a href="/klarheitssitzung">KLARHEITSSITZUNG</a><a href="/wirklich-deins">WIRKLICH DEINS.</a><a href="/kontakt">KONTAKT</a><a href="/arbeite-mit-mir">ARBEITE MIT MIR</a></nav>
        <a className={shell.footerEmail} href="mailto:kontakt@petrasailer.com" data-umami-event="contact_click" data-umami-event-method="email" data-umami-event-location="footer">kontakt@petrasailer.com</a>
        <div className={shell.footerBottom}><p>© Petra Sailer 2026</p><div><a href="https://petrasailer.com/impressum/">Impressum</a><a href="https://petrasailer.com/datenschutz/">Datenschutz</a></div></div>
      </footer>
    </div>
  );
}
