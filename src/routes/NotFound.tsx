import React, { ReactElement } from 'react'
import { Result } from 'antd'

export default function NotFound(): ReactElement {
  return <Result status={'404'} title={'Requested page not found'} />
}
