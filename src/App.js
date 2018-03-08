import React from 'react'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import { connect } from 'react-redux'
import { anecInitialization } from './reducers/anecdoteReducer'
import anecService from './services/anecdotes'

class App extends React.Component {

  componentDidMount = async () => {
    this.props.anecInitialization()
  }

  render() {
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <Notification  />
        <Filter />
        <AnecdoteList  />
        <AnecdoteForm  />
      </div>
    )
  }
}

export default connect(
  null,
  { anecInitialization}
)(App)