import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit'

export const fetchAlbumns = createAsyncThunk(
  'albumns/getAllAlbumns',
  async id => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}/albums`
    )
    const data = await response.json()
    console.log(data)
    return data
  }
)

const albumnsAdapters = createEntityAdapter({
  selectId: albumn => albumn.id,
})

const albumnslice = createSlice({
  name: 'albumns',
  initialState: albumnsAdapters.getInitialState({ loading: false }),
  reducers: {
    setAllalbumns: albumnsAdapters.setAll,
  },
  extraReducers: builder => {
    builder.addCase(fetchAlbumns.pending, state => {
      state.loading = true
    })

    builder.addCase(fetchAlbumns.fulfilled, (state, action) => {
      state.loading = false
      albumnsAdapters.setAll(state, action.payload)
    })
  },
})

export const { setAllAlbumns } = albumnslice.actions

export const albumnsSelectors = albumnsAdapters.getSelectors(
  state => state.albumns
)

export default albumnslice.reducer
