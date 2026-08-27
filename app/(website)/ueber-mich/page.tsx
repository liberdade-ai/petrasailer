import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../JsonLd";
import { pageGraph, pageMetadata } from "../../seo";
import shell from "../base.module.css";
import styles from "./page.module.css";
import siteStyles from "../page.module.css";

const NAVIGATION = [
  { label: "ÜBER MICH", href: "#top", current: true },
  { label: "KLARHEITSSITZUNG", href: "/klarheitssitzung/" },
  { label: "WIRKLICH DEINS.", href: "/wirklich-deins/" },
  { label: "KONTAKT", href: "/kontakt/" },
] as const;

const PAGE_DESCRIPTION =
  "Lerne Petra Sailer, ihre Haltung und ihre klare, persönliche Art der Begleitung kennen.";

export const metadata: Metadata = pageMetadata({
  title: "Über mich",
  description: PAGE_DESCRIPTION,
  path: "/ueber-mich/",
});

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

export default function AboutPage() {
  return (
    <div className={`${shell.page} ${styles.aboutPage}`}>
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
      <a className={shell.skipLink} href="#inhalt">Zum Inhalt springen</a>
      <header className={shell.header}>
        <div className={shell.headerInner}>
          <Link className={shell.brand} href="/" aria-label="Petra Sailer – Dem Eigenen folgen"><img src="/petra-sailer-logo.svg" alt="" /></Link>
          <nav className={shell.desktopNav} aria-label="Hauptnavigation"><NavLinks /></nav>
          <a className={shell.headerCta} href="/arbeite-mit-mir/" data-umami-event="cta_click" data-umami-event-cta="arbeite_mit_mir" data-umami-event-location="header" data-umami-event-destination="/arbeite-mit-mir/">ARBEITE MIT MIR <span aria-hidden="true">↗</span></a>
          <details className={shell.mobileMenu}><summary><span>MENÜ</span><i aria-hidden="true" /></summary><div className={shell.mobilePanel}><nav aria-label="Mobile Hauptnavigation"><NavLinks /></nav><a className={shell.mobileCta} href="/arbeite-mit-mir/" data-umami-event="cta_click" data-umami-event-cta="arbeite_mit_mir" data-umami-event-location="mobile_header" data-umami-event-destination="/arbeite-mit-mir/">ARBEITE MIT MIR <span aria-hidden="true">↗</span></a></div></details>
        </div>
      </header>

      <main id="inhalt">
        <section className={styles.hero} id="top">
          <div className={styles.heroMeta}><Marker number="01" round>ÜBER MICH</Marker></div>
          <h1>Ich bin Petra. <em>Mich interessiert, was du wirklich willst.</em></h1>
          <figure className={styles.heroPortrait}><img src="/petra-sailer-ueber-mich-hero-warm.jpg" alt="Porträt von Petra Sailer" width="1100" height="1334" fetchPriority="high" /></figure>
          <div className={styles.heroCopy}><p>Als Coach für Lebensgestaltung begleite ich dich, wenn du etwas in deinem Leben verändern, aufbauen oder verwirklichen willst. Dabei höre ich dir genau zu, frage nach und führe dich durch einen klaren, nachvollziehbaren Prozess, der dich tief mit deinen inneren Antworten verbindet und dir immer wieder zeigt, was dein nächster Schritt ist.</p><strong>Alles ist schon da, ich helfe dir, es wieder zu hören.</strong></div>
        </section>

        <section className={styles.story}>
          <div className={styles.storyIntro}><Marker number="02" round>MEIN WEG</Marker><h2>Ich habe lange gefragt: Warum bin ich so? <em>Heute frage ich: Was will ich?</em></h2></div>
          <div className={styles.storyBody}>
            <div className={styles.storyChapter}>
              <p>Ich habe mich schon als Kind oft anders gefühlt. Als würde ich nicht richtig dazugehören und als wäre irgendetwas mit mir nicht in Ordnung. Diese Gefühle habe ich lange mit mir herumgetragen. Und ich glaube, deshalb habe ich auch schon sehr früh angefangen zu suchen.</p>
              <p>Ich wollte frei sein von all dem, was sich so schwer und unangenehm angefühlt hat. Ich wollte wissen, wie ein Mensch sich unbeschwert, fröhlich und lebendig fühlen kann – egal, was er vorher erlebt hat.</p>
              <p>Als ich Yoga für mich entdeckt habe, hatte ich zum ersten Mal das Gefühl, dass etwas von diesem alten Gepäck von mir abfällt. Während des Übens konnte ich mich mit etwas verbinden, das viel größer war als meine Vergangenheit und all die Gefühle, die ich mit mir herumtrug. Das hat mir so gutgetan, dass ich die Yogalehrerausbildung gemacht habe.</p>
              <p>Später kam die Vipassana-Meditation dazu. Ich habe viele Schweigekurse besucht, zehn Tage, auch mehrmals zwanzig Tage. Da sitzt du mit dir. Mit deinem Körper, deinen Gedanken und allem, was in dir auftaucht. Manches davon ist angenehm, vieles ist es nicht. Ich habe dort gelernt, mit dem zu sein, was gerade da ist, ohne sofort darauf reagieren zu müssen.</p>
              <p>Vor allem habe ich durch Yoga und Vipassana am eigenen Leib und im eigenen Geist erfahren, was ich bis dahin nur aus uralten Büchern kannte. Plötzlich wusste ich: Das stimmt. Nicht, weil es irgendwo geschrieben stand oder jemand es mir erklärt hatte. Sondern weil ich es selbst erlebt hatte.</p>
              <p>Ich habe erfahren, dass ich eins mit allem bin und dass es keine Trennung gibt. Diese Erfahrung habe ich später noch mehrmals gemacht. Sie hat mir eine Gewissheit gegeben, die mir niemand mehr nehmen konnte – ganz gleich, was jemand anderes darüber dachte oder sagte.</p>
              <p>Und sie hat etwas geprägt, das bis heute wesentlich für meine Arbeit ist: Ich möchte meinen Kunden nichts erzählen, was sie mir blind glauben sollen. Ich möchte, dass sie das, was für sie wichtig ist, aus sich selbst heraus erfahren.</p>
            </div>
            <figure className={styles.storyPortrait}><img src="/petra-sailer-mein-weg-6204.jpg" alt="Petra Sailer" width="757" height="1009" loading="lazy" /><figcaption>Erfahrung, die nicht erklärt werden muss, sondern selbst erlebt wird.</figcaption></figure>
            <div className={styles.storyChapter}>
              <p>Meine Suche ging trotzdem weiter. Wenn ich etwas entdeckt hatte, das mir wirklich half, wollte ich tiefer eintauchen. So kamen über die Jahre verschiedene Ausbildungen und vertiefende Programme hinzu – in Yoga und Körperarbeit, Beratung, Familienstellen, Traumaarbeit und später auch in Ansätzen, die mit innerem Erleben und bewusster Gestaltung arbeiten. Ich wollte verstehen, warum wir so sind, wie wir sind, und wie wir mit dem umgehen können, was wir aus unserer Vergangenheit mitbringen.</p>
              <p>Irgendwann wusste ich unglaublich viel über mich. Ich kannte meine Geschichte, meine Muster und immer mehr mögliche Erklärungen dafür, warum ich mich so fühlte und verhielt. Gleichzeitig ging es mir an einem bestimmten Punkt in meinem Leben wirklich nicht mehr gut. Mein Leben fühlte sich leer an, wie ein Nichts. Und ich merkte, dass ich es schon lange nicht mehr schön fand.</p>
              <p>Heute sehe ich, dass ich damals vor allem in einer Problemlösungsstruktur gelebt habe. Ich habe mich selbst als ein Problem betrachtet, das gelöst werden musste. Selbst meine Wünsche hatten häufig eine Aufgabe: Sie sollten etwas in mir reparieren, mich besser machen oder einen Mangel ausgleichen.</p>
              <p>Die zentrale Frage war immer wieder: Warum bin ich so? Und wie bekomme ich das weg?</p>
              <p>Dann habe ich die kreative Struktur kennengelernt. Ihr liegt ein anderes Menschenbild zugrunde: Der Mensch ist kein Problem, das repariert werden muss. Er ist ganz, vollständig, vollkommen, auch dann, wenn alte Gedanken, Gefühle und Muster in ihm wirken.</p>
              <p>Und hier braucht ein Wunsch auch keine versteckte Aufgabe. Du musst ihn nicht verwirklichen, damit du endlich richtig, gut genug oder vollständig bist. Du darfst ihn haben und verwirklichen, weil du ihn hast und weil du ihn leben willst – ganz einfach nur deshalb.</p>
              <p>Dort begegnete mir zum ersten Mal eine ganz andere Frage als Ausgangspunkt für alles:</p>
            </div>
            <p className={styles.turning}>Was will ich?</p>
            <div className={styles.storyChapter}>
              <p>Diese Frage und der Blick, der daraus entsteht, hat ganz viel in mir verändert. Vorher hatte ich immer wieder gefragt: Warum bin ich so? Was ist mir passiert? Woher kommt das alles? Jetzt ging es plötzlich darum, was ich leben möchte. Wie es ist, wenn das, was ich mir wünsche, bereits Wirklichkeit ist. Und wer ich darin bin.</p>
              <p>Am Anfang habe ich mich mit drei grundlegenden Choices verbunden. Eine davon war:</p>
              <blockquote>„Ich wähle das Endergebnis, mein Leben zu lieben.“</blockquote>
              <p>Ich habe mir diesen Satz nicht einfach nur gesagt. Ich bin innerlich in die Erfahrung gegangen. Wie ist es, wenn ich mein Leben liebe? Wie ist es, wenn ich all das lieben kann, auch wenn mir gerade nicht alles daran gefällt? Wie fühle ich mich dann? Wie sehe ich mein Leben und die Menschen? Wie bin ich darin?</p>
              <p>Damit habe ich mich immer wieder verbunden. Mal regelmäßig, dann wieder eine Zeit lang nicht und später wieder. Und etwas begann sich zu verändern. Ich wurde innerlich ruhiger und wieder zuversichtlicher. Bei einem Spaziergang merkte ich plötzlich: „Ich mag mein Leben wieder. Ich sehe die Schönheit des Lebens wieder.“</p>
              <p>Ganz ehrlich: Diese Arbeit hat mir damals wirklich den Arsch gerettet. Entschuldige die Ausdrucksweise.</p>
              <p>Ein Freund, der mich schon länger kannte, bemerkte meine Veränderung. Er sagte, ich würde anders aussehen und anders wirken, und wollte wissen, was ich gemacht hatte. Also begann ich, mit ihm zu arbeiten. Dabei habe ich erlebt, wie auch er Zugang zu etwas in sich fand, das größer war als das, was er bisher über sich gedacht und für möglich gehalten hatte.</p>
              <p className={styles.storyClosing}>Da wusste ich: Das will ich weitergeben.</p>
            </div>
          </div>
        </section>

        <section className={styles.work}>
          <div className={styles.workIntro}><Marker number="03">MEINE ARBEIT</Marker><h2>Warum ich tue, <em>was ich tue.</em></h2></div>
          <div className={styles.workBody}>
            <p>Heute bedeutet diese Arbeit für mich nicht, dass Hindernisse verschwinden oder ich immer vollkommen gelassen bleibe. Manchmal werde ich wütend oder verliere mich in dem, was gerade nicht funktioniert.</p>
            <p>Der Unterschied zu früher ist: Ich erkenne immer früher, was gerade in mir wirkt, und muss dort nicht mehr allzu lange verweilen.</p>
            <p>In solchen Momenten kehre ich zurück zu der Frage: <strong>Was will ich wirklich?</strong> Und dann tauche ich darin ein. Ganz schnell ändert sich meine innere Energie und ich kann wieder frei wählen, was ich jetzt tun will.</p>
            <p>Und genau das gehört für mich dazu, wenn du dem Eigenen folgen willst.</p>
            <p>Angst, Zweifel und alte Gedanken dürfen weiterhin auftauchen. Sie müssen aber nicht mehr automatisch entscheiden. In unserer Zusammenarbeit schauen wir gemeinsam auf das, was in dir wirkt. Dadurch wird sichtbar, was zwischen dir und der Verwirklichung deiner Wünsche steht. Erst wenn beides auf dem Tisch liegt – das, was du wirklich willst, und das, was dich bisher zurückgehalten hat –, entsteht eine echte Wahl.</p>
            <p>Und erst dann kannst du dem Eigenen wirklich folgen.</p>
            <p>Meine Arbeit beginnt immer bei deinen Wünschen, bei dem, was du wirklich willst. Ich führe dich immer wieder in das innere Erleben deiner Wünsche, so deutlich, als wären sie schon Wirklichkeit. Wir schauen von dort aus auch auf das, was dich heute noch zurückhält. Und auch deine nächsten Schritte kommen aus dieser neuen Perspektive.</p>
            <p>Je öfter du das erlebst, desto eher kannst du die Veränderung auch in deinem Alltag bemerken. Vielleicht stellst du fest, dass du an einer bestimmten Stelle anders denkst, reagierst oder handelst als sonst. Und plötzlich merkst du: „Wow, so kann ich also auch sein.“</p>
            <p>In der Zusammenarbeit erlebe ich es immer wieder: Da kommt dieser Moment, in dem meine Kunden spüren, wie viel Kraft in ihnen steckt und dass sie dieser Kraft vertrauen können. Und dass sie es in der Hand haben, Schritte in Richtung dessen zu gehen, was sie wirklich wollen.</p>
            <p className={styles.workClosing}>Dieser Moment ist magisch. Und der Grund, warum ich tue, was ich tue.</p>
          </div>
        </section>

        <section className={styles.voices}>
          <div className={styles.voicesHeading}><Marker number="04" round>WIE KUNDINNEN MICH ERLEBEN</Marker><h2>Klarheit darf freundlich sein. <em>Und Tiefe darf Freude machen.</em></h2></div>
          <div className={styles.voiceList}>
            <blockquote><p>„Petras Methode war mal was ganz anderes, und das wollte ich ausprobieren.</p><p>Durch die einfühlsame und sehr präzise Art und Weise, mit der sich Petra meinen Themen zuwendete, entstand in mir immer mehr ein Gefühl von Selbstwirksamkeit.</p><p>Durch Petras Methode konnte ich eine ganz andere, freie Version von mir sehen, mein Future Self, das immer präsenter und greifbarer wurde, so dass ich letztendlich sogar den Schritt in meine berufliche Selbstständigkeit gehen konnte. Das wäre vor ein paar Monaten für mich noch nicht denkbar gewesen.</p><p>Danke von Herzen, liebe Petra, dafür, dass du mich groß gesehen hast, bevor ich mich selbst so sehen konnte!“</p><footer>Kathi G. – Selbstständig</footer></blockquote>
            <blockquote><p>„Die Arbeit mit Petra ist tief, klar und macht Freude. Mit ihrer unerschütterlichen Präsenz und ihrem Dranbleiben hat sie mich konsequent und undramatisch begleitet.“</p><footer>Antje H. – führende Angestellte</footer></blockquote>
            <blockquote><p>„Die Begleitung war nah, konkret und im Moment. Für was es brauchte. Ihre klaren Worte, die zusammengefasst haben, was ich aussprach, waren ein enormes Geschenk.“</p><footer>Simona P. – Selbstständig</footer></blockquote>
          </div>
        </section>

        <section className={styles.foundation}>
          <div className={styles.foundationIntro}><Marker number="05" round>WAS MEINE ARBEIT TRÄGT</Marker><h2>Ausbildung, Erfahrung und eine langjährige <em>eigene Praxis.</em></h2><p>Meine persönliche Erfahrung ist ein wichtiger Ursprung meiner Arbeit. Sie ist aber nicht ihre einzige Grundlage. Über viele Jahre habe ich mich mit dem Menschen, seinem Körper, seinem Erleben, seinen Beziehungen und seiner Fähigkeit beschäftigt, das eigene Leben bewusst zu gestalten. Und ich tue es immer noch mit Leidenschaft.</p></div>
          <div className={styles.foundationGrid}><article><span>01</span><h3>Körper &amp; Präsenz</h3><p>Yogalehrerin · Thai-Yoga-Practitioner · Bioenergetik und dynamische Körperarbeit nach Alexander Lowen · über 15 Jahre Yoga und eigene Praxis</p></article><article><span>02</span><h3>Beratung &amp; Beziehung</h3><p>Lebens- und Sozialberaterin, Österreich · Systemisches Familienstellen und Astrologie bei Ulrich Böld · Traumaarbeit nach IoPT bei Prof. Dr. Franz Ruppert</p></article><article><span>03</span><h3>Erleben &amp; Gestaltung</h3><p>Coach nach der Magnetic-Mind-Methode bei Christopher Duncan · vollständiges Curriculum der Natural Success Academy bei William Whitecloud · Mind-Body-Connection bei Dr. Joe Dispenza</p></article></div>
          <p className={styles.boundary}>Meine Arbeit ersetzt keine Psychotherapie, medizinische Behandlung oder Krisenintervention. Sie ist auch keine klassische Beratung mit fertigen Lösungen.</p>
        </section>

        <section className={styles.private}>
          <div className={styles.privateHeading}><Marker number="06">PRIVAT</Marker><h2>Ich, <em>ganz privat.</em></h2></div>
          <div className={styles.privatePhotos}><figure><img src="/petra-sailer-privat.jpg" alt="Petra Sailer lachend am Meer" width="1000" height="1176" loading="lazy" /></figure><figure><img src="/petra-sailer-privat-2.jpg" alt="Petra Sailer blickt am Meer in die Weite" width="700" height="933" loading="lazy" /></figure></div>
          <div className={styles.privateBody}><p>Ich lebe mit meinem Mann in Griechenland am Meer. Den größten Teil des Jahres verbringen wir dort und genießen die Sonne, das Meer und das einfache, entspannte Leben. Zwischendrin sind wir immer wieder in Deutschland, um Zeit mit unserer Familie und unseren Freunden zu verbringen.</p><p>Was ich dort besonders liebe, ist der Wald. Im Grunde bin ich ein Waldmensch. Ich könnte stundenlang dort verbringen. Wenn ich draußen bin, fühle ich mich frei und bin ganz schnell wieder bei mir.</p><p>Morgens nehme ich mir Zeit für mich. Ich meditiere, mache meine Choices, gehe spazieren, mache mein Mobility-Training oder schwitze beim Gewichtheben. Und dann bin ich bereit für den Tag und alles, was kommen mag.</p><p>Ich sitze auch gerne mal mit einem guten Cappuccino im Café, beobachte das Leben und die Menschen und lasse mich inspirieren. Wenn ich Zeit habe, male ich - abstrakt und einfach drauflos und lasse entstehen, was gerade entstehen möchte. Und ich liebe es, mit meinem Mann zu tanzen, Cha-Cha-Cha, Walzer oder Blues, das macht uns einfach Freude. Und genauso gern sitzen wir manchmal einfach auf der Couch. Ein gutes Buch, ein schöner Film, nichts weiter.</p><p>Und was auf keinen Fall fehlen darf, sind lange Telefonate mit Familie und Freunden. Oder noch besser: echte Treffen.</p></div>
        </section>

        <section className={styles.paths}>
          <div className={styles.pathsIntro}><Marker number="07" round>WENN MEINE ART ZU ARBEITEN ZU DIR PASST</Marker><h2>Zwei eigenständige Wege <em>der Zusammenarbeit.</em></h2><p>Vielleicht geht es bei dir um einen konkreten Punkt, an dem du gerade feststeckst. Oder du möchtest etwas über einen längeren Zeitraum verändern, aufbauen oder verwirklichen.</p></div>
          <div className={styles.pathGrid}><article><p>01 · EIN KONKRETER PUNKT</p><h3><span>Klarheits-</span><span>sitzung</span></h3><span>Für ein konkretes Thema, bei dem du gerade feststeckst und jetzt weiterkommen willst. Du erkennst wieder, was für dich wirklich stimmig ist, und gehst mit einem nächsten Schritt aus der Sitzung, mit dem du selbstständig weitergehen kannst.</span><ActionLink href="/klarheitssitzung/" tracking={{ cta: "klarheitssitzung_kennenlernen", location: "ueber_mich_angebote" }}>ZUR KLARHEITSSITZUNG</ActionLink></article><article><p>02 · SECHS MONATE</p><h3><span className={styles.really}>Wirklich</span> <em>Deins.</em></h3><span>Für das, was du in deinem Leben verändern, aufbauen oder verwirklichen möchtest. Über sechs Monate richtest du dich immer wieder daran aus, triffst deine Entscheidungen von dort aus und gehst konkrete Schritte, die für dich stimmig sind.</span><ActionLink href="/wirklich-deins/" light tracking={{ cta: "wirklich_deins_kennenlernen", location: "ueber_mich_angebote" }}>WIRKLICH DEINS. ENTDECKEN</ActionLink></article></div>
        </section>
      </main>

      <footer className={`${shell.footer} ${siteStyles.siteFooter}`}><a className={shell.footerBrand} href="#top"><img src="/petra-sailer-footer-logo.svg" alt="" /></a><nav aria-label="Footer-Navigation"><a href="#top">ÜBER MICH</a><a href="/klarheitssitzung/">KLARHEITSSITZUNG</a><a href="/wirklich-deins/">WIRKLICH DEINS.</a><a href="/kontakt/">KONTAKT</a><a href="/arbeite-mit-mir/">ARBEITE MIT MIR</a></nav><a className={shell.footerEmail} href="mailto:kontakt@petrasailer.com" data-umami-event="contact_click" data-umami-event-method="email" data-umami-event-location="footer">kontakt@petrasailer.com</a><div className={shell.footerBottom}><p>© Petra Sailer 2026</p><div><a href="https://petrasailer.com/impressum/">Impressum</a><a href="https://petrasailer.com/datenschutz/">Datenschutz</a></div></div></footer>
    </div>
  );
}
