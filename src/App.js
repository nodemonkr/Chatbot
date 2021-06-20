import React from 'react';
import './App.css';
import NavbarComponent from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages'; 
import Chatbot from './pages/chatbot'; 
import Team from './pages/team'; 
import SignUp from './pages/signUp';
import Login from './pages/login';


function App() {
  return (

    <Router>
        <NavbarComponent/>
        <Switch className="header">
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
