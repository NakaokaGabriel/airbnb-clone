import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 10px;

  @media screen and (min-width: 580px) and (max-width: 768px) {
    padding: 0 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    max-width: 960px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    max-width: 1200px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1360px;
    margin: 0 auto;
  }
`;
