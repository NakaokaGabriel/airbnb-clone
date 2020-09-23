import styled from 'styled-components';

export const Container = styled.section`
  margin: 40px 0;
`;

export const AccommodationContent = styled.div`
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
    grid-template-columns: repeat(4, 1fr);
  }
`;
