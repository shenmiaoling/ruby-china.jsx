import React from 'react'

module.exports = React.createClass({
  render() {
    return (
      <div className="app">
        <button type="button" className="btn btn-primary btn-lg">Large button</button>
        <button type="button" className="btn btn-secondary btn-lg">Large button</button>
        {this.props.children}
    </div>)
  }
})
