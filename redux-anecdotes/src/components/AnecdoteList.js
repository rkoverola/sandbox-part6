import { useSelector, useDispatch } from 'react-redux'
import { vote, voteForAnecdote } from '../reducers/anecdoteReducer'
import { set, remove } from '../reducers/notificationReducer'

const AnecdoteList = () => {

  const dispatch = useDispatch()
  const rawAnecdotes = useSelector(state => state.anecdotes)
  const filterObject = useSelector(state => state.filter)
  const filter = filterObject.filter.toLowerCase()
  console.log('Filter in list is', filter)
  const anecdotes = rawAnecdotes.filter(a => a.content.toLowerCase().includes(filter))
  console.log('Got anecdotes', rawAnecdotes)
  

  const flashNotification = (notification) => {   
    dispatch(set(notification))
    setTimeout(() => {
      dispatch(remove(notification))
    }, 5000)
  }

  const addVote = (id) => {
    console.log('vote', id)
    const anecdote = anecdotes.find(a => a.id === id)
    dispatch(voteForAnecdote(id, anecdote))
    flashNotification(anecdote.content)
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