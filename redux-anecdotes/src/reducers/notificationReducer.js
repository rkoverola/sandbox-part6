import { createSlice } from "@reduxjs/toolkit"

export const initialState = { message: '', currentTimeoutId: 0 }

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
    setTimeoutId(state, action) {
      state.currentTimeoutId = action.payload
    },
    clearCurrentTimeout(state, action) {
      clearTimeout(state.currentTimeoutId)
    },
    removeNotification(state, action) {
      state.message = ''
    }
  }
})

export const { get, set, setTimeoutId, clearCurrentTimeout, removeNotification } = notificationSlice.actions

export const setNotification = (message, upTime) => {
  return async dispatch => {
    dispatch(clearCurrentTimeout())
    dispatch(set(message))

    const timeInMilliseconds = upTime * 1000
    const timeoutId = setTimeout(() => {
      dispatch(removeNotification())
    }, timeInMilliseconds)
    dispatch(setTimeoutId(timeoutId))
  }
}

export default notificationSlice.reducer