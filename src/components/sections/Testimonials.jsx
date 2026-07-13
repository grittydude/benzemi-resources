import { TESTIMONIALS } from '../../constants'
import avatarImg from '../../assets/images/team_photo.webp'
import styles from './Testimonials.module.css'

function Testimonials() {
  const { badge, headline, items } = TESTIMONIALS

  return (
    <section className={styles.section} id="testimonials" aria-labelledby="test-heading">
      <div className={styles.inner}>

        {/* ── Left: badge + headline ── */}
        <div className={styles.left}>
          <p className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <span>{badge}</span>
          </p>
          <h2 id="test-heading" className={styles.headline}>
            {headline.map((part, i) =>
              part.accent
                ? <em key={i} className={styles.accent}>{part.text}</em>
                : <span key={i}>{part.text}</span>
            )}
          </h2>
        </div>

        {/* ── Right: testimonial list (no boxes) ── */}
        <div className={styles.right}>
          {items.map((item) => (
            <article
              key={item.id}
              className={styles.item}
            >
              <blockquote className={styles.quote}>
                <p>"{item.quote}"</p>
              </blockquote>
              <footer className={styles.itemFooter}>
                <img src={avatarImg} alt={item.name} className={styles.avatar} />
                <span className={styles.name}>{item.name}</span>
                <span className={styles.role}>{item.role}</span>
              </footer>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials
