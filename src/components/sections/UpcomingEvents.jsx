import { RESOURCES_PAGE } from '../../constants'
import Button from '../ui/Button'
import arrowIcon from '../../assets/icons/arrow_icon.svg'
import styles from './UpcomingEvents.module.css'

function UpcomingEvents() {
  const { badge, heading, item } = RESOURCES_PAGE.event

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

        {/* Event card */}
        <div className={styles.card}>
          {/* Event photo */}
          <div
            className={styles.cardImage}
            style={{ backgroundImage: `url(${item.image})` }}
            aria-hidden="true"
          />

          {/* Event details */}
          <div className={styles.cardDetails}>
            <span className={styles.counter}>{item.counter}</span>
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
              <Button as="a" href={item.rsvp} variant="dark">RSVP</Button>
              <a href={item.rsvp} className={styles.arrowBtn} aria-label="RSVP to event">
                <img src={arrowIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents
