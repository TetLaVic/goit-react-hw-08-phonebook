import { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as genId } from 'uuid';
import authOperations from '../../redux/auth/auth-operations';

class LoginPage extends Component {
  state = { email: '', password: '' };

  reset = () => {
    this.setState({ email: '', password: '' });
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
    this.props.onLogin(this.state);
    this.reset();
  };

  render() {
    // const { email, password } = this.state;
    const emailInputId = genId();
    const passwordInputId = genId();
    return (
      <>
        <h2>Login page</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={emailInputId}>
            Email
            <input
              type="emal"
              name="email"
              id={emailInputId}
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor={passwordInputId}>
            Password
            <input
              type="password"
              name="password"
              id={passwordInputId}
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Sign in</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginPage);

// import { connect } from 'react-redux';
// import operations from '../../redux/ContactForm/ContactForm-operations';

// class ContactForm extends Component {
//   state = { name: '', number: '' };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   handleChange = event => {
//     event.preventDefault();
//     const { name, value } = event.currentTarget;
//     const currentState = this.state;
//     const updateState = { [name]: value };
//     this.setState({ ...currentState, ...updateState });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   render() {
//     const nameInputId = genId();
//     const telInputId = genId();

//     return (
//       <form onSubmit={this.handleSubmit} className={styles.contactForm}>
//         <label htmlFor={nameInputId} className={styles.labelForm}>
//           Name
//           <input
//             type="text"
//             name="name"
//             id={nameInputId}
//             value={this.state.name}
//             onChange={this.handleChange}
//             className={styles.inputForm}
//           />
//         </label>

//         <label htmlFor={telInputId} className={styles.labelForm}>
//           Number
//           <input
//             type="tel"
//             name="number"
//             id={telInputId}
//             value={this.state.number}
//             onChange={this.handleChange}
//             className={styles.inputForm}
//           />
//         </label>
//         <button type="submit" className={styles.buttonForm}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// ContactForm.propTypes = {
//   name: PropTypes.string,
//   number: PropTypes.number,
// };

// const mapDispatchToProps = dispatch => ({
//   onSubmit: contact => dispatch(operations.addContact(contact)),
// });

// export default connect(null, mapDispatchToProps)(ContactForm);
