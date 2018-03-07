import React from 'react'
import { anecVote } from '../reducers/anecdoteReducer'
import { voteNoti, timesUp } from '../reducers/notificationReducer'
class AnecdoteList extends React.Component {
  handleVote = (e) => {
    console.log(e);
    console.log(e.id);
    const id = e.id
    
    
    this.props.store.dispatch(anecVote(id))
    const message = (`you voted '${e.content}'`)
    console.log(message);
    
    this.props.store.dispatch(voteNoti(message))
    setTimeout(() => {
      this.props.store.dispatch(timesUp())
    }, 5000);
  }
  render() {
    const anecdotes = this.props.store.getState().anecdotes.filter(anecdote=> anecdote.content.toLowerCase().includes(this.props.store.getState().filter))
    
    
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => this.handleVote(anecdote)}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
