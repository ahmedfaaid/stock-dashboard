import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
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
