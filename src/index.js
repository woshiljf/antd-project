import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
// import { Provider} from 'react-redux'
import { mainRoutes} from './routes'
import { BrowserRouter as Router, Route, Redirect,Switch } from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
     <Router>
        <Switch>
          <Route path='/admin' component={App}></Route>
          {
            mainRoutes.map(route=>{
              return (
                <Route path={route.path} component={route.component} key={route.path} exact></Route>
              )
            })
          }
          <Redirect to="/admin" from="/" exact></Redirect>
          <Redirect to="/404"></Redirect>
        </Switch>
     </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
