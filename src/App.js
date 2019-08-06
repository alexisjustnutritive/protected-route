import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Secret from './pages/Secret';
import SecretRoute from './components/SecretRoute';

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={ Login } />
            <SecretRoute exact path="/secret" Component={ Secret } />
            <Route path="*" component={ () => 'page not found' } />
        </Switch>
    </Router>
  );
}

export default App;
