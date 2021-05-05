import React from 'react';
import SiteNav from './SiteNav';
import AuthNav from './AuthNav';
import UserMenu from '../UserMenu';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import styles from './AppBar.module.css';
import Navbar from 'react-bootstrap/Navbar';

const AppBar = ({ isAuthenticated }) => {
  return (
    <Navbar bg="primary" variant="dark" className={styles.AppBar}>
      <SiteNav />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </Navbar>
  );
};

/* <Navbar bg="primary" variant="dark">
  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  <Nav className="mr-auto">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#features">Features</Nav.Link>
    <Nav.Link href="#pricing">Pricing</Nav.Link>
  </Nav>
  <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-light">Search</Button>
  </Form>
</Navbar>; */

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
