import Button from '../ui/Button'
import { WHAT_WE_DO } from '../../constants'
import styles from './WhatWeDo.module.css'
import iconDevelop from '../../assets/icons/develop_icon.svg'
import iconDeliver from '../../assets/icons/deliver_icon.svg'
import iconDrive from '../../assets/icons/drive_icon.svg'

const CARD_ICONS = {
  people: iconDevelop,
  projects: iconDeliver,
  industry: iconDrive,
}

/* ── Component ──────────────────────────────────────────────── */
function WhatWeDo() {
  const { badge, heading, description, cta, cards } = WHAT_WE_DO

  return (
    <section className={styles.section} id="what-we-do" aria-labelledby="wwd-heading">
      <div className={styles.inner}>

        {/* Badge — top left */}
        <p className={styles.badge}>
          <span className={styles.badgeDot} aria-hidden="true" />
          <span>{badge}</span>
        </p>

        {/* Content block — offset to the right */}
        <div className={styles.content}>
          <h2 id="wwd-heading" className={styles.heading}>
            <span className={styles.line1}>{heading.line1}</span>
            <span className={styles.line2}>{heading.line2}</span>
          </h2>

          <p className={styles.description}>{description}</p>

          <div className={styles.cta}>
            <Button as="a" href={cta.href} variant="dark">
              {cta.label}
            </Button>
            <a href={cta.href} className={styles.arrowBtn} aria-label={cta.label}>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>


      </div>

      {/* ── Capability cards — full viewport width ── */}
      <ul className={styles.cards} aria-label="Our capabilities">
        {cards.map((card) => (
          <li
            key={card.id}
            className={`${styles.card} ${styles[`card--${card.variant}`]}`}
          >
            <span className={styles.cardIcon}>
              <img src={CARD_ICONS[card.id]} alt="" aria-hidden="true" />
            </span>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDesc}>{card.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default WhatWeDo
