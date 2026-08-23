import type { Metadata } from "next";
import Link from "next/link";
import shell from "../base.module.css";
import ContactForm from "./ContactForm";
import styles from "./page.module.css";
import siteStyles from "../page.module.css";

const NAVIGATION = [
  { label: "ÜBER MICH", href: "/ueber-mich" },
  { label: "KLARHEITSSITZUNG", href: "/klarheitssitzung" },
  { label: "WIRKLICH DEINS.", href: "/wirklich-deins" },
  { label: "KONTAKT", href: "/kontakt" },
] as const;

export const metadata: Metadata = {
  title: "Arbeite mit mir",
  description: "Zwei Wege der Zusammenarbeit mit Petra Sailer: Klarheitssitzung für einen konkreten Punkt oder Wirklich Deins. für sechs Monate 1:1-Begleitung.",
  alternates: { canonical: "/arbeite-mit-mir/" },
};

function NavLinks() {
  return NAVIGATION.map((item) => <a key={item.label} href={item.href}>{item.label}</a>);
}

type CtaTracking = { cta: string; location: string };

function ActionLink({ href, children, light = false, tracking }: { href: string; children: React.ReactNode; light?: boolean; tracking?: CtaTracking }) {
  return <a className={`${shell.textLink} ${light ? shell.textLinkLight : ""}`} href={href} data-umami-event={tracking ? "cta_click" : undefined} data-umami-event-cta={tracking?.cta} data-umami-event-location={tracking?.location} data-umami-event-destination={tracking ? href : undefined}><span>{children}</span><span aria-hidden="true">→</span></a>;
}

export default function WorkWithMePage() {
  return (
    <div className={`${shell.page} ${styles.workPage}`}>
      <a className={shell.skipLink} href="#inhalt">Zum Inhalt springen</a>
      <header className={shell.header}>
        <div className={shell.headerInner}>
          <Link className={shell.brand} href="/" aria-label="Petra Sailer – Dem Eigenen folgen"><strong>Petra Sailer</strong><span>Dem Eigenen folgen</span></Link>
          <nav className={shell.desktopNav} aria-label="Hauptnavigation"><NavLinks /></nav>
          <a className={shell.headerCta} href="#top" aria-current="page">ARBEITE MIT MIR <span aria-hidden="true">↗</span></a>
          <details className={shell.mobileMenu}><summary><span>MENÜ</span><i aria-hidden="true" /></summary><div className={shell.mobilePanel}><nav aria-label="Mobile Hauptnavigation"><NavLinks /></nav><a className={shell.mobileCta} href="#top" aria-current="page">ARBEITE MIT MIR <span aria-hidden="true">↗</span></a></div></details>
        </div>
      </header>

      <main id="inhalt">
        <section className={styles.hero} id="top">
          <p className={styles.heroMeta}>ARBEITE MIT MIR</p>
          <h1>Du willst etwas in deinem Leben <em>wirklich angehen?</em></h1>
          <div className={styles.heroLower}>
            <p className={styles.heroLead}>Und suchst jemanden, der dich dabei klar begleitet – und immer wieder zu dem zurückführt, was für dich stimmt?</p>
            <div className={styles.heroBody}><p>Vielleicht geht es um einen konkreten Punkt, bei dem du jetzt weiterkommen möchtest. Oder um etwas, das du über längere Zeit verändern, aufbauen oder verwirklichen willst.</p><p>Für beides gibt es eine eigene Form der Zusammenarbeit.</p></div>
            <div className={styles.heroAction}><ActionLink href="#zusammenarbeit">WELCHER WEG PASST ZU MIR?</ActionLink></div>
          </div>
        </section>

        <section className={styles.paths} id="zusammenarbeit">
          <div className={styles.pathsHeading}><div className={shell.sectionMarker}><span>01</span><p>ZWEI WEGE DER ZUSAMMENARBEIT</p></div><h2>Was brauchst du <em>jetzt?</em></h2></div>
          <div className={styles.pathGrid}>
            <article className={`${styles.path} ${styles.pathOne}`}>
              <p className={styles.pathIndex}>01 · EIN KONKRETER PUNKT</p>
              <h3>Klarheitssitzung</h3>
              <p className={styles.pathCopy}>Für ein konkretes Thema, bei dem du gerade feststeckst und jetzt weiterkommen willst. Du erkennst wieder, was für dich wirklich stimmig ist, und gehst mit einem nächsten Schritt aus der Sitzung, mit dem du selbstständig weitergehen kannst.</p>
              <ActionLink href="/klarheitssitzung" tracking={{ cta: "klarheitssitzung_kennenlernen", location: "arbeite_mit_mir_angebote" }}>ZUR KLARHEITSSITZUNG</ActionLink>
            </article>
            <article className={`${styles.path} ${styles.pathTwo}`}>
              <p className={styles.pathIndex}>02 · SECHS MONATE · 1:1</p>
              <h3>Wirklich <em>Deins.</em></h3>
              <p className={styles.pathCopy}>Für das, was du in deinem Leben verändern, aufbauen oder verwirklichen möchtest. Über sechs Monate verbindest du dich immer wieder mit dem, was du wirklich willst. Von dort aus triffst du deine Entscheidungen und gehst konkrete Schritte, die für dich stimmig sind.</p>
              <ActionLink href="/wirklich-deins" light tracking={{ cta: "wirklich_deins_kennenlernen", location: "arbeite_mit_mir_angebote" }}>WIRKLICH DEINS. ENTDECKEN</ActionLink>
            </article>
          </div>
          <p className={styles.pathNote}>Beide Angebote stehen für sich. Du musst keine Klarheitssitzung buchen, um Wirklich Deins. anzufragen.</p>
        </section>

        <section className={styles.contactSection} id="kontaktformular">
          <figure className={styles.portrait}><img src="/petra-sailer-kontakt-2551.jpg" alt="Petra Sailer lächelt draußen in die Kamera" width="423" height="597" /><figcaption className={styles.portraitCaption}>PERSÖNLICH · KLAR · AUF AUGENHÖHE</figcaption></figure>
          <div className={styles.contactContent}>
            <div className={styles.contactIntro}>
              <div><div className={shell.sectionMarker}><span>02</span><p>PERSÖNLICHER KONTAKT</p></div><h2>Du möchtest noch etwas <em>wissen?</em></h2></div>
              <div className={styles.contactCopy}><p>Vielleicht hast du eine Frage zu mir oder meiner Arbeit. Vielleicht möchtest du mehr zu einem der beiden Angebote wissen oder bist noch unsicher, welcher Weg gerade zu dir passt.</p><p>Dann schreib mir. Ich antworte dir persönlich innerhalb von zwei Werktagen.</p><div className={styles.direct}><p className={styles.directLabel}>DU SCHREIBST LIEBER DIREKT?</p><a href="mailto:kontakt@petrasailer.com" data-umami-event="contact_click" data-umami-event-method="email" data-umami-event-location="arbeite_mit_mir_kontakt">kontakt@petrasailer.com</a></div></div>
            </div>
            <div className={styles.formWrap}><p className={styles.formTitle}>DEINE NACHRICHT</p><ContactForm /></div>
          </div>
        </section>
      </main>

      <footer className={`${shell.footer} ${siteStyles.siteFooter}`}><a className={shell.footerBrand} href="#top"><strong>Petra Sailer</strong><span>Dem Eigenen folgen</span></a><nav aria-label="Footer-Navigation"><a href="/ueber-mich">ÜBER MICH</a><a href="/klarheitssitzung">KLARHEITSSITZUNG</a><a href="/wirklich-deins">WIRKLICH DEINS.</a><a href="/kontakt">KONTAKT</a><a href="#top" aria-current="page">ARBEITE MIT MIR</a></nav><a className={shell.footerEmail} href="mailto:kontakt@petrasailer.com" data-umami-event="contact_click" data-umami-event-method="email" data-umami-event-location="footer">kontakt@petrasailer.com</a><div className={shell.footerBottom}><p>© Petra Sailer 2026</p><div><a href="https://petrasailer.com/impressum/">Impressum</a><a href="https://petrasailer.com/datenschutz/">Datenschutz</a></div></div></footer>
    </div>
  );
}
