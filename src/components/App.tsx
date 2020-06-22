import React, { lazy, ReactElement, Suspense } from 'react'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ConfigProvider, Result, Spin } from 'antd'
import LeftSidebarLayout from 'src/layouts/LeftSidebarLayout'
import 'src/components/App.css'

const IndexPage = lazy(() => import('../routes/IndexPage'))
const AboutPage = lazy(() => import('../routes/AboutPage'))
const NotFoundPage = lazy(() => import('../routes/NotFoundPage'))

export default function App(): ReactElement<{}> {
  const uri = process.env.API_URL ?? 'http://localhost:4000/graphql'
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    connectToDevTools: true,
    link: new HttpLink({
      uri,
    }),
  })

  return (
    <ConfigProvider>
      <ApolloProvider client={client}>
        <Router>
          <LeftSidebarLayout>
            <Suspense
              fallback={<Result title={'Loading page...'} icon={<Spin spinning={true} />} />}
            >
              <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route path="/about" component={AboutPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </Suspense>
          </LeftSidebarLayout>
        </Router>
      </ApolloProvider>
    </ConfigProvider>
  )
}
