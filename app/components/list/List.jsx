'use client'
import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, usersSelectors } from '@/redux/slices/userSlice'
import { albumnsSelectors, fetchAlbumns } from '@/redux/slices/albumnSlice'
import styles from './List.module.css'
import Row from './Row'
import Albumn from './Albumn'

const List = () => {
  const dispatch = useDispatch()
  const users = useSelector(usersSelectors.selectAll)
  const albumns = useSelector(albumnsSelectors.selectAll)

  const onAlbumns = id => {
    dispatch(fetchAlbumns(id))
  }

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers())
    }
  }, [])

  return (
    <section className={styles.columns}>
      <div className={styles.users}>
        {users?.map(user => (
          <Row key={user.id} user={user} onAlbumns={onAlbumns} />
        ))}
      </div>
      <div className={styles.albumns}>
        <Suspense fallback={<h4>Loading...</h4>}>
          {albumns?.map(albumn => (
            <Albumn key={albumn.id} albumn={albumn} />
          ))}
        </Suspense>
      </div>
    </section>
  )
}

export default List
