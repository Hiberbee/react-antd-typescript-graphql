import React, { ReactElement } from 'react'
import PageErrorBoundary from 'src/components/PageErrorBoundary'

export default function AboutPage(): ReactElement<{}> {
  return (
    <PageErrorBoundary>
      <div>About Page</div>
    </PageErrorBoundary>
  )
}
