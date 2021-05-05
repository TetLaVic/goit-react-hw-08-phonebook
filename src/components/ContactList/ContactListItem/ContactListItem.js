import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const ContactListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <ListGroup.Item id={id} className={styles.ListGroup.Item}>
      {name}: {number}
      <Button
        className={styles.Button}
        variant="outline-danger"
        onClick={() => {
          onDeleteContact(id);
        }}
        className={styles.buttonListItem}
      >
        Delete
      </Button>
    </ListGroup.Item>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
export default ContactListItem;
