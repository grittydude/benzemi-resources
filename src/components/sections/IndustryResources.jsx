import Button from '../ui/Button'
import arrowIcon from '../../assets/icons/arrow_icon.svg'
import ResourceCard from '../ui/ResourceCard'
import { INDUSTRY_RESOURCES } from '../../constants'
import styles from './IndustryResources.module.css'

function IndustryResources() {
  const { badge, heading, cta, resources } = INDUSTRY_RESOURCES

  return (
    <section className={styles.section} id="resources" aria-labelledby="ir-heading">
      <div className={styles.inner}>

        {/* ── Badge ── */}
        <p className={styles.badge}>
          <span className={styles.badgeDot} aria-hidden="true" />
          <span>{badge}</span>
        </p>

        {/* ── Heading + CTA ── */}
        <div className={styles.headingRow}>
          <h2 id="ir-heading" className={styles.heading}>{heading}</h2>
          <div className={styles.headerCta}>
            <Button as="a" href={cta.href} variant="dark">
              {cta.label}
            </Button>
            <a href={cta.href} className={styles.arrowBtn} aria-label={cta.label}>
              <img src={arrowIcon} alt="" />
            </a>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className={styles.cards}>
          {resources.map((res) => (
            <ResourceCard
              key={res.id}
              type={res.type}
              date={res.date}
              title={res.title}
              variant={res.variant}
              /* No onClick → static display card, not interactive */
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default IndustryResources
