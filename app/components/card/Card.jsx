import PropTypes from 'prop-types'
import { IconUserEdit, IconArrowUpRight } from '@tabler/icons-react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Card.module.css'

const Card = ({ user, isOpen, setIsOpen, setIdUser }) => {
  const { id, avatar, first_name, last_name } = user

  const handleToggle = () => {
    setIdUser(id)
    setIsOpen(!isOpen)
  }

  return (
    <section className={styles.container}>
      <div className={styles.headerCard}>
        <button className={styles.iconButton} onClick={handleToggle}>
          <IconUserEdit color="#CFD3D4" />
        </button>
      </div>
      <Image
        src={avatar}
        width={250}
        height={250}
        alt={`Avatar of ${first_name}`}
        className={styles.avatar}
      />
      <h3>
        {first_name} {last_name}
      </h3>
      <Link href={`/posts/${id}`}>
        Posts <IconArrowUpRight />
      </Link>
    </section>
  )
}

Card.propTypes = {
  user: PropTypes.object,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  setIdUser: PropTypes.func,
}

export default Card
