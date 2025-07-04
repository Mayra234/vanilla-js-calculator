import React from 'react';
import './index.css';

export const Button = ({ children, className, type, onClick }) => {
  return (
    <button type={type} onClick={onClick} className={'button ' + className}>
      {children}
    </button>
  );
};
