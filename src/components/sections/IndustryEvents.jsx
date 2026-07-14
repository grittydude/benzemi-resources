/**
 * IndustryEvents
 *
 * Upcoming events section for the Resources page.
 * Lime green bg, large photo left, tab-navigated event details right.
 */
import { useState, useRef } from 'react'
import { RESOURCES_PAGE } from '../../constants'
import arrowIcon from '../../assets/icons/arrow_icon.svg'
import eventsBg from '../../assets/images/events_bg.png'
import styles from './IndustryEvents.module.css'

function IndustryEvents() {
  const { badge, heading, items } = RESOURCES_PAGE.event
  const [activeIdx, setActiveIdx] = useState(0)
  const item = items[activeIdx]
  const total = items.length
  const touchStartX = useRef(null)

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e) {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 48) {
      if (dx < 0 && activeIdx < total - 1) setActiveIdx(i => i + 1) // swipe left → next
      if (dx > 0 && activeIdx > 0)         setActiveIdx(i => i - 1) // swipe right → prev
    }
    touchStartX.current = null
  }

  return (
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

        {/* Event row: photo | details */}
        <div className={styles.eventRow}>

          {/* Photo */}
          <div className={styles.photo}>
            <img src={eventsBg} alt="Event" className={styles.photoImg} />
          </div>

          {/* Details */}
          <div
            className={styles.details}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >

            {/* Tab indicators — one segment per event, clickable + swipeable */}
            <div className={styles.tabs} role="tablist" aria-label="Events">
              {items.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === activeIdx}
                  aria-label={`Event ${i + 1} of ${total}`}
                  className={[styles.tab, i === activeIdx ? styles.tabActive : ''].join(' ')}
                  onClick={() => setActiveIdx(i)}
                >
                  <span className={styles.tabLine} aria-hidden="true" />
                </button>
              ))}
            </div>

            {/* Counter + content row */}
            <div className={styles.eventContent}>
              <span className={styles.counter} aria-hidden="true">
                {String(activeIdx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>

              <div className={styles.contentRight}>
                <h3 className={styles.eventTitle}>{item.title}</h3>

                <dl className={styles.meta}>
                  <div className={styles.metaItem}>
                    <dt className={styles.metaLabel}>Date</dt>
                    <dd className={styles.metaValue}>{item.date}</dd>
                  </div>
                  <div className={styles.metaItem}>
                    <dt className={styles.metaLabel}>Time</dt>
                    <dd className={styles.metaValue}>{item.time}</dd>
                  </div>
                  <div className={styles.metaItem}>
                    <dt className={styles.metaLabel}>Venue</dt>
                    <dd className={styles.metaValue}>{item.venue}</dd>
                  </div>
                </dl>

                <div className={styles.rsvpRow}>
                  <a href={item.rsvp} className={styles.rsvpBtn}>RSVP</a>
                  <a href={item.rsvp} className={styles.arrowBtn} aria-label="RSVP to event">
                    <img src={arrowIcon} alt="" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustryEvents
