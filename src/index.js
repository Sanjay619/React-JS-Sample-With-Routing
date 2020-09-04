import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Link, BrowserRouter, Switch  } from 'react-router-dom';
import Aboutus from './components/Aboutus'

import * as serviceWorker from './serviceWorker';


const routs = (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutus">Aboutus</Link>
        </li>
   
      </ul>
      <Switch>
      <Route exact path = "/" component = {App} />
      <Route exact path = "/aboutus" component = {Aboutus} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routs, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
