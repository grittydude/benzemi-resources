/**
 * IndustrySectors
 *
 * Numbered sector list on the Industry Solutions page.
 * Dark background, 4-column numbered items.
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

        {/* Header */}
        <div className={styles.header}>
          {badge && (
            <p className={styles.badge}>
              <span className={styles.badgeDot} aria-hidden="true" />
              <span>{badge}</span>
            </p>
          )}
          <div className={styles.headerCols}>
            <h2 className={styles.heading}>
              {heading.prefix && renderText(heading.prefix)}
              {heading.accent && <em className={styles.accent}>{renderText(heading.accent)}</em>}
              {heading.suffix && renderText(heading.suffix)}
            </h2>
            {description && <p className={styles.description}>{description}</p>}
          </div>
        </div>

        {/* Numbered items */}
        <ol className={styles.items} aria-label="Industry sectors">
          {items.map((item) => (
            <li key={item.num} className={styles.item}>
              <div className={styles.itemCounter}>
                <span className={styles.itemNum}>{item.num}</span>
                <span className={styles.itemTotal}>/ {item.total}</span>
              </div>
              <span className={styles.itemLabel}>{item.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default IndustrySectors
