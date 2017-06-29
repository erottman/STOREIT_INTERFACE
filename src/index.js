import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import CelebrityJokes from './components/CelebrityJokes';
import { Router, Route, browserHistory } from 'react-router';

const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/special" component={CelebrityJokes}/>
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
