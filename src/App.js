import React, { Component } from 'react';
import './App.css';
// import { v4 as genId } from 'uuid';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import ContactsPage from './pages/Contacts';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import HomePage from './pages/Home';
import authOperations from './redux/auth/auth-operations';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/contacts" component={ContactsPage} />
          <Route component={HomePage} />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
