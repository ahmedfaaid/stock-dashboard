import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
