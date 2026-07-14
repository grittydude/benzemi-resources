import { useState } from 'react'
import { RESOURCES_PAGE } from '../../constants'
import arrowIcon from '../../assets/icons/arrow_icon.svg'
import trainingBg from '../../assets/icons/training_program_bg.svg'
import styles from './NewsletterCTA.module.css'

function NewsletterCTA() {
  const { badge, text, placeholder, cta } = RESOURCES_PAGE.newsletter
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section
      className={styles.section}
      style={{ backgroundImage: `url(${trainingBg})` }}
    >
      <div className={styles.inner}>
        {/* Badge */}
        <p className={styles.badge}>
          <span className={styles.badgeDot} aria-hidden="true" />
          <span>{badge}</span>
        </p>

        {/* Body text */}
        <p className={styles.text}>{text}</p>

        {/* Email form */}
        {submitted ? (
          <p className={styles.thanks}>
            Thanks! We&apos;ll be in touch.
          </p>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className={styles.input}
              aria-label="First name"
              required
            />
            <button
              type="submit"
              className={styles.arrowBtn}
              aria-label={cta}
            >
              <img src={arrowIcon} alt="" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default NewsletterCTA
