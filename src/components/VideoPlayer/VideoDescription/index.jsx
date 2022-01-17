import AlbumDisk from './AlbumDisk'
import styles from './styles.module.css'
import SongTicker from '../../SongTicker'

export default function VideoDescription ({ author, description, albumCover, songTitle }) {
  return (
    <footer className={styles.description}>
      <div className={styles.textWrapper}>
        <h2 className={styles.author}>
          <a className={styles.author} href={`users/${author}`}>
            @{author}
          </a>
        </h2>
        <h1 className={styles.text}>{description}</h1>
        <SongTicker songTitle={songTitle} />
      </div>
      <div>
        <AlbumDisk albumCover={albumCover} />
      </div>
    </footer>
  )
}
