/**
 * PartnerCTA
 *
 * 2-col layout: badge left col, heading + description + CTA right col.
 * Industry Solutions page.
 */
import { navigate } from '../../router'
import arrowIcon from '../../assets/icons/arrow_icon.svg'
import styles from './PartnerCTA.module.css'

function PartnerCTA({ data = {} }) {
  const { badge, heading, description, cta } = data

  function handleCta(e) {
    if (cta?.href?.startsWith('/')) { e.preventDefault(); navigate(cta.href) }
  }

  function renderHeading() {
    if (!heading) return null
    if (typeof heading === 'string') return heading
    const { prefix = '', accent = '' } = heading
    return (
      <>
        {prefix}
        {accent && <em className={styles.accent}>{accent}</em>}
      </>
    )
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left: badge */}
        <div className={styles.left}>
          {badge && (
            <p className={styles.badge}>
              <span className={styles.badgeDot} aria-hidden="true" />
              <span>{badge}</span>
            </p>
          )}
        </div>

        {/* Right: heading + [space] + description + CTA */}
        <div className={styles.right}>
          {heading && <h2 className={styles.heading}>{renderHeading()}</h2>}
          <div className={styles.content}>
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
                  <img src={arrowIcon} alt="" aria-hidden="true" />
                </a>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}

export default PartnerCTA
