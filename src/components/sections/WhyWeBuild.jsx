/**
 * WhyWeBuild
 *
 * About page "Who We Build" section.
 * Layout: TagChip + two-column top (heading+desc | image) + WhatWeDo-style cards.
 *
 * Props:
 *  data – ABOUT_PAGE.whyWeBuild
 */
import TagChip from '../ui/TagChip'
import whoWeExistImg from '../../assets/images/who_we_build.webp'
import iconLearn from '../../assets/icons/learn.svg'
import iconBuild from '../../assets/icons/build.svg'
import iconApply from '../../assets/icons/apply.svg'
import styles from './WhyWeBuild.module.css'

const PILLAR_ICONS = {
  w1: iconLearn,
  w2: iconBuild,
  w3: iconApply,
}

function renderText(text = '') {
  return text.split('\n').map((line, i) =>
    i === 0 ? line : <span key={i}><br />{line}</span>
  )
}

function WhyWeBuild({ data = {} }) {
  const { badge, heading, description, pillars = [] } = data

  return (
    <section className={styles.section}>

      {/* Tag chip — full-width row */}
      <div className={styles.tagRow}>
        <TagChip label={badge} bg="#ffffff" dotColor="var(--color-brand-badge-dot)" />
      </div>

      {/* Two-column: heading + description | image */}
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            {heading.prefix && renderText(heading.prefix)}
            {heading.accent1 && <em className={styles.accent}>{renderText(heading.accent1)}</em>}
            {heading.mid && renderText(heading.mid)}
            {heading.accent2 && <em className={styles.accent}>{renderText(heading.accent2)}</em>}
          </h2>
          <p className={styles.description}>{renderText(description)}</p>
        </div>

        <div className={styles.imageWrap}>
          <img
            src={whoWeExistImg}
            alt="Who we build for"
            className={styles.image}
            loading="lazy"
          />
        </div>
      </div>

      {/* Cards — reuse WhatWeDo card structure */}
      <ul className={styles.cards} aria-label="Our pillars">
        {pillars.map((pillar) => (
          <li
            key={pillar.id}
            className={`${styles.card} ${styles[`card--${pillar.variant}`]}`}
          >
            <span className={styles.cardIcon}>
              <img src={PILLAR_ICONS[pillar.id]} alt="" aria-hidden="true" />
            </span>
            <h3 className={styles.cardTitle}>{pillar.label}</h3>
            <p className={styles.cardDesc}>{pillar.description}</p>
          </li>
        ))}
      </ul>

    </section>
  )
}

export default WhyWeBuild
