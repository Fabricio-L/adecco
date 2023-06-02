import PropTypes from 'prop-types'
import styles from './Photo.module.css'
import Image from 'next/image'

const Photo = ({ photo }) => {
  const { thumbnailUrl, title } = photo

  return (
    <div className={styles.photo}>
      <Image
        src={thumbnailUrl}
        width={150}
        height={150}
        alt={`Photo of ${title}`}
      />
      <h5 className={styles.title}>{title}</h5>
    </div>
  )
}

Photo.propTypes = {
  photo: PropTypes.object,
}

export default Photo
