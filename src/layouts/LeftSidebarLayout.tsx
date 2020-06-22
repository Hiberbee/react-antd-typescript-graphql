import React, { ReactElement } from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { QuestionCircleOutlined } from '@ant-design/icons'

type Props = { children: ReactElement }

export default function LeftSidebarLayout({ children }: Props): ReactElement<{}> {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider width={250}>
        <div
          style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: 'cover',
            height: 60,
            width: 250,
          }}
        />
      </Layout.Sider>
      <Layout>
        <Layout.Header
          className="site-layout-sub-header-background"
          style={{ padding: 0, height: 64 }}
        >
          <Menu selectable={false} style={{ float: 'right' }} theme={'dark'} mode={'horizontal'}>
            <Menu.Item key="about" icon={<QuestionCircleOutlined />}>
              <Link to="/about">About</Link>
            </Menu.Item>
          </Menu>
        </Layout.Header>
        <Layout.Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {children}
          </div>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>
          Hiberbee © {new Date().getFullYear()} Github{' '}
          <a href="https://github.com/hiberbee/react-antd-typescript">Github</a>
        </Layout.Footer>
      </Layout>
    </Layout>
  )
}
