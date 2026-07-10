import { FEATURED_PROGRAMMES } from '../../constants'
import arrowIcon from '../../assets/icons/arrow_icon.svg'
import iconOilGas from '../../assets/icons/oil-gas.svg'
import iconProcess from '../../assets/icons/process-prod.svg'
import iconHse from '../../assets/icons/hse.svg'
import styles from './FeaturedProgrammes.module.css'
import Button from '../ui/Button'

const PROGRAMME_ICONS = {
  'oil-gas':      iconOilGas,
  'process-prod': iconProcess,
  'hse':          iconHse,
}

function FeaturedProgrammes() {
  const { badge, heading, cta, programmes } = FEATURED_PROGRAMMES

  return (
    <section className={styles.section} id="training" aria-labelledby="fp-heading">

      {/* ── Header row: badge + heading left, CTA right ── */}
      <div className={styles.inner}>
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <p className={styles.badge}>
              <span className={styles.badgeDot} aria-hidden="true" />
              <span>{badge}</span>
            </p>
            <h2 id="fp-heading" className={styles.heading}>
              {heading.plain}
              <em className={styles.accent}>{heading.accent}</em>
              {heading.suffix}
            </h2>
          </div>
          
          <div className={styles.cta}>
            <Button as="a" href={cta.href} variant="dark">
              {cta.label}
            </Button>
            <a href={cta.href} className={styles.arrowBtn} aria-label={cta.label}>
              <img src={arrowIcon} alt="" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Programme cards — full viewport width ── */}
      <ul className={styles.cards} aria-label="Featured training programmes">
        {programmes.map((prog) => (
          <li
            key={prog.id}
            className={`${styles.card} ${styles[`card--${prog.variant}`]}`}
          >
            <span className={styles.cardIcon}>
              <img src={PROGRAMME_ICONS[prog.icon]} alt="" aria-hidden="true" />
            </span>
            <h3 className={styles.cardTitle}>{prog.title}</h3>
            <p className={styles.cardDesc}>{prog.description}</p>
          </li>
        ))}
      </ul>

    </section>
  )
}

export default FeaturedProgrammes
