import { useDispatch } from 'react-redux'
import { add } from '../reducers/anecdoteReducer'
import { get, set, remove } from '../reducers/notificationReducer'

const AnecdoteForm = () => {

  const dispatch = useDispatch()
  
  const flashNotification = (notification) => {   
    dispatch(set(notification))
    setTimeout(() => {
      dispatch(remove(notification))
    }, 5000)
  }

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    console.log('Creating anecdote with content', content)
    dispatch(add(content))
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