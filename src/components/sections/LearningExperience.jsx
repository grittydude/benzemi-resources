/**
 * LearningExperience
 *
 * Numbered learning-point section on the Training page.
 * Shows badge, heading, description, then a row of numbered pillars.
 *
 * Props:
 *  data – TRAINING_PAGE.learningExperience
 */
import styles from './LearningExperience.module.css'

function renderText(text = '') {
  return text.split('\n').map((line, i) =>
    i === 0 ? line : <span key={i}><br />{line}</span>
  )
}

function LearningExperience({ data = {} }) {
  const { badge, heading, description, points = [] } = data

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Header row: badge + heading + description */}
        <div className={styles.header}>
          {badge && (
            <p className={styles.badge}>
              <span className={styles.badgeDot} aria-hidden="true" />
              <span>{badge}</span>
            </p>
          )}
          <h2 className={styles.heading}>
            {heading.prefix && renderText(heading.prefix)}
            {heading.accent && <em className={styles.accent}>{renderText(heading.accent)}</em>}
            {heading.suffix && renderText(heading.suffix)}
          </h2>
          {description && (
            <p className={styles.description}>{description}</p>
          )}
        </div>

        {/* Numbered points */}
        <ol className={styles.points} aria-label="Learning experience points">
          {points.map((point) => (
            <li key={point.num} className={styles.point}>
              <div className={styles.pointCounter}>
                <span className={styles.pointNum}>{point.num}</span>
                <span className={styles.pointTotal}>/ {point.total}</span>
              </div>
              <span className={styles.pointLabel}>{point.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default LearningExperience
