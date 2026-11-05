import type { Metadata } from "next";
import { pageMetadata } from "../../seo";
// Gestaltung wie auf der Klarheitssitzungs-Seite, Rechtstexte unverändert.
import k from "../klarheitssitzung/page.module.css";
import styles from "../rechtliches.module.css";
import SiteNav from "../klarheitssitzung/SiteNav";
import SiteFooter from "../klarheitssitzung/SiteFooter";
import TidyCalConsentRevocation from "./TidyCalConsentRevocation";

export const metadata: Metadata = pageMetadata({
  title: "Datenschutz",
  description: "Datenschutzerklärung von Petra Sailer.",
  path: "/datenschutz/",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <div className={k.page}>
      <a className={k.skipLink} href="#inhalt">Zum Inhalt springen</a>

      <header className={styles.hero}>
        <div className={k.wrap}>
          <SiteNav />
          <div className={styles.heroContent}>
            <p className={styles.label}>Datenschutz</p>
            <h1>Datenschutz</h1>
            <p className={styles.heroText}><em>Stand: 1. November 2026</em></p>
          </div>
        </div>
      </header>

      <main id="inhalt" className={styles.legal}>
        <div className={k.wrap}>
          <section>
            <h2>1. Verantwortliche Stelle</h2>
            <div>
              <p>Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:</p>
              <address>liberdade freedom consulting Ltd.<br />Hemus Street 2<br />1111 Sofia<br />Bulgarien</address>
              <p>Vertreten durch: Petra Sailer<br />E-Mail: <a href="mailto:office@liberdade.ltd">office@liberdade.ltd</a></p>
            </div>
          </section>

          <section>
            <h2>2. Grundsätzliches zur Datenverarbeitung</h2>
            <div>
              <p>Wir verarbeiten personenbezogene Daten nur, soweit dies für die Bereitstellung dieser Website, die Beantwortung von Anfragen, die Terminbuchung oder die Abwicklung eines Vertragsverhältnisses erforderlich ist.</p>
              <p>Die maßgeblichen Rechtsgrundlagen sind insbesondere:</p>
              <ul>
                <li>Art. 6 Abs. 1 lit. b DSGVO, wenn die Verarbeitung für vorvertragliche Maßnahmen oder die Vertragserfüllung erforderlich ist,</li>
                <li>Art. 6 Abs. 1 lit. f DSGVO, wenn wir ein berechtigtes Interesse an einem sicheren und funktionierenden Internetauftritt haben,</li>
                <li>Art. 6 Abs. 1 lit. a DSGVO, wenn du eingewilligt hast.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>3. Hosting über Netlify</h2>
            <div>
              <p>Diese Website wird über Netlify bereitgestellt. Beim Aufruf der Website verarbeitet Netlify technisch notwendige Zugriffsdaten, insbesondere IP-Adresse, Datum und Uhrzeit des Abrufs, aufgerufene Seite, Browser- und Geräteinformationen sowie die zuvor besuchte Website.</p>
              <p>Die Verarbeitung erfolgt, um die Website sicher und stabil auszuliefern und Angriffe abzuwehren. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>
              <p>Netlify kann Daten auch außerhalb der Europäischen Union verarbeiten. Netlify weist für solche Übermittlungen auf geeignete Garantien hin, etwa Standardvertragsklauseln und gegebenenfalls das EU-US Data Privacy Framework. Weitere Informationen findest du in der <a href="https://www.netlify.com/privacy/">Datenschutzerklärung von Netlify</a>.</p>
            </div>
          </section>

          <section>
            <h2>4. Lokal eingebundene Schriftarten</h2>
            <div>
              <p>Die auf dieser Website verwendeten Schriftarten werden lokal bereitgestellt. Beim Aufruf der Website wird deshalb keine Verbindung zu Google Fonts oder anderen Schriftanbieterinnen beziehungsweise Schriftanbietern hergestellt.</p>
            </div>
          </section>

          <section>
            <h2>5. Reichweitenmessung mit Umami</h2>
            <div>
              <p>Wir verwenden die selbst gehostete, datenschutzfreundliche Webanalyse Umami. Die Analyse wird technisch von Christian Sailer betrieben und auf einem Server von Netcup in Deutschland gehostet.</p>
              <p>Umami verarbeitet keine Cookies und erstellt keine personenbezogenen Nutzerprofile. Erfasst werden insbesondere:</p>
              <ul>
                <li>aufgerufene Seiten,</li>
                <li>Referrer,</li>
                <li>Seitentitel,</li>
                <li>Sprache,</li>
                <li>Bildschirmauflösung,</li>
                <li>Browser- und Geräteinformationen,</li>
                <li>ungefähres Herkunftsland,</li>
                <li>technische Interaktionen, etwa Klicks auf Buttons oder das Öffnen eines Kontaktformulars.</li>
              </ul>
              <p>Dabei werden keine Inhalte von Kontaktformularen, keine Namen, E-Mail-Adressen oder Nachrichtentexte an Umami übertragen.</p>
              <p>Die Verarbeitung dient dem berechtigten Interesse, die Website verständlicher, technisch zuverlässiger und nutzerfreundlicher zu gestalten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>
              <p>Die Analyse-Daten werden nach <strong>zwölf Monaten</strong> gelöscht.</p>
            </div>
          </section>

          <section>
            <h2>6. Kontaktaufnahme per E-Mail und Kontaktformular</h2>
            <div>
              <p>Wenn du uns per E-Mail kontaktierst oder das Kontaktformular nutzt, verarbeiten wir die Daten, die du uns mitteilst. Das sind in der Regel dein Name, deine E-Mail-Adresse und der Inhalt deiner Nachricht.</p>
              <p>Das Kontaktformular versendet keine Daten unmittelbar an einen Server. Nach dem Ausfüllen öffnet sich dein eigenes E-Mail-Programm mit einer vorbereiteten Nachricht an <code>kontakt@petrasailer.com</code>. Erst wenn du diese E-Mail selbst versendest, werden deine Daten übertragen.</p>
              <p>Die Verarbeitung erfolgt zur Beantwortung deiner Anfrage und gegebenenfalls zur Anbahnung eines Vertragsverhältnisses. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO sowie Art. 6 Abs. 1 lit. f DSGVO.</p>
              <p>Unsere E-Mail-Postfächer werden bei ALL-INKL.COM – Neue Medien Münnich, Hauptstraße 68, 02742 Friedersdorf, Deutschland, betrieben. Weitere Informationen findest du in den <a href="https://all-inkl.com/datenschutzinformationen/">Datenschutzinformationen von ALL-INKL.COM</a>.</p>
              <p>Wir löschen Anfragen, sobald sie abschließend bearbeitet sind und keine gesetzlichen Aufbewahrungspflichten mehr bestehen.</p>
            </div>
          </section>

          <section>
            <h2>7. Terminbuchung über TidyCal</h2>
            <div>
              <p>Auf der Seite „Kennenlerngespräch“ kannst du einen Kalender von TidyCal laden. Der Kalender wird erst eingebunden, nachdem du aktiv auf „Kalender laden“ geklickt und damit eingewilligt hast.</p>
              <p>Erst dann wird eine Verbindung zu TidyCal hergestellt. Dabei können insbesondere technische Daten wie deine IP-Adresse, Browser- und Geräteinformationen verarbeitet werden. Wenn du einen Termin buchst, verarbeitet TidyCal außerdem die Daten, die du dort selbst eingibst, zum Beispiel Name, E-Mail-Adresse sowie Termin- und Nachrichtenangaben.</p>
              <p>TidyCal wird von Sumo Group Inc. unter dem Namen „TidyCal“ betrieben, 1305 E. 6th St #3, Austin, TX 78702, USA. TidyCal kann weitere Dienste einsetzen, insbesondere Google Tag Manager, Google reCAPTCHA und Stripe.js. Dadurch kann auch eine Datenübermittlung in die USA stattfinden.</p>
              <p>Rechtsgrundlage für das Laden des Kalenders und die damit verbundenen Zugriffe auf dein Endgerät ist deine Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.</p>
              <p>Du kannst deine Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen: <span className={styles.revocation}><TidyCalConsentRevocation /></span> Danach wird der Kalender beim nächsten Aufruf nicht mehr geladen.</p>
              <p>Weitere Informationen findest du in der <a href="https://tidycal.com/privacy-policy">Datenschutzerklärung von TidyCal</a> und im <a href="https://tidycal.com/dpa">Data Processing Agreement von TidyCal</a>.</p>
            </div>
          </section>

          <section>
            <h2>8. Buchung und Kauf über Digistore24</h2>
            <div>
              <p>Für die Buchung der Klarheitssitzung verlinken wir auf den externen Checkout von Digistore24. Erst wenn du diesen Link anklickst, verlässt du unsere Website und es gelten die Datenschutzbestimmungen von Digistore24.</p>
              <p>Auf unseren Danke-Seiten nach dem Kauf zeigen wir ein Vertrauenssiegel von Digistore24. Dafür lädt dein Browser beim Aufruf dieser Seiten ein Skript von den Servern von Digistore24. Dabei wird deine IP-Adresse an Digistore24 übertragen. Rechtsgrundlage ist unser berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO, den Verkauf über Digistore24 klar zu kennzeichnen.</p>
              <p>Darüber hinaus werden vor dem Klick auf den Checkout keine personenbezogenen Daten an Digistore24 übertragen. Die Verarbeitung im Checkout, insbesondere von Bestell- und Zahlungsdaten, erfolgt durch Digistore24 in eigener Verantwortung. Weitere Informationen findest du in der <a href="https://www.digistore24.com/de/datenschutz">Datenschutzerklärung von Digistore24</a>.</p>
            </div>
          </section>

          <section>
            <h2>9. Fragen vor der Klarheitssitzung über Tally</h2>
            <div>
              <p>Nach der Terminbuchung bekommst du einen Link zu fünf Fragen, die du vor der Klarheitssitzung beantworten kannst. Das Formular wird über Tally bereitgestellt, einen Dienst der Tally BV, Sint-Pietersnieuwstraat 11, 9000 Gent, Belgien.</p>
              <p>Dabei verarbeiten wir deinen Namen, deine E-Mail-Adresse, den Termin deiner Sitzung und deine Antworten. Die Fragen sind freiwillig, du entscheidest selbst, was du dort teilen möchtest. Tally speichert die Formulardaten nach eigenen Angaben verschlüsselt auf Servern in der Europäischen Union. Tally verarbeitet die Daten in unserem Auftrag auf Grundlage eines Vertrags zur Auftragsverarbeitung.</p>
              <p>Wir nutzen deine Antworten ausschließlich, um uns auf deine Klarheitssitzung vorzubereiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. Wenn du in deinen Antworten von dir aus Angaben zu deiner Gesundheit oder andere besonders geschützte Daten machst, verarbeiten wir diese auf Grundlage deiner ausdrücklichen Einwilligung gemäß Art. 9 Abs. 2 lit. a DSGVO. Du kannst diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.</p>
              <p>Wir löschen deine Antworten, sobald deine Klarheitskarte fertig ist. Weitere Informationen findest du in den <a href="https://tally.so/help/gdpr">Datenschutzinformationen von Tally</a>.</p>
            </div>
          </section>

          <section>
            <h2>10. Cookies und Einwilligungsverwaltung</h2>
            <div>
              <p>Auf den normalen Seiten dieser Website setzen wir keine eigenen Analyse- oder Marketing-Cookies ein.</p>
              <p>Nur wenn du den TidyCal-Kalender aktiv lädst, können TidyCal und die von TidyCal eingesetzten Dienste Cookies oder vergleichbare Technologien verwenden. Deine Entscheidung, den Kalender zu laden, wird ausschließlich dafür auf deinem Gerät gespeichert, den Kalender bis zu einem Widerruf wieder anzeigen zu können.</p>
            </div>
          </section>

          <section>
            <h2>11. Empfängerinnen und Empfänger von Daten</h2>
            <div>
              <p>Soweit es für die genannten Zwecke erforderlich ist, können Daten an folgende Empfängerinnen und Empfänger übermittelt werden:</p>
              <ul>
                <li>Netlify für Hosting und technische Auslieferung der Website,</li>
                <li>Netcup für das Hosting der Umami-Analyse in Deutschland,</li>
                <li>ALL-INKL.COM für den Betrieb unserer E-Mail-Postfächer,</li>
                <li>TidyCal, wenn du den Kalender aktiv lädst oder einen Termin buchst,</li>
                <li>Digistore24, wenn du eine Danke-Seite aufrufst (Vertrauenssiegel) und wenn du den externen Checkout aufrufst,</li>
                <li>Tally, wenn du die Fragen vor deiner Klarheitssitzung beantwortest.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>12. Deine Rechte</h2>
            <div>
              <p>Du hast im Rahmen der gesetzlichen Vorgaben das Recht:</p>
              <ul>
                <li>Auskunft über deine gespeicherten personenbezogenen Daten zu erhalten,</li>
                <li>unrichtige Daten berichtigen zu lassen,</li>
                <li>die Löschung deiner Daten zu verlangen,</li>
                <li>die Verarbeitung deiner Daten einschränken zu lassen,</li>
                <li>der Verarbeitung zu widersprechen,</li>
                <li>eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen,</li>
                <li>Daten, die du uns bereitgestellt hast, in einem übertragbaren Format zu erhalten.</li>
              </ul>
              <p>Zur Ausübung deiner Rechte genügt eine Nachricht an: <a href="mailto:office@liberdade.ltd">office@liberdade.ltd</a></p>
            </div>
          </section>

          <section>
            <h2>13. Beschwerderecht bei einer Aufsichtsbehörde</h2>
            <div>
              <p>Du hast das Recht, dich bei einer Datenschutzaufsichtsbehörde zu beschweren. Zuständige Aufsichtsbehörde für uns ist:</p>
              <address>Commission for Personal Data Protection<br />2 Prof. Tsvetan Lazarov Blvd.<br />Sofia 1592<br />Bulgarien<br />E-Mail: <a href="mailto:kzld@cpdp.bg">kzld@cpdp.bg</a><br />Website: <a href="https://cpdp.bg/en/contacts/">www.cpdp.bg</a></address>
              <p>Du kannst dich außerdem bei der Datenschutzaufsichtsbehörde deines gewöhnlichen Aufenthaltsorts oder Arbeitsplatzes beschweren.</p>
            </div>
          </section>

          <section>
            <h2>14. Sicherheit</h2>
            <div>
              <p>Diese Website nutzt eine verschlüsselte Verbindung über HTTPS. Wir treffen angemessene technische und organisatorische Maßnahmen, um die von uns verarbeiteten Daten vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen.</p>
            </div>
          </section>

          <section>
            <h2>15. Aktualisierung dieser Datenschutzerklärung</h2>
            <div>
              <p>Wir passen diese Datenschutzerklärung an, wenn sich technische Abläufe, rechtliche Anforderungen oder unsere Datenverarbeitungen ändern.</p>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter current="/datenschutz/" />
    </div>
  );
}
