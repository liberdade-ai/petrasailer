import Link from "next/link";
import styles from "./BrandLogo.module.css";

type BrandLogoProps = {
  className?: string;
  variant: "header" | "footer";
};

export default function BrandLogo({ className, variant }: BrandLogoProps) {
  return (
    <Link
      className={[styles.link, styles[variant], className].filter(Boolean).join(" ")}
      href="/"
      aria-label="Petra Sailer – Dem Eigenen folgen"
    >
      <span className={styles.name}>Petra Sailer</span>
      <span className={styles.tagline}>Dem Eigenen folgen</span>
    </Link>
  );
}
