/**
 * TeamSection
 *
 * About page team member cards.
 *
 * Props:
 *  data – ABOUT_PAGE.team  { badge, heading, members }
 */
import styles from './TeamSection.module.css'

function renderText(text = '') {
  return text.split('\n').map((line, i) =>
    i === 0 ? line : <span key={i}><br />{line}</span>
  )
}

function TeamSection({ data = {} }) {
  const { badge, heading, members = [] } = data

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Header */}
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
        </div>

        {/* Team members grid */}
        <div className={styles.grid}>
          {members.map((member) => (
            <a
              key={member.id}
              href={member.href}
              className={styles.card}
              aria-label={member.name}
            >
              <div className={styles.imageWrap}>
                <img
                  src={member.image}
                  alt={member.name}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.info}>
                <p className={styles.name}>{member.name}</p>
                <p className={styles.title}>{member.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
