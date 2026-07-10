/**
 * MissionVisionValues
 *
 * Tabbed section for Mission / Vision / Values on the About page.
 * Vertical tab list on the left; content panel on the right.
 *
 * Props:
 *  data – ABOUT_PAGE.mission
 *    { tabs: string[], content: { [tab]: { type: 'text'|'cards', text?, cards? } } }
 */
import { useState } from 'react'
import iconLearn from '../../assets/icons/learn.svg'
import iconBuild from '../../assets/icons/build.svg'
import iconApply from '../../assets/icons/apply.svg'
import styles from './MissionVisionValues.module.css'

const VALUE_ICONS = [iconLearn, iconBuild, iconApply]

function MissionVisionValues({ data = {} }) {
  const { tabs = [], content = {} } = data
  const [active, setActive] = useState(tabs[0] || '')

  const panel = content[active] || {}

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* ── Vertical tab list ── */}
        <div className={styles.tabs} role="tablist">
          {tabs.map((tab) => {
            const isActive = active === tab
            return (
              <button
                key={tab}
                role="tab"
                aria-selected={isActive}
                className={[styles.tab, isActive ? styles.tabActive : ''].join(' ')}
                onClick={() => setActive(tab)}
              >
                {isActive && <span className={styles.tabDot} aria-hidden="true" />}
                <span>{tab.toUpperCase()}</span>
              </button>
            )
          })}
        </div>

        {/* ── Content panel ── */}
        <div className={styles.panel} role="tabpanel" aria-label={active}>
          <p className={styles.panelLabel}>{active.toUpperCase()}</p>

          {panel.type === 'cards' ? (
            <ul className={styles.cards}>
              {(panel.cards || []).map((card, i) => (
                <li key={card.id} className={`${styles.card} ${styles[`card--${card.variant}`]}`}>
                  <span className={styles.cardIcon}>
                    <img src={VALUE_ICONS[i]} alt="" aria-hidden="true" />
                  </span>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.panelText}>{panel.text || ''}</p>
          )}
        </div>

      </div>
    </section>
  )
}

export default MissionVisionValues
