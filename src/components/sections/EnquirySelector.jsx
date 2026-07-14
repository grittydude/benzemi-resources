/**
 * EnquirySelector
 *
 * Heading + three full-width clickable cards for the Contact page.
 *
 * Props:
 *  heading      – { prefix, accent }
 *  enquiryTypes – array from CONTACT_PAGE.enquiryTypes
 *  active       – currently selected id
 *  onSelect     – function(id)
 */
import arrowIcon from '../../assets/icons/arrow_icon.svg'
import TagChip from '../ui/TagChip'
import styles from './EnquirySelector.module.css'

function EnquirySelector({ heading = {}, enquiryTypes = [], active, onSelect }) {
  return (
    <section className={styles.section}>

      {/* Tag row — left-aligned */}
      <div className={styles.tagRow}>
        <TagChip label="Contact Us" bg="#ffffff" />
      </div>

      {/* Heading — starts at second card column */}
      {heading.prefix && (
        <div className={styles.headingRow}>
          <div className={styles.headingSpacer} aria-hidden="true" />
          <h2 className={styles.heading}>
            {heading.prefix}
            {heading.accent && (
              <em className={styles.headingAccent}>{heading.accent}</em>
            )}
          </h2>
        </div>
      )}

      {/* Full-width cards */}
      <div className={styles.cards}>
        {enquiryTypes.map((item) => {
          const isActive = active === item.id
          return (
            <button
              key={item.id}
              className={[
                styles.card,
                styles[`card--${item.variant}`],
                isActive ? styles.cardActive : '',
              ].join(' ')}
              onClick={() => onSelect(item.id)}
              aria-pressed={isActive}
            >
              <div className={styles.cardContent}>
                <h3 className={styles.label}>{item.label}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
              <div className={styles.cardBottom}>
                <span className={styles.cta}>{item.cta.toUpperCase()}</span>
                <span className={styles.arrow} aria-label="">
                  <img src={arrowIcon} alt="" className={styles.arrowIcon} />
                </span>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default EnquirySelector
