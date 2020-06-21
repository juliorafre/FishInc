import React from 'react';

const Button = ({ label, selected, handleState }) => {
  return (
    <button
      className={`South text-sm font-poppins py-1 px-2 rounded-lg font-bold mr-2 w-16 
      ${
        selected
          ? 'bg-fish-accent-cian cursor-default'
          : 'bg-gray-300 hover:bg-gray-400'
      }`}
      type="button"
      disabled={selected}
      onClick={() => handleState()}
    >
      {label}
    </button>
  );
};

export default Button;
