import React, { Component } from 'react';
import { Button,Pagination} from 'antd'
import {Link} from 'react-router-dom'
class Dashboard extends Component {
    render() {
        return (
          <div>
            <Link to="/login">
              <Button type="primary">点击</Button>
            </Link>
            <Pagination defaultCurrent={1} total={50} />
          </div>
        )
    }
}

export default Dashboard;