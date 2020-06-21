import React, { Component } from 'react';
import './App.less';
import { Switch,Route ,Redirect} from 'react-router-dom'
import { adminRoutes} from './routes'
// 高价组件
import { Frame} from './components'

function App() {
  return (
    <Frame>
      <div className="App">
       <Switch>
         {
           adminRoutes.map(route=>{
             return (
               <Route path={route.path} component={route.component} key={route.path}></Route>
             )
           })
         }
         <Redirect to="/admin/dashboard" from="/admin"></Redirect>
       </Switch>
    </div>
    </Frame>
  );
}
export default App
