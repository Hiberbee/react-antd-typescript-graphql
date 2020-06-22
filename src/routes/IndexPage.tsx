import React, { ReactElement } from 'react'
import PageErrorBoundary from 'src/components/PageErrorBoundary'
import { Layout } from 'antd'

export default function IndexPage(): ReactElement<{}> {
  return (
    <PageErrorBoundary>
      <Layout>
        <Layout.Content>Index Page</Layout.Content>
      </Layout>
    </PageErrorBoundary>
  )
}
