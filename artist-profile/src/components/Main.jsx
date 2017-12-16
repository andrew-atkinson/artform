import React, {Component} from 'react'
import Profile from './Profile'

export default class Main extends Component {
  render() {
    return (<Profile {...this.props}/>);
  }
}