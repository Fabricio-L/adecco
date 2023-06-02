import PropTypes from 'prop-types'
import styles from './Post.module.css'

const Post = ({ post, onDelete }) => {
  const { id, title, body } = post

  return (
    <section className={styles.post}>
      <h2 className={styles.title}>
        {id}: {title}
      </h2>
      <p>{body}</p>
      <button className={styles.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </section>
  )
}

Post.propTypes = {
  post: PropTypes.object,
  onDelete: PropTypes.func,
}

export default Post
