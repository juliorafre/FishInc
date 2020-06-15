/* eslint-disable jsx-quotes */
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="container bg-fish-background font-sans relative">
      {children}
    </div>
  );
};

export default Layout;
