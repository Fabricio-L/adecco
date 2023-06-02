'use client'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchUsers,
  updateUser,
  usersSelectors,
} from '@/redux/slices/userSlice'
import styles from './Showcase.module.css'
import Card from '../card/Card'
import Sidebar from '../sidebar/Sidebar'

const Showcase = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [idUser, setIdUser] = useState(null)

  const dispatch = useDispatch()
  const users = useSelector(usersSelectors.selectAll)

  const onUpdate = (id, newData) => {
    dispatch(updateUser({ id, newData }))
  }

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <section className={styles.container}>
      {users?.map(user => (
        <Card
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setIdUser={setIdUser}
          key={user.id}
          user={user}
        />
      ))}
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        idUser={idUser}
        onUpdate={onUpdate}
      />
    </section>
  )
}

export default Showcase
