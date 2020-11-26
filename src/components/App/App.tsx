import 'src/components/App/App.less'

import { ConfigProvider, Result, Spin } from 'antd'
import React, { ReactElement, Suspense, lazy } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import DefaultLayout from 'src/layouts/DefaultLayout'

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
