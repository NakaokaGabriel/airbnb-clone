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
