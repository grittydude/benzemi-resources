/**
 * IndustryFeaturedCards
 *
 * Two horizontal split cards (image left, content right) for the Industry
 * Solutions page. Uses real images from assets.
 */
import { navigate } from '../../router'
import resourceHeroOne from '../../assets/images/resource_hero_one.png'
import resourceHeroTwo from '../../assets/images/resource_hero_two.png'
import arrowIcon from '../../assets/icons/arrow_icon.svg'
import { RESOURCES_PAGE } from '../../constants'
import styles from './IndustryFeaturedCards.module.css'

const CARD_IMAGES = [resourceHeroOne, resourceHeroTwo]
const CARD_VARIANTS = ['dark', 'green']

function IndustryFeaturedCards() {
  const { featured } = RESOURCES_PAGE

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {featured.map((item, i) => {
          const variant = CARD_VARIANTS[i] ?? 'dark'
          return (
            <article
              key={item.id}
              className={[styles.card, styles[`card--${variant}`]].join(' ')}
              onClick={() => navigate(`/resources/${item.slug}`)}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate(`/resources/${item.slug}`)}
              aria-label={item.title}
            >
              {/* Image panel */}
              <div
                className={styles.imagePanel}
                style={{ backgroundImage: `url(${CARD_IMAGES[i]})` }}
                aria-hidden="true"
              />

              {/* Content panel */}
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.type}>
                    <span className={styles.typeDot} aria-hidden="true" />
                    {item.type}
                  </span>
                  <span className={styles.date}>{item.date}</span>
                </div>

                <h2 className={styles.title}>{item.title}</h2>

                <div className={styles.cta}>
                  <span className={styles.readLabel}>Read {item.type}</span>
                  <span className={styles.arrowBtn} aria-hidden="true">
                    <img src={arrowIcon} alt="" />
                  </span>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default IndustryFeaturedCards
