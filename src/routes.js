import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './app/pages/Home';
import PreAnalysis from './app/pages/PreAnalysis';
import PostAnalysis from './app/pages/PostAnalysis';

function Routes() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/analyze" component={PreAnalysis}/>
        <Route path="/analyzed" component={PostAnalysis}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;