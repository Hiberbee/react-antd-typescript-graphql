import React from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { Logo } from 'src/components/Logo/Logo'
import PageErrorBoundary from 'src/components/PageErrorBoundary'

type Props = { children?: React.ReactNode }

export default function DefaultLayout(props: Props): React.ReactElement {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Header style={{ padding: '0 20px' }}>
        <Logo />
        <Menu selectable={false} style={{ float: 'right', marginLeft: -40 }} theme={'dark'} mode={'horizontal'}>
          <Menu.Item icon={<QuestionCircleOutlined />}>
            <Link to="/about">About</Link>
          </Menu.Item>
        </Menu>
      </Layout.Header>
      <Layout.Content style={{ padding: 20 }}>
        <PageErrorBoundary>{props.children}</PageErrorBoundary>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>
        Hiberbee © {new Date().getFullYear()}. Open-source @{' '}
        <a href="https://github.com/hiberbee/template-typescript-react-ant" target={'_blank'} rel="noopener noreferrer">
          Github
        </a>
      </Layout.Footer>
    </Layout>
  )
}
