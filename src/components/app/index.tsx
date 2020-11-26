import 'components/app/index.less'

import { HomeOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { Col, Layout, Menu, Result, Row, Spin } from 'antd'
import { PageErrorBoundary } from 'components'
import Logo from 'components/logo'
import React, { FC, PropsWithChildren, Suspense } from 'react'
import { LinkProps, NavLink, BrowserRouter as Router } from 'react-router-dom'

const MenuLink: FC<LinkProps> = props => (
  <NavLink to={props.to} title={props.title}>
    {props.title}
  </NavLink>
)

export default function AppProvider(props: PropsWithChildren<unknown>): JSX.Element {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Router>
        <Layout.Header>
          <Row align={'stretch'} justify={'space-between'}>
            <Col key={1}>
              <Logo />
            </Col>
            <Col key={2}>
              <Menu selectable={true} theme={'dark'} mode={'horizontal'}>
                <Menu.Item key={'home'} icon={<HomeOutlined />}>
                  <MenuLink to={'/'} title={'Home'} />
                </Menu.Item>
                <Menu.Item key={'about'} icon={<QuestionCircleOutlined />}>
                  <MenuLink to={'/about'} title={'About'} />
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Layout.Header>
        <Layout.Content style={{ padding: 60 }}>
          <PageErrorBoundary>
            <Suspense fallback={<Result title={'Loading page...'} icon={<Spin spinning={true} />} />}>
              {props.children}
            </Suspense>
          </PageErrorBoundary>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>
          Hiberbee © {new Date().getFullYear()}. Open-source @{' '}
          <a
            href="https://github.com/hiberbee/template-typescript-react-ant"
            target={'_blank'}
            rel="noopener noreferrer"
          >
            Github
          </a>
        </Layout.Footer>
      </Router>
    </Layout>
  )
}
