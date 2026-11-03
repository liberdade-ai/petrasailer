import type { Metadata } from "next";
import { pageMetadata } from "../seo";
import DankeSeite from "./DankeSeite";

export const metadata: Metadata = pageMetadata({
  title: "Danke für deine Buchung",
  description: "Bestätigung deiner Buchung der Klarheitssitzung bei Petra Sailer, mit Terminbuchung.",
  path: "/danke-klarheitssitzung/",
  noIndex: true,
});

export default function DankeKlarheitssitzung() {
  return (
    <DankeSeite
      label="Deine Klarheitssitzung"
      location="danke_klarheitssitzung"
      intro="Alles hat geklappt. Jetzt suchst du dir direkt deinen Termin aus. Nach der Terminbuchung bekommst du die Bestätigung und den Zoom-Link per E-Mail, anschließend die fünf Fragen zu deinem Thema. Nach der Sitzung bekommst du deine Klarheitskarte als PDF per E-Mail."
      calendarHeading={<>Such dir deinen <em>Termin aus.</em></>}
      calendarText="Im Kalender siehst du alle freien Termine. Wähl einfach den, der für dich gut passt."
    />
  );
}
