import styled from 'styled-components';

import { colors } from '../../styles/colors';

interface ModalProps {
  modal: boolean;
}

export const Wrapper = styled.div<ModalProps>`
  position: fixed;
  top: ${(props) => (props.modal ? '0%' : '100%')};
  transition: top 0.5s;
  z-index: 999;
  background: #fff;
  height: 100vh;
  width: 100%;
  padding: 0 10px;
`;

export const Header = styled.div`
  padding: 20px 20px;
  display: flex;
  align-items: center;

  button {
    border: none;
    border-radius: 4px;
    width: 40px;
    height: 40px;

    svg {
      width: 30px;
      height: 30px;
      color: ${colors.darkGrey};
    }
  }
`;

export const ListContent = styled.div`
  overflow-y: scroll;
  height: 91vh;
  padding: 20px;

  img {
    border-radius: 6px;
  }

  img + img {
    margin-top: 20px;

    @media screen and (min-width: 768px) {
      margin-top: 0;
    }
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-gap: 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Title = styled.h5`
  color: ${colors.darkGrey};
  font-size: 1.4em;
  margin-left: 20px;
`;
