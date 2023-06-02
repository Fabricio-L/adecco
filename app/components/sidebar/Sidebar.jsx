import PropTypes from 'prop-types'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { usersSelectors } from '@/redux/slices/userSlice'
import { IconCircleX } from '@tabler/icons-react'
import styles from './Sidebar.module.css'

const Sidebar = ({ isOpen, setIsOpen, idUser, onUpdate }) => {
  const user = useSelector(state => usersSelectors.selectById(state, idUser))
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleUpdate = () => {
    onUpdate(idUser, { first_name: firstName, last_name: lastName })
  }

  return (
    <section className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <button className={styles.closeButton} onClick={handleClose}>
        <IconCircleX size={36} />
      </button>
      <h3>
        Edit {user?.first_name} {user?.last_name}
      </h3>
      <label>First Name</label>
      <input
        type="text"
        placeholder="First Name"
        onChange={e => setFirstName(e.target.value)}
      />
      <label>Last Name</label>
      <input
        type="text"
        placeholder="Last Name"
        onChange={e => setLastName(e.target.value)}
      />
      <button className={styles.button} onClick={handleUpdate}>
        Update
      </button>

      <p>{firstName}</p>
      <p>{lastName}</p>
    </section>
  )
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  idUser: PropTypes.number,
  onUpdate: PropTypes.func,
}

export default Sidebar
