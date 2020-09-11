import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';

import { colors } from '../../styles/colors';

import {
  Wrapper,
  Container,
  NavigationContainer,
  NavigationMenu,
} from './styles';

import logo from '../../assets/Logo_Airbnb.svg';

const Navigation: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <Wrapper>
      <Container>
        <img src={logo} alt="Airbnb" />

        <NavigationContainer>
          <button type="button" onClick={() => setToggleMenu(!toggleMenu)}>
            <BiMenu size={32} color={colors.background} />
          </button>
          <NavigationMenu menu={toggleMenu}>
            <li>
              <button type="button">English (EN)</button>
            </li>
            <li>
              <button type="button">US$</button>
            </li>
            <li>
              <button type="button">Become a host</button>
            </li>
            <li>
              <button type="button">Create your experience</button>
            </li>
            <li>
              <button type="button">Help</button>
            </li>
            <li>
              <button type="button">Registration</button>
            </li>
            <li>
              <button type="button">Login</button>
            </li>
          </NavigationMenu>
        </NavigationContainer>
      </Container>
    </Wrapper>
  );
};

export default Navigation;
