/* eslint-disable jsx-quotes */
import React from 'react';

const Section = ({ children }) => {
  return (
    <section
      id="fish"
      className="container w-full mx-auto py-2 pb-16 px-2  flex flex-row flex-wrap justify-center sm:justify-start content-center"
    >
      {children}
    </section>
  );
};

export default Section;
