import React from 'react'
import {
  Route,
  Router,
  IndexRoute,
  browserHistory,
  createBrowserHistory
} from 'react-router'
import Paging from '../views/paging'
import Topic from '../views/topic'
import NotFound from '../views/404'
import Application from '../views/app'
module.exports = () => {
  return (
  <Router history={browserHistory}>
    <Route path="/" component={Paging}/>
    <Route path="/topic/:item" component={Paging} />
    <Route path="*" component={NotFound} />
  </Router>
  )
}
