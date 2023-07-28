import React, { Component } from 'react';
import { nanoid } from 'nanoid';
//Components
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
//Style
import './App.scss';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  getFilteredContacts = () => {
    const filter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  getFilterQuery = e => {
    this.setState({ filter: e.target.value });
  };

  addContact = contact => {
    const { name, number } = contact;
    if (this.isContactExist(name)) {
      window.alert(name + ' is already in contacts!');
      return;
    }
    this.setState(prevState => ({
      contacts: [
        {
          id: nanoid(),
          name: name,
          number: number,
        },
        ...prevState.contacts,
      ],
    }));
  };

  isContactExist = newContact => {
    return this.state.contacts.some(contact => contact.name === newContact);
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <div>
        <ContactForm onSubmitForm={this.addContact} />
        <Filter filter={filter} onChangeInfo={this.getFilterQuery} />
        <ContactList
          contacts={this.getFilteredContacts()}
          onDeleteClick={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;