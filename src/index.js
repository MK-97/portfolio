import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './app/portfolio';
import Experience from './components/experience/Experience';
import reportWebVitals from './reportWebVitals';
import ExternalImport from './app/externalimport';
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ExternalImport />
    <BrowserRouter>
    <Switch>
      <Route exact path = "/" component ={Portfolio}></Route>
      <Route exact path = "/experience" component ={Experience}></Route>
    </Switch>
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
