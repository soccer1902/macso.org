import type { Photo } from '~/data/photos'
import styles from './PhotoStrip.module.css'

type PhotoStripProps = {
  photos: readonly Photo[]
}

export function PhotoStrip({ photos }: PhotoStripProps) {
  return (
    <div className={styles.strip}>
      {photos.map((photo) => (
        <figure className={styles.photo} key={photo.src}>
          <span className={styles.tape} aria-hidden="true" />
          <img
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading="lazy"
            decoding="async"
          />
          <figcaption>{photo.caption}</figcaption>
        </figure>
      ))}
    </div>
  )
}
