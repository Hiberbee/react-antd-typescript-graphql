import React, { ErrorInfo } from 'react'
import { Result } from 'antd'

type Props = {}
type State = {
  hasError: boolean
  message: string
}
export default class PageErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, message: '' }
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, message: error.message }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can also log the error to an error reporting service
    console.error(`${error.message} @ ${errorInfo.componentStack}`)
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <Result
          status={'500'}
          title={'This page encountered error. Try something again'}
          subTitle={this.state.message}
        />
      )
    }

    return this.props.children
  }
}
