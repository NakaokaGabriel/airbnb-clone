import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';

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
        <Link to="/">
          <img src={logo} alt="Airbnb" />
        </Link>

        <NavigationContainer>
          <button type="button" onClick={() => setToggleMenu(!toggleMenu)}>
            <BiMenu size={32} color={colors.background} />
          </button>
          <NavigationMenu menu={toggleMenu}>
            <li>
              <button type="button">Torne-se um anfitrião</button>
            </li>
            <li>
              <button type="button">Crie sua expêriencia</button>
            </li>
            <li>
              <button type="button">Cadastrar</button>
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
