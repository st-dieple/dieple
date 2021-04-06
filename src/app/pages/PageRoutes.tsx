import React, { useState, useEffect, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/containers/Home';
import ArticleRoutes from './article/ArticleRoutes';
import CartRoutes from './cart/CartRoutes';

export default function PageRoutes() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path='/home' component={Home} />
      </Switch>
      <ArticleRoutes />
      <CartRoutes />
    </Suspense>
  )
}
