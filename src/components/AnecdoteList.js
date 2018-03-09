import React from 'react'
import { anecVote, anecdotesToShow } from '../reducers/anecdoteReducer'
import { voteNoti, timesUp, notify } from '../reducers/notificationReducer'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import anecService from '../services/anecdotes'
const anecsToShow = (anecs, filter) => {
  
  return anecs.filter(anecdote=> anecdote.content.toLowerCase().includes(filter)).sort((a, b) => b.votes - a.votes)
}
class AnecdoteList extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() => 
      this.forceUpdate()
    )
    }
  
  componentWillUnmount() {
    this.unsubscribe()
  }
  handleVote = async (e)  => {
    const content = e
    this.props.anecVote(content)

    const message = (`you voted '${e.content}'`)
    console.log(message);
    this.props.notify(message, 5)
   
    

  }
  
  
  render() {
    const anecdotes = this.props.visibleAnecs
    
    console.log(anecdotes);
    
    
    
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote =>
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
AnecdoteList.contextTypes = {
  store: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    visibleAnecs : anecsToShow(state.anecdotes, state.filter)
  }
}
const ConnectedAnecdoteList = connect()(AnecdoteList)

export default connect(
  mapStateToProps,
  {anecVote, notify, anecdotesToShow},
)(ConnectedAnecdoteList)
