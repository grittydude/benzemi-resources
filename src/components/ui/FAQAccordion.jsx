/**
 * FAQAccordion
 *
 * Self-contained section: #CEF79E bg, two-colour heading, items in right 70%.
 * All items open by default; each can be individually toggled.
 *
 * Props:
 *  items   – [{ id, q, a }]
 *  heading – { accent?, suffix? }
 */
import { useState } from 'react'
import TagChip from './TagChip'
import styles from './FAQAccordion.module.css'

function FAQAccordion({
  items = [],
  heading = { accent: 'Questions ', suffix: 'You Might Have' },
}) {
  const [closed, setClosed] = useState(new Set())

  function toggle(id) {
    setClosed(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <section className={styles.section}>

      {/* TagChip — full-width row, consistent with other sections */}
      <div className={styles.tagRow}>
        <TagChip label="FAQ" />
      </div>

      <div className={styles.inner}>

        {/* Content — full width, aligned to container edges */}
        <div className={styles.content}>
          <h2 className={styles.heading}>
            {heading.accent && (
              <em className={styles.headingAccent}>{heading.accent}</em>
            )}
            {heading.suffix}
          </h2>

          <ul className={styles.list} role="list">
            {items.map((item) => {
              const isOpen = !closed.has(item.id)
              return (
                <li key={item.id} className={styles.item}>
                  <button
                    className={styles.trigger}
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.question}>{item.q}</span>
                    <span className={styles.icon} aria-hidden="true">
                      {isOpen ? '—' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className={styles.panel}>
                      <p className={styles.answer}>{item.a}</p>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FAQAccordion
