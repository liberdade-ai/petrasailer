import type { Metadata } from "next";
import JsonLd from "../../../JsonLd";
import { pageGraph, pageMetadata } from "../../../seo";
// Gleicher Aufbau wie das Kennenlerngespräch zur Klarheitssitzung, Texte von Petra (30.10.2026).
import k from "../../klarheitssitzung/page.module.css";
import styles from "../klarheitssitzung/page.module.css";
import SiteNav from "../../klarheitssitzung/SiteNav";
import SiteFooter from "../../klarheitssitzung/SiteFooter";
import Greeting from "../../klarheitssitzung/Greeting";
import TidyCalCalendar from "../TidyCalCalendar";

const EMAIL = "kontakt@petrasailer.com";
const MAIL_SUBJECT = encodeURIComponent("Wirklich Deins.");
const PHONE = "+4915155348727";
const PHONE_LABEL = "+49 (0)151 5534 8727";

const PAGE_DESCRIPTION =
  "Kostenfreies 30-Minuten-Kennenlerngespräch zu Wirklich Deins., der sechsmonatigen 1:1-Begleitung von Petra Sailer.";

export const metadata: Metadata = pageMetadata({
  title: "Kennenlerngespräch zu Wirklich Deins.",
  description: PAGE_DESCRIPTION,
  path: "/kennenlerngespraech/wirklich-deins/",
});

export default function AccompanimentIntroCallPage() {
  return (
    <div className={k.page}>
      <JsonLd
        data={pageGraph({
          path: "/kennenlerngespraech/wirklich-deins/",
          name: "Kennenlerngespräch zu Wirklich Deins.",
          description: PAGE_DESCRIPTION,
          breadcrumbs: [
            { name: "Startseite", path: "/" },
            { name: "Kennenlerngespräch zu Wirklich Deins.", path: "/kennenlerngespraech/wirklich-deins/" },
          ],
        })}
      />
      <a className={k.skipLink} href="#inhalt">Zum Inhalt springen</a>

      <header className={styles.hero}>
        <div className={k.wrap}>
          <SiteNav />
          <div className={styles.heroContent}>
            <figure className={`${k.sideNote} ${styles.circle} ${styles.heroPhoto}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/petra-sailer-ueber-mich-jeans.jpg" alt="Petra Sailer lacht in Jeansjacke vor einem Bücherregal" width="1000" height="1000" fetchPriority="high" />
            </figure>
            <p className={styles.label}>Wirklich Deins. · <span className={k.nowrap}>30 Minuten kennenlernen · kostenfrei</span></p>
            <h1>Du hast <em>etwas Größeres vor?</em></h1>
            <p className={`${k.lead} ${styles.prepare}`}>Dann lass uns darüber reden.</p>
            <div className={styles.heroText}>
              <p>Ein eigenes Projekt, ein neuer Lebensabschnitt, ein Wunsch, der schon lange wartet. Was auch immer es ist: Sechs Monate lang gehen wir den Weg zusammen, 1:1. Du gehst immer wieder in dein Zukunftsbild und holst dir von dort Schritt für Schritt, was als Nächstes dran ist. Ich bin dabei, mit meinen Fragen und meinem Blick von außen. Diese Begleitung heißt <em className={k.nowrap}>Wirklich Deins.</em></p>
              <p>Ob das für dich passt, finden wir am besten in einem Gespräch per Zoom heraus.</p>
            </div>
            <div className={`${k.heroActions} ${styles.heroButton}`}>
              <a className={k.btn} href="#termin" data-umami-event="cta_click" data-umami-event-cta="termin_aussuchen" data-umami-event-location="kennenlerngespraech_wirklich_deins_hero">Termin aussuchen</a>
              <a className={k.textLink} href={`mailto:${EMAIL}?subject=${MAIL_SUBJECT}`} data-umami-event="contact_click" data-umami-event-method="email" data-umami-event-location="kennenlerngespraech_wirklich_deins_hero">E-Mail schreiben</a>
            </div>
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
              tidyCalUrl="https://tidycal.com/petrasailer/30-min"
              label="30-minütiges Kennenlerngespräch zu Wirklich Deins."
              showHeading={false}
              classes={{ calendar: styles.calendar, consent: styles.consent, button: `${k.btn} ${styles.loadButton}` }}
            />
          </div>
        </section>

        <section className={styles.closing}>
          <div className={`${k.wrap} ${styles.closingGrid}`}>
            <h2>Ich bin gespannt, <em>was du vorhast.</em></h2>
            <div>
              <div className={styles.contactLinks}>
                <a href={`mailto:${EMAIL}?subject=${MAIL_SUBJECT}`} data-umami-event="contact_click" data-umami-event-method="email" data-umami-event-location="kennenlerngespraech_wirklich_deins">{EMAIL}</a>
                <a href={`tel:${PHONE}`} data-umami-event="contact_click" data-umami-event-method="phone" data-umami-event-location="kennenlerngespraech_wirklich_deins">{PHONE_LABEL}</a>
              </div>
              <div className={styles.greetingWrap}>
                <Greeting>Ich freu mich auf dich.</Greeting>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
