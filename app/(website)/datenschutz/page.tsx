import type { Metadata } from "next";
import Link from "next/link";
import shell from "../base.module.css";
import siteStyles from "../page.module.css";
import { pageMetadata } from "../../seo";
import TidyCalConsentRevocation from "./TidyCalConsentRevocation";
import styles from "./page.module.css";

const NAVIGATION = [
  { label: "ÜBER MICH", href: "/ueber-mich/" },
  { label: "KLARHEITSSITZUNG", href: "/klarheitssitzung/" },
  { label: "WIRKLICH DEINS.", href: "/wirklich-deins/" },
  { label: "KONTAKT", href: "/kontakt/" },
] as const;

export const metadata: Metadata = pageMetadata({
  title: "Datenschutz",
  description: "Datenschutz-Einstellungen für Petra Sailer.",
  path: "/datenschutz/",
  noIndex: true,
});

function NavLinks() {
  return NAVIGATION.map((item) => <a key={item.label} href={item.href}>{item.label}</a>);
}

export default function PrivacyPage() {
  return (
    <div className={`${shell.page} ${styles.privacyPage}`}>
      <a className={shell.skipLink} href="#inhalt">Zum Inhalt springen</a>
      <header className={shell.header}>
        <div className={shell.headerInner}>
          <Link className={shell.brand} href="/" aria-label="Petra Sailer – Dem Eigenen folgen"><img src="/petra-sailer-logo.svg" alt="" /></Link>
          <nav className={shell.desktopNav} aria-label="Hauptnavigation"><NavLinks /></nav>
          <a className={shell.headerCta} href="/arbeite-mit-mir/">ARBEITE MIT MIR <span aria-hidden="true">↗</span></a>
          <details className={shell.mobileMenu}><summary><span>MENÜ</span><i aria-hidden="true" /></summary><div className={shell.mobilePanel}><nav aria-label="Mobile Hauptnavigation"><NavLinks /></nav><a className={shell.mobileCta} href="/arbeite-mit-mir/">ARBEITE MIT MIR <span aria-hidden="true">↗</span></a></div></details>
        </div>
      </header>

      <main id="inhalt" className={styles.content}>
        <p className={styles.eyebrow}>DATENSCHUTZ</p>
        <h1>Datenschutz</h1>
        <section className={styles.settings} aria-labelledby="tidycal-settings">
          <h2 id="tidycal-settings">TidyCal-Einstellungen</h2>
          <p>Du kannst deine Einwilligung zum Laden des TidyCal-Kalenders jederzeit für dieses Gerät widerrufen. Beim nächsten Aufruf bleibt der Kalender wieder blockiert, bis du ihn erneut lädst.</p>
          <TidyCalConsentRevocation />
        </section>
      </main>

      <footer className={`${shell.footer} ${siteStyles.siteFooter}`}>
        <a className={shell.footerBrand} href="#inhalt"><img src="/petra-sailer-footer-logo.svg" alt="" /></a>
        <nav aria-label="Footer-Navigation"><NavLinks /><a href="/arbeite-mit-mir/">ARBEITE MIT MIR</a></nav>
        <a className={shell.footerEmail} href="mailto:kontakt@petrasailer.com">kontakt@petrasailer.com</a>
        <div className={shell.footerBottom}><p>© Petra Sailer 2026</p><div><a href="/impressum/">Impressum</a><a href="/datenschutz/" aria-current="page">Datenschutz</a></div></div>
      </footer>
    </div>
  );
}
