import React from 'react'
import {
  Route,
  Router,
  IndexRoute,
  browserHistory
} from 'react-router'
import Paging from '../views/paging'
import Topic from '../views/topic'
import NotFound from '../views/404'
import Application from '../views/app'
module.exports = () => {
  return <Router history={browserHistory}>
    <Route path="/" component={Application}>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
}
