import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SiteNav.module.css';
import { connect } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors';

const SiteNav = ({ isAuthenticated }) => {
  return (
    <ul className={styles.SiteNav}>
      <li className={styles.SiteNavLink}>
        <NavLink
          to="/"
          exact
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
        >
          Home
        </NavLink>
      </li>
      <li className={styles.SiteNavLink}>
        {isAuthenticated && (
          <NavLink
            to="/contacts"
            className={styles.NavLink}
            activeClassName={styles.NavLinkActive}
          >
            Contacts
          </NavLink>
        )}
      </li>
    </ul>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(SiteNav);
