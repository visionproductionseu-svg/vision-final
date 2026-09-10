"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

type NavbarProps = {
  active?: "home" | "eventi" | "web-digital" | "video-creative" | "chi-siamo";
};

export default function Navbar({ active }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.inner}>
        <Link
          href="/"
          className={styles.brand}
          aria-label="Alfa Creative Agency"
        >
          <img
            src="/assets/images/alfa-logo-horizontal.png"
            alt="Alfa Creative Agency"
          />
        </Link>

        <nav className={styles.navLinks}>
          <Link
            href="/"
            className={`${styles.navLink} ${
              active === "home" ? styles.active : ""
            }`}
          >
            Home
          </Link>

          <Link
            href="/eventi"
            className={`${styles.navLink} ${
              active === "eventi" ? styles.active : ""
            }`}
          >
            Eventi
          </Link>

          <Link
            href="/web-digital"
            className={`${styles.navLink} ${
              active === "web-digital" ? styles.active : ""
            }`}
          >
            Web & Digital
          </Link>

          <Link
  href="/video-creative"
  className={`${styles.navLink} ${
    active === "video-creative" ? styles.active : ""
  }`}
>
  Video & Creative
</Link>

          <Link
            href="/chi-siamo"
            className={`${styles.navLink} ${
              active === "chi-siamo" ? styles.active : ""
            }`}
          >
            Chi siamo
          </Link>

          <Link
            href="/#cta"
            className={styles.navLink}
          >
            Contatti
          </Link>

          <Link
            href="/#cta"
            className={styles.navButton}
          >
            Parliamo
          </Link>
        </nav>
      </div>
    </header>
  );
}