import { Component } from 'react';
import ContactListItem from './ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { connect } from 'react-redux';
import operations from '../../redux/ContactForm/ContactForm-operations';
import selectors from '../../redux/ContactForm/ContactForm-selectors';
import ListGroup from 'react-bootstrap/ListGroup';

class ContactList extends Component {
  componentDidMount() {
    this.props.onLoad();
  }
  render() {
    const { contactsList, onDeleteContact } = this.props;
    return (
      <ListGroup className={styles.ListGroup}>
        {contactsList.map(({ name, number, id }) => {
          return (
            <ContactListItem
              name={name}
              number={number}
              key={id}
              id={id}
              onDeleteContact={onDeleteContact}
              className={styles.contactList}
            />
          );
        })}
      </ListGroup>
    );
  }
}

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};

// const getContactsToShow = ({ filter, items }) => {
//   const normalizedFilter = filter.toLowerCase();
//   return items.filter(({ name }) =>
//     name ? name.toLowerCase().includes(normalizedFilter) : false,
//   );
// };

const mapStateToProps = state => ({
  contactsList: selectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: contactId => dispatch(operations.deleteContact(contactId)),
  onLoad: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
