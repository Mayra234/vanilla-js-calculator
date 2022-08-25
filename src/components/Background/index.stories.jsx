import React from 'react';
import { Background } from './index';

export default {
  title: 'Components/Background',
};

export const Overview = (args) => {
  return <Background {...args} />;
};

Overview.args = {
  palette: 'primary',
};
