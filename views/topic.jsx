import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
const Topic=React.createClass({
  getInitialState(){
    return {
      user:this.props.params.itemId
    }
  },
  render(){
    return (<div>{this.state.user}</div>)
  }
})

