/**
 * TagChip
 *
 * Green dot + uppercase label in a rounded pill.
 * Used in PageHero (bg: #F7F7F5), EnquirySelector (bg: #ffffff),
 * and ContactFormSection (bg: rgba(247,247,245,0.16), color override).
 *
 * Props:
 *  label    – string
 *  bg       – CSS color string (optional, defaults to var(--color-badge-bg))
 *  color    – CSS color string for the label text (optional)
 *  dotColor – CSS color string for the dot (optional)
 */
import styles from './TagChip.module.css'

function TagChip({ label = '', bg, color, dotColor }) {
  return (
    <p className={styles.chip} style={bg ? { backgroundColor: bg } : undefined}>
      <span
        className={styles.dot}
        aria-hidden="true"
        style={dotColor ? { backgroundColor: dotColor } : undefined}
      />
      <span className={styles.label} style={color ? { color } : undefined}>{label.toUpperCase()}</span>
    </p>
  )
}

export default TagChip
