import React from 'react'
import { anecCreation } from '../reducers/anecdoteReducer'
import { voteNoti, timesUp, notify } from '../reducers/notificationReducer'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import anecService from '../services/anecdotes'

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

  handleSubmit = async (e) => {
    e.preventDefault()
    const anec = e.target.anecdote.value
    e.target.anecdote.value = ''
    anecCreation(anec)

    const message = (`you created  '${anec}'`)
    console.log(message);
    

   
    this.props.notify(message, 5)
    
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

export default connect(null,
{anecCreation, notify})(ConnectedAnecdoteForm)
