import Button from '../ui/Button'
import arrowIcon from '../../assets/icons/arrow_icon.svg'
import { WHAT_WE_DO } from '../../constants'
import styles from './WhatWeDo.module.css'
import iconDevelop from '../../assets/icons/develop_icon.svg'
import iconDeliver from '../../assets/icons/deliver_icon.svg'
import iconDrive from '../../assets/icons/drive_icon.svg'
import brochureImg from '../../assets/images/about_image.webp'

const CARD_ICONS = {
  people: iconDevelop,
  projects: iconDeliver,
  industry: iconDrive,
}

// Replace FILE_ID with the real Google Drive file ID when ready
const BROCHURE_URL =
  'https://drive.google.com/uc?export=download&id=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms'

function handleDownload() {
  const a = document.createElement('a')
  a.href = BROCHURE_URL
  a.download = 'Bezimeni-Resources-Brochure.pdf'
  a.target = '_blank'
  a.rel = 'noopener noreferrer'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

/* ── Component ──────────────────────────────────────────────── */
function WhatWeDo() {
  const { badge, heading, description, cta, cards } = WHAT_WE_DO

  return (
    <section className={styles.section} id="what-we-do" aria-labelledby="wwd-heading">
      <div className={styles.inner}>

        {/* Badge — top left, spans full width */}
        <p className={styles.badge}>
          <span className={styles.badgeDot} aria-hidden="true" />
          <span>{badge}</span>
        </p>

        {/* Row: brochure image (left) + content (right) */}
        <div className={styles.row}>

          {/* Brochure image with download overlay */}
          <div className={styles.brochure}>
            <img
              src={brochureImg}
              alt="Bezimeni Resources Brochure"
              className={styles.brochureImg}
            />
            <div className={styles.brochureOverlay}>
              <button
                className={styles.brochureBtn}
                onClick={handleDownload}
                type="button"
              >
                DOWNLOAD BROCHURE
              </button>
              <button
                className={styles.brochureArrow}
                onClick={handleDownload}
                type="button"
                aria-label="Download Bezimeni Resources Brochure PDF"
              >
                <img src={arrowIcon} alt="" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Text content */}
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
                <img src={arrowIcon} alt="" />
              </a>
            </div>
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
