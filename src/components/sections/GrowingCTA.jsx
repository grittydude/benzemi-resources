import Button from '../ui/Button'
import arrowIcon from '../../assets/icons/arrow_icon.svg'
import { GROWING_CTA } from '../../constants'
import styles from './GrowingCTA.module.css'

function GrowingCTA() {
  const { badge, text, cta } = GROWING_CTA

  return (
    <section className={styles.section} id="solutions" aria-label="Industry solutions">
      <div className={styles.card}>

        {/* Badge */}
        <p className={styles.badge}>
          <span className={styles.badgeDot} aria-hidden="true" />
          <span>{badge}</span>
        </p>

        {/* Large body text */}
        <p className={styles.text}>{text}</p>

        {/* CTA */}
        <div className={styles.actions}>
          <Button as="a" href={cta.href} variant="ghost">
            {cta.label}
          </Button>
          <a href={cta.href} className={styles.arrowBtn} aria-label={cta.label}>
            <img src={arrowIcon} alt="" />
          </a>
        </div>

      </div>
    </section>
  )
}

export default GrowingCTA
