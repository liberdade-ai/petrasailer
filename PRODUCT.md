# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Selbstständige Frauen in Coaching-, Gesundheits- und Kreativberufen, die vor einer Business-Entscheidung stehen und sich damit im Kreis drehen: Coaches, Yogalehrerinnen, Heilpraktikerinnen, Therapeutinnen, Designerinnen, Texterinnen.

Typische Situation: ein neues Angebot, ein höherer Preis, eine Kooperation oder die Frage, ob sie weitermacht. Sie hat hin und her überlegt, viele Leute gefragt und hat jetzt den Kopf voller Meinungen. Ihr Job auf der Website: verstehen, ob die Klarheitssitzung ihr bei genau dieser Entscheidung hilft, Petra genug vertrauen, und buchen.

Diese Frauen sind in vielen Online-Gruppen und Netzwerken unterwegs; ein Teil der Besucherinnen kommt von dort.

Bisherige Zielgruppe (alle Menschen mit Lebensthemen wie Beruf, Beziehung, Umzug, Buch) ist abgelöst (Entscheidung vom 19.10.2026).

## Product Purpose

petrasailer.com ist die Website von Petra Sailer und verkauft künftig ein einziges Angebot: die **Klarheitssitzung**. Erfolg heißt: Die Besucherin bucht eine Klarheitssitzung (einzeln, im 5er-Paket, zum Einführungspreis oder als Gutschein).

Die Website wird dafür umgebaut:
- Die Startseite zeigt nur noch die Klarheitssitzung als Angebot.
- Die Seite Klarheitssitzung wird auf die neue Zielgruppe und das neue Angebot umgeschrieben.
- **Wirklich Deins.** (sechsmonatige 1:1-Begleitung) wird vorerst von der Website genommen.
- Eine gestalterische Überarbeitung ist gewünscht (siehe Brand Commitments).

## Positioning

Petra ist selbst Coach, Yogalehrerin und Körpertherapeutin. Sie kommt aus der Welt ihrer Kundinnen und kennt deren Sprache und Zweifel. Das ist Hintergrundwissen für den Ton, kein Text: Berufsbezeichnungen stehen weder im Hero noch in Angebotstexten (Petra, 19.10.2026).

Ihr Mechanismus: Statt vom Problem aus nach einer Lösung zu suchen, dreht sie die Blickrichtung um. Die Kundin erlebt innerlich das gewünschte Ergebnis, als wäre die Entscheidung schon getroffen und fühlte sich richtig an, und schaut von dort auf die heutige Situation. Grundhaltung: „Deine Antwort ist längst da.“ Petra gibt keine Ratschläge oder Meinungen, sondern macht die eigene Antwort der Kundin wieder hörbar.

Der Klarheitsprozess in vier Schritten (bestehende Formulierung der Website): Stille / nach innen gehen → das gewünschte Ergebnis erleben → zurück in die Jetzt-Realität (was hält zurück?) → den nächsten Schritt erkennen.

Markenclaim: „Dem Eigenen Folgen“.

Petra führt ein Ein-Personen-Unternehmen: Sie selbst ist das Angebot. Gebucht wird eine Sitzung mit ihr, nicht eine Methode oder ein Team.

## Operating Context

Ablauf der Klarheitssitzung (Stand 19.10.2026):
1. **Buchung** über Digistore24 (Direktkauf).
2. **Vorab** fünf Fragen per E-Mail nach der Buchung:
   - Um welche Entscheidung geht es?
   - Welche Möglichkeiten siehst du gerade?
   - Was macht die Entscheidung für dich gerade schwer?
   - Stell dir vor, die Entscheidung ist getroffen und fühlt sich richtig an. Was ist dann anders?
   - Darf ich den Teil aufnehmen, in dem du dein gewünschtes Ergebnis erlebst?
3. **Sitzung**: 75 Minuten, 1:1 online (bisher 90 bis 120 Minuten).
4. **Danach**: die **Klarheitskarte**, eine Seite mit der Entscheidung, was sie wirklich will, was sie bisher zurückgehalten hat, und dem nächsten Schritt. Eine Aufnahme der Sitzung gibt es nicht (Entscheidung vom 22. Oktober 2026).
5. **Nachklang**: Petra schreibt nach 14 Tagen eine kurze Nachricht, unangekündigt als Überraschung. Steht bewusst nirgends im Angebot.

Kostenfreies 15-minütiges Kennenlerngespräch über TidyCal (mit Einwilligung zum Laden des Kalenders). Bleibt bestehen als Alternative für alle, die Petra vor der Buchung kennenlernen möchten.

Navigation (bestätigt): Logo · Klarheitssitzung · Über mich · Kontakt · Sitzung buchen. Die Seite „Arbeite mit mir“ entfällt.

## Capabilities and Constraints

**Angebot und Preise** (verbindlich ab Neuausrichtung):
- Klarheitssitzung: 220 € pro Sitzung (bisher 240 €). Der Name „Klarheitssitzung“ bleibt.
- 5er-Paket: 949 € oder 3 Raten à 317 € (insgesamt 951 €), einlösbar innerhalb von drei Monaten.
- Einführungsangebot: die ersten zehn Sitzungen bis 30. November 2026 für 150 €, mit der Bitte um eine Rückmeldung.
- Weihnachtsgutschein: 220 €, als schön gestaltetes PDF, gültig bis Ende 2027. Wird später eingebaut, nicht Teil des ersten Umbaus.

**Technik**: Next.js App Router, vollständig statisch exportiert (`out/`), Deployment auf Netlify. Tailwind 4 vorhanden, Gestaltung überwiegend in CSS-Modulen. Buchung über Digistore24-Links, Kennenlerngespräch über TidyCal, Reichweitenmessung über Umami (`data-umami-event`-Attribute an CTAs). SEO-Metadaten, JSON-LD, Sitemap, `llms.txt` und Social-Images werden gepflegt (`npm run seo:check`).

**Sprache**: Deutsch, Du-Ansprache.

**Rechtliches**: Die Arbeit ersetzt keine Psychotherapie, medizinische Behandlung oder Krisenintervention. Impressum und Datenschutz bleiben bestehen.

**Offene Entscheidungen**:
- Was passiert mit den URLs von Wirklich Deins., dem zugehörigen Kennenlerngespräch und „Arbeite mit mir“ (Weiterleitung, Entfernen)?
- Neue Digistore24-Produkt-Links für die neuen Preise und das Einführungsangebot (reicht Petra nach).
- Wie der Gutschein gekauft und als PDF ausgeliefert wird (später).

## Brand Commitments

- Name und Claim: **Petra Sailer – Dem Eigenen Folgen** (großes F; im Logo in Versalien). Die Website schreibt bisher „Dem Eigenen folgen“ und wird angeglichen.
- Finale Logos: `upload/PS_DEF_Logo_Dunkelbraun:rot-orange_endgueltig.svg` und `upload/PS_DEF_Logo_leinen:goldgelb_endgueltig.svg` (Dateinamen „endgültig“), Web-Fassungen in `public/`.
- Verbindliche Farbpalette laut `FARBEN.md` (Aubergine, Papierweiß, Gelb, Himmelblau, Blaugrau) nach Petras Entwurf vom 20. Oktober 2026, Fassung 12 „Himmelblau“ gewählt am 21. Oktober 2026. Logo in neuen Farben: `upload/PS_DEF_Logo_papierweiss-gelb.svg` und `upload/PS_DEF_Logo_aubergine-blaugrau.svg`.
- Gewünschte Wirkung (von Petra genannt): modern, vertrauenerweckend, drückt Tiefe und Freude aus. Die Seite soll nach Petra aussehen, nicht nach KI.
- Referenz für „nach mir“ (von Petra bestätigt, 19.10.2026): ihr Arbeitsraum in einer Sitzung, also ruhig, warm, aufgeräumt, präsent. Keine verspielten oder konstruierten Bildideen (Flipchart, Postkarte, Kartenset, Ticketheft wurden abgelehnt): Petra selbst trägt die Seite, nicht eine Metapher.
- Schriften sind nicht Teil der Marke und dürfen neu gewählt werden; das Logo bleibt unverändert.
- Stimme: warm, direkt, ruhig; kurze Sätze, Du-Ansprache, keine Heilsversprechen. Fragen statt Behauptungen („Drehst du dich mit deinem Business im Kreis?“).

## Evidence on Hand

- Kundinnenstimmen, echt und freigegeben:
  - Antje, 52, Führende Angestellte: „Die Arbeit mit Petra ist tief, klar und macht Freude. …“
  - Kathi, 48, Cranio-Sacral-Therapeutin: „Durch die einfühlsame und sehr präzise Art und Weise …“
  - Fallgeschichte Simona: steckte bei ihren Website-Texten fest; eine halbe Stunde nach der Sitzung schickte sie die ersten Texte.
- Weitere freigegebene Stimmen existieren bei Petra, werden aber vorerst nicht gebraucht. Nicht erfinden; bei Bedarf bei Petra anfragen.
- Fotos von Petra in `public/` (Hero, Porträt, Kontakt, Über mich, Privat, Mein Weg).
- Nicht vorhanden bzw. nicht bestätigt: Zahlen zu Kundinnen, Erfahrungsjahre, Zertifikate, Presse. Nichts davon erfinden.

## Product Principles

1. **Ein Angebot, eine Entscheidung.** Alles auf der Website führt zur Klarheitssitzung; kein zweites Angebot konkurriert um Aufmerksamkeit.
2. **Ihre Welt, ihre Sprache.** Beispiele, Begriffe und Zweifel kommen aus dem Alltag selbstständiger Frauen in Coaching-, Gesundheits- und Kreativberufen.
3. **Die Antwort ist schon da.** Die Website verspricht keine Ratschläge, sondern einen anderen Ausgangspunkt, von dem aus die eigene Antwort hörbar wird.
4. **Greifbar statt vage.** Ablauf, Dauer, Preis, Vorab-Fragen, Klarheitskarte und Nachklang sind konkret benannt, damit Vertrauen aus Klarheit entsteht.
5. **Echt statt erfunden.** Nur echte, freigegebene Stimmen und belegbare Aussagen; Petra als Person ist sichtbar.
