import { ARTICLE_PAGE } from '../../constants'
import { navigate } from '../../router'
import styles from './ArticleHero.module.css'

function ArticleHero() {
  const { type, date, title, intro } = ARTICLE_PAGE

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Back link */}
        <button
          className={styles.back}
          onClick={() => navigate('/resources')}
          type="button"
        >
          ← Back to Resources
        </button>

        {/* Article header */}
        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.type}>
              <span className={styles.typeDot} aria-hidden="true" />
              {type}
            </span>
            <span className={styles.date}>{date}</span>
          </div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.intro}>{intro}</p>
        </header>
      </div>
    </section>
  )
}

export default ArticleHero
