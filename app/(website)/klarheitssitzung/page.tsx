import type { Metadata } from "next";
import BrandLogo from "../BrandLogo";
import JsonLd from "../../JsonLd";
import { CLARITY_SOCIAL_IMAGE, pageMetadata, serviceGraph } from "../../seo";
import styles from "./page.module.css";
import SiteNav from "./SiteNav";

// Digistore24-Produkte, von Petra am 22.10.2026 bestätigt: Einzelsitzung 220 € und Fünferpaket 949 € (3 × 317 €).
const BOOKING_URL = "https://www.digistore24.com/product/580151";
const FIVE_SESSIONS_BOOKING_URL = "https://www.digistore24.com/product/735633";
const CONSULTATION_URL = "/kennenlerngespraech/klarheitssitzung/";
const EMAIL = "kontakt@petrasailer.com";

const PAGE_DESCRIPTION =
  "Die Klarheitssitzung für alle, die sich mit einer Entscheidung, einem Vorhaben oder ihrer Richtung im Kreis drehen: 75 Minuten 1:1 online, mit Klarheitskarte und deinem nächsten Schritt.";

export const metadata: Metadata = pageMetadata({
  title: "Klarheitssitzung",
  description: PAGE_DESCRIPTION,
  path: "/klarheitssitzung/",
  socialDescription: "Drehst du dich seit Wochen im Kreis? 75 Minuten 1:1 online, für deinen Punkt.",
  socialImage: {
    url: CLARITY_SOCIAL_IMAGE,
    width: 1200,
    height: 630,
    alt: "Klarheitssitzung – Petra Sailer vor hellem Hintergrund.",
  },
});

const STEPS = [
  { title: "In die Stille kommen", text: "Wir fahren runter. Der Gedankenstrom wird ruhiger, und deine Aufmerksamkeit wandert nach innen." },
  { title: "Das Gewünschte erleben", text: "Du tauchst ein in das, was du dir wünschst, und erlebst es, als wäre es schon da. Wie fühlt sich das an, und wie bist du darin?" },
  { title: "Zurück ins Jetzt", text: "Dann kommst du zurück. Was sagt dein jetziges Ich dazu? Wir sammeln ein, was auftaucht, auch die Zweifel und alles, was dich bisher zurückgehalten hat." },
  { title: "Den nächsten Schritt holen", text: "Du tauchst noch einmal ein und schaust von dort auf deinen Weg. So entsteht dein nächster Schritt dort, wo dein Wunsch schon Wirklichkeit ist." },
] as const;

const INCLUDED = [
  { label: "Dauer", text: "75 Minuten, 1:1 online per Video" },
  { label: "Vorab", text: "5 Fragen, die du in Ruhe beantwortest" },
  { label: "Danach", text: "Deine Klarheitskarte: eine Seite mit allem, was sich gezeigt hat, und deinem nächsten Schritt" },
  { label: "Nach 14 Tagen", text: "melde ich mich noch einmal bei dir, beim Fünferpaket nach der letzten Sitzung" },
] as const;

// Auszüge aus abgesegneten Testimonials (Begleitung über drei Monate); Reinholds Zitat ist zusammengezogen und braucht seine Freigabe
const VOICES = [
  { quote: "Die Arbeit mit Petra ist tief, klar und macht Freude.", name: "Antje H.", role: "führende Angestellte" },
  { quote: "Danke von Herzen, liebe Petra, dafür, dass du mich groß gesehen hast, bevor ich mich selbst so sehen konnte!", name: "Kathi G.", role: "selbstständig" },
  { quote: "Wann immer ich heute im Alltag getriggert bin, Ängste oder Überforderung erlebe, wende ich das an, was ich bei Petra gelernt habe, und werde wieder frei. Frei zu wählen, was ich gerade möchte und was nicht.", name: "Reinhold S.", role: "führender Angestellter" },
] as const;

// Für die erste Sitzung zu 150 € gibt es noch keinen Digistore-Link; bis dahin per E-Mail.
const PRICES = [
  { title: "Erste Klarheitssitzung", note: "einmalig zum Einstiegspreis", price: "150 €", href: `mailto:${EMAIL}?subject=Erste%20Klarheitssitzung%20(150%20%E2%82%AC)`, offer: "klarheitssitzung_erste" },
  { title: "Einzelsitzung", note: "wann immer du sie brauchst", price: "220 €", href: BOOKING_URL, offer: "klarheitssitzung" },
  { title: "Fünferpaket", note: "für fünf Punkte oder ein großes Thema, bei dem du dranbleiben willst", price: "949 €", rate: "oder 3 Raten à 317 €", href: FIVE_SESSIONS_BOOKING_URL, offer: "klarheitssitzung_5er" },
] as const;

const FAQ = [
  { q: "Ist das nur für berufliche Themen?", a: "Du kannst mit allem kommen, was dich gerade umtreibt: Job, Business, Beziehung oder ein Projekt, das dir am Herzen liegt. Wichtig ist nur, dass es um einen konkreten Punkt geht." },
  { q: "Was, wenn ich schon eine Ahnung habe?", a: "Umso besser. Dann schauen wir, was dich bisher zurückgehalten hat, und was jetzt als Nächstes dran ist." },
  { q: "Wie geht es nach der Buchung weiter?", a: "Du buchst und bezahlst über Digistore24. Direkt danach suchst du dir auf der Danke-Seite deinen Termin aus. Anschließend bekommst du den Zoom-Link und die fünf Fragen zu deinem Thema. Für die Sitzung brauchst du nur einen Raum, in dem du ungestört bist, etwas zu trinken und deine Offenheit." },
  { q: "Muss ich danach weiter mit dir arbeiten?", a: "Die Klarheitssitzung ist in sich abgeschlossen. Du gehst mit deiner Klarheitskarte selbstständig weiter, und nach 14 Tagen melde ich mich noch einmal bei dir. Ob du danach wieder buchst, entscheidest allein du." },
] as const;

type Tracking = { event: "cta_click" | "booking_click"; location: string; cta?: string; offer?: string };

function Action({ href, children, className, tracking }: { href: string; children: React.ReactNode; className: string; tracking?: Tracking }) {
  return (
    <a
      className={className}
      href={href}
      data-umami-event={tracking?.event}
      data-umami-event-cta={tracking?.cta}
      data-umami-event-offer={tracking?.offer}
      data-umami-event-location={tracking?.location}
      data-umami-event-destination={tracking ? href : undefined}
    >
      {children}
    </a>
  );
}

export default function ClarityPage() {
  return (
    <div className={styles.page}>
      <JsonLd
        data={serviceGraph({
          path: "/klarheitssitzung/",
          name: "Klarheitssitzung",
          description: PAGE_DESCRIPTION,
          serviceType: "1:1 Online-Coaching",
        })}
      />
      <a className={styles.skipLink} href="#inhalt">Zum Inhalt springen</a>

      <header className={styles.hero}>
        <div className={styles.wrap}>
          <SiteNav current="/klarheitssitzung/" ctaHref="#preise" />
          <div className={styles.heroContent}>
            <div className={styles.sideNote} aria-hidden="true">
              <span>Was sagen die anderen?</span>
              <span>Was wäre vernünftig?</span>
              <span>Und wenn es schiefgeht?</span>
            </div>
            <p className={styles.label}>Klarheitssitzung · 1:1 online</p>
            <h1>Drehst du dich<br /> seit Wochen<br /> <em>im Kreis?</em></h1>
            <div className={styles.heroBottom}>
              <p className={styles.heroQuestion}>Stell dir vor, es wird ruhig im&nbsp;Kopf.<br /> Und du weißt, was du willst.<br /> Genau da gehen wir&nbsp;hin.</p>
              <div className={styles.heroCta}>
                <div className={styles.heroActions}>
                  <Action className={styles.btn} href="#preise" tracking={{ event: "cta_click", cta: "zu_preisen", location: "hero" }}>
                    Klarheit holen
                  </Action>
                  <Action className={styles.textLink} href={CONSULTATION_URL} tracking={{ event: "cta_click", cta: "kennenlerngespraech", location: "hero" }}>
                    15 Minuten kennenlernen
                  </Action>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="inhalt">
        <section className={styles.statement}>
          <div className={styles.wrap}>
            <h2>Zu viele Stimmen <em>im Kopf.</em></h2>
            <div className={styles.statementGrid}>
              <p className={styles.standfirst}>Und die wichtigste, deine eigene, geht darin unter.</p>
              <div className={styles.statementText}>
                <p>Der neue Job liegt auf dem Tisch und innerlich hast du schon dreimal zu- und zweimal wieder abgesagt.</p>
                <p>Das Gespräch mit deinem Partner probst du seit Wochen immer wieder in deinem Kopf und da läuft es jedes Mal großartig.</p>
                <p>Dein neues Vorhaben steht seit Monaten auf deiner Liste und rutscht jede Woche eine Zeile weiter nach unten.</p>
                <p className={styles.lead}>Das kostet Kraft. Und die brauchst du doch für etwas ganz anderes!</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.interlude} aria-label="Leitgedanke">
          <div className={styles.wrap}>
            <blockquote>Deine Antwort ist <span className={styles.nowrap}>längst da.</span></blockquote>
          </div>
        </section>

        <section className={styles.process}>
          <div className={styles.wrap}>
            <div className={styles.split}>
              <h2>Wir drehen die<br /> <span className={styles.nowrap}>Blickrichtung <em>um.</em></span></h2>
              <div>
                <p className={styles.lead}>Bisher hast du von außen auf dein Thema geschaut.</p>
                <p>Wer so schaut, läuft im Kreis und kommt immer wieder an derselben Stelle an. In der Sitzung tauchst du ein in das, was du wirklich willst, und schaust von dort aus.</p>
                <p>Dafür nehmen wir uns Zeit. Wenn es in dir leiser wird, taucht Neues auf, und du siehst, was dran ist. Genau dahin gehen wir, in deinem Tempo.</p>
              </div>
            </div>
            <ol className={styles.steps}>
              {STEPS.map((step, index) => (
                <li key={step.title}>
                  <span className={styles.num} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.story}>
          <div className={styles.wrap}>
            <p className={styles.label}>Aus der Praxis</p>
            <div className={styles.split}>
              <h2>Als die Verbindung wieder da war, kamen auch <em>die richtigen Worte.</em></h2>
              <div>
                <p>Simona kam zu mir, weil sie bei ihren Website-Texten feststeckte. Sie wusste, was sie anbietet. Aber die richtigen Worte wollten nicht kommen.</p>
                <p>In der Sitzung ist sie eingetaucht in das, was ihre Arbeit für sie wirklich ist, von innen heraus und ohne die Erwartungen der anderen im Ohr. Von dort floss es.</p>
                <p className={styles.lead}>Eine halbe Stunde später schickte sie mir die ersten Texte.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.about}>
          <div className={`${styles.wrap} ${styles.aboutLayout}`}>
            <div>
              <h2>Ich bin<br /> Petra.</h2>
              <p className={styles.lead}>Klar geführt, persönlich und <span className={styles.nowrap}>immer zurück zu dir.</span></p>
              <p>In der Sitzung stelle ich dir genaue Fragen, greife auf, was du sagst, und frage dort nach, wo etwas noch offen ist. Dabei schauen wir immer von dem aus, was du willst. Von dort zeigen sich neue Möglichkeiten und deine nächsten Schritte.</p>
              <p>Ich lebe in Griechenland und begleite Menschen seit 2021, inzwischen vor allem online.</p>
              <a className={styles.textLink} href="/ueber-mich/">Mehr über mich</a>
            </div>
            <figure className={styles.aboutPhoto}>
              <img src="/petra-sailer-hero.jpg" alt="Petra Sailer lächelt in die Kamera" width="1024" height="1024" />
              <figcaption>Petra Sailer</figcaption>
            </figure>
          </div>
          <div className={`${styles.wrap} ${styles.voices}`}>
            <h3>So haben Menschen meine Begleitung erlebt</h3>
            <ul>
              {VOICES.map((voice) => (
                <li key={voice.name}>
                  <blockquote>„{voice.quote}“</blockquote>
                  <p>{voice.name}, {voice.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.offer} id="preise">
          <div className={styles.wrap}>
            <h2>Eine Sitzung. <em>Ein Punkt.</em></h2>
            <p className={styles.offerText}>In einer Sitzung geht es um genau einen Punkt: den, der im Hintergrund mitläuft und immer wieder auftaucht. Bring ihn mit, den Rest machen wir zusammen.</p>
            <dl className={styles.facts}>
              {INCLUDED.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.text}</dd>
                </div>
              ))}
            </dl>
            <h3 className={styles.priceHeading}>Und was <em>kostet das?</em></h3>
            <div className={styles.priceCards}>
              {PRICES.map((item) => (
                <div className={styles.priceCard} key={item.title}>
                  <h3>{item.title}</h3>
                  <small>{item.note}</small>
                  <p className={styles.price}>{item.price}</p>
                  <p className={styles.rate} aria-hidden={"rate" in item ? undefined : true}>{"rate" in item ? item.rate : "\u00a0"}</p>
                  <Action className={styles.cardButton} href={item.href} tracking={{ event: "booking_click", offer: item.offer, location: "preise" }}>
                    Buchen
                  </Action>
                </div>
              ))}
            </div>
            <p className={styles.priceNote}>Alle Preise inkl. MwSt. Der Einstiegspreis gilt einmal pro Person. Bei Ratenzahlung beträgt der Gesamtpreis&nbsp;951&nbsp;€.<br /> Die 5&nbsp;Sitzungen sind ab Kauf 3&nbsp;Monate&nbsp;gültig.</p>
            <p className={styles.coachingNote}>Die Klarheitssitzung ist ein Coaching.<br /> Sie ersetzt keine ärztliche oder psychotherapeutische Behandlung.</p>
          </div>
        </section>

        <section className={styles.faq}>
          <div className={`${styles.wrap} ${styles.faqGrid}`}>
            <div>
              <h2>Noch <em>Fragen?</em></h2>
            </div>
            <div>
              {FAQ.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
              <details>
                <summary>Ich bin unsicher, ob es passt.</summary>
                <p>
                  Dann <Action className={styles.inlineLink} href={CONSULTATION_URL} tracking={{ event: "cta_click", cta: "kennenlerngespraech", location: "faq" }}>lass uns 15 Minuten sprechen</Action>, kostenfrei und unverbindlich.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className={styles.end}>
          <div className={styles.wrap}>
            <h2>Genug <em>gekreist?</em></h2>
            <div className={styles.endBottom}>
              <p>Du hast es in der Hand. Deine erste Klarheitssitzung gibt es zum Einstiegspreis von 150&nbsp;€.</p>
              <div className={styles.heroActions}>
                <Action className={`${styles.btn} ${styles.btnDark}`} href="#preise" tracking={{ event: "cta_click", cta: "zu_preisen", location: "abschluss" }}>
                  Klarheit holen
                </Action>
                <Action className={styles.textLink} href={CONSULTATION_URL} tracking={{ event: "cta_click", cta: "kennenlerngespraech", location: "abschluss" }}>
                  15 Minuten kennenlernen
                </Action>
              </div>
            </div>
            <p className={styles.endContact}>Du hast vor der Buchung noch eine Frage?<br /> Schreib mir einfach: <a href={`mailto:${EMAIL}`} data-umami-event="contact_click" data-umami-event-method="email" data-umami-event-location="abschluss">{EMAIL}</a></p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <BrandLogo className={styles.brand} variant="footer" />
          <nav className={styles.footerLinks} aria-label="Rechtliches">
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
