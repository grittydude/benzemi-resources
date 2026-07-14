import { navigate } from '../../router'

/**
 * Drop-in <a> replacement that handles internal (/) links
 * with client-side navigation and lets external / hash links
 * behave normally.
 */
function Link({ href, children, className, onClick, ...props }) {
  function handleClick(e) {
    if (href && href.startsWith('/') && !props.target) {
      e.preventDefault()
      navigate(href)
    }
    onClick?.(e)
  }

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  )
}

export default Link
