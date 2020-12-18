import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import './index.css';

export default function App() {

  return(
      <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Home}/>
          </Switch>
      </BrowserRouter> 
  )
}