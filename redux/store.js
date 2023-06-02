'use client'
import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import postSlice from './slices/postSlice'
import albumnSlice from './slices/albumnSlice'

export function makeStore() {
  return configureStore({
    reducer: {
      users: userSlice,
      posts: postSlice,
      albumns: albumnSlice,
    },
  })
}

export const store = makeStore()
