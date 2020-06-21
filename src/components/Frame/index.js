import React, { Component } from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
import {DropdownMenu} from '../index'
import logo from './Logo.png'
import './index.less'
import {adminRoutes} from '../../routes'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class index extends Component {
    render() {
      return (
        <div>
          <Layout className="mainFrame">
            <Header className="header">
              <div className="logo">
                <img src={logo} alt="ljf"></img>
              </div>
              <div className="userName">
                <DropdownMenu></DropdownMenu>
              </div>
            </Header>
            <Layout>
              <Sider width={200} className="site-layout-background">
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                    {
                      adminRoutes.map(route=>{
                        return(
                          <Menu.Item key={route.path}>
                            <Link to={route.path}>{route.title}</Link>
                          </Menu.Item>

                        )
                      })

                    }
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                  </SubMenu>
                  <Menu.Item key="43">option34</Menu.Item>
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                  className="site-layout-background"
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                  }}
                >
                  {this.props.children}
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </div>
      );
   }
}

export default index;