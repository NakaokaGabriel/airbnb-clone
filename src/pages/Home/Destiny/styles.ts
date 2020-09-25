import styled from 'styled-components';

import { colors } from '../../../styles/colors';

export const Container = styled.section`
  margin: 40px 0;

  p {
    font-size: 12px;
    color: ${colors.middleGray};
    margin-top: 10px;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      max-width: 500px;
    }
  }
`;

export const DestinyContent = styled.div`
  @media screen and (min-width: 468px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  @media screen and (min-width: 468px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
