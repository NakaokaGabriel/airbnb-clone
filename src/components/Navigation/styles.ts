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
`;

export const NavigationContainer = styled.div`
  > button {
    border: none;
    background: transparent;
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

  > li button {
    display: block;
    width: 100%;
    text-align: center;
    padding: 10px 0;
    color: ${colors.background};
    border: none;
    background: none;
  }
`;
