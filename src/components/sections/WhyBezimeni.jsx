import { useState, useRef, useEffect } from 'react'
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

/**
 * Scroll-pinned section: outer div is tall (slides.length × 100vh),
 * inner section is position:sticky so it stays in view while the user
 * scrolls through each slide. Slide content animates in on change.
 */
function WhyBezimeni() {
  const { badge, heading, slides } = WHY_BEZIMENI
  const [currentSlide, setCurrentSlide] = useState(0)
  const outerRef = useRef(null)
  const total = slides.length

  useEffect(() => {
    const handleScroll = () => {
      if (!outerRef.current) return
      const rect = outerRef.current.getBoundingClientRect()
      const scrolled = -rect.top
      const idx = Math.floor(scrolled / window.innerHeight)
      setCurrentSlide(Math.max(0, Math.min(idx, total - 1)))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [total])

  const slide = slides[currentSlide]

  return (
    <div ref={outerRef} className={styles.outer} style={{ height: `${total * 100}vh` }}>
      <section className={styles.section} id="why-bezimeni" aria-labelledby="wb-heading">

        {/* ── Static header — stays visible throughout ── */}
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

        {/* ── Slide content — both columns re-mount & animate on change ── */}
        <div className={styles.slide}>

          {/* Left: image — key forces remount → triggers CSS animation */}
          <img
            key={`img-${currentSlide}`}
            src={SLIDE_IMAGES[slide.id]}
            alt={slide.title}
            className={styles.slideImage}
            draggable={false}
          />

          {/* Right: content — key forces remount → triggers CSS animation */}
          <div className={styles.slideContent} key={`content-${currentSlide}`}>
            <hr className={styles.divider} aria-hidden="true" />

            <div className={styles.slideBody}>
              <span className={styles.counter}>
                {slide.counter} / {slide.total}
              </span>

              <div className={styles.slideMain}>
                <div className={styles.slideTop}>
                  <h3 className={styles.slideTitle}>{slide.title}</h3>
                  {slide.type === 'logos' && (
                    <p className={styles.pedigreeDesc}>{slide.description}</p>
                  )}
                </div>

                <div className={styles.slideBottom}>
                  {slide.type === 'stats' && (
                    <ul className={styles.stats} aria-label="Impact statistics">
                      {slide.stats.map((stat, i) => (
                        <li
                          key={stat.label}
                          className={styles.stat}
                          style={{ animationDelay: `${120 + i * 80}ms` }}
                        >
                          <span className={styles.statValue}>{stat.value}</span>
                          <span className={styles.statLabel}>{stat.label}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {slide.type === 'logos' && (
                    <div className={styles.logos}>
                      {COMPANY_LOGOS.map((logo, i) => (
                        <img
                          key={logo.alt}
                          src={logo.src}
                          alt={logo.alt}
                          className={styles.logo}
                          draggable={false}
                          style={{ animationDelay: `${100 + i * 60}ms` }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
    </div>
  )
}

export default WhyBezimeni
