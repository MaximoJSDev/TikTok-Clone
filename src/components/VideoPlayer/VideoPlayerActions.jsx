import { Heart } from '../Icons/Heart'
import { Share } from '../Icons/Share'
import { Comment } from '../Icons/Comment'
import styles from './styles.module.css'

export default function VideoPlayerActions ({
  username, avatar, likes = 2102, comments = 645, shares = 440, headted = false
}) {
  const handleLike = () => {
    window.alert('like')
  }
  const handleComment = () => {
    window.alert('comment')
  }
  const handleShare = () => {
    window.alert('share')
  }

  return (
    <aside className={styles.actions}>
      <div className={styles.user}>
        <img src={avatar} alt={username} />
        <img src='https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web-us/tiktok/web/node/_next/static/images/test-2e6dd40439e72f09a8193e27cb3e0c51.svg' width='24' className='jsx-1142506888' />
      </div>

      <button onClick={handleLike} className={styles.action}>
        <Heart width='40' />
        <span title='like'>{likes}</span>
      </button>

      <button onClick={handleComment} className={styles.action}>
        <Comment width='40' />
        <span title='comments'>{comments}</span>
      </button>

      <button onClick={handleShare} className={styles.action}>
        <Share width='40' />
        <span title='shares'>{shares}</span>
      </button>
    </aside>
  )
}
