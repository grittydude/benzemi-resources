import styles from './Button.module.css'

function Button({
  children,
  variant = 'primary',
  as: Component = 'button',
  className = '',
  ...props
}) {
  return (
    <Component
      className={`${styles.btn} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Button