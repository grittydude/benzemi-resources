/**
 * PartnerCTA
 *
 * Full-width light section with badge, large heading, description, CTA.
 * Used on Industry Solutions page.
 *
 * Props:
 *  data – { badge, heading, description, cta: { label, href } }
 */
import { navigate } from '../../router'
import arrowIcon from '../../assets/icons/arrow_icon.svg'
import styles from './PartnerCTA.module.css'

function PartnerCTA({ data = {} }) {
  const { badge, heading, description, cta } = data

  function handleCta(e) {
    if (cta?.href?.startsWith('/')) { e.preventDefault(); navigate(cta.href) }
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {badge && (
          <p className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <span>{badge}</span>
          </p>
        )}
        {heading && <h2 className={styles.heading}>{heading}</h2>}
        {description && <p className={styles.description}>{description}</p>}
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
              <img src={arrowIcon} alt="" />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export default PartnerCTA
