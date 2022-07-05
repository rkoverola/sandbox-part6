import { createSlice, current } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    vote(state, action) {
      console.log('Calling local vote with', action.payload)
      const id = action.payload
      const anecdote = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdote,
        votes: anecdote.votes + 1
      }
      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
    },
    add(state, action) {
      const content = action.payload
      const anecdote = asObject(content)
      state.push(anecdote)
    },
    setAnecdotes(state, action) {
      console.log('Setting state to', current(state), action.payload)
      return action.payload
    },
    appendAnecdote(state, action) {
      console.log('Appending', action.payload)
      state.push(action.payload)
    }
  }
})

export const voteForAnecdote = (id, anecdote) => {
  return async dispatch => {
    const updatedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    await anecdoteService.update(id, updatedAnecdote)
    dispatch(vote(id))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const { vote, add, setAnecdotes, appendAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer