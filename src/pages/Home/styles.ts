import styled from 'styled-components';

import background from '../../assets/HERO_BG.jpg';

export const Introduce = styled.div`
  margin: 10px 0;
`;

export const Background = styled.div`
  border-radius: 4px;
  background: url(${background}) no-repeat;
  background-size: cover;
  padding: 20px 10px;

  h1,
  p,
  button {
    color: #ffffff;
    max-width: 300px;
  }

  h1 {
    font-size: 28px;
    font-weight: 300;
  }

  p {
    margin: 20px 0;
    font-size: 14px;
  }

  button {
    background: none;
    border: none;
    font-size: 14px;
    font-weight: bold;

    svg {
      vertical-align: middle;
    }
  }
`;
