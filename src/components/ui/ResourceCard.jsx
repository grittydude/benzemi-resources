/**
 * ResourceCard
 *
 * Shared card used by IndustryResources (landing), ResourcesGrid (resources
 * listing), and RelatedPublications (article detail).
 *
 * Props:
 *  type     – 'News' | 'Publication' (drives type badge + readLabel)
 *  date     – display string, e.g. '2nd June, 2026'
 *  title    – card heading text
 *  variant  – 'green' | 'dark' | 'light'  (controls background)
 *  onClick  – if supplied, the whole card becomes an interactive element
 *             (role="link", tabIndex=0, cursor pointer, hover lift)
 */
import arrowIcon from '../../assets/icons/arrow_icon.svg'
import styles from './ResourceCard.module.css'

function ResourceCard({ type, date, title, variant = 'light', onClick }) {
  const interactive = typeof onClick === 'function'

  return (
    <article
      className={[
        styles.card,
        styles[`card--${variant}`],
        interactive ? styles.cardClickable : '',
      ].join(' ')}
      onClick={interactive ? onClick : undefined}
      role={interactive ? 'link' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={
        interactive ? (e) => e.key === 'Enter' && onClick(e) : undefined
      }
    >
      {/* ── Top: type badge + date ── */}
      <div className={styles.cardTop}>
        <span className={styles.type}>
          <span className={styles.typeDot} aria-hidden="true" />
          {type}
        </span>
        <span className={styles.date}>{date}</span>
      </div>

      {/* ── Middle: title ── */}
      <h3 className={styles.cardTitle}>{title}</h3>

      {/* ── Bottom: read label + arrow ── */}
      <div className={styles.cardBottom}>
        <span className={styles.readLabel}>Read {type}</span>
        <span className={styles.readArrow} aria-hidden="true">
          <img src={arrowIcon} alt="" />
        </span>
      </div>
    </article>
  )
}

export default ResourceCard
