import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../constants";
import Button from "../ui/Button";
import { navigate, useRouter } from "../../router";
import logo from '../../assets/images/benzemi-logo.svg'
import styles from "./Navbar.module.css";

function Navbar() {
  const { path } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function isActive(href) {
    if (href === '/') return path === '/'
    return path === href || path.startsWith(href + '/')
  }

  // Add background when scrolled past 50px
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when viewport widens to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  // NOTE: The mobile menu is rendered OUTSIDE <header> intentionally.
  // backdrop-filter on the header (glassmorphism when scrolled) creates a
  // new containing block for position:fixed children, which clips the menu
  // to the navbar strip. Rendering it as a sibling avoids this entirely.
  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
        role="banner"
      >
        <div className={styles.inner}>
          {/* Logo */}
          <a href="/" className={styles.logo} aria-label="Bezimeni Resources — Home" onClick={(e) => { e.preventDefault(); navigate('/') }}>
            <img
              src={logo}
              alt="Bezimeni Resources"
              className={styles.logoImage}
              width="200px"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className={styles.nav} aria-label="Main navigation">
            <ul className={styles.navList} role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={[styles.navLink, isActive(link.href) ? styles.navLinkActive : ''].join(' ')}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    onClick={link.href.startsWith('/') ? (e) => { e.preventDefault(); navigate(link.href) } : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className={styles.cta}>
            <Button as="a" href="#get-started" variant="dark">
              Get Started
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span className={styles.bar} aria-hidden="true" />
            <span className={styles.bar} aria-hidden="true" />
            <span className={styles.bar} aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Mobile Menu — sibling to header so backdrop-filter doesn't clip it */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop overlay */}
        <div className={styles.mobileOverlay} onClick={closeMenu} aria-hidden="true" />

        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {/* Close button */}
          <button
            className={styles.mobileClose}
            onClick={closeMenu}
            aria-label="Close navigation menu"
            type="button"
          >
            ✕
          </button>

          <ul className={styles.mobileNavList} role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={[styles.mobileNavLink, isActive(link.href) ? styles.mobileNavLinkActive : ''].join(' ')}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  onClick={(e) => {
                    if (link.href.startsWith('/')) { e.preventDefault(); navigate(link.href) }
                    closeMenu()
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.mobileCta}>
            <Button
              as="a"
              href="#get-started"
              variant="dark"
              onClick={closeMenu}
            >
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
