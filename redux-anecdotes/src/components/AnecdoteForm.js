import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    console.log('Creating anecdote with content', content)
    props.createAnecdote(content)
    props.setNotification(`You added '${content}'`, 5)
  }
  
  return (
    <form onSubmit={addAnecdote}>
      <div><input name='content' /></div>
      <button>create</button>
    </form>
  )
}

const mapDispatchToProps = {
  createAnecdote,
  setNotification
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm