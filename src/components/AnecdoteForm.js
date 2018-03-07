import React from 'react'
import { anecCreation } from '../reducers/anecdoteReducer'
import { voteNoti, timesUp } from '../reducers/notificationReducer'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class AnecdoteForm extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() => 
      this.forceUpdate()
    )
    }
  
  componentWillUnmount() {
    this.unsubscribe()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const anec = this.props.anecCreation(e.target.anecdote.value)
    this.context.store.dispatch(anec)

    const message = (`you created  '${anec.content}'`)
    console.log(message);
    
    this.context.store.dispatch(voteNoti(message))
    setTimeout(() => {
      this.context.store.dispatch(timesUp())
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

AnecdoteForm.contextTypes = {
  store: PropTypes.object
}
const ConnectedAnecdoteForm = connect()(AnecdoteForm)

export default ConnectedAnecdoteForm
