import { permanentRedirect } from "next/navigation";

// Die Übersicht gibt es nicht mehr, die Adresse führt zum Kennenlerngespräch der Klarheitssitzung
// (zusätzlich als 301 in netlify.toml).
export default function IntroCallPage() {
  permanentRedirect("/kennenlerngespraech/klarheitssitzung/");
}
