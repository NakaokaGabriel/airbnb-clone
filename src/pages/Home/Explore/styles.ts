import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../../styles/colors';

export const Container = styled.section`
  margin-top: 25px;

  @media screen and (min-width: 768px) {
    margin-top: 45px;
  }

  h2 {
    margin-bottom: 15px;
  }
`;

export const ExploreContent = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const ExploreCard = styled(Link)`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  overflow: hidden;

  & + a {
    margin-top: 20px;

    @media screen and (min-width: 768px) {
      margin-top: 0;
      margin-left: 20px;
    }
  }

  > h4 {
    color: ${colors.darkGrey};
    font-size: 16px;
    margin-left: 10px;
  }

  > img {
    width: 100px;
    height: 100px;
  }
`;
