import { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as genId } from 'uuid';
import authOperations from '../../redux/auth/auth-operations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './RegisterPage.module.css';

class RegisterPage extends Component {
  state = { name: '', email: '', password: '' };

  reset = () => {
    this.setState({ name: '', email: '', password: '' });
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
    this.props.onRegister(this.state);
    this.reset();
  };

  render() {
    const nameInputId = genId();
    const emailInputId = genId();
    const passwordInputId = genId();
    return (
      <>
        <h2>Registration page</h2>
        <Form onSubmit={this.handleSubmit} className={styles.Form}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              name="name"
              value={this.state.name}
              placeholder="Enter name"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={this.state.email}
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
      //   <h2>Registration page</h2>
      //   <form onSubmit={this.handleSubmit}>
      //     <label htmlFor={nameInputId}>
      //       Name
      //       <input
      //         type="text"
      //         name="name"
      //         id={nameInputId}
      //         value={this.state.name}
      //         onChange={this.handleChange}
      //       />
      //     </label>
      //     <label htmlFor={emailInputId}>
      //       Email
      //       <input
      //         type="email"
      //         name="email"
      //         id={emailInputId}
      //         value={this.state.email}
      //         onChange={this.handleChange}
      //       />
      //     </label>

      //     <label htmlFor={passwordInputId}>
      //       Password
      //       <input
      //         type="password"
      //         name="password"
      //         id={passwordInputId}
      //         value={this.state.password}
      //         onChange={this.handleChange}
      //       />
      //     </label>
      //     <button type="submit">Register</button>
      //   </form>
      // </>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
