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
    albumConver: 'https://p77-va.tiktokcdn.com/img/tos-useast2a-v-27…/bcdf329547664a649691874d559f1459~c5_200x200.jpeg',
    src: 'https://v16-webapp.tiktok.com/e4c41135743abd66c4e770f78c237237/61e4a245/video/tos/useast2a/tos-useast2a-ve-0068c002/1631f91545194820b70a710b83c58ee2/?a=1988&br=2430&bt=1215&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FRTkag3-I&l=20220116165402010189053016036788CF&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzp3cWZ5Z2VnNTMzNzczM0ApZGVpODY6aWU3Nzs4OzhlN2dgZ280My1eLWFgLS1kMTZzc2MzY142X14yMGMyYTJhMTQ6Yw%3D%3D&vl=&vr='
  },
  {
    id: 2,
    author: 'denissemct',
    description: 'PIZZA SIN LEVADURA Y SIN HORNO 🍕#saborestiktok #recetascheck #antojos #recetas #recetasinhorno #recetafacil #receta #sinhorno #pizza',
    likes: 123,
    shares: 45,
    comments: 32,
    songTitle: 'Muddy Waters - LP',
    albumConver: 'https://p77-va.tiktokcdn.com/img/tos-useast2a-v-27…/bcdf329547664a649691874d559f1459~c5_200x200.jpeg',
    src: 'https://v16-webapp.tiktok.com/fdd5ad1c652bf095cc9e3af49007ec2f/61e4a374/video/tos/useast2a/tos-useast2a-ve-0068c002/0c6c6dcfa3f64cfbb9ae37f1d20de229/?a=1988&br=3028&bt=1514&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FRTkag3-I&l=2022011616592801018907702218689C34&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzxoNGZwZDx5dTMzZTczM0ApaGY4ZzU5Zzs1N2c0NGg2Z2drMmtnX2dhZGlfLS1jMTZzcy9hMjFfYTA1NmBgXjRfMzM6Yw%3D%3D&vl=&vr='
  },
  {
    id: 3,
    author: 'denissemct',
    description: 'PIZZA SIN LEVADURA Y SIN HORNO 🍕#saborestiktok #recetascheck #antojos #recetas #recetasinhorno #recetafacil #receta #sinhorno #pizza',
    likes: 123,
    shares: 45,
    comments: 32,
    songTitle: 'Muddy Waters - LP',
    albumConver: 'https://p77-va.tiktokcdn.com/img/tos-useast2a-v-27…/bcdf329547664a649691874d559f1459~c5_200x200.jpeg',
    src: 'https://v16-webapp.tiktok.com/4d0d601278048d9b0a086dc83deb781f/61e4cced/video/tos/useast2a/tos-useast2a-ve-0068c002/9fffc1c6ed5f42a494541491202a5063/?a=1988&br=3890&bt=1945&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3CMnz7Thn5lylXq&l=20220116195629010192046037187E4E81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajw8ZWk6ZjRxOjMzNzczM0ApOzo4ZzZpOTwzN2Y3PDlkOGcuMWhtcjRvcDRgLS1kMTZzczExMmFfNDJgXi9jYDU1XjY6Yw%3D%3D&vl=&vr='
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
