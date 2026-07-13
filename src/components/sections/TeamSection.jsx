/**
 * TeamSection
 *
 * About page team member cards.
 *
 * Props:
 *  data – ABOUT_PAGE.team  { badge, heading, members }
 */
import TagChip from '../ui/TagChip'
import arrowIcon from '../../assets/icons/arrow_icon.svg'
import teamImg from '../../assets/images/team.jpg'
import teamPhotoImg from '../../assets/images/team_photo.webp'
import styles from './TeamSection.module.css'

const MEMBER_IMAGES = [teamImg, teamPhotoImg, teamImg]

function renderText(text = '') {
  return text.split('\n').map((line, i) =>
    i === 0 ? line : <span key={i}><br />{line}</span>
  )
}

function TeamSection({ data = {} }) {
  const { badge, heading, members = [] } = data

  return (
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
                <a href={member.href} className={styles.profileLink}>
                  VIEW PROFILE
                </a>
                <a href={member.href} className={styles.arrowBtn} aria-label={`View profile of ${member.name}`}>
                <img src={arrowIcon} alt="" />
                </a>
              </div>

            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default TeamSection
