import type { Metadata } from "next";
import { pageMetadata } from "../seo";
// Gestaltung wie auf der Klarheitssitzungs-Seite und den anderen Danke-Seiten.
import k from "../(website)/klarheitssitzung/page.module.css";
import styles from "./page.module.css";
import ThanksNav from "../(website)/klarheitssitzung/ThanksNav";
import SiteFooter from "../(website)/klarheitssitzung/SiteFooter";
import Greeting from "../(website)/klarheitssitzung/Greeting";

export const metadata: Metadata = pageMetadata({
  title: "Dein Termin steht",
  description: "Bestätigung deines Kennenlerngesprächs bei Petra Sailer.",
  path: "/danke-kennenlerngespraech/",
  noIndex: true,
});

export default function DankeKennenlerngespraech() {
  return (
    <div className={k.page}>
      <a className={k.skipLink} href="#inhalt">Zum Inhalt springen</a>

      <header className={styles.hero}>
        <div className={k.wrap}>
          <ThanksNav />
          <div className={styles.heroContent}>
            <p className={styles.label}>Kennenlerngespräch · <span className={k.nowrap}>15 Minuten</span></p>
            <h1>Dein Termin <em>steht.</em></h1>
            <p className={styles.prepare}>Ich freu mich, dich kennenzulernen.</p>
            <p className={styles.heroText}>Du bekommst eine Bestätigung per E-Mail mit deinem Termin und dem Zoom-Link. Über den Link in dieser E-Mail kannst du den Termin bei Bedarf verschieben.</p>
          </div>
        </div>
      </header>

      <main id="inhalt">
        <section className={styles.booking}>
          <div className={`${k.wrap} ${styles.bookingTop}`}>
            <h2>In 15 Minuten <em>schauen wir …</em></h2>
            <div>
              <p>… worum es dir geht, was du wissen willst und ob die Klarheitssitzung zu dir passt. Du brauchst dafür nur einen ruhigen Moment und deine Fragen.</p>
              <div className={styles.greetingWrap}>
                <Greeting large>Bis bald.</Greeting>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
