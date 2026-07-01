import Button from '../ui/Button'
import { INDUSTRY_RESOURCES } from '../../constants'
import styles from './IndustryResources.module.css'

function IndustryResources() {
  const { badge, heading, cta, resources } = INDUSTRY_RESOURCES

  return (
    <section className={styles.section} id="resources" aria-labelledby="ir-heading">
      <div className={styles.inner}>

        {/* ── Badge — own row ── */}
        <p className={styles.badge}>
          <span className={styles.badgeDot} aria-hidden="true" />
          <span>{badge}</span>
        </p>

        {/* ── Heading + CTA on the same row ── */}
        <div className={styles.headingRow}>
          <h2 id="ir-heading" className={styles.heading}>{heading}</h2>
          <div className={styles.headerCta}>
            <Button as="a" href={cta.href} variant="dark">
              {cta.label}
            </Button>
            <a href={cta.href} className={styles.arrowBtn} aria-label={cta.label}>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* ── Resource cards ── */}
        <div className={styles.cards}>
          {resources.map((res) => (
            <article
              key={res.id}
              className={`${styles.card} ${styles[`card--${res.variant}`]}`}
            >
              <div className={styles.cardTop}>
                <span className={styles.type}>
                  <span className={styles.typeDot} aria-hidden="true" />
                  {res.type}
                </span>
                <span className={styles.date}>{res.date}</span>
              </div>
              <h3 className={styles.cardTitle}>{res.title}</h3>
              <div className={styles.cardBottom}>
                <span className={styles.readLabel}>Read {res.type}</span>
                <a
                  href="#"
                  className={styles.readLink}
                  aria-label={`Read ${res.type}: ${res.title}`}
                >
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default IndustryResources
