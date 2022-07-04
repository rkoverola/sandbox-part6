import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { set, remove } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  console.log('Got anecdotes', anecdotes)
  const dispatch = useDispatch()

  const flashNotification = (notification) => {   
    dispatch(set(notification))
    setTimeout(() => {
      dispatch(remove(notification))
    }, 5000)
  }

  const addVote = (id) => {
    console.log('vote', id)
    const message = anecdotes.find(a => a.id === id).content
    console.log('set', message)
    dispatch(vote(id))
    flashNotification(message)
  }

  return (
    <div>
      {Array.from(anecdotes)
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => addVote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList