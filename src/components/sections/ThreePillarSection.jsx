/**
 * ThreePillarSection
 *
 * Reusable card grid section.
 * Used by IndustrySolutions: approach (3 cards) and solution areas (4 cards / 2x2).
 *
 * Props:
 *  badge       – string
 *  heading     – { prefix?, accent1?, mid?, accent2? } | { prefix?, accent?, suffix? }
 *  description – string
 *  pillars     – [{ id, variant, icon?, title, description }]
 *  columns     – number (default 3)
 *  fullWidth   – boolean, removes max-width on inner (default false)
 *  bgColor     – CSS color string
 *  id          – HTML section id
 */
import developIcon from "../../assets/icons/develop_icon.svg";
import buildCapacityIcon from "../../assets/icons/drive_icon.svg";
import deliverIcon from "../../assets/icons/deliver_icon.svg";
import learnIcon from "../../assets/icons/learn.svg";
import engrSupportIcon from "../../assets/icons/engr_support.png";
import applyIcon from "../../assets/icons/apply.svg";
import programmeIcon from "../../assets/icons/program_icon.svg";
import industryPartnershipIcon from "../../assets/icons/industry_partnership.svg";
import styles from "./ThreePillarSection.module.css";

const ICON_MAP = {
  develop: developIcon,
  buildCapacity: buildCapacityIcon,
  deliver: deliverIcon,
  learn: learnIcon,
  engrSupport: engrSupportIcon,
  apply: applyIcon,
  industryPartnership: industryPartnershipIcon,
  programmeIcon: programmeIcon,
};

function renderText(text = "") {
  return text.split("\n").map((line, i) =>
    i === 0 ? (
      line
    ) : (
      <span key={i}>
        <br />
        {line}
      </span>
    )
  );
}

function renderHeading(heading) {
  const { prefix = "", accent1, mid, accent2, accent, suffix = "" } = heading;
  if (accent1 !== undefined) {
    return (
      <>
        {prefix && renderText(prefix)}
        {accent1 && <em className={styles.accent}>{renderText(accent1)}</em>}
        {mid && renderText(mid)}
        {accent2 && <em className={styles.accent}>{renderText(accent2)}</em>}
        {suffix && renderText(suffix)}
      </>
    );
  }
  return (
    <>
      {prefix && renderText(prefix)}
      {accent && <em className={styles.accent}>{renderText(accent)}</em>}
      {suffix && renderText(suffix)}
    </>
  );
}

function ThreePillarSection({
  badge,
  heading = {},
  description,
  pillars = [],
  columns = 3,
  fullWidth = false,
  stackedHeader = false,
  bgColor,
  id,
}) {
  return (
    <section
      className={styles.section}
      id={id}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      <div
        className={[styles.inner, fullWidth ? styles.innerFull : ""]
          .filter(Boolean)
          .join(" ")}
      >
        {/* Header: stacked (badge → heading → desc) or 2-col (badge | heading+desc) */}
        {stackedHeader ? (
          <div className={styles.headerStacked}>
            {badge && (
              <p className={styles.badge}>
                <span className={styles.badgeDot} aria-hidden="true" />
                <span>{badge}</span>
              </p>
            )}
            <h2 className={styles.heading}>{renderHeading(heading)}</h2>
            {description && <p className={styles.description}>{description}</p>}
          </div>
        ) : (
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              {badge && (
                <p className={styles.badge}>
                  <span className={styles.badgeDot} aria-hidden="true" />
                  <span>{badge}</span>
                </p>
              )}
            </div>
            <div className={styles.headerRight}>
              <h2 className={styles.heading}>{renderHeading(heading)}</h2>
              {description && <p className={styles.description}>{description}</p>}
            </div>
          </div>
        )}

        {/* Card grid */}
        <ul className={styles.cards} style={{ "--cols": columns }}>
          {pillars.map((pillar) => (
            <li
              key={pillar.id}
              className={[styles.card, styles[`card--${pillar.variant}`]].join(
                " "
              )}
            >
              <div className={styles.cardIcon}>
                {pillar.icon && ICON_MAP[pillar.icon] && (
                  <img src={ICON_MAP[pillar.icon]} alt="" aria-hidden="true" />
                )}
              </div>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>{pillar.title}</h3>
                <p className={styles.cardDesc}>{pillar.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ThreePillarSection;
