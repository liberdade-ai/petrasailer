import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../JsonLd";
import { pageGraph, pageMetadata } from "../../seo";
import shell from "../base.module.css";
import ContactForm from "./ContactForm";
import styles from "./page.module.css";
import siteStyles from "../page.module.css";

const NAVIGATION = [
  { label: "ÜBER MICH", href: "/ueber-mich/" },
  { label: "KLARHEITSSITZUNG", href: "/klarheitssitzung/" },
  { label: "WIRKLICH DEINS.", href: "/wirklich-deins/" },
  { label: "KONTAKT", href: "#top", current: true },
] as const;

const PAGE_DESCRIPTION =
  "Du hast eine Frage zu Petra Sailers Arbeit oder zu einem ihrer Angebote? Schreib ihr persönlich oder ruf sie direkt an.";

export const metadata: Metadata = pageMetadata({
  title: "Kontakt",
  description: PAGE_DESCRIPTION,
  path: "/kontakt/",
});

function NavLinks() {
  return NAVIGATION.map((item) => <a key={item.label} href={item.href} aria-current={"current" in item && item.current ? "page" : undefined}>{item.label}</a>);
}

function ActionLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className={`${shell.textLink} ${shell.textLinkLight}`} href={href}><span>{children}</span><span aria-hidden="true">↓</span></a>;
}

export default function ContactPage() {
  return (
    <div className={`${shell.page} ${styles.contactPage}`}>
      <JsonLd
        data={pageGraph({
          path: "/kontakt/",
          name: "Kontakt zu Petra Sailer",
          description: PAGE_DESCRIPTION,
          type: "ContactPage",
          breadcrumbs: [
            { name: "Startseite", path: "/" },
            { name: "Kontakt", path: "/kontakt/" },
          ],
        })}
      />
      <a className={shell.skipLink} href="#inhalt">Zum Inhalt springen</a>
      <header className={shell.header}>
        <div className={shell.headerInner}>
          <Link className={shell.brand} href="/" aria-label="Petra Sailer – Dem Eigenen folgen"><img src="/petra-sailer-logo.svg" alt="" /></Link>
          <nav className={shell.desktopNav} aria-label="Hauptnavigation"><NavLinks /></nav>
          <a className={shell.headerCta} href="/arbeite-mit-mir/" data-umami-event="cta_click" data-umami-event-cta="arbeite_mit_mir" data-umami-event-location="header" data-umami-event-destination="/arbeite-mit-mir/">ARBEITE MIT MIR <span aria-hidden="true">↗</span></a>
          <details className={shell.mobileMenu}><summary><span>MENÜ</span><i aria-hidden="true" /></summary><div className={shell.mobilePanel}><nav aria-label="Mobile Hauptnavigation"><NavLinks /></nav><a className={shell.mobileCta} href="/arbeite-mit-mir/" data-umami-event="cta_click" data-umami-event-cta="arbeite_mit_mir" data-umami-event-location="mobile_header" data-umami-event-destination="/arbeite-mit-mir/">ARBEITE MIT MIR <span aria-hidden="true">↗</span></a></div></details>
        </div>
      </header>

      <main id="inhalt">
        <section className={styles.hero} id="top">
          <div className={styles.heroMeta}><div className={`${shell.sectionMarker} ${styles.roundMarker}`}><span>01</span><p>KONTAKT</p></div></div>
          <h1>Was möchtest du <em>noch wissen?</em></h1>
          <div className={styles.heroCopy}>
            <div><p>Vielleicht hast du eine Frage zu meiner Arbeit oder zu einem der beiden Angebote. Oder es gibt etwas, das dir vor deiner Entscheidung noch wichtig ist.</p><p>Dann schreib mir. Ich antworte dir persönlich innerhalb von zwei Werktagen.</p></div>
            <div className={styles.heroAction}><ActionLink href="#kontaktformular">Nachricht schreiben</ActionLink></div>
          </div>
          <div className={styles.messageMark} aria-hidden="true"><span>?</span></div>
        </section>

        <section className={styles.formSection} id="kontaktformular">
          <div className={styles.formIntro}><div className={styles.formIntroInner}><div className={shell.sectionMarker}><span>02</span><p>DEINE NACHRICHT</p></div><h2><span>Schreib</span><span>mir, <em>worum</em></span><span><em>es geht.</em></span></h2><p className={styles.formLead}>Du brauchst dafür keine lange Nachricht. Ein paar Sätze genügen. Wenn du dich bereits für eines der Angebote interessierst, schreib es gerne dazu.</p><div className={styles.direct}><p className={styles.directLabel}>DU MÖCHTEST LIEBER DIREKT SCHREIBEN ODER ANRUFEN?</p><a href="mailto:kontakt@petrasailer.com" data-umami-event="contact_click" data-umami-event-method="email" data-umami-event-location="kontakt_direktkontakt">kontakt@petrasailer.com</a><a href="tel:+4915155348727" data-umami-event="contact_click" data-umami-event-method="phone" data-umami-event-location="kontakt_direktkontakt">+49 1515 5348727</a></div></div></div>
          <div className={styles.formShell}><ContactForm /></div>
        </section>
      </main>

      <footer className={`${shell.footer} ${siteStyles.siteFooter}`}><a className={shell.footerBrand} href="#top"><img src="/petra-sailer-footer-logo.svg" alt="" /></a><nav aria-label="Footer-Navigation"><a href="/ueber-mich/">ÜBER MICH</a><a href="/klarheitssitzung/">KLARHEITSSITZUNG</a><a href="/wirklich-deins/">WIRKLICH DEINS.</a><a href="#top">KONTAKT</a><a href="/arbeite-mit-mir/">ARBEITE MIT MIR</a></nav><a className={shell.footerEmail} href="mailto:kontakt@petrasailer.com" data-umami-event="contact_click" data-umami-event-method="email" data-umami-event-location="footer">kontakt@petrasailer.com</a><div className={shell.footerBottom}><p>© Petra Sailer 2026</p><div><a href="https://petrasailer.com/impressum/">Impressum</a><a href="https://petrasailer.com/datenschutz/">Datenschutz</a></div></div></footer>
    </div>
  );
}
