import React from 'react';

const HeaderContainer = ({ children }) => {
  return (
    <header className="header container mx-auto p-4 z-50">
      <div className="container shadow-fishHeader w-full px-5 py-3 bg-white rounded-lg flex flex-row flex-no-wrap justify-between items-center">
        {children}
      </div>
    </header>
  );
};

export default HeaderContainer;
