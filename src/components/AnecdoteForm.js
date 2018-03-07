import React from 'react'
import { anecCreation } from '../reducers/anecdoteReducer'
import { voteNoti, timesUp } from '../reducers/notificationReducer'

class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const anec = anecCreation(e.target.anecdote.value)
    this.props.store.dispatch(anec)

    const message = (`you created  '${anec.content}'`)
    console.log(message);
    
    this.props.store.dispatch(voteNoti(message))
    setTimeout(() => {
      this.props.store.dispatch(timesUp())
    }, 5000);
  }
    
  
   render() {
     return (
       <div>
      <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button> 
        </form>
      </div>
     )
   }
}

export default AnecdoteForm
