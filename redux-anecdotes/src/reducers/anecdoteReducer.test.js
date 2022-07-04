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

  test('WHEN voting with id THEN increments votes on correct anecdote', () => {
    deepFreeze(stateAtStart)
    const anecdote = stateAtStart.find(a => a.content === 'Adding manpower to a late software project makes it later!')
    console.log('GOT', anecdote)
    const action = {
      type: 'anecdotes/vote',
      payload: anecdote.id
    }
    const returnedState = anecdoteReducer(stateAtStart, action)
    const returnedAnecdote = returnedState.find(a => a.content === 'Adding manpower to a late software project makes it later!')
    expect(returnedAnecdote.votes).toBe(anecdote.votes + 1)
  })

  test('WHEN calling with add anecdote THEN should add new anecdote to the state', () => {
    const action = {
      type: 'anecdotes/add',
      payload: 'New anecdote'
    }
    deepFreeze(stateAtStart)
    const returnedState = anecdoteReducer(stateAtStart, action)
    expect(returnedState).toHaveLength(stateAtStart.length + 1)
  })
})