import deepFreeze from 'deep-freeze'
import notificationReducer from './notificationReducer'
import { initialState } from './notificationReducer'

describe('GIVEN anecdoteReducer', () => {
  
  const stateAtStart = initialState
  
  test('THEN notification state should be defined', () => {
    const action = {
      type: 'notification/get',
      payload: {}
    }
    deepFreeze(stateAtStart)
    const returnedState = notificationReducer(stateAtStart, action)
    expect(returnedState).toBe(initialState)
  })

  test('WHEN setting state THEN should message is set', () => {
    const action = {
      type: 'notification/set',
      payload: 'Hello world'
    }
    deepFreeze(stateAtStart)
    const returnedState = notificationReducer(stateAtStart, action)
    console.log(returnedState)
    expect(returnedState.message).toBe('Hello world')
  })
})