import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../JsonLd";
import { pageGraph, pageMetadata } from "../../seo";
import shell from "../base.module.css";
import siteStyles from "../page.module.css";
import styles from "./page.module.css";

const PAGE_DESCRIPTION =
  "Kennenlerngespräch zu Wirklich Deins. – kostenfrei und unverbindlich.";

export const metadata: Metadata = pageMetadata({
  title: "Kennenlerngespräch",
  description: PAGE_DESCRIPTION,
  path: "/kennenlerngespraech/",
});

export default function IntroCallPage() {
  return (
    <div className={`${shell.page} ${styles.introCallPage}`}>
      <JsonLd
        data={pageGraph({
          path: "/kennenlerngespraech/",
          name: "Kennenlerngespräch zu Wirklich Deins.",
          description: PAGE_DESCRIPTION,
          breadcrumbs: [
            { name: "Startseite", path: "/" },
            { name: "Wirklich Deins.", path: "/wirklich-deins/" },
            { name: "Kennenlerngespräch", path: "/kennenlerngespraech/" },
          ],
        })}
      />
      <a className={shell.skipLink} href="#inhalt">Zum Inhalt springen</a>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link className={shell.brand} href="/" aria-label="Petra Sailer – Dem Eigenen folgen"><strong>Petra Sailer</strong><span>Dem Eigenen folgen</span></Link>
          <Link className={styles.backLink} href="/">Zur Website<span aria-hidden="true">↗</span></Link>
        </div>
      </header>

      <main id="inhalt">
        <section className={styles.intro} id="top">
          <p className={styles.eyebrow}><span>WIRKLICH</span><strong> DEINS.</strong> · KENNENLERNGESPRÄCH</p>
          <h1>Lass uns schauen, ob <em>Wirklich</em><span> Deins.</span> zu dir passt.</h1>
          <div className={styles.introCopy}>
            <p>Du hast etwas vor und möchtest herausfinden, ob ich die Richtige bin, um dich dabei über sechs Monate zu begleiten? Dann lass uns kennenlernen.</p>
            <p>In unserem Gespräch erzählst du mir, was du verwirklichen möchtest und wo du gerade stehst. Du kannst mir deine Fragen zur Begleitung stellen, und wir schauen gemeinsam, ob eine Zusammenarbeit für uns beide stimmt.</p>
          </div>
        </section>

        <section className={styles.booking}>
          <div className={styles.bookingNote}>
            <span className={styles.noteAccent} aria-hidden="true" />
            <p>Das Gespräch dauert 30 Minuten, ist kostenfrei und unverbindlich. Wähle einfach einen Termin, der für dich passt.</p>
          </div>
          <div className={styles.calendar}>
            <iframe src="https://tidycal.com/petrasailer/30-min" title="TidyCal" loading="lazy" />
          </div>
        </section>

        <section className={styles.closing}>
          <div className={styles.closingInner}>
            <p className={styles.contactClosing}>Du findest keinen passenden Termin? Dann schreib mir gerne persönlich oder ruf mich an.</p>
            <div className={styles.contactLinks}><a href="mailto:kontakt@petrasailer.com">kontakt@petrasailer.com</a><a href="tel:+4915155348727">0049 15155 34 8727</a></div>
          </div>
        </section>
      </main>

      <footer className={`${shell.footer} ${siteStyles.siteFooter}`}>
        <a className={shell.footerBrand} href="#top"><strong>Petra Sailer</strong><span>Dem Eigenen folgen</span></a>
        <nav aria-label="Footer-Navigation"><a href="/ueber-mich/">ÜBER MICH</a><a href="/klarheitssitzung/">KLARHEITSSITZUNG</a><a href="/wirklich-deins/">WIRKLICH DEINS.</a><a href="/kontakt/">KONTAKT</a><a href="/arbeite-mit-mir/">ARBEITE MIT MIR</a></nav>
        <a className={shell.footerEmail} href="mailto:kontakt@petrasailer.com" data-umami-event="contact_click" data-umami-event-method="email" data-umami-event-location="footer">kontakt@petrasailer.com</a>
        <div className={shell.footerBottom}><p>© Petra Sailer 2026</p><div><a href="https://petrasailer.com/impressum/">Impressum</a><a href="https://petrasailer.com/datenschutz/">Datenschutz</a></div></div>
      </footer>
    </div>
  );
}
