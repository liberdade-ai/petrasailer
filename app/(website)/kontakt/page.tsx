import type { Metadata } from "next";
import JsonLd from "../../JsonLd";
import { pageGraph, pageMetadata } from "../../seo";
// Gestaltung wie auf der Klarheitssitzungs-Seite. Ein Formular gibt es bewusst nicht;
// ContactForm.tsx bleibt liegen, falls später ein echter Versand eingerichtet wird.
import k from "../klarheitssitzung/page.module.css";
import styles from "./page.module.css";
import SiteNav from "../klarheitssitzung/SiteNav";
import SiteFooter from "../klarheitssitzung/SiteFooter";
import Greeting from "../klarheitssitzung/Greeting";

const EMAIL = "kontakt@petrasailer.com";
const PHONE = "+4915155348727";
const PHONE_LABEL = "+49 (0)151 5534 8727";
const CONSULTATION_URL = "/kennenlerngespraech/klarheitssitzung/";

// Mit Petra am 01.11.2026 abgestimmt
const PAGE_DESCRIPTION =
  "Du hast eine Frage zu meiner Arbeit oder zur Klarheitssitzung? Schreib mir, ruf mich an oder buch dir ein kostenfreies 15-Minuten-Gespräch.";

export const metadata: Metadata = pageMetadata({
  title: "Kontakt",
  description: PAGE_DESCRIPTION,
  path: "/kontakt/",
});

export default function ContactPage() {
  return (
    <div className={k.page}>
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
      <a className={k.skipLink} href="#inhalt">Zum Inhalt springen</a>

      <header className={styles.hero}>
        <div className={k.wrap}>
          <SiteNav current="/kontakt/" />
          <div className={styles.heroContent}>
            <div className={`${k.sideNote} ${styles.circle}`} aria-hidden="true">
              <span>Passt das zu mir?</span>
              <span>Wie läuft das ab?</span>
              <span>Wann geht es los?</span>
            </div>
            <p className={styles.label}>Kontakt</p>
            <h1>Was möchtest du <em>noch wissen?</em></h1>
            <p className={styles.heroText}>Du hast eine Frage zu meiner Arbeit oder zur Klarheitssitzung? Oder es gibt etwas, das dir vor deiner Entscheidung noch wichtig ist? Dann schreib mir. Ich antworte dir persönlich innerhalb von zwei Werktagen.</p>
          </div>
        </div>
      </header>

      <main id="inhalt">
        <section className={styles.booking}>
          <div className={k.wrap}>
            <div className={styles.contactCards}>
              <div className={styles.contactCard}>
                <h3>Schreib mir</h3>
                <p>Ein paar Sätze genügen.</p>
                <a className={styles.cardLink} href={`mailto:${EMAIL}`} data-umami-event="contact_click" data-umami-event-method="email" data-umami-event-location="kontakt">{EMAIL}</a>
              </div>
              <div className={styles.contactCard}>
                <h3>Ruf mich an</h3>
                <p>Wenn ich gerade in einer Sitzung bin, rufe ich dich zurück.</p>
                <a className={styles.cardLink} href={`tel:${PHONE}`} data-umami-event="contact_click" data-umami-event-method="phone" data-umami-event-location="kontakt">{PHONE_LABEL}</a>
              </div>
              <div className={styles.contactCard}>
                <h3>Lieber gleich sprechen?</h3>
                <p>15 Minuten, kostenfrei und unverbindlich.</p>
                <a className={`${k.btn} ${styles.cardButton}`} href={CONSULTATION_URL} data-umami-event="cta_click" data-umami-event-cta="kennenlerngespraech" data-umami-event-location="kontakt">Zum Kennenlerngespräch</a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.closing}>
          <div className={k.wrap}>
            <Greeting>Ich freu mich, von dir zu hören.</Greeting>
          </div>
        </section>
      </main>

      <SiteFooter current="/kontakt/" />
    </div>
  );
}
