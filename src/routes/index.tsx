import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('./home'))
const About = lazy(() => import('./about'))
const NotFound = lazy(() => import('./not-found'))

export default function RouteProvider(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  )
}
