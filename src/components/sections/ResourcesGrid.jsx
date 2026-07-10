import { useState, useMemo } from 'react'
import { RESOURCES_PAGE } from '../../constants'
import { navigate } from '../../router'
import ResourceCard from '../ui/ResourceCard'
import styles from './ResourcesGrid.module.css'

const TABS = ['All', 'News', 'Publications']

function ResourcesGrid() {
  const { grid } = RESOURCES_PAGE
  const [activeTab, setActiveTab] = useState('All')

  const filtered = useMemo(() => {
    if (activeTab === 'All') return grid
    if (activeTab === 'News') return grid.filter((r) => r.type === 'News')
    return grid.filter((r) => r.type === 'Publication')
  }, [activeTab, grid])

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* ── Header: heading + filter tabs ── */}
        <div className={styles.headerRow}>
          <h2 className={styles.heading}>
            Industry <em className={styles.headingAccent}>Resources</em>
          </h2>
          <div className={styles.tabs} role="tablist" aria-label="Filter resources">
            {TABS.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {activeTab === tab && (
                  <span className={styles.tabDot} aria-hidden="true" />
                )}
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* ── Cards grid ── */}
        <div className={styles.grid}>
          {filtered.map((item) => (
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

        {/* ── Load more ── */}
        <div className={styles.loadMore}>
          <button
            className={styles.loadMoreBtn}
            type="button"
            onClick={() => {}}
          >
            Load More Publications →
          </button>
        </div>

      </div>
    </section>
  )
}

export default ResourcesGrid
