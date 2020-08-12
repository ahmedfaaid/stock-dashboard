import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
