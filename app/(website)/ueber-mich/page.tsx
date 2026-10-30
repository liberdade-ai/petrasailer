import type { Metadata } from "next";
import JsonLd from "../../JsonLd";
import { pageGraph, pageMetadata } from "../../seo";
// Gestaltung wie auf der Klarheitssitzungs-Seite: Farben, Schriften, Navigation, Buttons und Fuß kommen aus k.
import k from "../klarheitssitzung/page.module.css";
import styles from "./page.module.css";
import SiteNav from "../klarheitssitzung/SiteNav";
import SiteFooter from "../klarheitssitzung/SiteFooter";
import Greeting from "../klarheitssitzung/Greeting";

const CONSULTATION_URL = "/kennenlerngespraech/klarheitssitzung/";

const PAGE_DESCRIPTION =
  "Lerne Petra Sailer kennen, ihre Art zu arbeiten und ihr ganz normales Leben in Griechenland.";

// Texte aus Petras eingesprochenen Antworten, noch in Überarbeitung. Aufbau nach den Bausteinen der Klarheitssitzung.
const TRAININGS = [
  { title: "Körper & Präsenz", text: "Yogalehrerin · Thai-Yoga-Practitioner · Bioenergetik und dynamische Körperarbeit nach Alexander Lowen" },
  { title: "Beratung & Beziehung", text: "Lebens- und Sozialberaterin, Österreich · Systemisches Familienstellen und Astrologie bei Ulrich Böld · Traumaarbeit nach IoPT bei Prof. Dr. Franz Ruppert" },
  { title: "Erleben & Gestaltung", text: "Coach nach der Magnetic-Mind-Methode bei Christopher Duncan · Curriculum der Natural Success Academy bei William Whitecloud" },
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
              <img src="/petra-sailer-ueber-mich-wald.jpg" alt="Petra Sailer lächelt im roten Pullover vor grünen Bäumen" width="860" height="860" fetchPriority="high" />
            </figure>
            <h1>Hey, ich bin<br /> <em>Petra.</em></h1>
            <div className={k.heroBottom}>
              <p className={`${k.heroQuestion} ${styles.heroIntro}`}>Bei mir drehen wir das Stimmengewirr in deinem Kopf mal leiser. Und dann hörst du endlich wieder, was du eigentlich&nbsp;willst.</p>
              <div className={k.heroCta}>
                <div className={k.heroActions}>
                  <a className={k.btn} href="/klarheitssitzung/" data-umami-event="cta_click" data-umami-event-cta="klarheitssitzung" data-umami-event-location="ueber_mich_hero">Zur Klarheitssitzung</a>
                  <a className={k.textLink} href={CONSULTATION_URL} data-umami-event="cta_click" data-umami-event-cta="kennenlerngespraech" data-umami-event-location="ueber_mich_hero">15 Minuten kennenlernen</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="inhalt">
        <section className={k.statement}>
          <div className={k.wrap}>
            <h2>Früher hab ich meine Vergangenheit befragt. <em>Heute meine Zukunft.</em></h2>
            <div className={k.statementGrid}>
              <div aria-hidden="true" />
              <div className={k.statementText}>
                <p>Jahrelang hab ich mich gefragt: Warum bin ich so? Irgendwann wusste ich unglaublich viel über mich und meine Muster. Leichter wurde es dadurch nicht unbedingt.</p>
                <p>Dann hab ich angefangen, anders zu fragen: Was will ich? Und wie ist es, das zu leben? Seitdem geht vieles leichter. Und genau da setzt meine Arbeit an.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={k.interlude} aria-label="Leitgedanke">
          <div className={k.wrap}>
            {/* „Klarheitscoach, Fragenstellerin, …“ kommt in den Abschnitt „Meine Arbeit“. */}
            <blockquote>Was willst du <span className={k.nowrap}>wirklich?</span></blockquote>
          </div>
        </section>

        <section className={`${k.process} ${styles.work}`}>
          <div className={k.wrap}>
            <div className={`${k.split} ${styles.workSplit}`}>
              <div className={styles.workSide}>
                <h2>Dem Eigenen <em>Folgen.</em></h2>
                <div className={`${styles.workCta} ${styles.workCtaColumn}`}>
                  <p>Du willst wissen, ob das zu dir passt?</p>
                  <a className={k.btn} href={CONSULTATION_URL} data-umami-event="cta_click" data-umami-event-cta="kennenlerngespraech" data-umami-event-location="ueber_mich_mitte">Lass uns 15 Minuten sprechen</a>
                </div>
              </div>
              <div>
                <p className={k.lead}>Ich bin Klarheitscoach, Fragenstellerin, Zwischen-den-Zeilen-Hörerin, Großseherin, Ruhepol und Nährboden für neue Möglichkeiten.</p>
                <p>Und ja, auch ich werd mal wütend oder verlier mich in dem, was gerade nicht klappt. Der Unterschied zu früher: Ich merk es schneller. Dann frag ich mich: Was will ich jetzt? Ich tauch darin ein, und ganz schnell kann ich wieder frei wählen.</p>
                <p>Genau das gehört für mich dazu. Zweifel, alte Gedanken und Gefühle tauchen weiter auf. Sie bestimmen mich nur nicht mehr automatisch.</p>
                <p>In der Klarheitssitzung tauchst du zuerst in das ein, was du willst. Dann legen wir beides auf den Tisch: wie es sich anfühlt, wenn es schon da ist, und das, was dich bisher bremst.</p>
                <p className={k.lead}>So hast du eine echte Wahl.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${k.about} ${styles.voicesSection}`}>
          <div className={`${k.wrap} ${k.voices} ${styles.voicesTop} ${styles.voicesThree}`}>
            <h2>Wie andere mich erleben</h2>
            <ul>
              <li>
                <blockquote>„Mit ihrer unerschütterlichen Präsenz und ihrem Dranbleiben hat sie mich konsequent und undramatisch begleitet. Ihre entspannte Klarheit und ihr echtes Engagement wirken ermutigend und tragend – man spürt, dass sie das, was sie heute weitergibt, selbst gründlich durchlebt und erarbeitet hat.“</blockquote>
                <p>Antje H., führende Angestellte</p>
              </li>
              <li>
                <blockquote>„Was dich so besonders macht, ist deine Hartnäckigkeit – du lässt nicht locker und bleibst an meiner Seite. Deine Präzision und dein Einfühlungsvermögen sind genau das, was es braucht. … Du bist die Beste! ❤️“</blockquote>
                <p>Esma S., selbstständig</p>
              </li>
              <li>
                <blockquote>„Die Begleitung war nah, konkret und im Moment. Für was es brauchte. Ihre klaren Worte, die zusammengefasst haben, was ich aussprach, waren ein enormes Geschenk.“</blockquote>
                <p>Simona P., selbstständig</p>
              </li>
            </ul>
          </div>
        </section>

        <section className={`${k.process} ${styles.work} ${styles.trainingsPaper}`}>
          <div className={k.wrap}>
            <h2 className={styles.trainingsTitle}>Was meine Arbeit <em>trägt.</em></h2>
            <div className={k.statementGrid}>
              <div>
                <p className={k.standfirst}>Meine eigene Erfahrung ist eine wichtige Quelle meiner Arbeit.</p>
                <img className={styles.trainingsPhoto} src="/petra-sailer-sofa.jpg" alt="Petra Sailer" width="1100" height="1334" loading="lazy" />
              </div>
              <div className={k.statementText}>
                <p>Aber nicht die einzige.</p>
                <p>Seit über 20 Jahren bin ich dem Menschen auf der Spur: seinem Körper, seinem Erleben, seinen Beziehungen. Und vor allem der Frage, wie er sein Leben bewusst gestalten kann. Das fasziniert mich bis heute.</p>
                <h3 className={styles.flatHeading}>Meine Ausbildungen</h3>
                {TRAININGS.map((item) => (
                  <div key={item.title} className={styles.trainingGroup}>
                    <h4>{item.title}</h4>
                    <ul className={styles.trainingFlat}>
                      {item.text.split(" · ").map((training) => <li key={training}>{training}</li>)}
                    </ul>
                  </div>
                ))}
                <p className={styles.workNote}>Meine Arbeit ist Coaching. Sie ersetzt keine ärztliche oder psychotherapeutische Behandlung.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.lifeNew}>
          <div className={k.wrap}>
            <div className={`${styles.lifeNewGrid} ${styles.lifeCollage}`}>
              <div className={styles.collageText}>
                <h2>Ich, <em>ganz privat.</em></h2>
                <p className={k.lead}>Ich bin 49 und lebe mit meinem Mann in Griechenland am Meer.</p>
                <div className={styles.lifeNewText}>
                  <p>Den größten Teil des Jahres genießen wir dort die Sonne, das Meer und das einfache, entspannte Leben. Und trotzdem bin ich im Grunde ein Waldmensch. Sobald wir in Deutschland bei Familie und Freunden sind, zieht es mich raus zwischen die Bäume. Da könnte ich stundenlang bleiben.</p>
                  <p>Morgens nehme ich mir Zeit für mich. Ich richte mich innerlich aus, auf das Große, das ich gewählt habe, und auf den Tag. Dann mach ich meinen Morning Walk, mein Mobility-Training oder schwitze beim Gewichtheben. Danach bin ich bereit für die Menschen, mit denen ich arbeite. Und an freien Tagen für alles, was kommen mag.</p>
                  <p>Ich sitze auch gerne mal mit einem guten Cappuccino im Café und beobachte das Leben und die Menschen. Wenn ich Zeit habe, male ich. Ich lasse mich dabei vom Leben inspirieren und male abstrakt, was mich bewegt. Einige meiner Bilder habe ich auch schon verkauft.</p>
                  <p>Und ich liebe es, Zeit mit meinem Mann zu verbringen. Ob wir reisen, Ausflüge machen oder zusammen tanzen: Wir lachen total viel, er hat einen herrlichen Humor. Und genauso gern sind wir mal einfach auf der Couch. Ein gutes Buch, ein guter Film, nichts weiter.</p>
                  <p>Und was auf keinen Fall fehlen darf: lange Telefonate mit Familie und Freunden. Oder noch besser: echte Treffen.</p>
                </div>
              </div>
              <div className={styles.seaPhotos}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/petra-leben-meer-vorne.jpg" alt="Petra Sailer geht lachend durch die Brandung" width="1000" height="1176" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/petra-leben-meer-hinten.jpg" alt="Petra Sailer geht barfuß am Meer entlang, von hinten" width="700" height="933" loading="lazy" />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={styles.collageAfrika} src="/petra-leben-afrika.jpg" alt="Petra Sailer und ihr Mann in bunten Tüchern auf einer Reise in Afrika" width="1050" height="1400" loading="lazy" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={styles.collageTanz} src="/petra-leben-tanzen.jpg" alt="Petra Sailer tanzt mit ihrem Mann" width="640" height="960" loading="lazy" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={`${styles.painting} ${styles.collageAuge}`} src="/petra-bild-auge.jpg" alt="Abstraktes Bild von Petra Sailer: ein tiefblauer Kern mit orangem Rand auf hellem Grund" width="1400" height="991" loading="lazy" />
            </div>
          </div>
        </section>

        <section className={k.end}>
          <div className={k.wrap}>
            <h2>Deine Antworten <em>warten schon.</em></h2>
            <div className={k.endBottom}>
              <p>Jetzt kennst du mich ein bisschen. Wenn dir ein Punkt seit Wochen im Kopf herumgeht, komm in die Klarheitssitzung. In 75 Minuten kannst du herausfinden, was du willst. Und von dort aus holst du dir deinen nächsten Schritt.</p>
              <div className={k.heroActions}>
                <a className={k.btn} href="/klarheitssitzung/" data-umami-event="cta_click" data-umami-event-cta="klarheitssitzung" data-umami-event-location="ueber_mich_abschluss">Zur Klarheitssitzung</a>
                <a className={k.textLink} href={CONSULTATION_URL} data-umami-event="cta_click" data-umami-event-cta="kennenlerngespraech" data-umami-event-location="ueber_mich_abschluss">15 Minuten kennenlernen</a>
              </div>
            </div>
            <div className={styles.greeting}>
              <Greeting>Ich freu mich auf dich.</Greeting>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter current="/ueber-mich/" />
    </div>
  );
}
