import Link from "next/link";
import BrandLogo from "../BrandLogo";
import styles from "./page.module.css";

// Schlanker Kopf für Danke-Seiten: nur Logo und der Weg zurück zur Website.
export default function ThanksNav() {
  return (
    <div className={styles.nav}>
      <BrandLogo className={styles.brand} variant="footer" />
      <nav className={styles.navLinks} aria-label="Zurück zur Website">
        <Link className={styles.thanksLink} href="/">Zur Website</Link>
      </nav>
    </div>
  );
}
