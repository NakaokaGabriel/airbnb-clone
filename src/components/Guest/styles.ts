import styled from 'styled-components';

import { colors } from '../../styles/colors';

interface GuestProps {
  toggleGuest: boolean;
}

export const Wrapper = styled.div<GuestProps>`
  display: ${(props) => (props.toggleGuest ? 'block' : 'none')} !important;
  background: #fff !important;
  width: 100% !important;
  position: absolute !important;
  top: 100% !important;
  left: 0 !important;
  transform: translateY(5%) !important;
  border-radius: 6px !important;
  box-shadow: 0px 0px 11px 4px rgba(0, 0, 0, 0.05) !important;
  border: 1px solid rgba(164, 164, 164, 0.5) !important;
  padding: 20px !important;
  z-index: 998 !important;
`;

export const Row = styled.div`
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;

  & + div {
    margin-top: 20px !important;
  }
`;

export const GuestType = styled.div`
  strong {
    display: block !important;
    font-size: 1.4em !important;
    color: ${colors.darkGrey} !important;
  }

  span {
    display: block !important;
    color: ${colors.middleGray} !important;
    font-weight: lighter !important;
    margin-top: 5px !important;
    font-size: 1.2em !important;
  }
`;

export const GuestNumber = styled.div`
  button {
    background: none !important;
    border: 1px solid ${colors.middleGray} !important;
    color: ${colors.middleGray} !important;
    font-size: 1.4em !important;
    font-weight: bold !important;
    width: 35px !important;
    height: 35px !important;
    border-radius: 1000px !important;
    padding: 0 !important;
  }

  span {
    margin: 0 10px !important;
    font-size: 1.4em !important;
  }
`;
