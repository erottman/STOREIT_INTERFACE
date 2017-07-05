import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App'
import TenentsPage from './components/TenentsPage'
import Login from './components/Login'
import FacilityPage from './components/FacilityPage'
import BoxesPage from './components/BoxesPage'


ReactDOM.render((
  <div>
    <Router history={browserHistory}>
      <Route path ="/" component={App}>
      <Route path ="/login" component={Login}/>
      <Route path ="/tenents" component={TenentsPage}/>
      <Route path ="/facility" component={FacilityPage}/>
      <Route path ="/boxes" component={BoxesPage}/>
    </Route>
    </Router>
  </div>)
,(document.getElementById('root'))
)
