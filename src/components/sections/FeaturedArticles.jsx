import { RESOURCES_PAGE } from '../../constants'
import { navigate } from '../../router'
import arrowIcon from '../../assets/icons/arrow_icon.svg'
import styles from './FeaturedArticles.module.css'

function FeaturedArticles() {
  const { featured } = RESOURCES_PAGE

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {featured.map((item) => (
            <article
              key={item.id}
              className={styles.card}
              style={{ backgroundImage: `url(${item.image})` }}
              onClick={() => navigate(`/resources/${item.slug}`)}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate(`/resources/${item.slug}`)}
              aria-label={item.title}
            >
              <div className={styles.overlay} aria-hidden="true" />
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
                  <span className={styles.arrowBtn} aria-hidden="true"><img src={arrowIcon} alt="" /></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedArticles
