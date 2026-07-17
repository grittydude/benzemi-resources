import { ARTICLE_PAGE } from '../../constants'
import { navigate } from '../../router'
import arrowIcon from '../../assets/icons/arrow_icon.svg'
import ResourceCard from '../ui/ResourceCard'
import styles from './RelatedPublications.module.css'

function RelatedPublications() {
  const { related } = ARTICLE_PAGE

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* ── Header: heading + view all CTA ── */}
        <div className={styles.headerRow}>
          <h2 className={styles.heading}>Related <span className={styles.accent}>Publications</span></h2>
          <div className={styles.headerCta}>
            <button
              className={styles.viewAll}
              onClick={() => navigate('/resources')}
              type="button"
            >
              View All Publications
            </button>
            <button
              className={styles.arrowBtn}
              onClick={() => navigate('/resources')}
              type="button"
              aria-label="View all publications"
            >
              <img src={arrowIcon} alt="" />
            </button>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className={styles.cards}>
          {related.map((item) => (
            <ResourceCard
              key={item.id}
              type={item.type}
              date={item.date}
              title={item.title}
              variant={item.variant}
              onClick={() => navigate(`/resources/${item.slug}`)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default RelatedPublications
