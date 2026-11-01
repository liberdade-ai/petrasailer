import type { Metadata } from "next";
import JsonLd from "../JsonLd";
import { HOME_SOCIAL_IMAGE, pageGraph, pageMetadata } from "../seo";
// Gestaltung aus den Bausteinen der Klarheitssitzung (k). Texte sind Entwürfe und werden Abschnitt für Abschnitt mit Petra abgestimmt.
import k from "./klarheitssitzung/page.module.css";
import styles from "./startseite.module.css";
import SiteNav from "./klarheitssitzung/SiteNav";
import SiteFooter from "./klarheitssitzung/SiteFooter";
import Greeting from "./klarheitssitzung/Greeting";

const CONSULTATION_URL = "/kennenlerngespraech/klarheitssitzung/";
const ACCOMPANIMENT_URL = "/kennenlerngespraech/wirklich-deins/";

// Mit Petra am 30.10.2026 abgestimmt
const PAGE_TITLE = "Petra Sailer – Klarheitscoach | Dem Eigenen Folgen";
const PAGE_DESCRIPTION =
  "Du drehst dich im Kreis und willst endlich vorankommen? Coaching, das bei deinem Ziel anfängt: für Klarheit und deinen nächsten Schritt. 1:1 online.";

export const metadata: Metadata = pageMetadata({
  title: PAGE_TITLE,
  absoluteTitle: true,
  description: PAGE_DESCRIPTION,
  path: "/",
  socialImage: {
    url: HOME_SOCIAL_IMAGE,
    width: 1200,
    height: 630,
    alt: "Petra Sailer lacht. Daneben steht: Du hast es in der Hand.",
  },
});

// Szenen zum Wiedererkennen: in jeder ziehen zwei Kräfte, die zweite spricht als Stimme. Mit Petra am 29.10.2026 abgestimmt
const KNOWN = [
  "Seit Jahren träumst du von deinem eigenen Ding, und dein Notizbuch ist voll mit Ideen. Dann meldet sich eine Stimme: Und wovon willst du leben?",
  "Du willst deinen Brotjob kündigen, die Kündigung liegt längst in deinen Entwürfen. Und jeden Monat kommt das Gehalt und sagt: Bleib doch noch ein bisschen.",
  "Du willst woanders leben und hast in Gedanken schon in fünf Städten gewohnt. Dann stehst du in deiner Küche und denkst: Eigentlich ist es hier ja auch schön.",
  "Du weißt, dass du etwas ändern willst, und hast im Kopf schon zehnmal angefangen. Und zehnmal kam der Gedanke: Jetzt ist gerade nicht der richtige Moment.",
] as const;

const INCLUDED = [
  { label: "Dauer", text: "90 Minuten, 1:1 online per Video" },
  { label: "Danach", text: "Deine Klarheitskarte mit deinem nächsten Schritt" },
  { label: "Preis", text: "Deine erste Sitzung für 150\u00a0€" },
] as const;

const VOICES = [
  { quote: "Durch Petras Methode konnte ich eine ganz andere, freie Version von mir sehen … so dass ich letztendlich sogar den Schritt in meine berufliche Selbständigkeit gehen konnte. Das wäre vor ein paar Monaten für mich noch nicht denkbar gewesen.", name: "Kathi G.", role: "selbstständig" },
  { quote: "Herausforderungen begegne ich nun mit einer ganz neuen Leichtigkeit, zum Beispiel spreche ich Dinge offen aus, anstatt mich aus Angst vor Ablehnung zurückzuhalten. … Heute habe ich wieder Vertrauen in mich und meine großen Ziele.", name: "Miriam W.", role: "Unternehmerin" },
] as const;

export default function HomePage() {
  return (
    <div className={k.page}>
      <JsonLd
        data={pageGraph({
          path: "/",
          name: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
        })}
      />
      <a className={k.skipLink} href="#inhalt">Zum Inhalt springen</a>

      {/* 1 Kopf */}
      <header className={k.hero}>
        <div className={k.wrap}>
          <SiteNav current="/" />
          <div className={k.heroContent}>
            <figure className={`${k.sideNote} ${styles.heroPhoto}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/petra-sailer-start.jpg" alt="Petra Sailer lacht im hellen Blazer" width="1100" height="1100" fetchPriority="high" />
            </figure>
            <h1>Du hast es<br /> <em>in der Hand.</em></h1>
            <div className={k.heroBottom}>
              <p className={k.heroQuestion}>Wenn du dich bei einem Punkt gerade im Kreis drehst, holst du dir in der Klarheitssitzung deine eigene Antwort. Und mit ihr gehst du&nbsp;los.</p>
              <div className={k.heroCta}>
                <div className={k.heroActions}>
                  <a className={k.btn} href="/klarheitssitzung/">Zur Klarheitssitzung</a>
                  <a className={k.textLink} href="/ueber-mich/">Mehr über mich</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="inhalt">
        {/* 2 Wiedererkennen */}
        <section className={k.statement}>
          <div className={k.wrap}>
            <h2>Kommt dir das <em>bekannt vor?</em></h2>
            <div className={k.statementGrid}>
              <p className={k.standfirst}>Zwei Kräfte ziehen an dir. Die eine will los, die andere hält dich fest.</p>
              <div className={k.statementText}>
                {KNOWN.map((line) => <p key={line}>{line}</p>)}
                <p>Oder was auch immer es bei dir gerade ist.</p>
                <p className={k.lead}>In der Klarheitssitzung hörst du beiden zu. Und dann entscheidest du, welcher du folgst.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Gelbe Leitzeile */}
        <section className={k.interlude} aria-label="Leitgedanke">
          <div className={k.wrap}>
            <blockquote>Dem Eigenen <span className={k.nowrap}>Folgen.</span></blockquote>
          </div>
        </section>

        {/* 4 Was bei mir anders ist (hellblau = so arbeite ich) */}
        <section className={k.process}>
          <div className={k.wrap}>
            <div className={k.split}>
              <h2>Alles beginnt bei dem, <em>was du willst.</em></h2>
              <div>
                <p className={k.lead}>Wir fangen da an, wo du hinwillst.</p>
                <p>Aus deinem alten Denken kommen auch nur alte Ideen. Mit denen drehst du dich ja gerade im Kreis.</p>
                <p>Deshalb wechseln wir die Perspektive. Du gehst erst mal mitten hinein in dein Zukunftsbild und erlebst mit allen Sinnen, wie es ist, wenn das, was du willst, schon Wirklichkeit ist. Dann kommst du zurück und schaust dir in Ruhe dein Jetzt an, auch die Kräfte, die dich immer wieder festhalten.</p>
                <p>Und dann gehst du noch mal rein in dein Zukunftsbild und holst dir von dort deine nächsten Schritte. Diesmal kommen sie aus der neuen Perspektive.</p>
                <p>Ich begleite dich dabei. Die Antworten kommen alle von dir.</p>
                <p className={k.lead}>Und mit ihnen hast du einen neuen Ausgangspunkt, von dem aus du entscheidest und konkret weitergehst.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5 Angebot: Klarheitssitzung + lange Begleitung */}
        <section className={k.offer}>
          <div className={k.wrap}>
            <h2>Die <em>Klarheitssitzung.</em></h2>
            <p className={k.offerText}>Genau diesen Weg gehen wir zusammen, für den einen Punkt, an dem du gerade hängst. Nur du und ich.</p>
            <dl className={k.facts}>
              {INCLUDED.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.text}</dd>
                </div>
              ))}
            </dl>
            <div className={styles.offerActions}>
              <a className={`${k.btn} ${k.btnDark}`} href="/klarheitssitzung/">Mehr zur Klarheitssitzung</a>
            </div>

            <div className={styles.longTerm}>
              <h3>Und wenn du <em>etwas Größeres vorhast.</em></h3>
              <p>Sechs Monate, exklusiv 1:1. Hast du Lust, Schritt für Schritt zu erleben, wie du in dein Zukunftsbild hineinwächst?</p>
              <a className={k.textLink} href={ACCOMPANIMENT_URL}>Sprich mich an</a>
            </div>
          </div>
        </section>

        {/* 6 Kurz zu mir */}
        <section className={k.about}>
          <div className={`${k.wrap} ${k.aboutLayout}`}>
            <div>
              <h2>Ich bin<br /> <em>Petra.</em></h2>
              <p className={k.lead}>Klarheitscoach, Fragenstellerin und Großseherin.</p>
              <p>Was du in der Klarheitssitzung machst, mach ich selbst jeden Morgen: Ich richte mich auf das aus, was ich gewählt habe, und gehe von dort in meinen Tag.</p>
              <p>Und wenn wir zusammen arbeiten, geht es nur um dich und das, was du willst.</p>
              <a className={k.textLink} href="/ueber-mich/">Mehr über mich</a>
            </div>
            <figure className={k.aboutPhoto}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/petra-sailer-felswand.jpg" alt="Petra Sailer lächelt vor einer alten Steinmauer" width="1000" height="1000" loading="lazy" />
            </figure>
          </div>

          {/* 7 Stimmen */}
          <div className={`${k.wrap} ${k.voices}`}>
            <h3>Was sich bei anderen <em>bewegt hat.</em></h3>
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

        {/* 8 Abschluss */}
        <section className={k.end}>
          <div className={k.wrap}>
            <h2>Und jetzt <em>du.</em></h2>
            <div className={k.endBottom}>
              <p>Wenn dich ein Punkt gerade nicht loslässt, komm in die Klarheitssitzung. Und wenn du erst wissen willst, ob es passt, lass uns 15 Minuten kostenfrei sprechen.</p>
              <div className={k.heroActions}>
                <a className={`${k.btn} ${k.btnDark}`} href="/klarheitssitzung/">Zur Klarheitssitzung</a>
                <a className={k.textLink} href={CONSULTATION_URL}>15 Minuten kennenlernen</a>
              </div>
            </div>
            <div className={styles.greeting}>
              <Greeting>Ich freu mich auf dich.</Greeting>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
