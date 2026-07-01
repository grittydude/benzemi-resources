import { useState, useRef, useCallback } from 'react'
import { WHY_BEZIMENI } from '../../constants'
import imgImpact   from '../../assets/images/impact .webp'
import imgPedigree from '../../assets/images/pedigree.webp'
import logoChevron from '../../assets/icons/chevron.svg'
import logoShell   from '../../assets/icons/shell.svg'
import logoSeplat  from '../../assets/icons/spelat.svg'
import logoTree    from '../../assets/icons/tree.svg'
import logoSeepco  from '../../assets/icons/seepco.svg'
import styles from './WhyBezimeni.module.css'

const SLIDE_IMAGES = {
  impact:   imgImpact,
  pedigree: imgPedigree,
}

const COMPANY_LOGOS = [
  { src: logoChevron, alt: 'Chevron'       },
  { src: logoShell,   alt: 'Shell'         },
  { src: logoSeplat,  alt: 'Seplat Energy' },
  { src: logoTree,    alt: 'Tree'          },
  { src: logoSeepco,  alt: 'SEEPCO'        },
]

const SNAP_THRESHOLD = 50

function WhyBezimeni() {
  const { badge, heading, slides } = WHY_BEZIMENI

  const [currentSlide, setCurrentSlide] = useState(0)
  const [dragDelta, setDragDelta]       = useState(0)
  const [isDragging, setIsDragging]     = useState(false)
  const dragStartX = useRef(null)

  const clampDelta = useCallback(
    (raw) => {
      const vw = typeof window !== 'undefined' ? window.innerWidth : 1440
      return Math.max(
        -(slides.length - 1 - currentSlide) * vw,
        Math.min(currentSlide * vw, raw)
      )
    },
    [currentSlide, slides.length]
  )

  const startDrag = (x) => {
    dragStartX.current = x
    setIsDragging(true)
  }
  const moveDrag = (x) => {
    if (dragStartX.current === null) return
    setDragDelta(clampDelta(x - dragStartX.current))
  }
  const endDrag = () => {
    if (dragStartX.current === null) return
    if (dragDelta < -SNAP_THRESHOLD && currentSlide < slides.length - 1) {
      setCurrentSlide((c) => c + 1)
    } else if (dragDelta > SNAP_THRESHOLD && currentSlide > 0) {
      setCurrentSlide((c) => c - 1)
    }
    setDragDelta(0)
    setIsDragging(false)
    dragStartX.current = null
  }

  return (
    <section className={styles.section} id="why-bezimeni" aria-labelledby="wb-heading">

      {/* ── Static header — badge + main heading ── */}
      <div className={styles.header}>
        <p className={styles.badge}>
          <span className={styles.badgeDot} aria-hidden="true" />
          <span>{badge}</span>
        </p>
        <h2 id="wb-heading" className={styles.heading}>
          <span className={styles.headingLine}>{heading.line1}</span>
          <span className={styles.headingLine}>
            {heading.line2.prefix}
            <em className={styles.accent}>{heading.line2.accent}</em>
            {heading.line2.suffix}
          </span>
        </h2>
      </div>

      {/* ── Draggable slider ── */}
      <div
        className={styles.viewport}
        onMouseDown={(e) => startDrag(e.clientX)}
        onMouseMove={(e) => dragStartX.current !== null && moveDrag(e.clientX)}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
        onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
        onTouchEnd={endDrag}
      >
        <ul
          className={`${styles.track} ${isDragging ? styles.dragging : ''}`}
          style={{
            transform: `translateX(calc(${currentSlide * -100}% + ${dragDelta}px))`,
          }}
        >
          {slides.map((slide) => (
            <li key={slide.id} className={styles.slide}>

              {/* Left: image */}
              <img
                src={SLIDE_IMAGES[slide.id]}
                alt={slide.title}
                className={styles.slideImage}
                draggable={false}
              />

              {/* Right: content */}
              <div className={styles.slideContent}>
                <hr className={styles.divider} aria-hidden="true" />

                {/* Two-column body: counter left | title+content right */}
                <div className={styles.slideBody}>
                  <span className={styles.counter}>
                    {slide.counter} / {slide.total}
                  </span>

                  <div className={styles.slideMain}>

                    {/* Top: title (+ description for pedigree) */}
                    <div className={styles.slideTop}>
                      <h3 className={styles.slideTitle}>{slide.title}</h3>
                      {slide.type === 'logos' && (
                        <p className={styles.pedigreeDesc}>{slide.description}</p>
                      )}
                    </div>

                    {/* Bottom: stats or logos */}
                    <div className={styles.slideBottom}>
                      {slide.type === 'stats' && (
                        <ul className={styles.stats} aria-label="Impact statistics">
                          {slide.stats.map((stat) => (
                            <li key={stat.label} className={styles.stat}>
                              <span className={styles.statValue}>{stat.value}</span>
                              <span className={styles.statLabel}>{stat.label}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {slide.type === 'logos' && (
                        <div className={styles.logos}>
                          {COMPANY_LOGOS.map((logo) => (
                            <img
                              key={logo.alt}
                              src={logo.src}
                              alt={logo.alt}
                              className={styles.logo}
                              draggable={false}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </section>
  )
}

export default WhyBezimeni
