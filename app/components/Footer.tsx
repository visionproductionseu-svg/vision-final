import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <Link
          href="/#hero"
          className={styles.footerWord}
          aria-label="Alfa Creative Agency — torna all'inizio"
        >
          <img
            src="/assets/images/alfa-logo-horizontal.png"
            alt="Alfa Creative Agency"
          />
        </Link>

        <p className={styles.footerTagline}>
          Strategy · Digital · Video · Creative
        </p>

        <p className={styles.footerServices}>
          Web · SEO · Marketing · Video · Motion · Branding
        </p>

        <div className={styles.socialRow}>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/alfa.creative.agency/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={styles.socialBtn}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.2"
                cy="6.8"
                r="0.6"
                fill="currentColor"
              />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61593653235825"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className={styles.socialBtn}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H6v4h3v5h4v-5h3l1-4h-4V9c0-.6.4-1 1-1z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/channel/UCkNu2YfEOeRge6cb28iAVKw/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className={styles.socialBtn}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <rect
                x="2.5"
                y="6"
                width="19"
                height="12"
                rx="4"
              />
              <path
                d="M10.5 9.5l5 2.5-5 2.5z"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>

        </div>

      </div>
    </footer>
  );
}