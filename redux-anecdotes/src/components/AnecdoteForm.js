import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { set, remove, setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    console.log('Creating anecdote with content', content)
    dispatch(createAnecdote(content))
    dispatch(setNotification(`You added '${content}'`, 5))
  }
  
  return (
    <form onSubmit={addAnecdote}>
      <div><input name='content' /></div>
      <button>create</button>
    </form>
  )
}

export default AnecdoteForm