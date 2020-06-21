import React, { Component } from 'react';

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          我的
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          设置
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          退出登录
        </a>
      </Menu.Item>
    </Menu>
  )
class DropdownMenu extends Component {
    render() {
        return (
            <div>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    龙小狗<DownOutlined />
                    </a>
                </Dropdown>
            </div>
        );
    }
}

export default DropdownMenu






