import React from 'react';

const App = ({ children }) => {
  return (
    <section
      id="fish"
      className="container w-full mx-auto py-16 pl-4 pr-2 bg-fish-background-lightGray flex flex-row flex-wrap justify-start align-middle"
    >
      {children}
    </section>
  );
};

export default App;
