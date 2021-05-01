import { Component } from 'react';
import { v4 as genId } from 'uuid';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { connect } from 'react-redux';
import operations from '../../redux/ContactForm/ContactForm-operations';

class ContactForm extends Component {
  state = { name: '', number: '' };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.currentTarget;
    const currentState = this.state;
    const updateState = { [name]: value };
    this.setState({ ...currentState, ...updateState });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  render() {
    const nameInputId = genId();
    const telInputId = genId();

    return (
      <form onSubmit={this.handleSubmit} className={styles.contactForm}>
        <label htmlFor={nameInputId} className={styles.labelForm}>
          Name
          <input
            type="text"
            name="name"
            id={nameInputId}
            value={this.state.name}
            onChange={this.handleChange}
            className={styles.inputForm}
          />
        </label>

        <label htmlFor={telInputId} className={styles.labelForm}>
          Number
          <input
            type="tel"
            name="number"
            id={telInputId}
            value={this.state.number}
            onChange={this.handleChange}
            className={styles.inputForm}
          />
        </label>
        <button type="submit" className={styles.buttonForm}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(operations.addContact(contact)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
