import { useState, useRef, useEffect } from 'react'
import { INDUSTRY_GAP_SLIDES } from '../../constants'
import industryGapBg from '../../assets/images/industry-gap.webp'
import styles from './IndustryGap.module.css'

/**
 * Scroll-pinned section: the outer div is tall (total * 100vh),
 * and the inner section is position:sticky so it stays in view
 * while the user scrolls through each slide. When the outer div
 * is fully scrolled past, the section unpins and normal page
 * scrolling continues.
 */
function IndustryGap() {
  const [current, setCurrent] = useState(0)
  const outerRef = useRef(null)
  const total = INDUSTRY_GAP_SLIDES.length

  useEffect(() => {
    const handleScroll = () => {
      if (!outerRef.current) return
      const rect = outerRef.current.getBoundingClientRect()
      // How many px we've scrolled into the outer container
      const scrolled = -rect.top
      const idx = Math.floor(scrolled / window.innerHeight)
      setCurrent(Math.max(0, Math.min(idx, total - 1)))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // initialise on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [total])

  const slide = INDUSTRY_GAP_SLIDES[current]

  return (
    <div
      ref={outerRef}
      className={styles.outer}
      style={{ height: `${total * 100}vh` }}
    >
      <section
        className={styles.section}
        aria-label="The Industry Gap"
      >
        {/* Background image */}
        <div
          className={styles.imagePlaceholder}
          style={{ backgroundImage: `url(${industryGapBg})` }}
        />

        {/* Dark overlay */}
        <div className={styles.overlay} aria-hidden="true" />

        {/* Content */}
        <div className={styles.content}>

          {/* Badge */}
          <div className={styles.topRow}>
            <p className={styles.badge}>
              <span className={styles.badgeDot} aria-hidden="true" />
              <span>{slide.badge}</span>
            </p>
          </div>

          {/* Tab progress indicators */}
          <div className={styles.tabs} role="tablist" aria-label="Slide progress">
            {INDUSTRY_GAP_SLIDES.map((_, tabIdx) => (
              <div
                key={tabIdx}
                role="tab"
                aria-selected={tabIdx === current}
                aria-label={`Slide ${tabIdx + 1} of ${total}`}
                className={`${styles.tab} ${tabIdx === current ? styles.tabActive : ''}`}
              />
            ))}
          </div>

          {/* Counter */}
          <p
            className={styles.counter}
            aria-label={`Slide ${current + 1} of ${total}`}
          >
            {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </p>

          {/* Headline — key triggers CSS fade-in animation on slide change */}
          <div className={styles.headlineWrap} key={current}>
            <h2 className={styles.headline}>
              {slide.text.before}
              <span className={styles.accent}>{slide.text.accent}</span>
              {slide.text.after}
            </h2>
          </div>

        </div>
      </section>
    </div>
  )
}

export default IndustryGap
