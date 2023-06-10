import React from 'react';
import PropTypes from 'prop-types';
import ContactListElement from './Contact-list-element';
import css from './Contact-list.module.css';

const ContactList = ({ data, onDeleteContact }) => (
  <ul className={css['contacts-list']}>
    {data.contacts
      .filter(element => element.name.includes(data.filter))
      .map(element => (
        <ContactListElement
          element={element}
          key={element.id}
          onDeleteContact={onDeleteContact}
        />
      ))}
  </ul>
);

ContactList.propTypes = {
  data: PropTypes.object,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
