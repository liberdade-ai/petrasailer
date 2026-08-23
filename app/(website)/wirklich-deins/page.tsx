import type { Metadata } from "next";
import Link from "next/link";
import shell from "../base.module.css";
import styles from "./page.module.css";
import siteStyles from "../page.module.css";

const NAVIGATION = [
  { label: "ÜBER MICH", href: "/ueber-mich" },
  { label: "KLARHEITSSITZUNG", href: "/klarheitssitzung" },
  { label: "WIRKLICH DEINS.", href: "#top", current: true },
  { label: "KONTAKT", href: "/kontakt" },
] as const;

export const metadata: Metadata = {
  title: "Wirklich Deins.",
  description: "Die sechsmonatige 1:1-Begleitung für Menschen, die etwas Eigenes verwirklichen und lernen wollen, ihren eigenen Antworten zu vertrauen und danach zu handeln.",
  alternates: { canonical: "/wirklich-deins/" },
};

function NavLinks() {
  return NAVIGATION.map((item) => <a key={item.label} href={item.href} aria-current={"current" in item && item.current ? "page" : undefined}>{item.label}</a>);
}

type CtaTracking = { cta: string; location: string };

function ActionLink({ href, children, light = false, tracking }: { href: string; children: React.ReactNode; light?: boolean; tracking?: CtaTracking }) {
  return <a className={`${shell.textLink} ${light ? shell.textLinkLight : ""}`} href={href} data-umami-event={tracking ? "cta_click" : undefined} data-umami-event-cta={tracking?.cta} data-umami-event-location={tracking?.location} data-umami-event-destination={tracking ? href : undefined}><span>{children}</span><span aria-hidden="true">↗</span></a>;
}

function Marker({ number, children, round = false }: { number: string; children: React.ReactNode; round?: boolean }) {
  return <div className={`${shell.sectionMarker} ${round ? styles.roundMarker : ""}`}><span>{number}</span><p>{children}</p></div>;
}

export default function ReallyYoursPage() {
  return (
    <div className={`${shell.page} ${styles.followPage}`}>
      <a className={shell.skipLink} href="#inhalt">Zum Inhalt springen</a>
      <header className={shell.header}>
        <div className={shell.headerInner}>
          <Link className={shell.brand} href="/" aria-label="Petra Sailer – Dem Eigenen folgen"><strong>Petra Sailer</strong><span>Dem Eigenen folgen</span></Link>
          <nav className={shell.desktopNav} aria-label="Hauptnavigation"><NavLinks /></nav>
          <a className={shell.headerCta} href="/arbeite-mit-mir" data-umami-event="cta_click" data-umami-event-cta="arbeite_mit_mir" data-umami-event-location="header" data-umami-event-destination="/arbeite-mit-mir">ARBEITE MIT MIR <span aria-hidden="true">↗</span></a>
          <details className={shell.mobileMenu}><summary><span>MENÜ</span><i aria-hidden="true" /></summary><div className={shell.mobilePanel}><nav aria-label="Mobile Hauptnavigation"><NavLinks /></nav><a className={shell.mobileCta} href="/arbeite-mit-mir" data-umami-event="cta_click" data-umami-event-cta="arbeite_mit_mir" data-umami-event-location="mobile_header" data-umami-event-destination="/arbeite-mit-mir">ARBEITE MIT MIR <span aria-hidden="true">↗</span></a></div></details>
        </div>
      </header>

      <main id="inhalt">
        <section className={styles.hero} id="top">
          <div className={styles.heroMeta}><Marker number="01" round>SECHS MONATE · 1:1-BEGLEITUNG</Marker></div>
          <h1>Was wäre, wenn du dich diesmal nicht zurückhältst – und <em>dein ganz Eigenes</em> verwirklichst?</h1>
          <div className={styles.heroQuestion}><h2>Was würde sich verändern?</h2><p>Genau das ist: Wirklich Deins.</p></div>
          <div className={styles.heroIntro}><p>Wirklich Deins. ist für dich, wenn du etwas in deinem Leben verwirklichen willst und dich nicht immer wieder von Zweifeln oder alten Gedanken davon abbringen lassen möchtest.</p><p>Wie ich dich dabei begleite, erfährst du hier.</p><ActionLink href="#du-hast-etwas-vor" tracking={{ cta: "wirklich_deins_kennenlernen", location: "wirklich_deins_hero" }}>DIE BEGLEITUNG KENNENLERNEN</ActionLink></div>
        </section>

        <section className={styles.recognition} id="du-hast-etwas-vor">
          <Marker number="02">DU HAST WAS VOR</Marker>
          <h2>Du willst deinen Wunsch <em>wirklich ernst nehmen.</em></h2>
          <p className={styles.recognitionLead}>Vielleicht weißt du schon genau, was du verändern, aufbauen oder verwirklichen möchtest. Vielleicht ist bisher nur klar: So, wie es gerade ist, soll es nicht bleiben.</p>
          <div className={styles.recognitionBody}><p>Vielleicht willst du dich selbstständig machen, ein Buch schreiben, den Beruf wechseln oder in deiner Beziehung etwas verändern. Oder es geht dir um etwas ganz anderes.</p><p>Du weißt, dass es dir wichtig ist. Und du willst jetzt herausfinden:</p><strong>Was wird möglich, wenn ich diesen Wunsch wirklich ernst nehme?</strong></div>
        </section>

        <section className={styles.direction}>
          <div className={styles.directionIntro}><Marker number="03">WIRKLICH DEINS.</Marker><h2>Nicht gegen das Alte. <em>Für das, was du wirklich leben willst.</em></h2><div><p>Es geht hier nicht darum, dich zu reparieren oder irgendwie besser zu werden. Auch deine Wünsche sollen keinen Mangel, den du vielleicht in dir spürst, beheben. Du wählst sie, weil sie deinem Eigenen entsprechen und du sie leben willst.</p><p>Die Veränderung beginnt nicht dort, wo das Problem sichtbar wird. Sie beginnt dort, wo sich ein Mensch auf das ausrichtet, was er wirklich will.</p></div></div>
          <div className={styles.vision}>
            <div className={styles.visionPrompt}><p>Stell dir mal vor …</p><strong>Das, was du dir wünschst, ist bereits Teil deines Lebens.</strong><p>Wer bist du dann? Wie bist du?<br />Was denkst und fühlst du?<br />Und wie handelst du?</p></div>
            <div className={styles.visionCopy}><p>Für einen Moment schaust du nicht mehr nur von dem aus auf dein Leben, was heute schwierig erscheint oder dich bisher zurückgehalten hat. Du erlebst deinen Wunsch so, als wäre er bereits Wirklichkeit, und nimmst eine andere Perspektive ein.</p><p>Von dort aus können Möglichkeiten sichtbar werden, die du vorher vielleicht noch gar nicht sehen konntest. Du bekommst ein klareres Gefühl dafür, was für dich stimmt. Und aus dieser Perspektive kannst du dich fragen:</p><strong>Was will ich? Und was kann ich jetzt dafür tun?</strong><p>Genau mit diesem veränderten Blick arbeiten wir in „Wirklich Deins.“.</p></div>
          </div>
        </section>

        <section className={styles.process} id="prozess">
          <div className={styles.processIntro}><Marker number="04">WIE WIR ARBEITEN</Marker><h2>Sechs Monate – um <em>dem Neuen</em> Raum zu geben</h2><div><p>Zu Beginn haben wir gemeinsam herausgefunden, welche Wünsche du in diesen sechs Monaten verwirklichen möchtest. Mit ihnen verbindest du dich immer wieder. Du erlebst, wie du denkst, fühlst und handelst, wenn das Gewünschte bereits Teil deines Lebens ist, und bringst diese neue Perspektive Schritt für Schritt in deinen Alltag.</p><p>Dafür arbeiten wir mit einem klaren Prozess:</p></div></div>
          <ol className={styles.processList}>
            <li><span>01</span><h3>In die Stille kommen</h3><p>Wir nehmen uns einen Moment der Stille. Dein alltäglicher Gedankenstrom darf ruhiger werden, und du richtest deine Aufmerksamkeit nach innen.</p></li>
            <li><span>02</span><h3>Das gewünschte Ergebnis erleben</h3><p>Du erlebst innerlich, wie es ist, wenn das, was du dir wünschst, bereits Wirklichkeit ist.</p></li>
            <li><span>03</span><h3>Zurück in die Jetzt-Realität</h3><p>Du schaust klar, was heute da ist und was dich bisher zurückgehalten hat.</p></li>
            <li><span>04</span><h3>Den nächsten Schritt erkennen</h3><p>Du verbindest dich noch einmal mit dem gewünschten Ergebnis. Von dort wird klarer, welche Entscheidung oder welcher konkrete Schritt jetzt in deiner Hand liegt.</p></li>
          </ol>
          <div className={styles.processClosing}><div><p>Diesen Prozess durchlaufen wir in den Sitzungen immer wieder gemeinsam. Im besten Fall wendest du ihn auch zwischen unseren Sitzungen für dich an. Denn das Neue braucht Raum und Wiederholung, damit es dir mit der Zeit vertrauter werden kann.</p><p>Auch in deinem Alltag lernst du, dich immer wieder mit deinen Wünschen und dem damit verbundenen neuen Erleben zu verbinden. Von dort aus triffst du Entscheidungen, führst Gespräche und gehst die nächsten konkreten Schritte.</p></div><div><strong>Im Grunde geht es darum, die Anziehungskraft des Wunsches so lebendig werden zu lassen, dass sie stärker wird als die Anziehung der Vergangenheit.</strong><p>Zweifel, alte Gedanken und vertraute Muster werden dabei wahrscheinlich auftauchen. Das gehört dazu. Doch mit der Zeit erkennst du schneller, welche innere Perspektive gerade die Führung übernehmen will. Du musst dann nicht zwangsläufig im Alten verweilen, sondern kannst dich neu ausrichten und bewusst entscheiden, wie du weitergehen möchtest.</p><p>So wird das Neue zunehmend vertrauter und das Alte langsam leiser.</p></div></div>
        </section>

        <section className={styles.journey}>
          <div className={styles.journeyIntro}><Marker number="05">DEINE BEGLEITUNG</Marker><h2>So sieht „Wirklich Deins.“ <em>konkret aus.</em></h2><p>Die sechs Monate folgen keinem starren Programm. Wir arbeiten mit dem, was du wirklich verändern, aufbauen oder verwirklichen möchtest – und mit dem, was in deinem Leben gerade geschieht.</p></div>
          <ol className={styles.journeyList}>
            <li><span>01</span><div><h3>Der gemeinsame Beginn</h3><p>Zu Beginn schauen wir gemeinsam, was du in deinem Leben verändern, aufbauen oder verwirklichen möchtest. In einer inneren „Reise ins Land der Fülle“ öffnest du den Raum für Wünsche, die du vielleicht schon länger in dir trägst und für das, was neu auftaucht.</p><p>Anschließend wählst du vier bis fünf Wünsche aus, denen du in den kommenden sechs Monaten besondere Aufmerksamkeit schenken willst. Sie müssen keinen gemeinsamen roten Faden haben. Die Auswahl hilft dir, dich nicht um alles gleichzeitig kümmern zu müssen und dennoch mehreren Seiten deines Lebens Raum zu geben.</p></div></li>
            <li><span>02</span><div><h3>Zwei Sitzungen pro Monat</h3><p>Wir treffen uns zweimal im Monat für jeweils 75 Minuten – insgesamt zu zwölf regulären Sitzungen. In jeder Sitzung beginnen wir mit dem, was gerade da ist: was dich bewegt, was sich gezeigt oder bereits verändert hat. Von dort verbinden wir das, was im Moment geschieht, mit dem, was du wirklich verwirklichen möchtest, und arbeiten konkret damit.</p><p>Am Ende der sechs Monate nehmen wir uns in einer zusätzlichen Abschlusssitzung von 75 Minuten Zeit, gemeinsam zurückzuschauen: Was hast du erkannt, entschieden und tatsächlich getan? Was hat sich verändert? Und was möchtest du für dich weiterführen?</p></div></li>
            <li><span>03</span><div><h3>Das wirkliche Leben dazwischen</h3><p>Zwischen den Sitzungen verbindest du dich immer wieder mit dem gewünschten Ergebnis und nimmst wahr, wie du von dort aus denkst, fühlst, entscheidest und handelst. Du bringst diese Verbindung in dein heutiges Leben: in eine Entscheidung, ein Gespräch oder den nächsten konkreten Schritt.</p><p>So bleibt die Arbeit nicht in den Sitzungen, sondern bekommt dort Raum, wo es darauf ankommt – in deinem Alltag. Was du dort erlebst, wird zur Grundlage für unsere weitere Arbeit.</p></div></li>
            <li><span>04</span><div><h3>Der Kurze Draht</h3><p>Zwischen den Sitzungen kannst du mir über den Messenger schreiben, wenn du festhängst, zweifelst oder merkst, dass ein altes Muster gerade wieder die Führung übernimmt. Auch neue Einsichten oder eine anstehende Entscheidung können dort ihren Platz haben. Wie wir den Kurzen Draht konkret gestalten, vereinbaren wir vor Beginn persönlich.</p><p>Gerade wenn alte Gedanken und Gefühle auftauchen, wird es tausend Gründe geben, warum du den neuen Schritt jetzt doch nicht gehen solltest. Und die werden alle sehr plausibel klingen.</p><p>Genau dann meldest du dich bei mir. Ich unterstütze dich dabei, wieder zu dem zurückzufinden, was du wirklich willst, und trotz der unangenehmen Spannung in diese Richtung weiterzugehen.</p></div></li>
            <li><span>05</span><div><h3>Deine persönliche Mitschrift</h3><p>Nach jeder Sitzung erhältst du eine persönliche, im Grunde wortgetreue Mitschrift. Darin findest du deine eigenen Worte, deine Wünsche und gewünschten Ergebnisse, wichtige Erkenntnisse, Entscheidungen und die Schritte, die du für dich gefunden hast.</p><p>Wenn du sie später liest, kannst du dich wieder mit dem verbinden, was in der Sitzung für dich klar und erlebbar geworden ist. Über die Monate siehst du darin außerdem, was du erkannt, entschieden und tatsächlich getan hast. So wird dein eigener Fortschritt zu einer Erfahrung, auf die du zurückgreifen kannst.</p></div></li>
          </ol>
        </section>

        <section className={styles.about}>
          <figure><img src="/petra-sailer-hero.jpg" alt="Petra Sailer lächelt freundlich in die Kamera" width="1024" height="1024" loading="lazy" /></figure>
          <div><Marker number="06">WIE ICH DICH BEGLEITE</Marker><h2>Es geht um <em>deine Antworten.</em></h2><p>Diese Begleitung ist ganz individuell auf dich abgestimmt. Es gibt keine vorgefertigten Antworten und kein Programm, das wir einfach abarbeiten. Der Prozess gibt uns eine klare Richtung. Was darin allerdings auftaucht, ist ganz deins: deine Wünsche, deine Antworten und das, was für dich wirklich stimmt.</p><p>Während unserer ganzen gemeinsamen Zeit begleite ich dich mit meiner vollen Präsenz. Ich bin dabei ganz da, höre genau hin und wende mich dem, was auftaucht, einfühlsam und gleichzeitig klar und präzise zu. Manchmal bin ich auch hartnäckig und lasse nicht locker, denn ich sehe, was in dir möglich ist. Ich begleite dich mit den richtigen Fragen, so dass du deine eigenen Antworten klar erleben, ihnen wieder vertrauen und danach handeln kannst.</p><p>Wir gehen den Prozess in diesen sechs Monaten immer wieder gemeinsam durch, und du wendest ihn auch in deinem Alltag an. So lernst du ihn wirklich kennen und erlebst, was diese neue Ausrichtung in deinem Leben bewegen kann. Am Ende hast du alles an der Hand, um den Prozess auch ohne mich für dich zu nutzen, dich immer wieder neu auszurichten und dein Leben aus dieser Perspektive weiterzugestalten.</p><strong>So, wie du es dir wünschst.</strong></div>
        </section>

        <section className={styles.voices}>
          <div className={styles.voicesHeading}><Marker number="07" round>STIMMEN AUS DER BEGLEITUNG</Marker><h2>Was Menschen in der Begleitung <em>erleben.</em></h2><p>„Die folgenden Stimmen stammen von Menschen, die über einen längeren Zeitraum mit mir gearbeitet haben.“</p></div>
          <div className={styles.voiceList}>
            <figure><blockquote><p>„Nach mittlerweile 3 Monaten Coaching mit Petra bin ich wirklich positiv überrascht über die Entwicklung, die ich in so kurzer Zeit gemacht habe.</p><p>Zu Beginn der Zusammenarbeit haben wir eine Liste mit Themen erstellt, an denen ich arbeiten wollte, und es waren einige “harte Nüsse” dabei, die sich trotz verschiedenster Therapieversuche und Coachings hartnäckig gehalten hatten. Petras Methode war mal was ganz anderes, und das wollte ich ausprobieren. Durch die einfühlsame und sehr präzise Art und Weise, mit der sich Petra meinen Themen zuwendete, entstand in mir immer mehr ein Gefühl von Selbstwirksamkeit. Die alten Gedanken in mir, nicht gut genug, nicht kompetent genug zu sein, wurden mit jeder Sitzung weniger beherrschend in meinem Leben. Durch Petras Methode konnte ich eine ganz andere, freie Version von mir sehen, mein Future Self, das immer präsenter und greifbarer wurde, so dass ich letztendlich sogar den Schritt in meine berufliche Selbständigkeit gehen konnte. Das wäre vor ein paar Monaten für mich noch nicht denkbar gewesen.</p><p>Danke von Herzen, liebe Petra, dafür, dass du mich groß gesehen hast, bevor ich mich selbst so sehen konnte!“</p></blockquote><figcaption><strong>Kathi G.</strong><span>Selbstständig</span></figcaption></figure>
            <figure><blockquote><p>Ich habe bei Petra ein Coaching gebucht, weil ich in meinem Business ein bestimmtes Ziel erreichen wollte. Doch was ich in dieser Zeit erfahren durfte, war so viel mehr als das.</p><p>Während unseres Coachings habe ich intensiv eine Vision meines Future Self aufgebaut – mit all meinen Herzenswünschen und echten Erfolgen, die ich mir für mein Leben wünsche. Natürlich gab es Herausforderungen auf dem Weg, doch Petra stand mir jederzeit mit ihrer liebevollen und zugleich klaren Art zur Seite. Über ihren WhatsApp-Support konnte ich jederzeit auf ihre wertvolle Begleitung zählen, um Hindernisse schnell zu überwinden und daran zu wachsen.</p><p>Mit der Zeit haben sich für mich große Manifestationen erfüllt. Ich ziehe kraftvolle, tatkräftige Menschen in mein Business und erreiche ein völlig neues Level. Herausforderungen begegne ich nun mit einer ganz neuen Leichtigkeit – zum Beispiel spreche ich Dinge offen aus, anstatt mich aus Angst vor Ablehnung zurückzuhalten. Früher hätte ich mir mein wahres Potenzial nicht einmal zu träumen erlaubt, doch heute habe ich wieder Vertrauen in mich und meine großen Ziele.</p><p>Dank Petra habe ich gelernt, aus der unendlichen Fülle zu schöpfen. Auch wenn immer wieder neue Herausforderungen auftauchen, besitze ich jetzt kraftvolle Tools, um mein Leben in jedem Moment bewusst und aus der Fülle heraus zu gestalten.</p></blockquote><figcaption><strong>Miriam W.</strong><span>Unternehmerin</span></figcaption></figure>
            <figure><blockquote><p>Die Arbeit mit Petra ist tief, klar und macht Freude. Mit ihrer unerschütterlichen Präsenz und ihrem Dranbleiben hat sie mich konsequent und undramatisch begleitet. Ihre entspannte Klarheit und ihr echtes Engagement wirken ermutigend und tragend – man spürt, dass sie das, was sie heute weitergibt, selbst gründlich durchlebt und erarbeitet hat. Ich schätze sie als Kollegin und Freundin, die sich aufrichtig für das Wohl anderer einsetzt. Die Wirkung ihres Coachings ist für mich zu einem klaren Anker im Alltag geworden – und der Schlüssel zu einem Erfolg, der sich natürlich anfühlt.</p></blockquote><figcaption><strong>Antje H.</strong><span>führende Angestellte</span></figcaption></figure>
          </div>
        </section>

        <section className={styles.fit}>
          <div className={styles.fitIntro}><Marker number="08" round>FÜR WEN DIE BEGLEITUNG IST</Marker><h2>Passt „Wirklich Deins.“ <em>zu dir?</em></h2><p>„Wirklich Deins.“ passt zu dir, wenn du einen Wunsch, eine Idee oder ein Vorhaben wirklich in dein Leben bringen möchtest.</p></div>
          <div className={styles.fitStatements}><p><strong>Wenn du etwas vorhast</strong> und gleichzeitig merkst, dass du an bestimmten Punkten immer wieder nicht weiterkommst.</p><p><strong>Wenn du nicht länger nur darüber nachdenken möchtest</strong>, sondern bereit bist, Entscheidungen zu treffen, Neues auszuprobieren und konkrete Schritte zu gehen.</p><p><strong>Wenn du keine fertigen Antworten von außen übernehmen möchtest</strong>, sondern herausfinden willst, was für dich wirklich stimmt.</p><p><strong>Und wenn du lernen möchtest, früher zu erkennen</strong>, wann alte Gedanken, Zweifel oder vertraute Muster gerade die Führung übernehmen – damit du wieder bewusst wählen kannst, wie du weitergehen willst.</p></div>
          <p className={styles.fitClosing}>Diese Begleitung passt zu dir, wenn du bereit bist, dir über sechs Monate wirklich Zeit für das zu nehmen, was dir wichtig ist.</p>
        </section>

        <section className={styles.offer} id="angebot">
          <div className={styles.offerTop}><Marker number="09">DER RAHMEN</Marker><div><h2>Wirklich <em>Deins.</em></h2><p>Deine sechsmonatige 1:1-Begleitung mit Petra Sailer.</p></div><p className={styles.price}>3.600 €<span>Gesamtpreis für sechs Monate</span></p></div>
          <div className={styles.offerFacts}><div><span>LAUFZEIT</span><strong>Sechs Monate</strong></div><div><span>SITZUNGEN</span><strong>Zwölf 1:1‑Sitzungen à 75 Minuten</strong></div><div><span>ABSCHLUSS</span><strong>Eine zusätzliche Abschlusssitzung à 75 Minuten</strong></div><div><span>DER KURZE DRAHT</span><strong>Messenger-Support zwischen den Sitzungen</strong></div><div><span>MITSCHRIFTEN</span><strong>Nach jeder Sitzung eine persönliche, fast wortgetreue Mitschrift</strong></div></div>
          <div className={styles.offerAction}><ActionLink href="/kontakt" tracking={{ cta: "kennenlerngespraech_anfragen", location: "wirklich_deins_angebot" }}>KENNENLERNGESPRÄCH ANFRAGEN</ActionLink><p>Wir schauen in Ruhe, ob die Begleitung zu dir und deinem Vorhaben passt.</p></div>
        </section>

        <section className={styles.faq} id="faq">
          <div className={styles.faqHeading}><Marker number="10">HAST DU NOCH FRAGEN?</Marker><h2>Häufige <em>Fragen</em></h2></div>
          <div className={styles.faqList}>
            <details><summary>Muss ich schon genau wissen, welchen Wunsch ich verwirklichen will?<span>+</span></summary><p>Dein Wunsch muss am Anfang noch nicht bis ins Letzte klar sein. Vielleicht hast du bereits ein konkretes Vorhaben, vielleicht spürst du erst, dass sich etwas verändern soll. Zu Beginn nehmen wir uns Zeit für das, was du schon weißt. In der „Reise ins Land der Fülle“ kann außerdem sichtbar werden, was bisher leiser war oder noch keinen klaren Ausdruck hatte. Anschließend wählst du vier bis fünf Wünsche aus, denen du in den sechs Monaten besondere Aufmerksamkeit geben möchtest.</p></details>
            <details><summary>Wie viel Zeit sollte ich zwischen den Sitzungen einplanen?<span>+</span></summary><p>Die Arbeit soll in deinem wirklichen Leben stattfinden. Zwischen den Sitzungen nimmst du dir deshalb regelmäßig Zeit, dich mit dem gewünschten Ergebnis zu verbinden. Hinzu kommen die Entscheidungen, Gespräche oder konkreten Schritte, die du aus unserer Arbeit heraus für dich erkennst. Wie viel Zeit das jeweils braucht, hängt von deinen Wünschen und deinem Alltag ab.</p></details>
            <details><summary>Was ist, wenn alte Muster wieder auftauchen?<span>+</span></summary><p>Alte Gedanken und Reaktionen können wieder auftauchen. Sie müssen weder bekämpft noch vollständig beseitigt werden. In der Begleitung lernst du, früher zu erkennen, wann sie gerade die Führung übernehmen, und dir wieder beide Seiten bewusst zu machen: das, was du wirklich willst, und das, was dich bisher zurückgehalten hat. Dann kannst du neu wählen und deinen nächsten Schritt gehen.</p></details>
            <details><summary>Wofür ist der Kurze Draht gedacht?<span>+</span></summary><p>Der Kurze Draht verbindet die Sitzungen mit deinem Alltag. Du kannst mir schreiben, wenn du festhängst, zweifelst, eine neue Einsicht hast oder eine Entscheidung ansteht. So können wir auf das schauen, was gerade geschieht, und du findest wieder zu dem zurück, was für dich stimmt. Wie wir den Kurzen Draht konkret gestalten, besprechen wir vor Beginn persönlich.</p></details>
            <details><summary>Ist die Begleitung eine Therapie?<span>+</span></summary><p>Die Begleitung ist ein Coaching für Menschen, die etwas verändern, aufbauen oder verwirklichen möchten und bereit sind, dafür selbst aktiv zu werden. Sie ersetzt keine Psychotherapie, psychiatrische oder medizinische Behandlung und keine Unterstützung in einer akuten Krise.</p></details>
            <details><summary>Was unterscheidet die sechsmonatige Begleitung von der Klarheitssitzung?<span>+</span></summary><div><p>In der Klarheitssitzung arbeiten wir einmalig an einem konkreten Thema oder einer Entscheidung und leiten daraus einen nächsten Schritt ab.</p><p>„Wirklich Deins.“ beginnt grundsätzlicher bei der Frage, was du wirklich leben möchtest. Du kannst mehrere Wünsche über sechs Monate hinweg in deinen Alltag bringen. Dabei durchläufst du den Prozess aus Wunsch, Jetzt-Realität, bewusster Wahl und konkreter Handlung immer wieder. So sammelst du eigene Erfahrungen und lernst zunehmend, den Prozess selbst für dich zu nutzen.</p></div></details>
          </div>
        </section>

        <section className={styles.finalCta}><Marker number="11" round>LASS UNS KENNENLERNEN</Marker><h2>Erzähl mir, <em>was du vorhast.</em></h2><div><p>Im Kennenlerngespräch sprechen wir über das, was du verändern, aufbauen oder verwirklichen möchtest. Du kannst deine Fragen stellen, und wir schauen in Ruhe, ob Wirklich Deins. auch wirklich deins ist.</p><ActionLink href="/kontakt" light tracking={{ cta: "kennenlerngespraech_anfragen", location: "wirklich_deins_abschluss" }}>KENNENLERNGESPRÄCH ANFRAGEN</ActionLink></div><p className={styles.contact}>Du möchtest lieber direkt schreiben? <a href="mailto:kontakt@petrasailer.com" data-umami-event="contact_click" data-umami-event-method="email" data-umami-event-location="wirklich_deins_abschluss">kontakt@petrasailer.com</a></p></section>
      </main>

      <footer className={`${shell.footer} ${siteStyles.siteFooter}`}><a className={shell.footerBrand} href="#top"><strong>Petra Sailer</strong><span>Dem Eigenen folgen</span></a><nav aria-label="Footer-Navigation"><a href="/ueber-mich">ÜBER MICH</a><a href="/klarheitssitzung">KLARHEITSSITZUNG</a><a href="#top">WIRKLICH DEINS.</a><a href="/kontakt">KONTAKT</a><a href="/arbeite-mit-mir">ARBEITE MIT MIR</a></nav><a className={shell.footerEmail} href="mailto:kontakt@petrasailer.com" data-umami-event="contact_click" data-umami-event-method="email" data-umami-event-location="footer">kontakt@petrasailer.com</a><div className={shell.footerBottom}><p>© Petra Sailer 2026</p><div><a href="https://petrasailer.com/impressum/">Impressum</a><a href="https://petrasailer.com/datenschutz/">Datenschutz</a></div></div></footer>
    </div>
  );
}
