/**
 * TeamSection
 *
 * About page team member cards + profile dialog.
 *
 * Props:
 *  data – ABOUT_PAGE.team  { badge, heading, members }
 */
import { useState, useEffect } from 'react'
import TagChip from '../ui/TagChip'
import arrowIcon from '../../assets/icons/arrow_icon.svg'
import teamPhotoImg1 from '../../assets/images/valentine.webp'
import teamPhotoImg2 from '../../assets/images/josephine.webp'
import teamPhotoImg3 from '../../assets/images/samuel.webp'
import teamPhotoImg4 from '../../assets/images/victor.webp'
import teamPhotoImg5 from '../../assets/images/team_photo.webp'
import styles from './TeamSection.module.css'

const MEMBER_IMAGES = [teamPhotoImg1, teamPhotoImg2, teamPhotoImg3, teamPhotoImg4, teamPhotoImg5]

function renderText(text = '') {
  return text.split('\n').map((line, i) =>
    i === 0 ? line : <span key={i}><br />{line}</span>
  )
}

function TeamSection({ data = {} }) {
  const { badge, heading, members = [] } = data
  const [selected, setSelected] = useState(null)

  // Lock body scroll when dialog is open; restore on close / unmount
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selected])

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <section className={styles.section}>
        <div className={styles.inner}>

          {/* Header: badge left | heading right */}
          <div className={styles.header}>
            {badge && <TagChip label={badge} bg="#ffffff" />}
            <h2 className={styles.heading}>
              {heading.prefix && renderText(heading.prefix)}
              {heading.accent && <em className={styles.accent}>{renderText(heading.accent)}</em>}
              {heading.suffix && renderText(heading.suffix)}
            </h2>
          </div>

          {/* Cards grid */}
          <ul className={styles.grid}>
            {members.map((member, i) => (
              <li key={member.id} className={styles.card}>

                {/* Image + name + role */}
                <div className={styles.body}>
                  <div className={styles.imageWrap}>
                    <img
                      src={MEMBER_IMAGES[i]}
                      alt={member.name}
                      className={styles.image}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className={styles.name}>{member.name}</p>
                    <p className={styles.title}>{member.title.toUpperCase()}</p>
                  </div>
                </div>

                {/* Footer: VIEW PROFILE + arrow */}
                <div className={styles.footer}>
                  <button
                    className={styles.profileLink}
                    onClick={() => setSelected({ member, imgSrc: MEMBER_IMAGES[i] })}
                    type="button"
                  >
                    VIEW PROFILE
                  </button>
                  <button
                    className={styles.arrowBtn}
                    onClick={() => setSelected({ member, imgSrc: MEMBER_IMAGES[i] })}
                    type="button"
                    aria-label={`View profile of ${member.name}`}
                  >
                    <img src={arrowIcon} alt="" aria-hidden="true" />
                  </button>
                </div>

              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* ── Profile dialog ── */}
      {selected && (
        <div
          className={styles.backdrop}
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Profile of ${selected.member.name}`}
        >
          <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>

            <p className={styles.dialogLabel}>Profile</p>

            <div className={styles.dialogCard}>

              {/* Back button */}
              <button
                className={styles.backBtn}
                onClick={() => setSelected(null)}
                type="button"
              >
                <span className={styles.backArrow}>←</span>
                BACK
              </button>

              {/* Name + title */}
              <h2 className={styles.profileName}>
                {selected.member.fullName || selected.member.name}
              </h2>
              <p className={styles.profileTitle}>
                {selected.member.title.toUpperCase()}
              </p>

              {/* Bio paragraphs */}
              <div className={styles.profileBio}>
                {(selected.member.bio || []).map((para, i) =>
                  para.includes('\n') ? (
                    <ul key={i} className={styles.bioList}>
                      {para.split('\n').map((line, j) => (
                        <li key={j}>{line.replace(/^•\s*/, '')}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={i}>{para}</p>
                  )
                )}
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TeamSection
