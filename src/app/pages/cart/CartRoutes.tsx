import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Cart from './containers/index'

export default function CartRoutes() {
  return (
    <Switch>
      <Route path='/cart' component={Cart} />
    </Switch>
  )
}
