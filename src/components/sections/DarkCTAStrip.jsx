/**
 * DarkCTAStrip
 *
 * Full-width dark strip with scrolling text + CTA.
 * Used at the bottom of the Industry Solutions page.
 *
 * Props:
 *  data – { text, cta: { label, href } }
 */
import { navigate } from '../../router'
import arrowIcon from '../../assets/icons/arrow_icon.svg'
import styles from './DarkCTAStrip.module.css'

function DarkCTAStrip({ data = {} }) {
  const { text, cta } = data

  function handleCta(e) {
    if (cta?.href?.startsWith('/')) { e.preventDefault(); navigate(cta.href) }
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.text}>{text}</p>
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

export default DarkCTAStrip
