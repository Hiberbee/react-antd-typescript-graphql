import React, { lazy, ReactElement, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ConfigProvider, Result, Spin } from 'antd'
import DefaultLayout from 'src/layouts/DefaultLayout'
import 'src/components/App/App.css'

const Index = lazy(() => import('../../routes/Home'))
const About = lazy(() => import('../../routes/About'))
const NotFound = lazy(() => import('../../routes/NotFound'))

export function App(): ReactElement {

  const commitId = process.env.GIT_COMMIT_SHA ?? 'latest'


  return (
    <div>
      <a href={`https://gitlab.com/${commitId}`}>{`Latest Commit ID: ${commitId}`}</a>
    </div>
  )
}
