import VideoPlayer from '../VideoPlayer'
import styles from './styles.module.css'

const VIDEOS = [
  {
    id: 1,
    author: 'denissemct',
    description: 'PIZZA SIN LEVADURA Y SIN HORNO 🍕#saborestiktok #recetascheck #antojos #recetas #recetasinhorno #recetafacil #receta #sinhorno #pizza',
    likes: 123,
    shares: 45,
    comments: 32,
    songTitle: 'Muddy Waters - LP',
    albumCover: 'https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/0a12a69bbe2441d5b5f7c2646f1bc8ad~c5_200x200.jpeg',
    src: 'https://v16-webapp.tiktok.com/c83bbd75a076ccb11a289e2cb23371f4/61e600dc/video/tos/useast2a/tos-useast2a-pve-0068/44a9e35dba9b4f8e9fec3c0473ee064b/?a=1988&br=2186&bt=1093&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FRTkag3-I&l=202201171750160101910532211409E23A&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=andxPDw6ZnQ0OjMzNzczM0ApaWg2OTVlNTxlN2ZkNzNkNWdeX2JpcjRfLzZgLS1kMTZzc2NeMDFhMTMwMS4tNmJfNGI6Yw%3D%3D&vl=&vr='
  },
  {
    id: 2,
    author: 'denissemct',
    description: 'PIZZA SIN LEVADURA Y SIN HORNO 🍕#saborestiktok #recetascheck #antojos #recetas #recetasinhorno #recetafacil #receta #sinhorno #pizza',
    likes: 123,
    shares: 45,
    comments: 32,
    songTitle: 'Muddy Waters - LP',
    albumCover: 'https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/0a12a69bbe2441d5b5f7c2646f1bc8ad~c5_200x200.jpeg',
    src: 'https://v16-webapp.tiktok.com/1f260417b84b944df6fcf21b324ea2f2/61e65113/video/tos/useast2a/tos-useast2a-ve-0068c002/1631f91545194820b70a710b83c58ee2/?a=1988&br=2430&bt=1215&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FRTkag3-I&l=202201172332080102230981712537B459&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzp3cWZ5Z2VnNTMzNzczM0ApZGVpODY6aWU3Nzs4OzhlN2dgZ280My1eLWFgLS1kMTZzc2MzY142X14yMGMyYTJhMTQ6Yw%3D%3D&vl=&vr='
  },
  {
    id: 3,
    author: 'denissemct',
    description: 'PIZZA SIN LEVADURA Y SIN HORNO 🍕#saborestiktok #recetascheck #antojos #recetas #recetasinhorno #recetafacil #receta #sinhorno #pizza',
    likes: 123,
    shares: 45,
    comments: 32,
    songTitle: 'Muddy Waters - LP',
    albumCover: 'https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/0a12a69bbe2441d5b5f7c2646f1bc8ad~c5_200x200.jpeg',
    src: 'https://v16-webapp.tiktok.com/2192e095f51047dd7672a9cb2dc06f70/61e65133/video/tos/useast2a/tos-useast2a-ve-0068c002/0c6c6dcfa3f64cfbb9ae37f1d20de229/?a=1988&br=3028&bt=1514&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FRTkag3-I&l=202201172333030101901851570936ECDF&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzxoNGZwZDx5dTMzZTczM0ApaGY4ZzU5Zzs1N2c0NGg2Z2drMmtnX2dhZGlfLS1jMTZzcy9hMjFfYTA1NmBgXjRfMzM6Yw%3D%3D&vl=&vr='
  }
]

export default function FeedVideos () {
  return (
    VIDEOS.map(video => (
      <div key={video.id} className={styles.item}>
        <VideoPlayer {...video} />
      </div>
    ))
  )
}
