import React from 'react';
import { Container } from '../components/Container';
import { Background } from '../components/Background';

import './index.css';
import { ContentFloat } from '../components/ContentFloat';

export const MainLayout = ({ children = '' }) => {
  return (
    <Container>
      <ContentFloat>{children}</ContentFloat>
      <Background />
      <Background palette="secondary" />
    </Container>
  );
};
