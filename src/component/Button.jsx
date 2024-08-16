import React from 'react';

function Button({ title, extraStyle, name }) {
  return (
    <button
      name={name}
      className={`bg-primary-5 text-white w-full font-kubmh font-bold text-sm leading-[17.36px] py-3 border-[.5px] border-gray-100 rounded ${extraStyle}`}
    >
      {title}
    </button>
  );
}

export default Button;