import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

const initialState = {
  mode: 'dark',
  userId: '63701cc1f03239b7f700000e',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    },
  },
})

export const { setMode } = themeSlice.actions

export default themeSlice.reducer

export const selectMode = (state: RootState) => state.theme.mode
export const selectUserId = (state: RootState) => state.theme.userId