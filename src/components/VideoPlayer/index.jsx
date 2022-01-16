import { useState, useRef } from 'react'
import styles from './styles.module.css'
const videoSRC = 'https://v16-webapp.tiktok.com/a837eadd3d9f4baebfcad6ba16f80eeb/61e48f04/video/tos/useast2a/tos-useast2a-ve-0068c001/f17241e832a6457d84e55c5db0ccde5a/?a=1988&br=1250&bt=625&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FRTkag3-I&l=20220116153155010189066023275C3E95&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anVnbzw6ZmhoODMzNzczM0ApOWY7aDM2M2UzN2lnNzc0NWdfYTBecjRfb3NgLS1kMTZzc14wMjItYjIvLi1iLTUzYGA6Yw%3D%3D&vl=&vr='

export default function VideoPlayer () {
  const [playing, setPlaying] = useState(false)
  const video = useRef()

  const handlePlay = () => {
    if (playing) {
      video.current.pause()
    } else {
      video.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <div>
      <video ref={video} className={styles.video} src={videoSRC} controls={false} />
      <button onClick={handlePlay} className={styles.player} />
    </div>
  )
}
