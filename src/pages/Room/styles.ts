import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Content = styled.div`
  padding: 20px 0;
`;

export const Title = styled.div`
  h1 {
    color: ${colors.red};
    font-size: 1.9em;

    @media screen and (min-width: 1024px) {
      font-size: 2.2em;
    }
  }

  .stars {
    display: flex;
    align-items: center;
    margin: 5px 0 20px;
    color: ${colors.darkGrey};

    svg {
      color: ${colors.red};
      margin-right: 5px;
      width: 18px;
      height: 18px;

      @media screen and (min-width: 1024px) {
        width: 24px;
        height: 24px;
      }
    }

    strong {
      margin-right: 5px;
    }
  }
`;

export const RowContent = styled.div`
  @media screen and (min-width: 968px) {
    display: flex;
  }

  > div {
    flex: 1;

    & + div {
      margin-left: 30px;
    }
  }

  div:first-child {
    flex: 2;
  }
`;

export const MainContent = styled.div``;

export const Location = styled.div``;

export const Host = styled.div``;

export const Description = styled.div``;
