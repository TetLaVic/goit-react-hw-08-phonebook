import React from 'react';
import './App.css';
// import { v4 as genId } from 'uuid';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import ContactsPage from './pages/Contacts';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import HomePage from './pages/Home';

const App = () => {
  return (
    <>
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        {/* <Route exact path="/contacts" component={ContactsPage} /> */}
        <Route component={HomePage} />
      </Switch>
    </>
  );
};

export default App;
