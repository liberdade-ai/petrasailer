import type { Metadata } from "next";
import { pageMetadata } from "../seo";
import DankeSeite from "../danke-klarheitssitzung/DankeSeite";

export const metadata: Metadata = pageMetadata({
  title: "Danke für deine Buchung",
  description: "Bestätigung deiner Buchung des Fünferpakets Klarheitssitzung bei Petra Sailer, mit Terminbuchung.",
  path: "/danke-fuenferpaket/",
  noIndex: true,
});

export default function DankeFuenferpaket() {
  return (
    <DankeSeite
      label="Dein Fünferpaket Klarheitssitzung"
      location="danke_fuenferpaket"
      intro="Alles hat geklappt, dein Fünferpaket Klarheitssitzung ist gebucht. Jetzt suchst du dir direkt deine Termine aus. Nach jeder Terminbuchung bekommst du die Bestätigung und den Zoom-Link per E-Mail, vor jeder Sitzung die fünf Fragen zu deinem Thema. Nach jeder Sitzung bekommst du deine Klarheitskarte als PDF per E-Mail."
      calendarHeading={<>Such dir deine <em>Termine aus.</em></>}
      calendarText="Im Kalender siehst du alle freien Termine. Du kannst alle fünf auf einmal buchen oder einen nach dem anderen, ganz wie du magst."
      buttonLabel="Termine aussuchen"
      note="Die 5 Sitzungen sind ab Kauf 3 Monate gültig."
    />
  );
}
