import React, {Component} from 'react'
import TextField from './TextField'

export default class Profile extends Component {
  render() {
    return (
      <div className='container'>
        <div className='spacer'></div>
        <TextField name='firstName' dispatch={this.props.dispatchFirstName}/>
        <TextField name='lastName' dispatch={this.props.dispatchLastName}/>
        <TextField name='biography' dispatch={this.props.dispatchBiography}/>
        <div className='spacer'></div>
      </div>
    )
  }
}