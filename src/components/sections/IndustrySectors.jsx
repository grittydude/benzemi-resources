/**
 * IndustrySectors
 *
 * Dark 2-col section: left = badge + heading + desc, right = large numbered list.
 * Industry Solutions page.
 *
 * Props:
 *  data – INDUSTRY_SOLUTIONS_PAGE.sectors
 */
import styles from './IndustrySectors.module.css'

function renderText(text = '') {
  return text.split('\n').map((line, i) =>
    i === 0 ? line : <span key={i}><br />{line}</span>
  )
}

function IndustrySectors({ data = {} }) {
  const { badge, heading, description, items = [] } = data

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left: badge + heading + description */}
        <div className={styles.left}>
          {badge && (
            <p className={styles.badge}>
              <span className={styles.badgeDot} aria-hidden="true" />
              <span>{badge}</span>
            </p>
          )}
          <h2 className={styles.heading}>
            {heading?.prefix && renderText(heading.prefix)}
            {heading?.accent && <em className={styles.accent}>{renderText(heading.accent)}</em>}
            {heading?.suffix && renderText(heading.suffix)}
          </h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>

        {/* Right: large numbered list */}
        <ol className={styles.list} aria-label="Industry sectors">
          {items.map((item) => (
            <li key={item.num} className={styles.item}>
              <p className={styles.counter}>
                <span className={styles.counterNum}>{item.num}</span>
                <span className={styles.counterSlash}> / </span>
                <span className={styles.counterTotal}>{item.total}</span>
              </p>
              <p className={styles.label}>{item.label}</p>
            </li>
          ))}
        </ol>

      </div>
    </section>
  )
}

export default IndustrySectors
