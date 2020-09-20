import React from 'react';

import { Container } from './styles';

export interface CardProps {
  type?: 'mini' | 'medium' | 'large';
}

const Card: React.FC<CardProps> = ({ children, type }) => {
  return <Container type={type}>{children}</Container>;
};

export default Card;
