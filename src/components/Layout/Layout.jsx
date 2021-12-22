import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';

const Layout = props => {
  return (
    <>
      <NavBar />
      <main>{props.children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
