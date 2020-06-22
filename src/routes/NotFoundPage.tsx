import React, { ReactElement } from 'react'
import PageErrorBoundary from 'src/components/PageErrorBoundary'
import { Result } from 'antd'

export default function NotFoundPage(): ReactElement<{}> {
  return (
    <PageErrorBoundary>
      <Result status={'404'} title={'Requested page not found'} />
    </PageErrorBoundary>
  )
}
