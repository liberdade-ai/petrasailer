import BrandLogo from "../BrandLogo";
import { NAVIGATION } from "./SiteNav";
import styles from "./page.module.css";

const EMAIL = "kontakt@petrasailer.com";

// Fuß für alle Seiten: oben das Menü wie im Kopf, unter der Linie das Kleingedruckte.
export default function SiteFooter({ current }: { current?: string }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <BrandLogo className={styles.brand} variant="footer" />
        <nav className={styles.footerNav} aria-label="Menü">
          {NAVIGATION.map((item) => (
            <a key={item.href} href={item.href} aria-current={item.href === current ? "page" : undefined}>{item.label}</a>
          ))}
        </nav>
        <div className={styles.footerBottom}>
          <p>© Petra Sailer {new Date().getFullYear()} · <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          <nav className={styles.footerLinks} aria-label="Rechtliches">
            <a href="/impressum/" aria-current={current === "/impressum/" ? "page" : undefined}>Impressum</a>
            <a href="/datenschutz/" aria-current={current === "/datenschutz/" ? "page" : undefined}>Datenschutz</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
