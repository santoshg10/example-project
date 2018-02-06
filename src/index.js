import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import App from './src/App'
import { BrowserRouter as Router } from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import SignIn from './src/components/Authentication/SignIn';
import SignUp from './src/components/Authentication/SignUp';
import 'bootstrap/dist/css/bootstrap.css'
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/signin" component={SignIn}/>
      <Route path="/signup" component={SignUp}/>
    </Switch>
  </Router>,document.getElementById("root")
);