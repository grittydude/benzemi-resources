import Button from '../ui/Button'
import arrowIcon from '../../assets/icons/arrow_icon.svg'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero} id="hero" aria-labelledby="hero-heading">

      {/* Green gradient — anchored to top of visible area (below navbar) */}
      <div className={styles.gradient} aria-hidden="true" />

      {/* Grain texture layered on top of gradient */}
      <div className={styles.visual} aria-hidden="true">
        <svg
          className={styles.grainSvg}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <filter id="hero-grain" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.68"
                numOctaves="4"
                stitchTiles="stitch"
                result="noise"
              />
              <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
            </filter>
          </defs>
          <rect width="100%" height="100%" filter="url(#hero-grain)" />
        </svg>
      </div>

      {/* Content */}
      <div className={styles.inner}>
        <div className={styles.content}>

          {/* Badge */}
          <p className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <span>Ready for tomorrow's industry, today!</span>
          </p>

          {/* Heading */}
          <h1 id="hero-heading" className={styles.heading}>
            Build{' '}
            <span className={styles.accent}>Industry Skills</span>{' '}
            That Move Engineering Careers Forward.
          </h1>

          {/* Description */}
          <p className={styles.description}>
            Bezimeni Resources equips science and engineering graduates with
            practical knowledge, technical exposure, and industry-focused
            training designed to bridge the gap between education and
            real-world execution.
          </p>

          {/* CTA */}
          <div className={styles.cta}>
            <Button as="a" href="#get-started" variant="dark">
              Get Started
            </Button>
            <a
              href="#get-started"
              className={styles.arrowBtn}
              aria-label="Get started"
            >
              <img src={arrowIcon} alt="" />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
