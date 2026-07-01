import { useState, useRef, useEffect, useCallback } from 'react'
import { INDUSTRY_GAP_SLIDES } from '../../constants'
import industryGapBg from '../../assets/images/industry-gap.webp'
import styles from './IndustryGap.module.css'

const DRAG_THRESHOLD = 60 // px needed to trigger a slide change

function IndustryGap() {
  const [current, setCurrent] = useState(0)
  const [dragStart, setDragStart] = useState(null)
  const [dragDelta, setDragDelta] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const total = INDUSTRY_GAP_SLIDES.length

  const goTo = useCallback(
    (index) => setCurrent(Math.max(0, Math.min(index, total - 1))),
    [total]
  )

  // ── Mouse ──────────────────────────────────────────────────
  const onMouseDown = (e) => {
    setDragStart(e.clientX)
    setIsDragging(true)
  }

  const onMouseMove = (e) => {
    if (!isDragging || dragStart === null) return
    // Clamp delta so you can't drag more than one slide width
    const raw = e.clientX - dragStart
    const max = e.currentTarget.offsetWidth * 0.8
    setDragDelta(Math.max(-max, Math.min(max, raw)))
  }

  const onMouseUp = () => {
    if (Math.abs(dragDelta) >= DRAG_THRESHOLD) {
      dragDelta < 0 ? goTo(current + 1) : goTo(current - 1)
    }
    setIsDragging(false)
    setDragStart(null)
    setDragDelta(0)
  }

  // ── Touch ──────────────────────────────────────────────────
  const onTouchStart = (e) => {
    setDragStart(e.touches[0].clientX)
    setIsDragging(true)
  }

  const onTouchMove = (e) => {
    if (dragStart === null) return
    const raw = e.touches[0].clientX - dragStart
    setDragDelta(raw)
  }

  const onTouchEnd = () => {
    if (Math.abs(dragDelta) >= DRAG_THRESHOLD) {
      dragDelta < 0 ? goTo(current + 1) : goTo(current - 1)
    }
    setIsDragging(false)
    setDragStart(null)
    setDragDelta(0)
  }

  // ── Keyboard ───────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') goTo(current + 1)
      if (e.key === 'ArrowLeft')  goTo(current - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current, goTo])

  const trackX = `calc(${-current * 100}% + ${isDragging ? dragDelta : 0}px)`

  return (
    <section
      className={styles.section}
      aria-label="The Industry Gap"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={isDragging ? onMouseUp : undefined}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slide track */}
      <div
        className={`${styles.track} ${isDragging ? styles.dragging : ''}`}
        style={{ transform: `translateX(${trackX})` }}
        aria-live="polite"
      >
        {INDUSTRY_GAP_SLIDES.map((slide, i) => (
          <article
            key={i}
            className={styles.slide}
            aria-hidden={i !== current}
            aria-label={`Slide ${i + 1} of ${total}`}
          >
            <div
              className={styles.imagePlaceholder}
              style={{ backgroundImage: `url(${industryGapBg})` }}
            />
            <div className={styles.overlay} aria-hidden="true" />

            <div className={styles.content}>
              {/* Top row: badge */}
              <div className={styles.topRow}>
                <p className={styles.badge}>
                  <span className={styles.badgeDot} aria-hidden="true" />
                  <span>{slide.badge}</span>
                </p>
              </div>

              {/* Tab indicators — one segment per slide, active changes colour */}
              <div className={styles.tabs} role="tablist" aria-label="Slides">
                {INDUSTRY_GAP_SLIDES.map((_, tabIdx) => (
                  <button
                    key={tabIdx}
                    role="tab"
                    aria-selected={tabIdx === current}
                    aria-label={`Go to slide ${tabIdx + 1}`}
                    className={`${styles.tab} ${tabIdx === current ? styles.tabActive : ''}`}
                    onClick={() => goTo(tabIdx)}
                  />
                ))}
              </div>

              {/* Slide counter */}
              <p
                className={styles.counter}
                aria-label={`Slide ${i + 1} of ${total}`}
              >
                {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </p>

              {/* Headline */}
              <div className={styles.headlineWrap}>
                <h2 className={styles.headline}>
                  {slide.text.before}
                  <span className={styles.accent}>{slide.text.accent}</span>
                  {slide.text.after}
                </h2>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Dot navigation
      <div className={styles.dots} role="tablist" aria-label="Slide navigation">
        {INDUSTRY_GAP_SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div> */}
    </section>
  )
}

export default IndustryGap
