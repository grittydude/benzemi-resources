/**
 * MissionVisionValues
 *
 * Swipeable section for Mission / Vision / Values on the About page.
 * Swipe left/right to advance slides. Tabs remain clickable on desktop.
 * Content animates in the direction of the swipe.
 */
import { useState, useRef } from "react";
import iconExcellence from "../../assets/icons/excellence.svg";
import iconGrowth from "../../assets/icons/growth.svg";
import iconPeopleFirst from "../../assets/icons/people-first.svg";
import styles from "./MissionVisionValues.module.css";

const VALUE_ICONS = [iconPeopleFirst, iconExcellence, iconGrowth];
const SWIPE_THRESHOLD = 50; // px

function MissionVisionValues({ data = {} }) {
  const { tabs = [], content = {} } = data;

  // slideInfo bundles tab + direction + key so one setState triggers both
  const [slideInfo, setSlideInfo] = useState({
    tab: tabs[0] || "",
    dir: "left",
    key: 0,
  });

  const touchStartX = useRef(null);
  const active = slideInfo.tab;
  const currentIdx = tabs.indexOf(active);
  const panel = content[active] || {};

  const goTo = (tab, dir) => {
    setSlideInfo((prev) => ({ tab, dir, key: prev.key + 1 }));
  };

  const handleTabClick = (tab) => {
    const newIdx = tabs.indexOf(tab);
    goTo(tab, newIdx >= currentIdx ? "left" : "right");
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    touchStartX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;

    if (delta > 0 && currentIdx < tabs.length - 1) {
      // swipe left → next slide
      goTo(tabs[currentIdx + 1], "left");
    } else if (delta < 0 && currentIdx > 0) {
      // swipe right → prev slide
      goTo(tabs[currentIdx - 1], "right");
    }
  };

  return (
    <section
      className={styles.section}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.inner}>
        {/* ── Vertical tab list (desktop: clickable; mobile: visual indicators) ── */}
        <div className={styles.tabs} role="tablist">
          {tabs.map((tab) => {
            const isActive = active === tab;
            return (
              <button
                key={tab}
                role="tab"
                aria-selected={isActive}
                className={[styles.tab, isActive ? styles.tabActive : ""].join(" ")}
                onClick={() => handleTabClick(tab)}
              >
                {isActive && (
                  <span className={styles.tabDot} aria-hidden="true" />
                )}
                <span>{tab.toUpperCase()}</span>
              </button>
            );
          })}
        </div>

        {/* ── Content panel — key remount triggers CSS slide animation ── */}
        <div
          key={slideInfo.key}
          className={`${styles.panel} ${
            slideInfo.dir === "left" ? styles.panelFromRight : styles.panelFromLeft
          }`}
          role="tabpanel"
          aria-label={active}
        >
          <p className={styles.panelLabel}>{active.toUpperCase()}</p>

          {panel.type === "cards" ? (
            <ul className={styles.cards}>
              {(panel.cards || []).map((card, i) => (
                <li
                  key={card.id}
                  className={`${styles.card} ${styles[`card--${card.variant}`]}`}
                >
                  <span className={styles.cardIcon}>
                    <img src={VALUE_ICONS[i]} alt="" aria-hidden="true" />
                  </span>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.panelText}>{panel.text || ""}</p>
          )}
        </div>

        {/* ── Dot indicators (mobile only) ── */}
        <div className={styles.dots} aria-hidden="true">
          {tabs.map((tab, i) => (
            <span
              key={tab}
              className={`${styles.dot} ${i === currentIdx ? styles.dotActive : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionVisionValues;
