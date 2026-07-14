import arrowIcon from '../../assets/icons/arrow_icon.svg'
import trainingBg from '../../assets/icons/training_program_bg.svg'
import { GROWING_CTA } from '../../constants'
import styles from './GrowingCTA.module.css'

function GrowingCTA() {
  const { badge, text, cta } = GROWING_CTA

  return (
    <section className={styles.section} id="solutions" aria-label="Industry solutions">
      <div
        className={styles.card}
        style={{ backgroundImage: `url(${trainingBg})` }}
      >

        {/* Badge */}
        <p className={styles.badge}>
          <span className={styles.badgeDot} aria-hidden="true" />
          <span>{badge}</span>
        </p>

        {/* Large body text */}
        <p className={styles.text}>{text}</p>

        {/* CTA */}
        <div className={styles.actions}>
          <a href={cta.href} className={styles.ctaBtn}>
            {cta.label.toUpperCase()}
          </a>
          <a href={cta.href} className={styles.arrowBtn} aria-label={cta.label}>
            <img src={arrowIcon} alt="" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  )
}

export default GrowingCTA
