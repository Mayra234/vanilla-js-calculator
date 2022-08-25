import React from 'react';
import './index.css';

export const CalculatorScreen = ({ children = '' }) => {
  return <div className="operations-viewer">{children}</div>;
};
