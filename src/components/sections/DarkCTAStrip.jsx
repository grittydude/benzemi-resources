/**
 * DarkCTAStrip
 *
 * White-bg section containing a full-width dark card with badge, large heading, and CTA.
 * Used at the bottom of the Industry Solutions page.
 *
 * Props:
 *  data – { badge?, text, cta: { label, href } }
 */
import { navigate } from '../../router'
import arrowIcon from '../../assets/icons/arrow_icon.svg'
import trainingBg from '../../assets/icons/training_program_bg.svg'
import styles from './DarkCTAStrip.module.css'

function DarkCTAStrip({ data = {} }) {
  const { badge, text, cta } = data

  function handleCta(e) {
    if (cta?.href?.startsWith('/')) { e.preventDefault(); navigate(cta.href) }
  }

  return (
    <section className={styles.section}>
      <div
        className={styles.card}
        style={{ backgroundImage: `url(${trainingBg})` }}
      >
        {badge && (
          <p className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <span>{badge}</span>
          </p>
        )}
        {text && <p className={styles.text}>{text}</p>}
        {cta && (
          <div className={styles.ctaRow}>
            <a href={cta.href} className={styles.ctaBtn} onClick={handleCta}>
              {cta.label.toUpperCase()}
            </a>
            <a
              href={cta.href}
              className={styles.arrowBtn}
              onClick={handleCta}
              aria-label={cta.label}
            >
              <img src={arrowIcon} alt="" aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export default DarkCTAStrip
