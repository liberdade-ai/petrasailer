import type { Metadata } from "next";
import Link from "next/link";
import shell from "../base.module.css";
import siteStyles from "../page.module.css";
import styles from "./page.module.css";
import { pageMetadata } from "../../seo";

const NAVIGATION = [
  { label: "ÜBER MICH", href: "/ueber-mich/" },
  { label: "KLARHEITSSITZUNG", href: "/klarheitssitzung/" },
  { label: "WIRKLICH DEINS.", href: "/wirklich-deins/" },
  { label: "KONTAKT", href: "/kontakt/" },
] as const;

export const metadata: Metadata = pageMetadata({
  title: "Impressum",
  description: "Impressum von Petra Sailer und liberdade freedom consulting Ltd.",
  path: "/impressum/",
  noIndex: true,
});

function NavLinks() {
  return NAVIGATION.map((item) => <a key={item.label} href={item.href}>{item.label}</a>);
}

export default function ImprintPage() {
  return (
    <div className={`${shell.page} ${styles.imprintPage}`}>
      <a className={shell.skipLink} href="#inhalt">Zum Inhalt springen</a>
      <header className={shell.header}>
        <div className={shell.headerInner}>
          <Link className={shell.brand} href="/" aria-label="Petra Sailer – Dem Eigenen folgen"><img src="/petra-sailer-logo.svg" alt="" /></Link>
          <nav className={shell.desktopNav} aria-label="Hauptnavigation"><NavLinks /></nav>
          <a className={shell.headerCta} href="/arbeite-mit-mir/">ARBEITE MIT MIR <span aria-hidden="true">↗</span></a>
          <details className={shell.mobileMenu}>
            <summary><span>MENÜ</span><i aria-hidden="true" /></summary>
            <div className={shell.mobilePanel}>
              <nav aria-label="Mobile Hauptnavigation"><NavLinks /></nav>
              <a className={shell.mobileCta} href="/arbeite-mit-mir/">ARBEITE MIT MIR <span aria-hidden="true">↗</span></a>
            </div>
          </details>
        </div>
      </header>

      <main id="inhalt">
        <section className={styles.hero}>
          <p>RECHTLICHE ANGABEN</p>
          <h1>Impressum</h1>
        </section>

        <section className={styles.content} aria-label="Impressum Angaben">
          <div className={styles.entries}>
            <section>
              <h2>Angaben gemäß § 5 DDG</h2>
              <address>liberdade freedom consulting Ltd.<br />Hemus Street 2<br />1111 Sofia<br />Bulgarien</address>
              <p><strong>Vertreten durch:</strong><br />Petra Sailer</p>
            </section>

            <section>
              <h2>Kontakt</h2>
              <p>E-Mail: <a href="mailto:office@liberdade.ltd">office@liberdade.ltd</a></p>
            </section>

            <section>
              <h2>Registereintrag</h2>
              <p>Eingetragen im Commercial Register and Register of Non-Profit Legal Entities, geführt durch die Registry Agency, Bulgarien.<br />EIK: 207376199</p>
            </section>

            <section>
              <h2>Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer (VAT-ID): BG207376199</p>
            </section>

            <section>
              <h2>Verbraucherstreitbeilegung</h2>
              <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </section>
          </div>
        </section>
      </main>

      <footer className={`${shell.footer} ${siteStyles.siteFooter}`}>
        <a className={shell.footerBrand} href="#inhalt"><img src="/petra-sailer-footer-logo.svg" alt="" /></a>
        <nav aria-label="Footer-Navigation"><NavLinks /><a href="/arbeite-mit-mir/">ARBEITE MIT MIR</a></nav>
        <a className={shell.footerEmail} href="mailto:kontakt@petrasailer.com">kontakt@petrasailer.com</a>
        <div className={shell.footerBottom}><p>© Petra Sailer 2026</p><div><a href="/impressum/" aria-current="page">Impressum</a><a href="/datenschutz/">Datenschutz</a></div></div>
      </footer>
    </div>
  );
}
