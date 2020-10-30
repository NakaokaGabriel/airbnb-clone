import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  background: #fff;
  height: 100vh;
  width: 100%;
  padding: 0 10px;
  overflow-y: scroll;
`;

export const Header = styled.div`
  padding: 20px 0;
  position: fixed;
  top: 0;
  width: 100%;
  background: #fff;

  button {
    border: none;
    border-radius: 4px;
    width: 40px;
    height: 40px;

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const ListContent = styled.div`
  margin-top: 100px;

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
