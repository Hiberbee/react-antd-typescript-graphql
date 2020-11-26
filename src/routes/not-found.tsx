import { Result } from 'antd'
import React from 'react'

export default function NotFound(): JSX.Element {
  return <Result status={'404'} title={'Requested page not found'} />
}
