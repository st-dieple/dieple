import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Category from '@app/pages/category/containers/Category';

const PageRoutes = React.lazy(() => import('./pages/PageRoutes'));
const AuthRoutes = React.lazy(() => import('./auth/AuthRoutes'));

export default function Routes() {
  const token = localStorage.getItem('ACCESS-TOKEN');
  /* if else for Features or Auth layout appears */
  return (
    <div className="wrapper">
      <Route exact path="/" render={() => (
        <Redirect to="home" />
      )} />
      <AuthRoutes/>
      <PageRoutes/>
      <Category />
    </div>
  )
}
