import { useCallback } from "react";
import Button from "../ui/Button";
import { SITE_FOOTER, NAV_LINKS } from "../../constants";
import { navigate } from "../../router";
import logoSrc from "../../assets/images/benzemi-logo.svg";
import arrowIcon from "../../assets/icons/arrow_icon.svg";
import arrowUpIcon from "../../assets/icons/arrow_up.svg";
import styles from "./SiteFooter.module.css";

function SiteFooter() {
  const { button, connect, copyright } = SITE_FOOTER;

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <footer className={styles.footer}>
      {/* ── Pre-footer: white bg + green radial gradient ── */}
      <div className={styles.preFooter}>
        {/* Decorative green gradient blob */}
        <div className={styles.gradientBlob} aria-hidden="true" />

        <div className={styles.inner}>
          {/* Left: heading + CTA */}
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Become <em className={styles.accent}>Industry-</em>
              <br />
              <em className={styles.accent}>Ready</em> with Practical
              <br />
              Training That <em className={styles.accent}>Works</em>
            </h2>
            <div className={styles.actions}>
              <Button as="a" href={button.href} variant="dark">
                {button.label}
              </Button>
              <a
                href={button.href}
                className={styles.arrowBtn}
                aria-label={button.label}
              >
                <img src={arrowIcon} alt="" />
              </a>
              {/* Scroll-to-top — inline with CTA on mobile */}
              <button
                className={styles.scrollTop}
                onClick={scrollToTop}
                aria-label="Scroll to top"
                type="button"
              >
                <img src={arrowUpIcon} alt="" />
              </button>
            </div>
          </div>

          {/* Right: two nav columns */}
          <div className={styles.navArea}>
            {/* Column 1: Navigation */}
            <div className={styles.navCol}>
              <p className={styles.navLabel}>Navigation</p>
              <ul className={styles.navList}>
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={styles.navLink}
                      onClick={
                        link.href.startsWith("/")
                          ? (e) => {
                              e.preventDefault();
                              navigate(link.href);
                            }
                          : undefined
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Connect */}
            <div className={styles.navCol}>
              <p className={styles.navLabel}>Connect</p>
              <ul className={styles.navList}>
                {connect.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      className={styles.navLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scroll-to-top — shown only on desktop (hidden on mobile via CSS) */}
            <button
              className={`${styles.scrollTop} ${styles.scrollTopDesktop}`}
              onClick={scrollToTop}
              aria-label="Scroll to top"
              type="button"
            >
              <img src={arrowUpIcon} alt="" />
            </button>
          </div>
        </div>
        {/* ── Logo + copyright — no separate bar, same white bg ── */}
        <div className={styles.footerBottom}>
          <a
            href="/"
            className={styles.logoLink}
            aria-label="Bezimeni Resources home"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            <img
              src={logoSrc}
              alt="Bezimeni Resources"
              className={styles.logo}
            />
          </a>
          <p className={styles.copyright}>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
