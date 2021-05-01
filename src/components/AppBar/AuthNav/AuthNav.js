import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <ul className={styles.AuthNav}>
      <li className={styles.AuthNavLink}>
        <NavLink
          to="/register"
          exact
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
        >
          Registration
        </NavLink>
      </li>
      <li className={styles.AuthNavLink}>
        <NavLink
          to="/login"
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
        >
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
