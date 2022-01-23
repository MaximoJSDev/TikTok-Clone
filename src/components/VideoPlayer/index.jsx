import { useState, useRef } from 'react'
import VideoPlayerActions from './VideoPlayerActions.jsx'
import VideoDescription from './VideoDescription/index.jsx'
import styles from './styles.module.css'
import clsx from 'clsx'

export default function VideoPlayer ({ src, username, description, albumCover, songTitle }) {
  const [playing, setPlaying] = useState(false)
  const video = useRef(null)

  const handlePlay = () => {
    const { current: videoEl } = video

    playing
      ? videoEl.pause()
      : videoEl.play()

    setPlaying(!playing)
  }
  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing
  })
  return (
    <div className={styles.wrapper}>
      <video
        ref={video}
        className={styles.video}
        src={src}
        loop
        controls={false}
        onClick={handlePlay}
      />
      <button onClick={handlePlay} className={playerClassName} />
      <VideoPlayerActions />
      <VideoDescription
        username={username}
        description={description}
        albumCover={albumCover}
        songTitle={songTitle}
      />
    </div>
  )
}
