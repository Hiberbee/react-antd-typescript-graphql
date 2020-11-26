import { QuestionCircleOutlined } from '@ant-design/icons'
import { Col, Layout, Menu, Row } from 'antd'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from 'src/components/Logo/Logo'
import PageErrorBoundary from 'src/components/PageErrorBoundary'

type Props = { children?: React.ReactNode }

const DefaultLayout: FC = (props: Props) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Header>
        <Row align={'stretch'} justify={'space-between'}>
          <Col>
            <Logo />
          </Col>
          <Col>
            <Menu selectable={false} theme={'dark'} mode={'horizontal'}>
              <Menu.Item icon={<QuestionCircleOutlined />}>
                <Link to="/about">About</Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Layout.Header>
      <Layout.Content style={{ padding: 60 }}>
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
export default DefaultLayout
