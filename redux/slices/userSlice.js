import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk(
  'users/getAllUsers',
  async thunkApi => {
    const response = await fetch('https://reqres.in/api/users')
    const data = await response.json()

    return data.data
  }
)

export const updateUser = createAsyncThunk(
  'users/patchUser',
  async ({ id, newData }) => {
    await fetch(`https://reqres.in/api/users/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(newData),
    })

    return { id, changes: newData }
  }
)

const usersAdapter = createEntityAdapter({
  selectId: user => user.id,
})

const userSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState({ loading: false }),
  reducers: {
    setAllUsers: usersAdapter.setAll,
    updateOneUser: usersAdapter.updateOne,
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true
    })

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
      usersAdapter.setAll(state, action.payload)
    })

    builder.addCase(updateUser.pending, state => {
      state.loading = true
    })

    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.loading = false
      usersAdapter.updateOne(state, {
        id: payload.id,
        changes: payload.changes,
      })
    })
  },
})

export const { setAllUsers, updateOneUser } = userSlice.actions

export const usersSelectors = usersAdapter.getSelectors(state => state.users)

export default userSlice.reducer
