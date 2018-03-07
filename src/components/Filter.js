import React from 'react'
import filterReducer, { filterChange } from '../reducers/filterReducer'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Filter extends React.Component {
    componentDidMount() {
        const { store } = this.context
        this.unsubscribe = store.subscribe(() => 
          this.forceUpdate()
        )
        }
      
      componentWillUnmount() {
        this.unsubscribe()
      }

    handleChange = (event) => {
      // input-kentän arvo muuttujassa event.target.value
      this.context.store.dispatch(filterChange(event.target.value))
    }
    render() {
      const style = {
        marginBottom: 10
      }
  
      return (
        <div style={style}>
          filter <input onChange={this.handleChange}/>
        </div>
      )
    }
  }
  Filter.contextTypes = {
    store: PropTypes.object
  }
  const ConnectedFilter = connect()(Filter)
  export default ConnectedFilter
  