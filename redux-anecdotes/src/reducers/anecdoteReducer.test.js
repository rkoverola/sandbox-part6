import deepFreeze from 'deep-freeze'
import anecdoteReducer from './anecdoteReducer'
import { initialState } from './anecdoteReducer'

describe('GIVEN anecdoteReducer', () => {

  const stateAtStart = initialState.map(x => x)
  
  test('WHEN calling with undefined action THEN returns initial state', () => {
    const action = {
      type: 'UNDEFINED'
    }
    const returnedState = anecdoteReducer(undefined, action)
    expect(returnedState).toEqual(stateAtStart)
  })

  // FIXME: Breaks when sorting?
  test('WHEN voting with id THEN increments votes on correct anecdote', () => {
    deepFreeze(stateAtStart)
    const action = {
      type: 'VOTE',
      data: { id: stateAtStart[2].id }
    }
    const returnedState = anecdoteReducer(stateAtStart, action)
    expect(returnedState[2].votes).toBe(stateAtStart[2].votes + 1)
  })
})