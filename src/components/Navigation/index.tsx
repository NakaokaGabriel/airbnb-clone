import React from 'react';
import { BiMenu } from 'react-icons/bi';

import { Container, NavigationContainer, NavigationMenu } from './styles';

import logo from '../../assets/Logo_Airbnb.svg';

const Navigation: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Airbnb" />

      <NavigationContainer>
        <button type="button">
          <BiMenu size={32} />
        </button>
        <NavigationMenu>
          <li>
            <a href="#">English (EN)</a>
          </li>
          <li>
            <a href="#">US$</a>
          </li>
          <li>
            <a href="#">Become a host</a>
          </li>
          <li>
            <a href="#">Create your experience</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Registration</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </NavigationMenu>
      </NavigationContainer>
    </Container>
  );
};

export default Navigation;
