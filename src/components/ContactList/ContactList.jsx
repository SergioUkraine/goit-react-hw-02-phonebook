import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Components
import ContactListItem from './ContactListItem';
//Style
import './ContactList.scss';

class ContactList extends Component {
  render() {
    const { contacts, onDeleteClick } = this.props;
    return (
      <ul className='contact-list'>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactListItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteClick={onDeleteClick}
            />
          );
        })}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default ContactList;