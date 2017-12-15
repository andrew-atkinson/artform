import React, {Component} from 'react'
import Profile from './Profile'

export default class Main extends Component {
  render() {
    console.log('main', this)
    return (<Profile {...this.props}/>);
  }
}