import { navigate } from '../../router'
import arrowIcon from '../../assets/icons/arrow_icon.svg'
import styles from './TrainingDetailBody.module.css'

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
        <div className={styles.layout}>

          {/* ══ SIDEBAR ══════════════════════════════════════════ */}
          <aside className={styles.sidebar}>

            {/* Back button */}
            <button
              className={styles.back}
              onClick={() => navigate('/training')}
              type="button"
            >
              <span className={styles.backChip} aria-hidden="true">←</span>
              Back to Training
            </button>

            {/* Meta + Enrol grouped */}
            <div className={styles.sideGroup}>
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

              {/* Enrol CTA */}
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
            </div>

          </aside>

          {/* ══ CONTENT COLUMN ══════════════════════════════════ */}
          <div className={styles.content}>

            {/* Header */}
            <header className={styles.header}>
              <span className={styles.badge}>
                <span className={styles.badgeDot} aria-hidden="true" />
                {badge}
              </span>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.intro}>{intro}</p>
            </header>

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
                onClick={(e) => { e.preventDefault(); navigate(sidebar.enrollHref) }}
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
