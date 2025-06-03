import React from 'react';
import Button from '../Button/Button';

function Options() {
  return (
    <div className="flex items-center gap-16">
      <a
        href="#"
        className="hover:font-medium"
      >
        Login
      </a>
      <a
        href="#"
        className="hover:font-medium"
      >
        Help
      </a>
      <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3.5 shadow shadow-gray-500 min-w-fit font-semibold text-sm cursor-pointer">
        Try for free
      </Button>
    </div>
  );
}

export default Options;
