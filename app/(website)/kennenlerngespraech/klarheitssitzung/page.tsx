import type { Metadata } from "next";
import BrandLogo from "../../BrandLogo";
import JsonLd from "../../../JsonLd";
import { pageGraph, pageMetadata } from "../../../seo";
// Gestaltung, Farben und Schriften kommen von der Klarheitssitzungs-Seite, damit beide Seiten gleich aussehen.
import k from "../../klarheitssitzung/page.module.css";
import styles from "./page.module.css";
import SiteNav from "../../klarheitssitzung/SiteNav";
import TidyCalCalendar from "../TidyCalCalendar";
import { TIDYCAL_CLARITY_SESSION_CONSENT_KEY } from "../../../tidycalConsent";

const EMAIL = "kontakt@petrasailer.com";
const PHONE = "+4915155348727";
const PHONE_LABEL = "+49 (0)151 5534 8727";

const STEPS = [
  { label: "Du erzählst", text: "kurz, worum es dir geht" },
  { label: "Du fragst", text: "alles, was du vorher wissen willst" },
  { label: "Wir schauen", text: "gemeinsam, ob die Klarheitssitzung passt" },
] as const;

const PAGE_DESCRIPTION =
  "Kostenfreies 15-Minuten-Kennenlerngespräch zur Klarheitssitzung mit Petra Sailer.";

export const metadata: Metadata = pageMetadata({
  title: "Kennenlerngespräch zur Klarheitssitzung",
  description: PAGE_DESCRIPTION,
  path: "/kennenlerngespraech/klarheitssitzung/",
});

export default function ClarityIntroCallPage() {
  return (
    <div className={k.page}>
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
      <a className={k.skipLink} href="#inhalt">Zum Inhalt springen</a>

      <header className={styles.hero}>
        <div className={k.wrap}>
          <SiteNav />
          <div className={styles.heroContent}>
            <div className={`${k.sideNote} ${styles.circle}`} aria-hidden="true">
              <span>Passt mein Thema?</span>
              <span>Wie läuft das ab?</span>
              <span>Bist du die Richtige?</span>
            </div>
            <p className={styles.label}>Kennenlerngespräch · <span className={k.nowrap}>15 Minuten · kostenfrei</span></p>
            <h1>Passt die Klarheitssitzung <em>zu deinem Punkt?</em></h1>
            <p className={styles.heroText}>Du bist noch unsicher oder möchtest mich erst kennenlernen? Dann lass uns 15 Minuten sprechen. Du erzählst mir kurz, worum es geht, stellst deine Fragen, und wir schauen gemeinsam, ob die Klarheitssitzung für dich passt.</p>
            <dl className={styles.steps}>
              {STEPS.map((step) => (
                <div key={step.label}>
                  <dt>{step.label}</dt>
                  <dd>{step.text}</dd>
                </div>
              ))}
            </dl>
            <a className={`${k.btn} ${styles.heroButton}`} href="#termin" data-umami-event="cta_click" data-umami-event-cta="termin_aussuchen" data-umami-event-location="kennenlerngespraech_hero">Termin aussuchen</a>
          </div>
        </div>
      </header>

      <main id="inhalt">
        <section className={styles.booking} id="termin">
          <div className={k.wrap}>
            <div className={styles.bookingTop}>
              <h2>Such dir einen <em>Termin aus.</em></h2>
              <p>Das Gespräch ist kostenfrei und unverbindlich. Nach der Buchung bekommst du alle Infos per E-Mail.</p>
            </div>
            <TidyCalCalendar
              tidyCalUrl="https://tidycal.com/petrasailer/15-min"
              label="15-minütiges Kennenlerngespräch"
              showHeading={false}
              consentKey={TIDYCAL_CLARITY_SESSION_CONSENT_KEY}
              classes={{ calendar: styles.calendar, consent: styles.consent, button: `${k.btn} ${styles.loadButton}` }}
            />
          </div>
        </section>

        <section className={styles.closing}>
          <div className={`${k.wrap} ${styles.closingGrid}`}>
            <h2>Du findest keinen <em>passenden Termin?</em></h2>
            <div>
              <p>Dann schreib mir gern persönlich oder ruf mich direkt an.</p>
              <div className={styles.contactLinks}>
                <a href={`mailto:${EMAIL}`} data-umami-event="contact_click" data-umami-event-method="email" data-umami-event-location="kennenlerngespraech">{EMAIL}</a>
                <a href={`tel:${PHONE}`} data-umami-event="contact_click" data-umami-event-method="phone" data-umami-event-location="kennenlerngespraech">{PHONE_LABEL}</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={k.footer}>
        <div className={k.wrap}>
          <BrandLogo className={k.brand} variant="footer" />
          <nav className={k.footerLinks} aria-label="Rechtliches">
            <a href="/impressum/">Impressum</a>
            <a href="/datenschutz/">Datenschutz</a>
            <a href="/kontakt/">Kontakt</a>
          </nav>
          <p>© Petra Sailer {new Date().getFullYear()} · <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        </div>
      </footer>
    </div>
  );
}
