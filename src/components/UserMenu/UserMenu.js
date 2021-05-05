import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import avatar from './avatar.png';
import Button from 'react-bootstrap/Button';
import styles from './UserMenu.module.css';

const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <div style={{ marginLeft: 'auto', width: 'auto' }}>
      <img className={styles.Avatar} src={avatar} alt="" width="32" />
      <span>Welcome, {name}</span>
      <Button
        className={styles.Button}
        variant="warning"
        type="button"
        onClick={onLogout}
      >
        Logout
      </Button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
