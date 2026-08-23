import type { Metadata } from "next";
import HomeContent from "./Home";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Dem Eigenen folgen",
  description:
    "Petra Sailer begleitet eigenverantwortliche Menschen dabei, ihre eigenen Antworten wieder klar zu erleben, bewusst zu wählen und danach zu handeln.",
};

export default function HomePage() {
  return <div className={styles.scope}><HomeContent /></div>;
}
