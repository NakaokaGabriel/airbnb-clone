import React from 'react';

import { Container } from './styles';

export interface CardProps {
  type?: 'mini' | 'medium' | 'large';
  to: string;
}

const Card: React.FC<CardProps> = ({ children, type, to }) => {
  return (
    <Container to={to} type={type}>
      {children}
    </Container>
  );
};

export default Card;
