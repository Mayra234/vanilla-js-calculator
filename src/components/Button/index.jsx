import React from 'react';
import './index.css';

export const Button = ({ children = '', className = '' }) => {
  return <button className={'button ' + className}>{children}</button>;
};
