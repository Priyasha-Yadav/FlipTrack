import { Link } from "react-router";
import styles from "./footer-links-section.module.css";

interface Props {
  className?: string;
}

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Features", to: "/features" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Blog", to: "/blog" },
      { label: "About", to: "/" },
      { label: "Contact", to: "/" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
      { label: "Cookies", to: "/privacy" },
    ],
  },
];

export function FooterLinksSection({ className }: Props) {
  return (
    <div className={[styles.footer, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logoText}>
            <div className={styles.logoIcon}>FT</div>
            Flip<span className={styles.logoAccent}>Track</span>
          </div>
          <p className={styles.tagline}>
            Your reselling empire, tracked in real time. The open-source alternative to Pricely.io.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.heading} className={styles.column}>
            <h4>{col.heading}</h4>
            <div className={styles.links}>
              {col.links.map((link) => (
                <Link key={link.label} to={link.to} className={styles.link}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
