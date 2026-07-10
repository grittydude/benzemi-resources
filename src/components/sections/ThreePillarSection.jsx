/**
 * ThreePillarSection
 *
 * Reusable "3 pillar cards" section.
 * Used by IndustrySolutions (approach) and IndustrySolutions (solution areas).
 *
 * Props:
 *  badge       – string
 *  heading     – { prefix?, accent1?, mid?, accent2?, suffix? } or { prefix?, accent?, suffix? }
 *  description – string
 *  pillars     – [{ id, variant, title, description }]
 *  id          – HTML section id (optional)
 */
import styles from './ThreePillarSection.module.css'

function renderText(text = '') {
  return text.split('\n').map((line, i) =>
    i === 0 ? line : <span key={i}><br />{line}</span>
  )
}

function renderHeading(heading) {
  const { prefix = '', accent1, mid, accent2, accent, suffix = '' } = heading
  if (accent1 !== undefined) {
    return (
      <>
        {prefix && renderText(prefix)}
        {accent1 && <em className={styles.accent}>{renderText(accent1)}</em>}
        {mid && renderText(mid)}
        {accent2 && <em className={styles.accent}>{renderText(accent2)}</em>}
        {suffix && renderText(suffix)}
      </>
    )
  }
  return (
    <>
      {prefix && renderText(prefix)}
      {accent && <em className={styles.accent}>{renderText(accent)}</em>}
      {suffix && renderText(suffix)}
    </>
  )
}

function ThreePillarSection({ badge, heading = {}, description, pillars = [], id }) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.inner}>

        {/* Header */}
        <div className={styles.header}>
          {badge && (
            <p className={styles.badge}>
              <span className={styles.badgeDot} aria-hidden="true" />
              <span>{badge}</span>
            </p>
          )}
          <div className={styles.headerCols}>
            <h2 className={styles.heading}>{renderHeading(heading)}</h2>
            {description && (
              <p className={styles.description}>{description}</p>
            )}
          </div>
        </div>

        {/* Pillar cards */}
        <div className={styles.cards}>
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className={[styles.card, styles[`card--${pillar.variant}`]].join(' ')}
            >
              <h3 className={styles.cardTitle}>{pillar.title}</h3>
              <p className={styles.cardDesc}>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ThreePillarSection
