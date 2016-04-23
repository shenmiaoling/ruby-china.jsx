import React from 'react'

module.exports = React.createClass({
  render() {
    return <div className="app">
      {this.props.children}
    </div>
  }
})
