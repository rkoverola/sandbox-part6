import { useDispatch } from 'react-redux'
import { add, appendAnecdote } from '../reducers/anecdoteReducer'
import { set, remove } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {

  const dispatch = useDispatch()
  
  const flashNotification = (notification) => {   
    dispatch(set(notification))
    setTimeout(() => {
      dispatch(remove(notification))
    }, 5000)
  }

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    console.log('Creating anecdote with content', content)
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
    flashNotification(content)
  }
  
  return (
    <form onSubmit={addAnecdote}>
      <div><input name='content' /></div>
      <button>create</button>
    </form>
  )
}

export default AnecdoteForm