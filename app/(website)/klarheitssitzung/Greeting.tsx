import styles from "./page.module.css";

// Persönlicher Gruß mit rundem Foto, für Kontakt-, Kennenlern- und Danke-Seiten.
export default function Greeting({ children, src = "/petra-sailer-gruss.jpg", large = false }: { children: React.ReactNode; src?: string; large?: boolean }) {
  return (
    <div className={`${styles.greeting} ${large ? styles.greetingLarge : ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="Petra Sailer" width="400" height="400" loading="lazy" />
      <div>
        <p className={styles.greetingText}>{children}</p>
        <p className={styles.signature}>Petra</p>
      </div>
    </div>
  );
}
