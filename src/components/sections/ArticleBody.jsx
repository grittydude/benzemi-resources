import { ARTICLE_PAGE } from '../../constants'
import { navigate } from '../../router'
import ArticleHero from './ArticleHero'
import resourceImg from '../../assets/images/resource_img.jpg'
import styles from './ArticleBody.module.css'

function ArticleBody() {
  const {
    share,
    author,
    image,
    introSection,
    pullQuote,
    numberedSections,
    conclusion,
  } = ARTICLE_PAGE

  return (
    <article className={styles.article}>
      <div className={styles.outer}>
        <div className={styles.layout}>

          {/* ══ SINGLE SIDEBAR ══════════════════════════════════ */}
          <aside className={styles.sidebar}>

            {/* Back button */}
            <button
              className={styles.back}
              onClick={() => navigate('/resources')}
              type="button"
            >
              <span className={styles.backChip} aria-hidden="true">←</span>
              Back to Resources
            </button>

            {/* Share + Author grouped */}
            <div className={styles.sideGroup}>
              <div className={styles.sideBlock}>
                <p className={styles.sideLabel}>Share</p>
                <div className={styles.shareLinks}>
                  <a href={share.linkedin} className={styles.shareLink} target="_blank" rel="noopener noreferrer">
                    LinkedIn<span className={styles.shareCount}>5</span>
                  </a>
                  <a href={share.x} className={styles.shareLink} target="_blank" rel="noopener noreferrer">X</a>
                </div>
              </div>

              <div className={styles.sideBlock}>
                <p className={styles.sideLabel}>Author</p>
                <p className={styles.authorName}>{author}</p>
              </div>
            </div>

          </aside>

          {/* ══ CONTENT COLUMN ══════════════════════════════════ */}
          <div className={styles.content}>

            {/* Article header (type, date, title, intro) */}
            <ArticleHero />

            {/* Introduction section */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>{introSection.heading}</h2>
              {introSection.paragraphs.map((p, i) => (
                <p key={i} className={styles.para}>{p}</p>
              ))}
            </section>

            {/* Article image */}
            <figure className={styles.figure}>
              <img
                src={resourceImg}
                alt="Engineering workspace"
                className={styles.image}
                loading="lazy"
              />
            </figure>

            {/* Pull quote */}
            <blockquote className={styles.pullQuote}>
              <p className={styles.pullQuoteText}>{pullQuote.text}</p>
              <cite className={styles.pullQuoteAttribution}>{pullQuote.attribution}</cite>
            </blockquote>

            {/* Numbered sections */}
            <div className={styles.numberedSections}>
              {numberedSections.map((s) => (
                <section key={s.num} className={styles.numberedItem}>
                  <h3 className={styles.numberedHeading}>
                    {s.num}.{' '}{s.heading}
                  </h3>
                  <p className={styles.para}>{s.body}</p>
                </section>
              ))}
            </div>

            {/* Conclusion box */}
            <aside className={styles.conclusionBox}>
              <h3 className={styles.conclusionHeading}>{conclusion.heading}</h3>
              <p className={styles.para}>{conclusion.body}</p>
            </aside>

          </div>
        </div>
      </div>
    </article>
  )
}

export default ArticleBody
