import { useDispatch } from 'react-redux'
import { createAddAction } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {

  const dispatch = useDispatch()
  
  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    console.log('Creating anecdote with content', content)
    dispatch(createAddAction(content))
  }
  
  return (
    <form onSubmit={addAnecdote}>
      <div><input name='content' /></div>
      <button>create</button>
    </form>
  )
}

export default AnecdoteForm