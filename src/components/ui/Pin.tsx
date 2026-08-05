import styles from './Pin.module.css'

type PinProps = {
  small?: boolean
}

export function Pin({ small = false }: PinProps) {
  return (
    <span
      className={small ? `${styles.pin} ${styles.small}` : styles.pin}
      aria-hidden="true"
    />
  )
}
