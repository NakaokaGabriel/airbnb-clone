import styled from 'styled-components';

import { colors } from '../../styles/colors';

interface Props {
  menu: boolean;
}

export const Wrapper = styled.nav`
  z-index: 10;
  position: relative;
`;

export const Container = styled.div`
  background: ${colors.red};
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 0 20px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    padding: 0 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 5px 60px;
  }
`;

export const NavigationContainer = styled.div`
  > button {
    border: none;
    background: transparent;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;

export const NavigationMenu = styled.ul<Props>`
  background: ${colors.red};
  position: absolute;
  display: block;
  left: 0;
  top: 100%;
  transition: transform 0.2s;
  transform: ${(props) => (props.menu ? 'translateY(0)' : 'translateY(-100%)')};
  width: 100%;
  padding: 10px 0;
  z-index: -1;

  @media screen and (min-width: 768px) {
    position: unset;
    transform: unset;

    display: flex;
    align-items: center;
  }

  > li button {
    display: block;
    width: 100%;
    text-align: center;
    padding: 10px 0;
    color: ${colors.background};
    border: none;
    background: none;

    @media screen and (min-width: 768px) {
      font-weight: bold;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 14px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 768px) {
    li + li {
      margin-left: 20px;
    }
  }
`;
