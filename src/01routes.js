import React, { Component } from 'react';
import { Login,NotFound,Dashboard} from './views'
import {Route,Switch , Redirect} from 'react-router-dom'

class RouteA extends Component {
    render() {
      return (
        <div>
          <Switch>
            <Route path="/login" component={Login} exact></Route>
            <Route path="/404" component={NotFound} exact></Route>
            <Route path="/dash" component={Dashboard} exact></Route>
            <Redirect exact to="/dash" from="/"></Redirect>
            <Redirect to="/404"></Redirect>
          </Switch>
        </div>
      );
    }
}

export default RouteA;