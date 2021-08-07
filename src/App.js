import React from 'react';
import './App.css';
import NavbarComponent from './components/navbar/';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Chatbot from './pages/Chatbot';
import Team from './pages/Team';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Switch className='header'>
        <Route path='/' exact component={Home} />
        <Route path='/chatbot' component={Chatbot} />
        <Route path='/team' component={Team} />
        <Route path='/signUp' component={SignUp} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
