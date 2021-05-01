import React from 'react';
import AuthNav from './AuthNav';
import UserMenu from '../UserMenu';

const AppBar = ({ isAuthenticated }) => {
  return <header>{isAuthenticated ? <UserMenu /> : <AuthNav />}</header>;
};

export default AppBar;
