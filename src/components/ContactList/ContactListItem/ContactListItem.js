import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <li id={id} className={styles.listItem}>
      {name}: {number}
      <button
        onClick={() => {
          onDeleteContact(id);
        }}
        className={styles.buttonListItem}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
export default ContactListItem;
