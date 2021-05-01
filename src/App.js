import { Component } from 'react';
import './App.css';

import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
// import { v4 as genId } from 'uuid';

class App extends Component {
  // componentDidMount() {
  // }

  // componentDidUpdate(_, prevState) {
  // }

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </>
    );
  }
}

export default App;
