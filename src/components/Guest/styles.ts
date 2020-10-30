import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Wrapper = styled.div`
  background: #fff;
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  transform: translateY(5%);
  border-radius: 6px;
  box-shadow: 0px 0px 11px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(164, 164, 164, 0.5);
  padding: 20px;
  z-index: 998;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + div {
    margin-top: 20px;
  }
`;

export const GuestType = styled.div`
  strong {
    display: block;
    font-size: 1.4em;
    color: ${colors.darkGrey};
  }

  span {
    display: block;
    color: ${colors.middleGray};
    font-weight: lighter;
    margin-top: 5px;
    font-size: 1.2em;
  }
`;

export const GuestNumber = styled.div`
  button {
    background: none;
    border: 1px solid ${colors.middleGray};
    color: ${colors.middleGray};
    font-size: 1.4em;
    font-weight: bold;
    width: 35px;
    height: 35px;
    border-radius: 1000px;
  }

  span {
    margin: 0 10px;
    font-size: 1.4em;
  }
`;
