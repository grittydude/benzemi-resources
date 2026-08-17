import styles from './ArticleHero.module.css'

/**
 * Renders only the article header content (type badge, date, title, intro).
 * Layout (sidebar + column) is owned by ArticleBody.
 *
 * Props: type, date, title, intro
 */
function ArticleHero({ type, date, title, intro }) {
  return (
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
  )
}

export default ArticleHero
