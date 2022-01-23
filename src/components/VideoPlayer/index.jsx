import { useRef } from 'react'
import VideoPlayerActions from './VideoPlayerActions.jsx'
import VideoDescription from './VideoDescription/index.jsx'
import styles from './styles.module.css'
import clsx from 'clsx'
import useIntersectionVideoPlayer from '../../hooks/useIntersectionVideoPlayer.js'

export default function VideoPlayer ({ src, username, avatar, description, albumCover, songTitle }) {
  const video = useRef(null)
  const { playing, handlePlay } = useIntersectionVideoPlayer({ video })

  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing
  })
  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        controls={false}
        loop
        onClick={handlePlay}
        ref={video}
        src={src}
      />
      <button onClick={handlePlay} className={playerClassName} />
      <VideoPlayerActions username={username} avatar={avatar} />
      <VideoDescription
        username={username}
        description={description}
        albumCover={albumCover}
        songTitle={songTitle}
      />
    </div>
  )
}
