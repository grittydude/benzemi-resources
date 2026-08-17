/**
 * OurStory
 *
 * About page section: badge, heading, paragraphs (2-col layout).
 *
 * Props:
 *  data – ABOUT_PAGE.story
 */
import { navigate } from "../../router";
import arrowIcon from "../../assets/icons/arrow_icon.svg";
import styles from "./OurStory.module.css";
import brochureImg from "../../assets/images/about_image.webp";

// Replace FILE_ID with the real Google Drive file ID when ready
const BROCHURE_URL =
  "https://drive.google.com/file/d/138vnIwmcz-s8TRpv7risOd5xJC4wDmd3/view?usp=drive_link";

function handleDownload() {
  const a = document.createElement("a");
  a.href = BROCHURE_URL;
  a.download = "Bezimeni-Resources-Brochure.pdf";
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function OurStory({ data = {} }) {
  const { badge, heading, paragraphs = [], cta } = data;

  function handleCta(e) {
    if (cta?.href?.startsWith("/")) {
      e.preventDefault();
      navigate(cta.href);
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {badge && (
          <p className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <span>{badge}</span>
          </p>
        )}
        <div className={styles.row}>
          <div className={styles.brochure}>
            <img
              src={brochureImg}
              alt="Bezimeni Resources Brochure"
              className={styles.brochureImg}
            />
            <div className={styles.brochureOverlay}>
              <button
                className={styles.brochureBtn}
                onClick={handleDownload}
                type="button"
              >
                DOWNLOAD BROCHURE
              </button>
              <button
                className={styles.brochureArrow}
                onClick={handleDownload}
                type="button"
                aria-label="Download Bezimeni Resources Brochure PDF"
              >
                <img src={arrowIcon} alt="" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className={styles.body}>
            <h2 className={styles.heading}>
              {heading.prefix && heading.prefix}
              {heading.accent && (
                <em className={styles.accent}>{heading.accent}</em>
              )}
              {heading.suffix && heading.suffix}
            </h2>
            <div className={styles.paragraphs}>
              {paragraphs.map((p, i) => (
                <p key={i} className={styles.paragraph}>
                  {p}
                </p>
              ))}
            </div>

            {/* {cta && (
              <div className={styles.ctaRow}>
                <a
                  href={cta.href}
                  className={styles.ctaBtn}
                  onClick={handleCta}
                >
                  {cta.label.toUpperCase()}
                </a>
                <a
                  href={cta.href}
                  className={styles.arrowBtn}
                  aria-label={cta.label}
                  onClick={handleCta}
                >
                  <img src={arrowIcon} alt="" />
                </a>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
