import { navigate } from "../../router";
import ArticleHero from "./ArticleHero";
import resourceImg from "../../assets/images/resource_img.jpg";
import resourceHeroOne from "../../assets/images/resource_hero_one.png";
import resourceHeroTwo from "../../assets/images/resource_hero_two.png";
import styles from "./ArticleBody.module.css";

const ARTICLE_IMAGES = {
  'valuable-engineer': resourceHeroOne,
  'developing-confidence-in-technical-environments': resourceHeroTwo,
}

/** Render a body field that may be a string or an array of strings. */
function renderBody(body, styleClass) {
  if (Array.isArray(body)) {
    return body.map((p, i) => <p key={i} className={styleClass}>{p}</p>)
  }
  return <p className={styleClass}>{body}</p>
}

/**
 * Full article page layout.
 * DOM order matches mobile reading order (back → header → share/author → body).
 * CSS grid repositions items into two columns on desktop.
 *
 * Props: article – one entry from ARTICLES map in constants
 */
function ArticleBody({ article = {} }) {
  const {
    slug,
    type,
    date,
    title,
    intro,
    share = {},
    author,
    introSection = {},
    pullQuote = {},
    numberedSections = [],
    conclusion = {},
  } = article;

  const heroImg = ARTICLE_IMAGES[slug] || resourceImg;

  return (
    <article className={styles.article}>
      <div className={styles.outer}>
        <div className={styles.layout}>
          <button
            className={styles.back}
            onClick={() => navigate("/resources")}
            type="button"
          >
            <span className={styles.backChip} aria-hidden="true">
              ←
            </span>
            <span className={styles.backText}>Back to Resources</span>
          </button>

          {/* 2 — Article header (content-col top on desktop, second on mobile) */}
          <div className={styles.articleHeader}>
            <ArticleHero type={type} date={date} title={title} intro={intro} />
          </div>

          {/* 3 — Share + Author (sidebar-col bottom on desktop, third on mobile) */}
          <aside className={styles.sideGroup}>
            <div className={styles.sideBlock}>
              <p className={styles.sideLabel}>Share</p>
              <div className={styles.shareLinks}>
                <a
                  href={share.linkedin || '#'}
                  className={styles.shareLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href={share.x || '#'}
                  className={styles.shareLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X
                </a>
              </div>
            </div>
            <div className={styles.sideBlock}>
              <p className={styles.sideLabel}>Author</p>
              <p className={styles.authorName}>{author}</p>
            </div>
          </aside>

          {/* mobile-only intro — sits between share and body; hidden on desktop */}
          <p className={styles.articleIntro}>{intro}</p>

          {/* 4 — Article body (content-col bottom on desktop, fourth on mobile) */}
          <div className={styles.body}>
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>{introSection.heading}</h2>
              {(introSection.paragraphs || []).map((p, i) => (
                <p key={i} className={styles.para}>{p}</p>
              ))}
            </section>

            <figure className={styles.figure}>
              <img
                src={heroImg}
                alt="Engineering workspace"
                className={styles.image}
                loading="lazy"
              />
            </figure>

            <blockquote className={styles.pullQuote}>
              <p className={styles.pullQuoteText}>{pullQuote.text}</p>
              <cite className={styles.pullQuoteAttribution}>
                {pullQuote.attribution}
              </cite>
            </blockquote>

            <div className={styles.numberedSections}>
              {numberedSections.map((s) => (
                <section key={s.num} className={styles.numberedItem}>
                  <h3 className={styles.numberedHeading}>
                    {s.num}. {s.heading}
                  </h3>
                  {renderBody(s.body, styles.para)}
                </section>
              ))}
            </div>

            <aside className={styles.conclusionBox}>
              <h3 className={styles.conclusionHeading}>{conclusion.heading}</h3>
              {renderBody(conclusion.body, styles.para)}
            </aside>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ArticleBody;
