import React, { lazy, ReactElement, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ConfigProvider, Result, Spin } from 'antd'
import DefaultLayout from 'src/layouts/DefaultLayout'
import 'src/components/App/App.css'

const Index = lazy(() => import('../../routes/Home'))
const About = lazy(() => import('../../routes/About'))
const NotFound = lazy(() => import('../../routes/NotFound'))

export function App(): ReactElement {
  return (
    <ConfigProvider>
      <Router>
        <DefaultLayout>
          <Suspense fallback={<Result title={'Loading page...'} icon={<Spin spinning={true} />} />}>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </DefaultLayout>
      </Router>
    </ConfigProvider>
  )
}
