/**
 * ProgrammeCards
 *
 * 2-column grid of programme cards on the Training page.
 *
 * Props:
 *  programmes – array from TRAINING_PAGE.programmes
 */
import { navigate } from '../../router'
import programmeIcon from '../../assets/icons/program_icon.svg'
import arrowIcon from '../../assets/icons/arrow_icon.svg'
import styles from './ProgrammeCards.module.css'

function ProgrammeCards({ programmes = [] }) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <ul className={styles.grid}>
          {programmes.map((prog) => (
            <li
            key={prog.id}
            className={`${styles.card} ${styles[`card--${prog.variant}`]}`}
            onClick={() => navigate(`/training/${prog.slug}`)}
            style={{ cursor: 'pointer' }}
          >

              {/* Top row: icon (left) | badge + price column (right) */}
              <div className={styles.cardTop}>
                <span className={styles.cardIcon}>
                  <img src={programmeIcon} alt="" aria-hidden="true" />
                </span>
                <div className={styles.cardTopRight}>
                  <span className={styles.certBadge}>
                    <span className={styles.certDot} aria-hidden="true" />
                    CERTIFIED
                  </span>
                  <p className={styles.price}>{prog.price}</p>
                </div>
              </div>

              {/* Title + description */}
              <h3 className={styles.cardTitle}>{prog.title}</h3>
              <p className={styles.cardDesc}>{prog.description}</p>

              {/* Meta rows */}
              <dl className={styles.metaList}>
                <div className={styles.metaRow}>
                  <dt className={styles.metaLabel}>Duration:</dt>
                  <dd className={styles.metaValue}>{prog.duration}</dd>
                </div>
                <div className={styles.metaRow}>
                  <dt className={styles.metaLabel}>Training Type:</dt>
                  <dd className={styles.metaValue}>{prog.type}</dd>
                </div>
                <div className={styles.metaRow}>
                  <dt className={styles.metaLabel}>Outcome:</dt>
                  <dd className={styles.metaValue}>{prog.outcome}</dd>
                </div>
              </dl>

              {/* Footer */}
              <div className={styles.footer}>
                <button
                  className={styles.viewLink}
                  onClick={() => navigate(`/training/${prog.slug}`)}
                >
                  VIEW CURRICULUM
                </button>
                <button
                  className={styles.arrowBtn}
                  onClick={() => navigate(`/training/${prog.slug}`)}
                  aria-label={`View curriculum for ${prog.title}`}
                >
                  <img src={arrowIcon} alt="" aria-hidden="true" />
                </button>
              </div>

            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ProgrammeCards
