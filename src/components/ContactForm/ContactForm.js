import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { connect } from 'react-redux';
import operations from '../../redux/ContactForm/ContactForm-operations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    return (
      <Form onSubmit={this.handleSubmit} className={styles.Form}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            name="name"
            value={this.state.email}
            placeholder="Enter name"
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicNumber">
          <Form.Label>Number</Form.Label>
          <Form.Control
            type="tel"
            name="number"
            placeholder="Enter phone number"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add contact
        </Button>
      </Form>
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
