import type { Metadata } from "next";
import JsonLd from "../JsonLd";
import { HOME_SOCIAL_IMAGE, pageGraph, pageMetadata } from "../seo";
import HomeContent from "./Home";
import styles from "./page.module.css";

const PAGE_DESCRIPTION =
  "Petra Sailer begleitet eigenverantwortliche Menschen dabei, ihre eigenen Antworten wieder klar zu erleben, bewusst zu wählen und danach zu handeln.";

export const metadata: Metadata = pageMetadata({
  title: "Dem Eigenen folgen",
  description: PAGE_DESCRIPTION,
  path: "/",
  socialDescription:
    "Begleitung für Menschen, die etwas in ihrem Leben verändern, aufbauen oder verwirklichen wollen.",
  socialImage: {
    url: HOME_SOCIAL_IMAGE,
    width: 1200,
    height: 630,
    alt: "Petra Sailer vor hellem Hintergrund. Daneben steht: Wenn du das, was dir wirklich wichtig ist, auch leben willst.",
  },
});

export default function HomePage() {
  return (
    <div className={styles.scope}>
      <JsonLd
        data={pageGraph({
          path: "/",
          name: "Petra Sailer – Dem Eigenen folgen",
          description: PAGE_DESCRIPTION,
        })}
      />
      <HomeContent />
    </div>
  );
}
