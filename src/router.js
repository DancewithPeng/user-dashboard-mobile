import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import UsersPage from './routes/Users'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path='/users' component={UsersPage} />
    </Router>
  );
}

export default RouterConfig;
