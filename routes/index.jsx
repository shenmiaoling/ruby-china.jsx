import React from 'react'
import {
  Route,
  Router,
  IndexRoute,
  browserHistory
} from 'react-router'

import NotFound from './views/404'

module.exports = () => {
  return <Router history={browserHistory}>
    <Route path="*" component={NotFound} />
  </Router>
}
