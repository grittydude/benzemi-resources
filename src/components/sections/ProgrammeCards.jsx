/**
 * ProgrammeCards
 *
 * Vertical stack of alternating dark/light programme cards
 * used on the Training page.
 *
 * Props:
 *  programmes – array from TRAINING_PAGE.programmes
 *  onEnrol    – function(slug) — called when user clicks enrol
 */
import { navigate } from '../../router'
import arrowIcon from '../../assets/icons/arrow_icon.svg'
import styles from './ProgrammeCards.module.css'

function ProgrammeCards({ programmes = [], onEnrol }) {
  function handleEnrol(slug) {
    if (onEnrol) { onEnrol(slug); return }
    navigate('/contact')
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {programmes.map((prog, idx) => (
          <article
            key={prog.id}
            className={[
              styles.card,
              styles[`card--${prog.variant}`],
              idx % 2 === 0 ? styles.cardReverse : '',
            ].join(' ')}
          >
            {/* Left: number + title + description */}
            <div className={styles.cardBody}>
              <span className={styles.cardNum}>
                {String(idx + 1).padStart(2, '0')} / {String(programmes.length).padStart(2, '0')}
              </span>
              <h3 className={styles.cardTitle}>{prog.title}</h3>
              <p className={styles.cardDesc}>{prog.description}</p>
            </div>

            {/* Right: price + meta + badge + CTA */}
            <div className={styles.cardMeta}>
              <p className={styles.price}>{prog.price}</p>
              <dl className={styles.metaList}>
                <div className={styles.metaRow}>
                  <dt className={styles.metaLabel}>Duration</dt>
                  <dd className={styles.metaValue}>{prog.duration}</dd>
                </div>
                <div className={styles.metaRow}>
                  <dt className={styles.metaLabel}>Type</dt>
                  <dd className={styles.metaValue}>{prog.type}</dd>
                </div>
                <div className={styles.metaRow}>
                  <dt className={styles.metaLabel}>Learning Outcome</dt>
                  <dd className={styles.metaValue}>{prog.outcome}</dd>
                </div>
              </dl>
              <div className={styles.certBadge}>
                <span className={styles.certDot} aria-hidden="true">✓</span>
                <span>CPD Certified Programme</span>
              </div>
              <div className={styles.ctaRow}>
                <button
                  className={styles.enrolBtn}
                  onClick={() => handleEnrol(prog.slug)}
                >
                  ENROL NOW
                </button>
                <button
                  className={styles.arrowBtn}
                  onClick={() => handleEnrol(prog.slug)}
                  aria-label={`Enrol in ${prog.title}`}
                >
                  <img src={arrowIcon} alt="" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProgrammeCards
