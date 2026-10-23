import BrandLogo from "../(website)/BrandLogo";
// Gestaltung wie auf der Klarheitssitzungs-Seite; Aufbau wie auf der Kennenlern-Seite.
import k from "../(website)/klarheitssitzung/page.module.css";
import styles from "./danke.module.css";
import ThanksNav from "../(website)/klarheitssitzung/ThanksNav";
import Greeting from "../(website)/klarheitssitzung/Greeting";
import TidyCalCalendar from "../(website)/kennenlerngespraech/TidyCalCalendar";
import { TIDYCAL_CLARITY_SESSION_CONSENT_KEY } from "../tidycalConsent";

const BOOKING_CALENDAR_URL = "https://tidycal.com/petrasailer/klarheitssitzung-mit-petra-sailer";
const EMAIL = "kontakt@petrasailer.com";
const PHONE = "+4915155348727";
const PHONE_LABEL = "+49 (0)151 5534 8727";

type DankeSeiteProps = {
  label: string;
  location: string;
  intro: string;
  calendarHeading: React.ReactNode;
  calendarText: string;
  note?: string;
  buttonLabel?: string;
};

// Danke-Seite nach dem Kauf bei Digistore24, mit eingebettetem TidyCal-Kalender.
export default function DankeSeite({ label, location, intro, calendarHeading, calendarText, note, buttonLabel = "Termin aussuchen" }: DankeSeiteProps) {
  return (
    <div className={k.page}>
      <a className={k.skipLink} href="#inhalt">Zum Inhalt springen</a>

      <header className={styles.hero}>
        <div className={k.wrap}>
          <ThanksNav />
          <div className={styles.heroContent}>
            <p className={styles.label}>{label}</p>
            <h1>Danke für deine <em>Buchung.</em></h1>
            <p className={styles.heroText}>{intro}</p>
            <a className={`${k.btn} ${styles.heroButton}`} href="#termin" data-umami-event="cta_click" data-umami-event-cta="termin_aussuchen" data-umami-event-location={location}>{buttonLabel}</a>
          </div>
        </div>
      </header>

      <main id="inhalt">
        <section className={styles.booking} id="termin">
          <div className={k.wrap}>
            <div className={styles.bookingTop}>
              <h2>{calendarHeading}</h2>
              <p>{calendarText}</p>
            </div>
            <TidyCalCalendar
              tidyCalUrl={BOOKING_CALENDAR_URL}
              label="Termin für deine Klarheitssitzung"
              showHeading={false}
              consentKey={TIDYCAL_CLARITY_SESSION_CONSENT_KEY}
              classes={{ calendar: styles.calendar, consent: styles.consent, button: `${k.btn} ${styles.loadButton}` }}
            />
            <p className={styles.fallback}>Falls der Kalender nicht angezeigt wird: <a href={BOOKING_CALENDAR_URL} target="_blank" rel="noopener noreferrer">Terminbuchung in neuem Fenster öffnen</a></p>
          </div>
        </section>

        <section className={styles.closing}>
          <div className={`${k.wrap} ${styles.closingGrid}`}>
            <h2>Für die Sitzung <em>brauchst du nur …</em></h2>
            <div>
              <p className={styles.prepare}>einen Raum, in dem du ungestört bist, etwas zu trinken und deine Offenheit.</p>
              <div className={styles.greetingWrap}>
                <Greeting>Ich freu mich auf dich.</Greeting>
              </div>
              <p>Du findest keinen passenden Termin? Dann schreib mir oder ruf mich an, wir schauen gemeinsam, was möglich ist.</p>
              <div className={styles.contactLinks}>
                <a href={`mailto:${EMAIL}`} data-umami-event="contact_click" data-umami-event-method="email" data-umami-event-location={location}>{EMAIL}</a>
                <a href={`tel:${PHONE}`} data-umami-event="contact_click" data-umami-event-method="phone" data-umami-event-location={location}>{PHONE_LABEL}</a>
              </div>
              {note ? <p className={styles.small}>{note}</p> : null}
              <p className={styles.small}>Die Abbuchung erfolgt durch Digistore24.com</p>
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
