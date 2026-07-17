import { navigate } from '../../router'
import arrowIcon from '../../assets/icons/arrow_icon.svg'
import styles from './TrainingDetailBody.module.css'

/**
 * Training detail page layout — CSS grid two-column.
 * DOM order = mobile reading order:
 *   1. mobileEnroll (hidden on desktop, fixed chip on mobile)
 *   2. back button
 *   3. content header (badge + title)
 *   4. metaGroup (duration / format / level / cert + desktop enroll CTA)
 *   5. body (intro + all sections)
 */
function TrainingDetailBody({ programme }) {
  const {
    badge,
    title,
    intro,
    sidebar,
    whoFor,
    whatYouLearn,
    curriculum,
    howYouLearn,
    ctaBox,
  } = programme

  return (
    <article className={styles.article}>
      <div className={styles.outer}>

        {/* Mobile-only: ENROLL row at top right — hidden on desktop */}
        <div className={styles.mobileEnrollRow}>
          <button
            className={styles.mobileEnrollBtn}
            onClick={() => navigate(sidebar.enrollHref)}
            type="button"
          >
            ENROLL
          </button>
          <button
            className={styles.mobileArrowBtn}
            onClick={() => navigate(sidebar.enrollHref)}
            type="button"
            aria-label="Enroll today"
          >
            <img src={arrowIcon} alt="" aria-hidden="true" />
          </button>
        </div>

        <div className={styles.layout}>

          {/* 1 — Back button (grid: back area | mobile: order 1) */}
          <button
            className={styles.back}
            onClick={() => navigate('/training')}
            type="button"
          >
            <span className={styles.backChip} aria-hidden="true">←</span>
            <span className={styles.backText}>Back to Training</span>
          </button>

          {/* 2 — Content header: badge + title (grid: header area | mobile: order 2) */}
          <header className={styles.header}>
            <span className={styles.badge}>
              <span className={styles.badgeDot} aria-hidden="true" />
              {badge}
            </span>
            <h1 className={styles.title}>{title}</h1>
          </header>

          {/* 3 — Meta group (grid: meta area | mobile: order 3 — 2×2 grid) */}
          <aside className={styles.metaGroup}>
            <div className={styles.metaGrid}>
              <div className={styles.sideBlock}>
                <p className={styles.sideLabel}>Duration</p>
                <p className={styles.sideValue}>{sidebar.duration}</p>
              </div>
              <div className={styles.sideBlock}>
                <p className={styles.sideLabel}>Format</p>
                <p className={styles.sideValue}>{sidebar.format}</p>
              </div>
              <div className={styles.sideBlock}>
                <p className={styles.sideLabel}>Level</p>
                <p className={styles.sideValue}>{sidebar.level}</p>
              </div>
              <div className={styles.sideBlock}>
                <p className={styles.sideLabel}>Certificate</p>
                <p className={styles.sideValue}>{sidebar.certificate}</p>
              </div>
            </div>

            {/* Enrol CTA — desktop only (hidden on mobile via CSS) */}
            <div className={styles.enrollRow}>
              <button
                className={styles.enrollBtn}
                onClick={() => navigate(sidebar.enrollHref)}
                type="button"
              >
                ENROLL TODAY
              </button>
              <button
                className={styles.arrowBtn}
                onClick={() => navigate(sidebar.enrollHref)}
                type="button"
                aria-label="Enroll today"
              >
                <img src={arrowIcon} alt="" aria-hidden="true" />
              </button>
            </div>
          </aside>

          {/* 4 — Body content (grid: body area | mobile: order 4) */}
          <div className={styles.body}>

            <p className={styles.intro}>{intro}</p>

            {/* Who is this for */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>{whoFor.heading}</h2>
              <p className={styles.para}>{whoFor.intro}</p>
              <ul className={styles.bulletList}>
                {whoFor.items.map((item, i) => (
                  <li key={i} className={styles.bulletItem}>{item}</li>
                ))}
              </ul>
            </section>

            {/* What you will learn */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>{whatYouLearn.heading}</h2>
              <p className={styles.para}>{whatYouLearn.intro}</p>
              <ul className={styles.bulletList}>
                {whatYouLearn.items.map((item, i) => (
                  <li key={i} className={styles.bulletItem}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Course Curriculum */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>{curriculum.heading}</h2>
              <p className={styles.para}>{curriculum.intro}</p>
              <div className={styles.curriculumGrid}>
                {curriculum.modules.map((mod) => (
                  <div key={mod.num} className={styles.module}>
                    <p className={styles.moduleTitle}>
                      {mod.num}. {mod.title}
                    </p>
                    <ul className={styles.moduleList}>
                      {mod.items.map((item, i) => (
                        <li key={i} className={styles.moduleItem}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* How you will learn */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>{howYouLearn.heading}</h2>
              <p className={styles.para}>{howYouLearn.intro}</p>
              <ul className={styles.bulletList}>
                {howYouLearn.items.map((item, i) => (
                  <li key={i} className={styles.bulletItem}>{item}</li>
                ))}
              </ul>
            </section>

            {/* CTA box */}
            <aside className={styles.ctaBox}>
              <h3 className={styles.ctaHeading}>{ctaBox.heading}</h3>
              <p className={styles.para}>{ctaBox.body}</p>
              <a
                href={sidebar.enrollHref}
                className={styles.ctaNote}
                onClick={(e) => {
                  e.preventDefault()
                  navigate(sidebar.enrollHref)
                }}
              >
                {ctaBox.note}
              </a>
            </aside>

          </div>
        </div>
      </div>
    </article>
  )
}

export default TrainingDetailBody
