import React from 'react';

function Button({ color, name, logo }) {
  return (
    <button
      type="button"
      className={`text-white bg-gradient-to-r ${color} hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
    >
      {logo && <img src={logo} alt={name} className="w-6 h-6 mr-2 inline-block" />} {/* Display logo if provided */}
      {name}
    </button>
  );
}

export default Button;
