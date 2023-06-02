import PropTypes from 'prop-types'
import styles from './Row.module.css'
import Image from 'next/image'
import { IconChevronRight } from '@tabler/icons-react'

const Row = ({ user, onAlbumns }) => {
  const { id, avatar, first_name, last_name } = user

  return (
    <button className={styles.container} onClick={() => onAlbumns(id)}>
      <Image
        src={avatar}
        width={50}
        height={50}
        alt={`Avatar of ${first_name}`}
        className={styles.avatar}
      />
      <h3>
        {first_name} {last_name}
      </h3>
      <IconChevronRight color="white" />
    </button>
  )
}

Row.propTypes = {
  user: PropTypes.object,
  onAlbumns: PropTypes.func,
}

export default Row
