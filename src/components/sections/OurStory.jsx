/**
 * OurStory
 *
 * About page section: badge, heading, paragraphs (2-col layout).
 *
 * Props:
 *  data – ABOUT_PAGE.story
 */
import styles from './OurStory.module.css'

function OurStory({ data = {} }) {
  const { badge, heading, paragraphs = [] } = data

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {badge && (
          <p className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <span>{badge}</span>
          </p>
        )}

        <div className={styles.body}>
          <h2 className={styles.heading}>
            {heading.prefix && heading.prefix}
            {heading.accent && <em className={styles.accent}>{heading.accent}</em>}
            {heading.suffix && heading.suffix}
          </h2>
          <div className={styles.paragraphs}>
            {paragraphs.map((p, i) => (
              <p key={i} className={styles.paragraph}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory
