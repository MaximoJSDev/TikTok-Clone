import Music from '../Icons/Music'
import styles from './styles.module.css'

export default function SongTicker ({ songTitle }) {
  return (
    <div className={styles.song}>
      <Music />
      <div className={styles.marquee}>
        <span>{songTitle}</span>
      </div>
    </div>
  )
}
