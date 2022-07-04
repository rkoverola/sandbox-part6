import { createSlice } from "@reduxjs/toolkit"

const initialState = { notification: 'Hello' }

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    getNotification(state, action) {
      return 'Hello world'
    }
  }
})

export const { getNotification } = notificationSlice.actions
export default notificationSlice.reducer