import { ARTICLE_PAGE } from "../../constants";
import { navigate } from "../../router";
import ArticleHero from "./ArticleHero";
import resourceImg from "../../assets/images/resource_img.jpg";
import styles from "./ArticleBody.module.css";

/**
 * Full article page layout.
 * DOM order matches mobile reading order (back → header → share/author → body).
 * CSS grid repositions items into two columns on desktop.
 */
function ArticleBody() {
  const {
    share,
    author,
    intro,
    introSection,
    pullQuote,
    numberedSections,
    conclusion,
  } = ARTICLE_PAGE;

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
            <ArticleHero />
          </div>

          {/* 3 — Share + Author (sidebar-col bottom on desktop, third on mobile) */}
          <aside className={styles.sideGroup}>
            <div className={styles.sideBlock}>
              <p className={styles.sideLabel}>Share</p>
              <div className={styles.shareLinks}>
                <a
                  href={share.linkedin}
                  className={styles.shareLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href={share.x}
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
              {introSection.paragraphs.map((p, i) => (
                <p key={i} className={styles.para}>
                  {p}
                </p>
              ))}
            </section>

            <figure className={styles.figure}>
              <img
                src={resourceImg}
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
                  <p className={styles.para}>{s.body}</p>
                </section>
              ))}
            </div>

            <aside className={styles.conclusionBox}>
              <h3 className={styles.conclusionHeading}>{conclusion.heading}</h3>
              <p className={styles.para}>{conclusion.body}</p>
            </aside>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ArticleBody;
