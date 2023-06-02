'use client'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import {
  deletePost,
  fetchPosts,
  postsSelectors,
} from '@/redux/slices/postSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, usersSelectors } from '@/redux/slices/userSlice'
import Post from '@/app/components/post/Post'
import styles from './page.module.css'

export default function Posts({ params }) {
  const { id } = params
  const dispatch = useDispatch()
  const posts = useSelector(postsSelectors.selectAll)
  const user = useSelector(state => usersSelectors.selectById(state, id))

  const onDelete = id => {
    dispatch(deletePost(id))
  }

  useEffect(() => {
    if (!user) dispatch(fetchUsers())
    dispatch(fetchPosts(id))
  }, [])

  return (
    <main className={styles.main}>
      <h1>
        {user?.first_name} {user?.last_name}
      </h1>
      {posts?.map(post => (
        <Post key={post.id} post={post} onDelete={onDelete} />
      ))}
    </main>
  )
}

Posts.propTypes = {
  params: PropTypes.object,
}
