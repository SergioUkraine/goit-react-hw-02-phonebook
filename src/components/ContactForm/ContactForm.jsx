import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Style
import { Form, FormLabel, FormInput, FormButton } from './ContactForm.styled';

class ContactForm extends Component {
  state = { name: '', number: '' };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  addField = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmitForm(this.state);
    this.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.onSubmitForm} autoComplete="off">
        <FormLabel>
          {'Name'}
          <FormInput
            type="text"
            name="name"
            onChange={this.addField}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel>
          {'Number '}
          <FormInput
            type="tel"
            name="number"
            onChange={this.addField}
            value={number}
            pattern="\+?[0-9\s\-\(\)]+"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default ContactForm;
