import type { Metadata } from "next";
import { pageMetadata } from "../../seo";
// Gestaltung wie auf der Klarheitssitzungs-Seite, Rechtstexte unverändert.
import k from "../klarheitssitzung/page.module.css";
import styles from "../rechtliches.module.css";
import SiteNav from "../klarheitssitzung/SiteNav";
import SiteFooter from "../klarheitssitzung/SiteFooter";

export const metadata: Metadata = pageMetadata({
  title: "Impressum",
  description: "Impressum von Petra Sailer und liberdade freedom consulting Ltd.",
  path: "/impressum/",
  noIndex: true,
});

export default function ImprintPage() {
  return (
    <div className={k.page}>
      <a className={k.skipLink} href="#inhalt">Zum Inhalt springen</a>

      <header className={styles.hero}>
        <div className={k.wrap}>
          <SiteNav />
          <div className={styles.heroContent}>
            <p className={styles.label}>Rechtliche Angaben</p>
            <h1>Impressum</h1>
          </div>
        </div>
      </header>

      <main id="inhalt" className={styles.legal}>
        <div className={k.wrap}>
          <section>
            <h2>Angaben gemäß § 5 DDG</h2>
            <div>
              <address>liberdade freedom consulting Ltd.<br />Hemus Street 2<br />1111 Sofia<br />Bulgarien</address>
              <p><strong>Vertreten durch:</strong><br />Petra Sailer</p>
            </div>
          </section>

          <section>
            <h2>Kontakt</h2>
            <div>
              <p>E-Mail: <a href="mailto:office@liberdade.ltd">office@liberdade.ltd</a></p>
            </div>
          </section>

          <section>
            <h2>Registereintrag</h2>
            <div>
              <p>Eingetragen im Commercial Register and Register of Non-Profit Legal Entities, geführt durch die Registry Agency, Bulgarien.<br />EIK: 207376199</p>
            </div>
          </section>

          <section>
            <h2>Umsatzsteuer-ID</h2>
            <div>
              <p>Umsatzsteuer-Identifikationsnummer (VAT-ID): BG207376199</p>
            </div>
          </section>

          <section>
            <h2>Verbraucherstreitbeilegung</h2>
            <div>
              <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter current="/impressum/" />
    </div>
  );
}
