import type { Metadata } from "next";
import styles from "./base.module.css";

const NAVIGATION = [
  { label: "ÜBER MICH", href: "/ueber-mich" },
  { label: "KLARHEITSSITZUNG", href: "/klarheitssitzung" },
  { label: "WIRKLICH DEINS.", href: "/wirklich-deins" },
  { label: "KONTAKT", href: "/kontakt" },
] as const;

export const metadata: Metadata = {
  title: "Dem Eigenen folgen",
  description:
    "Petra Sailer begleitet eigenverantwortliche Menschen dabei, ihre eigenen Antworten wieder klar zu erleben, bewusst zu wählen und danach zu handeln.",
};

function NavLinks() {
  return NAVIGATION.map((item) => (
    <a key={item.label} href={item.href}>{item.label}</a>
  ));
}

function TextLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <a className={`${styles.textLink} ${light ? styles.textLinkLight : ""}`} href={href}>
      <span>{children}</span><span aria-hidden="true">↗</span>
    </a>
  );
}

export default function HomeContent() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#inhalt">Zum Inhalt springen</a>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a className={styles.brand} href="/" aria-label="Petra Sailer – Dem Eigenen folgen">
            <strong>Petra Sailer</strong>
            <span>Dem Eigenen folgen</span>
          </a>
          <nav className={styles.desktopNav} aria-label="Hauptnavigation"><NavLinks /></nav>
          <a className={styles.headerCta} href="/arbeite-mit-mir">ARBEITE MIT MIR <span aria-hidden="true">↗</span></a>
          <details className={styles.mobileMenu}>
            <summary><span>MENÜ</span><i aria-hidden="true" /></summary>
            <div className={styles.mobilePanel}>
              <nav aria-label="Mobile Hauptnavigation"><NavLinks /></nav>
              <a className={styles.mobileCta} href="/arbeite-mit-mir">ARBEITE MIT MIR <span aria-hidden="true">↗</span></a>
            </div>
          </details>
        </div>
      </header>

      <main id="inhalt">
        <section className={styles.hero} id="top">
          <div className={styles.heroTitle}>
            <p className={styles.eyebrow}>PETRA SAILER · COACH FÜR LEBENSGESTALTUNG</p>
            <h1>Du hast etwas vor. <em>Und du willst es wirklich</em> in dein Leben bringen.</h1>
          </div>
          <div className={styles.heroStage}>
            <figure className={styles.heroPortrait}>
              <img src="/petra-sailer-hero.jpg" alt="Petra Sailer lächelt freundlich in die Kamera" width="1024" height="1024" fetchPriority="high" />
            </figure>
            <div className={styles.heroNumber} aria-hidden="true">01</div>
            <div className={styles.heroIntro}>
              <p>Vielleicht geht es um eine Entscheidung, bei der du dich im Kreis drehst. Vielleicht um etwas, das du verändern, aufbauen oder verwirklichen möchtest.</p>
              <p>Ich begleite dich dabei, wieder klar zu sehen, was für dich stimmt – und die Schritte zu gehen, mit denen es in deinem Leben konkret wird.</p>
              <div className={styles.heroActions}>
                <TextLink href="#zusammenarbeit">WELCHER WEG PASST ZU MIR?</TextLink>
                <TextLink href="/ueber-mich">PETRA KENNENLERNEN</TextLink>
              </div>
            </div>
            <p className={styles.heroAside}>Eigene Antworten.<br />Bewusste Wahl.<br />Konkrete Schritte.</p>
          </div>
        </section>

        <section className={styles.recognition}>
          <div className={styles.sectionMarker}><span>02</span><p>BIST DU DAS?</p></div>
          <div className={styles.recognitionTitle}>
            <h2>Was möchtest du in deinem Leben <em>wirklich</em> angehen?</h2>
            <p>Menschen kommen mit ganz unterschiedlichen Themen zu mir.</p>
          </div>
          <div className={styles.recognitionBody}>
            <p className={styles.lead}>Vielleicht willst du …</p>
            <ul>
              <li>dich selbstständig machen oder dein Business weiterentwickeln,</li>
              <li>beruflich etwas verändern,</li>
              <li>ein Buch schreiben oder ein eigenes Projekt verwirklichen,</li>
              <li>in deiner Beziehung etwas ansprechen, verändern oder entscheiden,</li>
              <li>einen neuen Lebensort finden oder einen Umzug angehen,</li>
              <li>dich an bestimmten Stellen nicht immer wieder selbst zurückhalten.</li>
            </ul>
            <div className={styles.recognitionAfter}>
              <p className={styles.alt}>Oder es geht bei dir um etwas ganz anderes.</p>
              <p>Vielleicht weißt du schon ziemlich genau, was du willst. Vielleicht merkst du im Moment vor allem, dass etwas nicht mehr stimmt. Oder du drehst dich bei einem Thema immer wieder im Kreis und erlebst an bestimmten Stellen in deinem Leben immer wieder das Gleiche.</p>
              <p className={styles.closing}>Meine Arbeit ist genau für solche Themen da.</p>
            </div>
          </div>
        </section>

        <section className={styles.offers} id="zusammenarbeit">
          <div className={styles.offersIntro}>
            <div className={styles.sectionMarker}><span>03</span><p>ZWEI WEGE DER ZUSAMMENARBEIT</p></div>
            <h2>Was brauchst du <em>jetzt?</em></h2>
            <div>
              <p>Manchmal geht es um einen konkreten Punkt, an dem du nicht weiterkommst. Manchmal möchtest du etwas über längere Zeit verändern, aufbauen oder verwirklichen.</p>
              <p>Für beides gibt es eine eigene Form der Zusammenarbeit.</p>
            </div>
          </div>
          <article className={`${styles.offer} ${styles.offerOne}`}>
            <p className={styles.offerIndex}>01 · EIN KONKRETER PUNKT</p>
            <h3>Klarheitssitzung</h3>
            <p className={styles.offerClaim}>Wenn du bei einem konkreten Thema Klarheit brauchst.</p>
            <p className={styles.offerText}>Vielleicht geht es um eine Entscheidung, ein Gespräch oder ein Vorhaben. Du kommst mit diesem einen Thema, bei dem du gerade feststeckst. Und du gehst mit Klarheit darüber, was für dich stimmt – und mit deinem nächsten konkreten Schritt.</p>
            <TextLink href="/klarheitssitzung">KLARHEITSSITZUNG KENNENLERNEN</TextLink>
          </article>
          <article className={`${styles.offer} ${styles.offerTwo}`}>
            <p className={styles.offerIndex}>02 · SECHS MONATE</p>
            <h3>Wirklich <em>Deins.</em></h3>
            <p className={styles.offerClaim}>Wenn du etwas in deinem Leben verwirklichen willst.</p>
            <p className={styles.offerText}>Vielleicht möchtest du etwas verändern, neu aufbauen oder einen Wunsch verwirklichen, der dir wirklich wichtig ist. Über sechs Monate verbindest du dich immer wieder mit dem, was du willst. Du lernst, von dort aus deine Entscheidungen zu treffen und konkrete Schritte zu gehen, die stimmig für dich sind.</p>
            <TextLink href="/wirklich-deins" light>WIRKLICH DEINS. KENNENLERNEN</TextLink>
          </article>
          <p className={styles.offersClosing}>Du weißt noch nicht, welches Angebot gerade zu dir passt? <a href="mailto:kontakt@petrasailer.com">Dann schreib mir</a> und lass es uns gemeinsam herausfinden.</p>
        </section>

        <section className={styles.perspective}>
          <div className={styles.sectionMarker}><span>04</span><p>EIN NEUER AUSGANGSPUNKT</p></div>
          <h2>Erlebe, was möglich wird, wenn du nicht länger von der Herausforderung aus nach einer Lösung suchst</h2>
          <div className={styles.perspectiveCopy}>
            <p>Wenn du mit einem Thema oder Vorhaben zu mir kommst, hast du wahrscheinlich schon eine ganze Weile darüber nachgedacht. Du hast versucht, eine Lösung zu finden – ausgehend von dem, was gerade schwierig ist oder nicht funktioniert.</p>
            <p>Ich zeige dir, wie du eine vollkommen andere Perspektive einnimmst. Eine, aus der das, was du wirklich willst, bereits da ist.</p>
          </div>
          <p className={styles.perspectiveStatement}>Du hast es.<br /><em>Es ist erledigt.</em></p>
          <div className={styles.perspectiveEnd}>
            <p>Und du wirst sehen: Von dort entstehen auf einmal andere Gedanken, neue Ideen und Möglichkeiten, die du vorher nicht sehen konntest. Du erkennst, was für dich stimmt und was du als Nächstes konkret tun kannst.</p>
            <p className={styles.closing}>Du hast einen neuen Ausgangspunkt, von dem aus du dich bewegen und endlich handeln kannst.</p>
          </div>
        </section>

        <section className={styles.philosophy}>
          <div className={styles.sectionMarker}><span>05</span><p>DEM EIGENEN FOLGEN</p></div>
          <div className={styles.philosophyTitle}>
            <h2>Was heißt das eigentlich?</h2>
            <p>Dem Eigenen folgen bedeutet, dass du deine eigene, dir innewohnende Gestalterkraft wieder anerkennst und lebst.</p>
            <p>Dass du dich mit deinen Wünschen, den lauten und den leisen, wieder verbindest und sie in dein Leben bringst. Einfach, weil du es willst.</p>
          </div>
          <div className={styles.philosophyStory}>
            <div className={styles.storyBlock}>
              <span aria-hidden="true">A</span>
              <p>Meine Arbeit lebt davon, dass du lernst, eine neue Perspektive einzunehmen. Und zwar die, von der aus dein Wunsch bereits gelebtes Endergebnis ist. In meiner Arbeit wirst du dich immer wieder mit deinen Wünschen verbinden und sie innerlich so real erleben, als wären sie bereits Wirklichkeit. Was dadurch passiert, ist, dass du beginnst, es tatsächlich für möglich zu halten.</p>
            </div>
            <div className={styles.storyBlock}>
              <span aria-hidden="true">B</span>
              <p>Doch wir machen noch mehr. In Bezug auf deine Wünsche werden wir auch ganz genau hinschauen, was dich im Hier und Jetzt davon abhält, in Richtung deiner Wünsche zu gehen. Wir tun das auf eine ganz bestimmte Art und Weise, sodass du gut erkennen kannst, was dich oft unbewusst steuert.</p>
            </div>
            <div className={styles.storyBlock}>
              <span aria-hidden="true">C</span>
              <div>
                <p>Und genau dadurch bekommst du eine echte Wahl. Denn jetzt liegt beides auf dem Tisch: das Leben, das du innerlich bereits erlebt hast, und dein Jetzt.</p>
                <p>Hier kannst du jetzt wirklich entscheiden, was du leben willst.</p>
                <p>Und meiner Erfahrung nach geht es immer in Richtung Wunsch.</p>
              </div>
            </div>
          </div>
          <div className={styles.philosophyResult}>
            <p>Das ist im Grunde DEM EIGENEN FOLGEN:</p>
            <p className={styles.resultWords}><span>Perspektivwechsel</span><span>echte Wahl</span><span>Handeln</span></p>
            <p>aus dem bereits gelebten Endergebnis heraus.</p>
            <p className={styles.closing}>Wie das genau geht, zeige ich dir in unserer Zusammenarbeit.</p>
          </div>
        </section>

        <section className={styles.approach}>
          <div className={styles.approachPortrait}>
            <img src="/petra-sailer-portrait.jpg" alt="Petra Sailer" width="1024" height="1024" loading="lazy" />
          </div>
          <div className={styles.approachIntro}>
            <div className={styles.sectionMarker}><span>06</span><p>WENN WIR MITEINANDER ARBEITEN</p></div>
            <h2>Klar geführt. Persönlich. Und immer zurück zu dir.</h2>
            <p>Ich führe dich mit klaren Fragen durch den Prozess und immer wieder zurück zu dem, was du wirklich willst. Damit du selbst erkennst, was für dich stimmt und was du als Nächstes tun kannst.</p>
          </div>
          <div className={styles.testimonials}>
            <p className={styles.testimonialLabel}>So haben Menschen meine Begleitung erlebt</p>
            <blockquote>
              <p>„Die Arbeit mit Petra ist tief, klar und macht Freude. Mit ihrer unerschütterlichen Präsenz und ihrem Dranbleiben hat sie mich konsequent und undramatisch begleitet.“</p>
              <footer>Antje, 52 · Führende Angestellte</footer>
            </blockquote>
            <blockquote>
              <p>„Durch die einfühlsame und sehr präzise Art und Weise, mit der sich Petra meinen Themen zuwendete, entstand in mir immer mehr ein Gefühl von Selbstwirksamkeit.“</p>
              <footer>Kathi, 48 · Cranio-Sacral-Therapeutin</footer>
            </blockquote>
          </div>
        </section>

        <section className={styles.finalCta}>
          <div className={styles.sectionMarker}><span>07</span><p>DEIN NÄCHSTER SCHRITT</p></div>
          <h2>Womit möchtest du jetzt <em>weitergehen?</em></h2>
          <div className={styles.finalCopy}>
            <p>Vielleicht gibt es einen konkreten Punkt, bei dem du Klarheit brauchst. Oder du möchtest etwas über längere Zeit verändern, aufbauen oder verwirklichen.</p>
            <p>Wähle das Angebot, das zu deiner jetzigen Situation passt. Und wenn du dir noch unsicher bist, <a href="mailto:kontakt@petrasailer.com">schreib mir</a>. Dann finden wir es gemeinsam heraus.</p>
          </div>
          <div className={styles.finalActions}>
            <TextLink href="/klarheitssitzung" light>ZUR KLARHEITSSITZUNG</TextLink>
            <TextLink href="/wirklich-deins" light>WIRKLICH DEINS. KENNENLERNEN</TextLink>
          </div>
          <a className={styles.email} href="mailto:kontakt@petrasailer.com">kontakt@petrasailer.com</a>
        </section>
      </main>

      <footer className={styles.footer}>
        <a className={styles.footerBrand} href="#top"><strong>Petra Sailer</strong><span>Dem Eigenen folgen</span></a>
        <nav aria-label="Footer-Navigation"><NavLinks /><a href="/arbeite-mit-mir">ARBEITE MIT MIR</a></nav>
        <a className={styles.footerEmail} href="mailto:kontakt@petrasailer.com">kontakt@petrasailer.com</a>
        <div className={styles.footerBottom}>
          <p>© Petra Sailer 2026</p>
          <div><a href="https://petrasailer.com/impressum/">Impressum</a><a href="https://petrasailer.com/datenschutz/">Datenschutz</a></div>
        </div>
      </footer>
    </div>
  );
}
