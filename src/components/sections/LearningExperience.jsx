/**
 * LearningExperience
 *
 * 2-column section: left = badge + heading + description,
 * right = vertical numbered list.
 *
 * Props:
 *  data – TRAINING_PAGE.learningExperience
 */
import TagChip from '../ui/TagChip'
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

        {/* Left column: badge + heading + description */}
        <div className={styles.left}>
          {badge && (
            <TagChip
              label={badge}
              bg="#fff"
              color="var(--color-brand-green)"
              dotColor="var(--color-brand-green-muted)"
            />
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

        {/* Right column: vertical numbered list */}
        <ol className={styles.points} aria-label="Learning experience points">
          {points.map((point) => (
            <li key={point.num} className={styles.point}>
              <p className={styles.pointCounter}>
                <span className={styles.pointNum}>{point.num}</span>
                <span className={styles.pointSlash}> / </span>
                <span className={styles.pointTotal}>{point.total}</span>
              </p>
              <p className={styles.pointLabel}>{point.label}</p>
            </li>
          ))}
        </ol>

      </div>
    </section>
  )
}

export default LearningExperience
