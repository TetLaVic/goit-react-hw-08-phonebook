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

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
