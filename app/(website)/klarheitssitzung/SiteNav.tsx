import BrandLogo from "../BrandLogo";
import styles from "./page.module.css";

export const NAVIGATION = [
  { label: "Klarheitssitzung", href: "/klarheitssitzung/" },
  { label: "Über mich", href: "/ueber-mich/" },
  { label: "Kontakt", href: "/kontakt/" },
] as const;

// Kopfzeile im neuen Design. Am Handy klappen die Links über „Menü“ auf, der Buchen-Button bleibt sichtbar.
export default function SiteNav({ current, ctaHref = "/klarheitssitzung/#preise" }: { current?: string; ctaHref?: string }) {
  const links = NAVIGATION.map((item) => (
    <a key={item.href} href={item.href} aria-current={item.href === current ? "page" : undefined}>{item.label}</a>
  ));

  return (
    <div className={styles.nav}>
      <BrandLogo className={styles.brand} variant="footer" />
      <nav className={styles.navLinks} aria-label="Hauptnavigation">
        <span className={styles.navDesktop}>{links}</span>
        <a className={styles.navCta} href={ctaHref} data-umami-event="cta_click" data-umami-event-cta="sitzung_buchen" data-umami-event-location="navigation"><span className={styles.ctaLong}>Sitzung buchen</span><span className={styles.ctaShort}>Buchen</span></a>
        <details className={styles.menu}>
          <summary aria-label="Menü"><span className={styles.menuIcon} aria-hidden="true" /></summary>
          <div className={styles.menuPanel}>{links}</div>
        </details>
      </nav>
    </div>
  );
}
