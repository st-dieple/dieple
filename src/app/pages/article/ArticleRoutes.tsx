import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const ArticleList = React.lazy(() => import('./containers/ArticleList'));
const ArticleDetail = React.lazy(() => import('./containers/ArticleDetail'));

export default function AuthRoutes() {
  return (
    <Switch>
      <Route exact path='/articles' component={ArticleList} />
      <Route path='/articles/:id' component={ArticleDetail} />
    </Switch>
  )
}