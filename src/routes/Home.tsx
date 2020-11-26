import { Layout, Typography } from 'antd'
import React from 'react'

import { Context } from '../components'

export default function Home(): JSX.Element {
  return (
    <Layout.Content>
      <Typography.Title>Home Page</Typography.Title>
      <Context.Consumer>{({ user }) => <Typography.Text>{user?.firstName}</Typography.Text>}</Context.Consumer>
    </Layout.Content>
  )
}
