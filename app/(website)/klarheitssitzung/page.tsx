import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../JsonLd";
import { CLARITY_SOCIAL_IMAGE, pageMetadata, serviceGraph } from "../../seo";
import shell from "../base.module.css";
import styles from "./page.module.css";
import siteStyles from "../page.module.css";

const BOOKING_URL = "https://www.digistore24.com/product/580151";
const NAVIGATION = [
  { label: "ÜBER MICH", href: "/ueber-mich/" },
  { label: "KLARHEITSSITZUNG", href: "#top", current: true },
  { label: "WIRKLICH DEINS.", href: "/wirklich-deins/" },
  { label: "KONTAKT", href: "/kontakt/" },
] as const;

const PAGE_DESCRIPTION =
  "In der Klarheitssitzung schauen wir gemeinsam, was für dich wirklich stimmt, was dich im Moment noch zurückhält und welcher nächste Schritt daraus entsteht.";

export const metadata: Metadata = pageMetadata({
  title: "Klarheitssitzung",
  description: PAGE_DESCRIPTION,
  path: "/klarheitssitzung/",
  socialImage: {
    url: CLARITY_SOCIAL_IMAGE,
    width: 1200,
    height: 630,
    alt: "Klarheitssitzung – Petra Sailer vor hellem Hintergrund.",
  },
});

function NavLinks() {
  return NAVIGATION.map((item) => (
    <a key={item.label} href={item.href} aria-current={"current" in item && item.current ? "page" : undefined}>
      {item.label}
    </a>
  ));
}

type LinkTracking = {
  event: "cta_click" | "booking_click";
  location: string;
  cta?: string;
  offer?: string;
};

function ActionLink({ href, children, light = false, tracking }: { href: string; children: React.ReactNode; light?: boolean; tracking?: LinkTracking }) {
  return (
    <a
      className={`${shell.textLink} ${light ? shell.textLinkLight : ""}`}
      href={href}
      data-umami-event={tracking?.event}
      data-umami-event-cta={tracking?.cta}
      data-umami-event-offer={tracking?.offer}
      data-umami-event-location={tracking?.location}
      data-umami-event-destination={tracking ? href : undefined}
    >
      <span>{children}</span><span aria-hidden="true">↗</span>
    </a>
  );
}

function Marker({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className={shell.sectionMarker}><span>{number}</span><p>{children}</p></div>;
}

export default function ClarityPage() {
  return (
    <div className={`${shell.page} ${styles.clarityPage}`}>
      <JsonLd
        data={serviceGraph({
          path: "/klarheitssitzung/",
          name: "Klarheitssitzung",
          description: PAGE_DESCRIPTION,
          serviceType: "1:1 Online-Coaching",
        })}
      />
      <a className={shell.skipLink} href="#inhalt">Zum Inhalt springen</a>

      <header className={shell.header}>
        <div className={shell.headerInner}>
          <Link className={shell.brand} href="/" aria-label="Petra Sailer – Dem Eigenen folgen">
            <strong>Petra Sailer</strong><span>Dem Eigenen folgen</span>
          </Link>
          <nav className={shell.desktopNav} aria-label="Hauptnavigation"><NavLinks /></nav>
          <a className={shell.headerCta} href="/arbeite-mit-mir/" data-umami-event="cta_click" data-umami-event-cta="arbeite_mit_mir" data-umami-event-location="header" data-umami-event-destination="/arbeite-mit-mir/">ARBEITE MIT MIR <span aria-hidden="true">↗</span></a>
          <details className={shell.mobileMenu}>
            <summary><span>MENÜ</span><i aria-hidden="true" /></summary>
            <div className={shell.mobilePanel}>
              <nav aria-label="Mobile Hauptnavigation"><NavLinks /></nav>
              <a className={shell.mobileCta} href="/arbeite-mit-mir/" data-umami-event="cta_click" data-umami-event-cta="arbeite_mit_mir" data-umami-event-location="mobile_header" data-umami-event-destination="/arbeite-mit-mir/">ARBEITE MIT MIR <span aria-hidden="true">↗</span></a>
            </div>
          </details>
        </div>
      </header>

      <main id="inhalt">
        <section className={styles.hero} id="top">
          <div className={styles.heroMeta}><Marker number="01">KLARHEITSSITZUNG · 1:1 ONLINE</Marker></div>
          <h1>Drehst du dich gerade <em>im Kreis?</em></h1>
          <p className={styles.heroQuestion}>Und willst du klar sehen, was für dich stimmt und wie du weitergehen kannst?</p>
          <div className={styles.heroIntro}>
            <p>In der Klarheitssitzung hörst du auf, vom Problem aus nach einer Lösung zu suchen, und nimmst eine neue Perspektive ein. Du erlebst, was für dich wirklich stimmt, und erkennst, was du heute, morgen oder in den nächsten Tagen konkret tun kannst.</p>
            <ActionLink href={BOOKING_URL} light tracking={{ event: "booking_click", offer: "klarheitssitzung", location: "klarheitssitzung_hero" }}>KLARHEITSSITZUNG BUCHEN</ActionLink>
          </div>
          <div className={styles.heroOrbit} aria-hidden="true"><span>?</span></div>
        </section>

        <section className={styles.recognition}>
          <Marker number="02">WENN DU FESTSTECKST</Marker>
          <h2>Es geht um diesen <em>einen Punkt,</em> an dem du jetzt weiterkommen möchtest.</h2>
          <div className={styles.recognitionCopy}>
            <p>Vielleicht weißt du nicht, ob du den neuen Job annehmen sollst. Vielleicht geht es um deine Beziehung und um etwas, das du ansprechen, verändern oder entscheiden möchtest. Vielleicht kommst du mit deinem Business, deinen Website-Texten oder einem anderen Vorhaben nicht voran.</p>
            <p>Oder du stehst eigentlich schon kurz vor dem nächsten Schritt. Und irgendetwas hält dich trotzdem zurück.</p>
            <p className={styles.recognitionClosing}>Es geht nicht darum, in einer Sitzung dein ganzes Leben zu verändern. Es geht um diesen einen Punkt, der im Hintergrund immer wieder auftaucht und Kraft kostet. Du bringst genau dieses eine Thema mit. Und damit arbeiten wir.</p>
          </div>
        </section>

        <section className={styles.process} id="prozess">
          <div className={styles.processIntro}>
            <Marker number="03">WIE WIR ARBEITEN</Marker>
            <h2>Wir verändern den <em>Ausgangspunkt,</em> von dem aus du auf dein Thema schaust.</h2>
            <div className={styles.processLead}>
              <p>Solange du innerhalb deines Problems denkst, suchst du auch dort nach einer Lösung. Dabei entstehen häufig immer wieder ähnliche Gedanken, weil der Ausgangspunkt derselbe bleibt.</p>
              <p>In der Klarheitssitzung verändern wir diesen Ausgangspunkt. Du schaust nicht mehr vom Problem auf die Lösung, sondern vom gewünschten Leben auf das Problem. Von dort aus wird klarer, was für dich stimmt, was dich bisher zurückgehalten hat und was jetzt möglich ist.</p>
              <p>Um deiner eigenen Klarheit näherzukommen, arbeiten wir in vier Schritten:</p>
            </div>
          </div>
          <ol className={styles.processList}>
            <li><span>01</span><h3>In die Stille kommen</h3><p>Wir nehmen uns einen Moment der Stille. Dein alltäglicher Gedankenstrom darf ruhiger werden, und du richtest deine Aufmerksamkeit nach innen.</p></li>
            <li><span>02</span><h3>Das gewünschte Ergebnis erleben</h3><p>Du erlebst innerlich, wie es ist, wenn das, was du dir wünschst, bereits Wirklichkeit ist.</p></li>
            <li><span>03</span><h3>Zurück in die Jetzt-Realität</h3><p>Du schaust klar, was heute da ist und was dich bisher zurückgehalten hat.</p></li>
            <li><span>04</span><h3>Den nächsten Schritt erkennen</h3><p>Du verbindest dich noch einmal mit dem gewünschten Ergebnis. Von dort wird klarer, welche Entscheidung oder welcher konkrete Schritt jetzt in deiner Hand liegt.</p></li>
          </ol>
        </section>

        <section className={styles.offer} id="angebot">
          <div className={styles.offerTop}>
            <Marker number="04">DER RAHMEN</Marker>
            <h2>Deine Klarheitssitzung</h2>
            <p className={styles.price}>240 € <span>inkl. MwSt.</span></p>
          </div>
          <div className={styles.offerFacts} aria-label="Angebotsinformationen">
            <div><span>FORMAT</span><strong>1:1 online</strong></div>
            <div><span>DAUER</span><strong>90 bis 120 Minuten</strong></div>
            <div><span>FOKUS</span><strong>Ein konkretes Thema</strong></div>
            <div><span>INKLUSIVE</span><strong>Persönliche Mitschrift</strong></div>
            <div><span>ERGEBNIS</span><strong>Dein konkreter nächster Schritt</strong></div>
          </div>
          <div className={styles.offerBottom}>
            <div>
              <p>Nach der Sitzung bekommst du eine persönliche Mitschrift mit deinen eigenen Worten. So kannst du später noch einmal nachlesen, was du erlebt und für dich erkannt hast, und dich leichter wieder damit verbinden.</p>
              <p>Die Klarheitssitzung ist in sich abgeschlossen. Danach kannst du mit deiner Klarheit und deinem nächsten Schritt selbstständig weitergehen.</p>
            </div>
            <ActionLink href={BOOKING_URL} tracking={{ event: "booking_click", offer: "klarheitssitzung", location: "klarheitssitzung_angebot" }}>KLARHEITSSITZUNG JETZT BUCHEN</ActionLink>
          </div>
        </section>

        <section className={styles.practice}>
          <figure className={styles.practicePortrait}>
            <img src="/petra-sailer-hero.jpg" alt="Petra Sailer lächelt freundlich in die Kamera" width="1024" height="1024" loading="lazy" />
          </figure>
          <div className={styles.practiceStory}>
            <Marker number="05">AUS DER PRAXIS</Marker>
            <h2>Als die Verbindung wieder da war, kamen auch <em>die Worte.</em></h2>
            <div>
              <p>Simona kam zu mir, weil sie beim Schreiben ihrer Website-Texte feststeckte. Sie wusste, was sie anbietet – aber die Worte wollten einfach nicht kommen.</p>
              <p>In der Sitzung hat sie sich wieder mit dem verbunden, was ihre Arbeit wirklich ist: tief, von innen und unabhängig davon, was andere erwarten. Von dort floss es.</p>
              <p>Eine halbe Stunde später schickte sie mir die ersten Texte.</p>
            </div>
          </div>
          <p className={styles.practiceClosing}><span>Manchmal hilft es nicht, noch länger innerhalb des Problems nach einer Lösung zu suchen.</span><span>Manchmal braucht es einen anderen Ausgangspunkt.</span></p>
        </section>

        <section className={styles.results}>
          <div className={styles.resultsCopy}>
            <Marker number="06">WAS DU MITNIMMST</Marker>
            <h2>Du gehst mit Klarheit über dein Thema – und mit deinem nächsten konkreten Schritt.</h2>
            <div>
              <p>Du nimmst eine neue Perspektive auf dein Thema ein. Dadurch kann klarer werden, was dich bisher zurückgehalten hat, was du wirklich willst und was für dich stimmt.</p>
              <p>Und du erkennst, was du heute, morgen oder in den nächsten Tagen konkret tun kannst.</p>
            </div>
          </div>
          <div className={styles.resultQuote}>
            <p>Und oft bleibt dieses Gefühl:</p>
            <strong>Ich habe es<br /><em>in der Hand.</em></strong>
          </div>
        </section>

        <section className={styles.faq} id="faq">
          <div className={styles.faqHeading}><Marker number="07">NOCH FRAGEN?</Marker><h2>Häufige <em>Fragen</em></h2></div>
          <div className={styles.faqList}>
            <details><summary>Was ist, wenn ich schon eine Ahnung habe – aber trotzdem nicht weiterkomme?<span aria-hidden="true">+</span></summary><p>Genau dann kann die Klarheitssitzung passend sein. Vielleicht hast du längst eine Ahnung, was du willst, und trotzdem hält dich etwas zurück. In der Sitzung wird klarer, was für dich stimmt und welcher konkrete nächste Schritt jetzt möglich ist.</p></details>
            <details><summary>Ist die Klarheitssitzung nur für berufliche Themen?<span aria-hidden="true">+</span></summary><p>Du kannst mit einem beruflichen, persönlichen oder zwischenmenschlichen Thema kommen. Entscheidend ist nicht der Lebensbereich, sondern dass es um einen konkreten Punkt geht, an dem du feststeckst und weiterkommen möchtest.</p></details>
            <details><summary>Muss ich mich auf die Sitzung vorbereiten?<span aria-hidden="true">+</span></summary><p>Vorbereiten musst du nichts. Es reicht, wenn du den einen Punkt mitbringst, bei dem du gerade nicht weiterkommst. Wie die Lösung aussieht, musst du vorher noch nicht wissen.</p></details>
            <details><summary>Wie geht es nach der Buchung weiter?<span aria-hidden="true">+</span></summary><p>Nach der Buchung über Digistore24 melde ich mich innerhalb eines Werktages persönlich bei dir, damit wir einen Termin für deine Klarheitssitzung vereinbaren. Den Link für unsere Online-Sitzung erhältst du anschließend per E-Mail.</p></details>
            <details><summary>Muss ich danach weiter mit dir arbeiten?<span aria-hidden="true">+</span></summary><p>Die Klarheitssitzung ist ein eigenständiges, vollständiges Angebot. Du musst danach nichts weiter bei mir buchen. In dieser Sitzung geht es ausschließlich um dein konkretes Thema.</p></details>
          </div>
        </section>

        <section className={styles.finalCta}>
          <p className={styles.finalIndex}>08 · DEIN NÄCHSTER SCHRITT</p>
          <h2>Welches Thema soll nicht noch länger <em>im Hintergrund mitlaufen?</em></h2>
          <div className={styles.finalCopy}>
            <p>Wenn du spürst, dass es Zeit ist, bei diesem einen Thema weiterzukommen, dann bring es mit. Wir schauen gemeinsam, was für dich wirklich stimmt und was du als Nächstes konkret tun kannst.</p>
            <ActionLink href={BOOKING_URL} light tracking={{ event: "booking_click", offer: "klarheitssitzung", location: "klarheitssitzung_abschluss" }}>KLARHEITSSITZUNG JETZT BUCHEN</ActionLink>
          </div>
          <p className={styles.contact}>Du hast vor der Buchung noch eine Frage? Dann melde dich gerne persönlich:<br /><a href="mailto:kontakt@petrasailer.com" data-umami-event="contact_click" data-umami-event-method="email" data-umami-event-location="klarheitssitzung_abschluss">kontakt@petrasailer.com</a></p>
        </section>
      </main>

      <footer className={`${shell.footer} ${siteStyles.siteFooter}`}>
        <a className={shell.footerBrand} href="#top"><strong>Petra Sailer</strong><span>Dem Eigenen folgen</span></a>
        <nav aria-label="Footer-Navigation"><a href="/ueber-mich/">ÜBER MICH</a><a href="#top">KLARHEITSSITZUNG</a><a href="/wirklich-deins/">WIRKLICH DEINS.</a><a href="/kontakt/">KONTAKT</a><a href="/arbeite-mit-mir/">ARBEITE MIT MIR</a></nav>
        <a className={shell.footerEmail} href="mailto:kontakt@petrasailer.com" data-umami-event="contact_click" data-umami-event-method="email" data-umami-event-location="footer">kontakt@petrasailer.com</a>
        <div className={shell.footerBottom}><p>© Petra Sailer 2026</p><div><a href="https://petrasailer.com/impressum/">Impressum</a><a href="https://petrasailer.com/datenschutz/">Datenschutz</a></div></div>
      </footer>
    </div>
  );
}
