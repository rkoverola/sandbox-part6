import deepFreeze from 'deep-freeze'
import anecdoteReducer from './anecdoteReducer'
import { initialState } from './anecdoteReducer'

// FIXME: Test broken because of changing logic, fix when stable
describe('GIVEN anecdoteReducer', () => {

  const getId = () => (100000 * Math.random()).toFixed(0)

  const asObject = (anecdote) => {
    return {
      content: anecdote,
      id: getId(),
      votes: 0
    }
  }

  const anecdotesAtStart = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const stateAtStart = anecdotesAtStart.map(a => asObject(a))
  
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