import { useState, useEffect } from 'react'
import { getVideos } from '../../services'
import VideoPlayer from '../VideoPlayer'
import styles from './styles.module.css'

export default function FeedVideos () {
  const [videos, setVideos] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getVideos().then(([error, videos]) => {
      console.log(videos)
      if (error) return setError(error)
      setVideos(videos)
    })
  }, [])

  if (error) return <span>Error</span>

  return (
    videos.map(video => {
      const { users } = video
      console.log(users)
      return (
        <div key={video.id} className={styles.item}>
          <VideoPlayer {...video} username={users.username} />
        </div>
      )
    })
  )
}
