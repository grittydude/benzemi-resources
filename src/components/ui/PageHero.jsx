/**
 * PageHero
 *
 * Shared hero section used by every page (About, Training,
 * IndustrySolutions, Contact, Resources).
 *
 * Props:
 *  tags      – string[]  breadcrumb labels joined with ", "
 *  heading   – { prefix?, accent?, suffix? }  renders \n as <br>
 *  cta       – { label, href }  optional button + arrow
 *  imageSrc  – string  optional full-width image below the text area
 *  onCtaClick – function  optional click handler (overrides href)
 */
import { navigate } from '../../router'
import arrowIcon from '../../assets/icons/arrow_icon.svg'
import TagChip from './TagChip'
import styles from './PageHero.module.css'

function renderText(text = '') {
  return text.split('\n').map((line, i) =>
    i === 0 ? line : <span key={i}><br />{line}</span>
  )
}

function PageHero({ tags = [], heading = {}, cta, imageSrc, onCtaClick, thickBottom = false }) {
  const { prefix = '', accent = '', suffix = '' } = heading

  function handleCta(e) {
    if (onCtaClick) { e.preventDefault(); onCtaClick(); return }
    if (cta?.href?.startsWith('/')) { e.preventDefault(); navigate(cta.href) }
  }

  return (
    <section className={styles.section}>
      <div className={[styles.gradient, thickBottom ? styles.gradientThickBottom : ''].filter(Boolean).join(' ')} aria-hidden="true" />
      <div className={styles.inner}>

        {/* Breadcrumb tags */}
        {tags.length > 0 && (
          <div className={styles.tagsRow}>
            <TagChip label={tags.join(', ')} />
          </div>
        )}

        {/* Heading */}
        <h1 className={styles.heading}>
          {prefix && renderText(prefix)}
          {accent && <em className={styles.accent}>{renderText(accent)}</em>}
          {suffix && renderText(suffix)}
        </h1>

        {/* Optional CTA */}
        {cta && (
          <div className={styles.ctaRow}>
            <a
              href={cta.href}
              className={styles.ctaBtn}
              onClick={handleCta}
            >
              {cta.label.toUpperCase()}
            </a>
            <a
              href={cta.href}
              className={styles.arrowBtn}
              onClick={handleCta}
              aria-label={cta.label}
            >
              <img src={arrowIcon} alt="" />
            </a>
          </div>
        )}
      </div>

      {/* Optional full-width image */}
      {imageSrc && (
        <div className={styles.imageWrap}>
          <img
            src={imageSrc}
            alt=""
            className={styles.heroImage}
            loading="eager"
          />
        </div>
      )}
    </section>
  )
}

export default PageHero
