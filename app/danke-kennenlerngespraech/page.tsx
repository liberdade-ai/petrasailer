import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "../seo";
import shell from "../(website)/base.module.css";
import siteStyles from "../(website)/page.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Dein Termin steht",
  description: "Bestätigung deines Kennenlerngesprächs bei Petra Sailer.",
  path: "/danke-kennenlerngespraech/",
  noIndex: true,
});

export default function DankeKennenlerngespraech() {
  return (
    <div className={`${shell.page} ${styles.thanksPage}`}>
      <a className={shell.skipLink} href="#inhalt">
        Zum Inhalt springen
      </a>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link
            className={shell.brand}
            href="/"
            aria-label="Petra Sailer – Dem Eigenen folgen"
          >
            <img src="/petra-sailer-logo.svg" alt="" />
          </Link>
          <Link className={styles.backLink} href="/">
            Zur Website<span aria-hidden="true">↗</span>
          </Link>
        </div>
      </header>

      <main id="inhalt">
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.sender}>
              WIRKLICH <strong>DEINS.</strong> · KENNENLERNGESPRÄCH
            </p>
            <h1>Dein Termin steht.</h1>
            <h2>Ich freue mich, dich kennenzulernen.</h2>
            <p className={styles.confirmation}>
              Vielen Dank für deine Buchung. Du erhältst eine Bestätigung per
              E-Mail mit deinem Termin und allen Angaben für unser Gespräch.
              Über den Link in dieser E-Mail kannst du deinen Termin bei Bedarf
              verschieben.
            </p>
          </div>
        </section>

        <section className={styles.preparation}>
          <div className={styles.preparationInner}>
            <h2>Was du verwirklichen möchtest.</h2>
            <div className={styles.preparationCopy}>
              <p>
                Was du verwirklichen möchtest, ist unser Ausgangspunkt. Und
                auch das, was dich gerade dazu beschäftigt, hat im Gespräch
                Platz. Gemeinsam schauen wir, ob Wirklich Deins. zu dir passt
                und ob wir miteinander arbeiten möchten.
              </p>
              <p className={styles.closing}>
                Ich freue mich auf unser Kennenlernen.
              </p>
              <p className={styles.signature}>Petra</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={`${shell.footer} ${siteStyles.siteFooter}`}>
        <Link className={shell.footerBrand} href="/">
          <img src="/petra-sailer-footer-logo.svg" alt="" />
        </Link>
        <nav aria-label="Footer-Navigation">
          <a href="/ueber-mich/">ÜBER MICH</a>
          <a href="/klarheitssitzung/">KLARHEITSSITZUNG</a>
          <a href="/wirklich-deins/">WIRKLICH DEINS.</a>
          <a href="/kontakt/">KONTAKT</a>
          <a href="/arbeite-mit-mir/">ARBEITE MIT MIR</a>
        </nav>
        <a
          className={shell.footerEmail}
          href="mailto:kontakt@petrasailer.com"
          data-umami-event="contact_click"
          data-umami-event-method="email"
          data-umami-event-location="footer"
        >
          kontakt@petrasailer.com
        </a>
        <div className={shell.footerBottom}>
          <p>© Petra Sailer 2026</p>
          <div>
            <a href="https://petrasailer.com/impressum/">Impressum</a>
            <a href="https://petrasailer.com/datenschutz/">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
