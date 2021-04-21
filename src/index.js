import React from 'react';
import ReactDOM from 'react-dom';
import './css/dashboard.css';
import Home from './Home';
import Sidebar from "./Sidebar";
import { Switch, Route, Redirect } from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Myaccount from './Myaccount';
import Myorders from './Myorders';

ReactDOM.render(<BrowserRouter>
<Switch>
<div className="container-fluid">
<div className="row">
<Sidebar/>
  <Route exact path="/home" component={Home}></Route>
  <Route  path="/myaccount" component={Myaccount}></Route>
  <Route  path="/myorders" component={Myorders}></Route>
  <Redirect to="/home"/>
  </div>
  </div>
</Switch>
</BrowserRouter>
      ,
  document.getElementById('root')
);

