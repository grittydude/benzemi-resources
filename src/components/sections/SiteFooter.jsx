import { useCallback } from 'react'
import Button from '../ui/Button'
import { SITE_FOOTER, NAV_LINKS } from '../../constants'
import logoSrc from '../../assets/images/benzemi-logo.svg'
import styles from './SiteFooter.module.css'

function SiteFooter() {
  const { button, connect, copyright } = SITE_FOOTER

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

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
              Become{' '}
              <em className={styles.accent}>Industry-</em>
              <br />
              <em className={styles.accent}>Ready</em>{' '}
              with Practical
              <br />
              Training That{' '}
              <em className={styles.accent}>Works</em>
            </h2>
            <div className={styles.actions}>
              <Button as="a" href={button.href} variant="dark">
                {button.label}
              </Button>
              <a href={button.href} className={styles.arrowBtn} aria-label={button.label}>
                <span aria-hidden="true">→</span>
              </a>
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
                    <a href={link.href} className={styles.navLink}>{link.label}</a>
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

            {/* Scroll-to-top — aligned with column headers */}
            <button
              className={styles.scrollTop}
              onClick={scrollToTop}
              aria-label="Scroll to top"
              type="button"
            >
              <span aria-hidden="true">↑</span>
            </button>

          </div>
        </div>
      </div>

      {/* ── Footer bar — light, colored logo ── */}
      <div className={styles.bar}>
        <div className={styles.barInner}>
          <a href="/" className={styles.logoLink} aria-label="Bezimeni Resources home">
            <img src={logoSrc} alt="Bezimeni Resources" className={styles.logo} />
          </a>
          <p className={styles.copyright}>{copyright}</p>
        </div>
      </div>

    </footer>
  )
}

export default SiteFooter
