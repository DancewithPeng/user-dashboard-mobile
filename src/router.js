import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import UsersPage from './routes/Users'
import TransitionPage from './routes/TransitionPage'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path='/users' component={UsersPage} />
      <Route path='/trans' component={TransitionPage} />
    </Router>
  );
}

export default RouterConfig;
