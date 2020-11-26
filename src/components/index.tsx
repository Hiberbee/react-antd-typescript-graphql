import { useLocalStorageState } from 'ahooks'
import { ConfigProvider, Result } from 'antd'
import AppProvider from 'components/app'
import React from 'react'
import { IntlProvider } from 'react-intl'
import RouteProvider from 'routes'

type Props = {
  children?: React.ReactNode
}

type State = {
  hasError: boolean
  message: string
}

type Context = {
  user?: {
    firstName: string
  }
}

export class PageErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, message: '' }
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, message: error.message }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
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

export const Context = React.createContext<Context>({ user: undefined })

export default function App(): JSX.Element {
  const [user] = useLocalStorageState('user', undefined)
  return (
    <Context.Provider value={{ user }}>
      <ConfigProvider>
        <IntlProvider locale={navigator.language}>
          <AppProvider>
            <RouteProvider />
          </AppProvider>
        </IntlProvider>
      </ConfigProvider>
    </Context.Provider>
  )
}
