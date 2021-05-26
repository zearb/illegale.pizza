import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
  } from "react-router-dom";
// import { Carta } from '../components/Carta';
import { Home } from '../components/Home';
// import { Pedidos } from '../components/Pedidos';

export const AppRouter = () => {
    return (
      <Router>
        <div>
          <Switch>
            {/* <Route path="/carta">
              <Carta />
            </Route> */}
            <Route path="/">
              <Home />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    )
}
