import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../../JsonLd";
import { pageGraph, pageMetadata } from "../../../seo";
import shell from "../../base.module.css";
import siteStyles from "../../page.module.css";
import styles from "../page.module.css";
import clarityStyles from "./page.module.css";
import TidyCalCalendar from "../TidyCalCalendar";

const PAGE_DESCRIPTION =
  "Kostenfreies 15-Minuten-Kennenlerngespräch zur Klarheitssitzung mit Petra Sailer.";

export const metadata: Metadata = pageMetadata({
  title: "Kennenlerngespräch zur Klarheitssitzung",
  description: PAGE_DESCRIPTION,
  path: "/kennenlerngespraech/klarheitssitzung/",
});

export default function ClarityIntroCallPage() {
  return (
    <div className={`${shell.page} ${styles.introCallPage}`}>
      <JsonLd
        data={pageGraph({
          path: "/kennenlerngespraech/klarheitssitzung/",
          name: "Kennenlerngespräch zur Klarheitssitzung",
          description: PAGE_DESCRIPTION,
          breadcrumbs: [
            { name: "Startseite", path: "/" },
            { name: "Klarheitssitzung", path: "/klarheitssitzung/" },
            { name: "Kennenlerngespräch", path: "/kennenlerngespraech/klarheitssitzung/" },
          ],
        })}
      />
      <a className={shell.skipLink} href="#inhalt">Zum Inhalt springen</a>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link className={shell.brand} href="/" aria-label="Petra Sailer – Dem Eigenen folgen"><img src="/petra-sailer-logo-dark.svg" alt="" /></Link>
          <Link className={styles.backLink} href="/">Zur Website<span aria-hidden="true">↗</span></Link>
        </div>
      </header>

      <main id="inhalt">
        <section className={styles.intro} id="top">
          <p className={styles.eyebrow}>01 · KLARHEITSSITZUNG · KENNENLERNGESPRÄCH</p>
          <h1 className={clarityStyles.heroHeadline}><span>Passt die Klarheitssitzung</span><span>zu deinem Thema?</span></h1>
          <div className={`${styles.introCopy} ${clarityStyles.introCopy}`}>
            <p>Du bist noch unsicher oder möchtest mich vorher kurz kennenlernen? Dann buch dir ein kostenfreies 15-Minuten-Kennenlerngespräch. Du kannst mir kurz erzählen, worum es geht, deine Fragen stellen und schauen, ob die Klarheitssitzung für dich passt.</p>
          </div>
        </section>

        <section className={styles.booking}>
          <div className={clarityStyles.bookingHeading}>
            <p>02 · KENNENLERNGESPRÄCH</p>
            <h2>Finde einen Termin, der für dich passt.</h2>
          </div>
          <TidyCalCalendar tidyCalUrl="https://tidycal.com/petrasailer/15-min" label="15-MINUTIGES KENNENLERNGESPRÄCH" showHeading={false} />
        </section>

        <section className={styles.closing}>
          <div className={styles.closingInner}>
            <p className={clarityStyles.contactClosing}>Du findest keinen passenden Termin?<br />Dann schreib mir gerne persönlich oder ruf mich direkt an.</p>
            <div className={clarityStyles.contactLinks}><a href="mailto:kontakt@petrasailer.com">kontakt@petrasailer.com</a><a href="tel:+4915155348727">+49 (0)151 5534 8727</a></div>
          </div>
        </section>
      </main>

      <footer className={`${shell.footer} ${siteStyles.siteFooter}`}>
        <Link className={shell.footerBrand} href="/"><img src="/petra-sailer-footer-logo.svg" alt="" /></Link>
        <nav aria-label="Footer-Navigation"><a href="/ueber-mich/">ÜBER MICH</a><a href="/klarheitssitzung/">KLARHEITSSITZUNG</a><a href="/wirklich-deins/">WIRKLICH DEINS.</a><a href="/kontakt/">KONTAKT</a><a href="/arbeite-mit-mir/">ARBEITE MIT MIR</a></nav>
        <a className={shell.footerEmail} href="mailto:kontakt@petrasailer.com">kontakt@petrasailer.com</a>
        <div className={shell.footerBottom}><p>© Petra Sailer 2026</p><div><a href="https://petrasailer.com/impressum/">Impressum</a><a href="https://petrasailer.com/datenschutz/">Datenschutz</a></div></div>
      </footer>
    </div>
  );
}
