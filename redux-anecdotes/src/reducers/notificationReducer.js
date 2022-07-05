import { createSlice } from "@reduxjs/toolkit"

export const initialState = { message: '' }

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    // FIXME: Getter not needed?
    get(state, action) {
      return state
    },
    set(state, action) {
      state.message = action.payload
    },
    remove(state, action) {
      const message = action.payload
      console.log('Comparing', message, state.message)
      if(message === state.message) {
        state.message = ''
      }
    }
  }
})

export const { get, set, remove } = notificationSlice.actions

export const setNotification = (message, upTime) => {
  return async dispatch => {
    const timeInMilliseconds = upTime * 1000
    dispatch(set(message))
    setTimeout(() => {
      dispatch(remove(message))
    }, timeInMilliseconds)
  }
}

export default notificationSlice.reducer