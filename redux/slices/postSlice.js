import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk('posts/getAllPosts', async id => {
  return await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  ).then(res => res.json())
})

export const deletePost = createAsyncThunk('posts/deletePost', async id => {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  }).then(res => res.json())

  return id
})

const postsAdapters = createEntityAdapter({
  selectId: post => post.id,
})

const postSlice = createSlice({
  name: 'posts',
  initialState: postsAdapters.getInitialState({ loading: false }),
  reducers: {
    setAllPosts: postsAdapters.setAll,
    removeOnePost: postsAdapters.removeOne,
  },
  extraReducers: builder => {
    builder.addCase(fetchPosts.pending, state => {
      state.loading = true
    })

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false
      postsAdapters.setAll(state, action.payload)
    })

    builder.addCase(deletePost.pending, state => {
      state.loading = true
    })

    builder.addCase(deletePost.fulfilled, (state, { payload: id }) => {
      state.loading = false
      postsAdapters.removeOne(state, id)
    })
  },
})

export const { setAllPosts, removeOnePost } = postSlice.actions

export const postsSelectors = postsAdapters.getSelectors(state => state.posts)

export default postSlice.reducer
