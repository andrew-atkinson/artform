import React, {Component} from 'react'
import store from '../store'

export default class TextField extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {}
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(this.state[this.props.name] || '')
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name={this.props.name}
          placeholder={store.getState()[this.props.name]}
          value={this.state[this.props.name]}
          onChange={this.handleChange}
          onBlur={this.handleSubmit}
          />
        <input type='submit' hidden/>
      </form>
    )
  }
}