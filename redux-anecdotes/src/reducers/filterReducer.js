import { createSlice, current } from "@reduxjs/toolkit"

export const initialState = { filter: '' }

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    getFilter(state, action) {
      console.log('Getting', current(state))
      return state
    },
    setFilter(state, action) {
      console.log('Setting to', action.payload)
      state.filter = action.payload
    },
  }
})

export const { getFilter, setFilter } = filterSlice.actions
export default filterSlice.reducer