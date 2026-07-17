import { useState, useRef, useEffect } from 'react'
import { RESOURCES_PAGE } from '../../constants'
import Button from '../ui/Button'
import arrowIcon from '../../assets/icons/arrow_icon.svg'
import styles from './UpcomingEvents.module.css'

/**
 * Scroll-pinned section: outer div is tall (items.length × 100vh),
 * inner section is position:sticky so it stays in view while the
 * user scrolls through each event. Card details animate on change.
 */
function UpcomingEvents() {
  const { badge, heading, item, items } = RESOURCES_PAGE.event
  const [current, setCurrent] = useState(0)
  const outerRef = useRef(null)
  const total = items.length

  useEffect(() => {
    const handleScroll = () => {
      if (!outerRef.current) return
      const rect = outerRef.current.getBoundingClientRect()
      const scrolled = -rect.top
      const idx = Math.floor(scrolled / window.innerHeight)
      setCurrent(Math.max(0, Math.min(idx, total - 1)))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [total])

  const ev = items[current]

  return (
    <div ref={outerRef} className={styles.outer} style={{ height: `${total * 100}vh` }}>
      <section className={styles.section}>
        <div className={styles.inner}>
          {/* Badge */}
          <p className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <span>{badge}</span>
          </p>

          {/* Heading */}
          <h2 className={styles.heading}>
            {heading.pre}
            <em className={styles.accent}>{heading.accent1}</em>
            {heading.mid.split('\n').map((line, i) =>
              i === 0 ? line : <span key={i}><br />{line}</span>
            )}
            <em className={styles.accent}>{heading.accent2}</em>
          </h2>

          {/* Event card */}
          <div className={styles.card}>
            {/* Event photo — static background, doesn't change */}
            <div
              className={styles.cardImage}
              style={{ backgroundImage: `url(${item.image})` }}
              aria-hidden="true"
            />

            {/* Event details — key forces remount → triggers CSS animation */}
            <div className={styles.cardDetails} key={current}>
              <span className={styles.counter}>
                {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              <h3 className={styles.eventTitle}>{ev.title}</h3>
              <dl className={styles.meta}>
                <div className={styles.metaItem}>
                  <dt className={styles.metaLabel}>Date</dt>
                  <dd className={styles.metaValue}>{ev.date}</dd>
                </div>
                <div className={styles.metaItem}>
                  <dt className={styles.metaLabel}>Time</dt>
                  <dd className={styles.metaValue}>{ev.time}</dd>
                </div>
                <div className={styles.metaItem}>
                  <dt className={styles.metaLabel}>Venue</dt>
                  <dd className={styles.metaValue}>{ev.venue}</dd>
                </div>
              </dl>
              <div className={styles.rsvpRow}>
                <Button as="a" href={ev.rsvp} variant="dark">RSVP</Button>
                <a href={ev.rsvp} className={styles.arrowBtn} aria-label="RSVP to event">
                  <img src={arrowIcon} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UpcomingEvents
