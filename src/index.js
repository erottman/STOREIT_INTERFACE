import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App'
import TenentsPage from './components/TenentsPage'
import Login from './components/Login'
import FacilityPage from './components/FacilityPage'


ReactDOM.render((
  <div>
    <Router history={browserHistory}>
      <Route path ="/" component={App}>
      <Route path ="/login" component={Login}/>
      <Route path ="/tenents" component={TenentsPage}/>
      <Route path ="/facility" component={FacilityPage}/>
    </Route>
    </Router>
  </div>)
,(document.getElementById('root'))
)
