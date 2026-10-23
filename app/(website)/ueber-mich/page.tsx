import type { Metadata } from "next";
import BrandLogo from "../BrandLogo";
import JsonLd from "../../JsonLd";
import { pageGraph, pageMetadata } from "../../seo";
// Gestaltung wie auf der Klarheitssitzungs-Seite: Farben, Schriften, Navigation, Buttons und Fuß kommen aus k.
import k from "../klarheitssitzung/page.module.css";
import styles from "./page.module.css";
import SiteNav from "../klarheitssitzung/SiteNav";
import Greeting from "../klarheitssitzung/Greeting";

const EMAIL = "kontakt@petrasailer.com";
const CONSULTATION_URL = "/kennenlerngespraech/klarheitssitzung/";

const PAGE_DESCRIPTION =
  "Lerne Petra Sailer kennen, ihre Art zu arbeiten und ihr ganz normales Leben in Griechenland.";

// Texte aus Petras eingesprochenen Antworten (23.10.2026), noch in Überarbeitung.
const SITUATIONS = [
  "Du schreibst und schreibst, probierst es immer wieder, und langsam bist du verwirrt und ehrlich gesagt auch ein bisschen genervt.",
  "Eigentlich passt alles zusammen. Und trotzdem zieht’s dich längst woanders hin.",
  "Da ist dieses eine, das du schon ewig machen willst. Und es wartet immer noch darauf, dass du dich traust.",
  "Du hast noch deinen Brotjob und fragst dich seit Monaten: Kündige ich, oder bleib ich?",
] as const;

const WAYS = [
  { title: "Bei mir darf alles sein.", text: "Egal, was du erzählst. Du kannst dich total fallen lassen, und auch der Skeptiker im Kopf darf mal Pause machen." },
  { title: "Tief und undramatisch.", text: "Manchmal kommen echt tiefe Sachen ans Licht. Und dann ist das einfach eine Erkenntnis, die dich weiterbringt. Wir lachen auch viel, ehrlich." },
  { title: "Ich sprech an, was im Hintergrund läuft.", text: "Ich seh die Dinge, die so im Hintergrund mitlaufen, und sprech sie ganz offen an. Dann ist da einfach Klarheit." },
] as const;

const VOICES = [
  { quote: "Die Arbeit mit Petra ist tief, klar und macht Freude. Mit ihrer unerschütterlichen Präsenz und ihrem Dranbleiben hat sie mich konsequent und undramatisch begleitet.", name: "Antje H.", role: "führende Angestellte" },
  { quote: "Die Begleitung war nah, konkret und im Moment. Ihre klaren Worte, die zusammengefasst haben, was ich aussprach, waren ein enormes Geschenk.", name: "Simona P.", role: "selbstständig" },
] as const;

const TRAININGS = [
  { title: "Körper & Präsenz", text: "Yogalehrerin · Thai-Yoga-Practitioner · Bioenergetik und dynamische Körperarbeit nach Alexander Lowen · über 15 Jahre Yoga und eigene Praxis" },
  { title: "Beratung & Beziehung", text: "Lebens- und Sozialberaterin, Österreich · Systemisches Familienstellen und Astrologie bei Ulrich Böld · Traumaarbeit nach IoPT bei Prof. Dr. Franz Ruppert" },
  { title: "Erleben & Gestaltung", text: "Coach nach der Magnetic-Mind-Methode bei Christopher Duncan · Curriculum der Natural Success Academy bei William Whitecloud · Mind-Body-Connection bei Dr. Joe Dispenza" },
] as const;

const LIFE = [
  "Früh im Meer schwimmen.",
  "Reisen und unterwegs sein. Wir waren schon in Afrika und auf Hawaii und sind oft unterwegs.",
  "Krafttraining zu Hause mit meinen Gewichten. Ich lieb das Gefühl danach, und mit 49 noch mal zu sehen, wie sich mein Körper verändert.",
  "Draußen sein, den freien Himmel über mir. Am liebsten im Wald, wenn ich in Deutschland bin. Da spür ich mich einfach.",
  "Mit meinem Mann tanzen. Wir lachen dabei total viel. Ich liebe seinen Humor.",
  "Mit ihm auf der Couch sitzen und einfach nur da sein. Oder ein guter Film.",
  "Malen, abstrakt und einfach drauflos.",
  "Ein Buch, in das ich richtig eintauchen kann.",
  "Im Café sitzen und das Leben draußen beobachten.",
  "Meine Familie und meine Freunde in Deutschland. Meine Neffen und meine Nichte, die immer größer werden.",
  "Gute Seminare. Ich lern einfach gern dazu.",
] as const;

export const metadata: Metadata = pageMetadata({
  title: "Über mich",
  description: PAGE_DESCRIPTION,
  path: "/ueber-mich/",
});

export default function AboutPage() {
  return (
    <div className={k.page}>
      <JsonLd
        data={pageGraph({
          path: "/ueber-mich/",
          name: "Über Petra Sailer",
          description: PAGE_DESCRIPTION,
          type: "AboutPage",
          breadcrumbs: [
            { name: "Startseite", path: "/" },
            { name: "Über mich", path: "/ueber-mich/" },
          ],
        })}
      />
      <a className={k.skipLink} href="#inhalt">Zum Inhalt springen</a>

      <header className={`${k.hero} ${styles.hero}`}>
        <div className={k.wrap}>
          <SiteNav current="/ueber-mich/" />
          <div className={k.heroContent}>
            <figure className={`${k.sideNote} ${styles.heroPhoto}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/petra-sailer-ueber-mich-jeans.jpg" alt="Petra Sailer lacht vor ihrem Bücherregal" width="1000" height="1000" fetchPriority="high" />
            </figure>
            <p className={styles.label}>Über mich</p>
            <h1>Ich stelle<br /> die Fragen.<br /> <em>Du hast<br /> die Antworten.</em></h1>
            <div className={k.heroBottom}>
              <div>
                <p className={`${k.heroQuestion} ${styles.heroIntro}`}>Ich bin Petra. Ich begleite dich in deine Klarheit und zurück zu dir, sodass du Schritt für Schritt in die Richtung gehen kannst, die für dich stimmt.</p>
                <p className={styles.heroLine}>Du hast es in der Hand.</p>
              </div>
              <div className={k.heroActions}>
                <a className={k.btn} href="/klarheitssitzung/" data-umami-event="cta_click" data-umami-event-cta="klarheitssitzung" data-umami-event-location="ueber_mich_hero">Zur Klarheitssitzung</a>
                <a className={k.textLink} href={CONSULTATION_URL} data-umami-event="cta_click" data-umami-event-cta="kennenlerngespraech" data-umami-event-location="ueber_mich_hero">15 Minuten kennenlernen</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="inhalt">
        <section className={styles.known}>
          <div className={k.wrap}>
            <p className={styles.note}>Kommt dir das bekannt vor?</p>
            <ul className={styles.situations}>
              {SITUATIONS.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className={styles.imagine}>
          <div className={k.wrap}>
            <div className={styles.panel}>
              <h2>Stell dir vor, du weißt genau, <em>wofür du stehst.</em></h2>
              <p className={k.lead}>Du spürst wieder die Verbindung zu dir und zu dem, was du tust. Du hörst deine innere Stimme und vertraust ihr. Und irgendwann merkst du: Ich hab mein Leben in der Hand. Ich kreiere und gestalte es!</p>
            </div>
          </div>
        </section>

        <section className={styles.me}>
          <div className={k.wrap}>
            <p className={styles.note}>Und hier komme ich ins Spiel.</p>
            <div className={styles.meSplit}>
              <div>
                <h2>Ich bin <em>Petra.</em></h2>
                <p className={styles.descriptor}>Klarheitscoach, Fragenstellerin, Zwischen-den-Zeilen-Hörerin, Großseherin, Ruhepol und Nährboden für neue Möglichkeiten.</p>
              </div>
              <div className={styles.meIntro}>
                <p>Ich lebe mit meinem Mann in Griechenland am Meer und begleite seit 2021 Menschen online, die etwas Eigenes bewegen wollen. Was für dich stimmt, weißt du im Grunde selbst. Ich stell dir die Fragen, die dich dahin bringen, und du findest deine Antworten in dir.</p>
                <p className={styles.meStyle}>Erst mal ankommen, durchatmen, ruhig werden. Ich hör dir zu, und wenn’s im Kopf zu laut wird, stopp ich dich auch mal.</p>
              </div>
            </div>
            <ul className={styles.wayList}>
              {WAYS.map((way) => (
                <li key={way.title}>
                  <h3>{way.title}</h3>
                  <p>{way.text}</p>
                </li>
              ))}
            </ul>
            <div className={styles.midCta}>
              <p>Du willst wissen, ob das zu dir passt?</p>
              <a className={k.btn} href={CONSULTATION_URL} data-umami-event="cta_click" data-umami-event-cta="kennenlerngespraech" data-umami-event-location="ueber_mich_mitte">Lass uns 15 Minuten sprechen</a>
            </div>
          </div>
        </section>

        <section className={styles.why}>
          <div className={k.wrap}>
            <div className={styles.meGrid}>
              <figure className={styles.mePhoto}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/petra-sailer-weg-rund.jpg" alt="Petra Sailer lächelt in der Natur" width="520" height="520" loading="lazy" />
              </figure>
              <div className={styles.meText}>
                <h2>Warum ich <em>das mache.</em></h2>
                <p>15 Jahre war ich Yogalehrerin, und im Grunde geb ich schon immer weiter, was mir guttut. Mein Weg ging über Körperarbeit, Meditation und Traumaarbeit, und ich hab immer tiefer in meiner Vergangenheit gegraben. Irgendwann mochte ich mein Leben nicht mehr.</p>
                <p>Dann hat mein Mann das Buch „The Magician“ von William Whitecloud gefunden. Ich hab angefangen, jeden Tag neu zu wählen: Ich liebe mein Leben. Nach ungefähr drei Monaten geh ich spazieren, seh auf einmal die Blumen am Weg und denk: Oh mein Gott, ich seh das alles wieder!</p>
                <p className={styles.meQuote}>Ganz ehrlich: Diese Arbeit hat mir den Arsch gerettet.</p>
                <p>Und genau das geb ich heute weiter.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.voices}>
          <div className={k.wrap}>
            <h2>So erleben mich <em>andere.</em></h2>
            <ul className={styles.voiceList}>
              {VOICES.map((voice) => (
                <li key={voice.name}>
                  <blockquote>„{voice.quote}“</blockquote>
                  <p>{voice.name}, {voice.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.formal}>
          <div className={k.wrap}>
            <div className={styles.panelSky}>
              <div className={styles.formalTop}>
                <h2>Das <em>Formale.</em></h2>
                <p>Über 15 Jahre eigene Praxis und viele Ausbildungen. Menschen begleite ich seit 2021, inzwischen vor allem online.</p>
              </div>
              <div className={styles.formalGrid}>
                {TRAININGS.map((item) => (
                  <div key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
              <p className={styles.boundary}>Meine Arbeit ist Coaching. Sie ersetzt keine ärztliche oder psychotherapeutische Behandlung.</p>
            </div>
          </div>
        </section>

        <section className={styles.life}>
          <div className={k.wrap}>
            <div className={styles.lifeGrid}>
              <div className={styles.lifeText}>
                <p className={styles.note}>Mein ganz normales Leben.</p>
                <p>Ich bin 49 und lebe mit meinem Mann in Griechenland am Meer. Und was ich liebe:</p>
                <ul className={styles.lifeList}>
                  {LIFE.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div className={styles.collage}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.c1} src="/petra-leben-meer.jpg" alt="Petra Sailer lacht am Strand in der Brandung" width="700" height="700" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.c2} src="/petra-leben-afrika.jpg" alt="Petra Sailer und ihr Mann mit bunten Tüchern in Afrika" width="700" height="700" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.c3} src="/petra-leben-malen.jpg" alt="Ein abstraktes Blumenbild, gemalt von Petra Sailer" width="500" height="500" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.c4} src="/petra-leben-wald.jpg" alt="Petra Sailer auf einem Waldweg in der Sonne" width="500" height="500" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.c5} src="/petra-leben-winter.jpg" alt="Petra Sailer in roter Winterjacke mit pinkem Schal" width="500" height="500" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.end}>
          <div className={k.wrap}>
            <p className={styles.note}>Du überlegst noch?</p>
            <h2>Deine Antworten <em>warten schon.</em></h2>
            <div className={styles.endBottom}>
              <p>In der Klarheitssitzung stelle ich die Fragen, und du findest deine Antworten. 75 Minuten, nur für dich und dein Thema.</p>
              <div className={k.heroActions}>
                <a className={k.btn} href="/klarheitssitzung/#preise" data-umami-event="cta_click" data-umami-event-cta="zu_preisen" data-umami-event-location="ueber_mich_abschluss">Klarheit holen</a>
                <a className={k.textLink} href={CONSULTATION_URL} data-umami-event="cta_click" data-umami-event-cta="kennenlerngespraech" data-umami-event-location="ueber_mich_abschluss">15 Minuten kennenlernen</a>
              </div>
            </div>
            <div className={styles.greeting}>
              <Greeting>Ich freu mich auf dich.</Greeting>
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
