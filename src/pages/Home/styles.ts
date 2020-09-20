import styled from 'styled-components';

import { colors } from '../../styles/colors';

import background from '../../assets/HERO_BG.jpg';

export const Introduce = styled.section`
  margin: 10px 0;
`;

export const Background = styled.div`
  border-radius: 4px;
  background: url(${background}) no-repeat;
  background-size: cover;
  padding: 20px 10px;

  @media screen and (min-width: 768px) {
    height: 300px;
    padding: 20px 30px;
    display: flex;
    align-items: center;
  }
`;

export const IntroduceContent = styled.div`
  h1,
  p,
  button {
    color: #ffffff;
    max-width: 300px;

    @media screen and (min-width: 768px) {
      max-width: 400px;
    }
  }

  h1 {
    font-size: 28px;
    font-weight: 300;

    @media screen and (min-width: 768px) {
      font-size: 36px;
    }
  }

  p {
    margin: 20px 0;
    font-size: 14px;

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }

  button {
    background: none;
    border: none;
    font-size: 14px;
    font-weight: bold;

    @media screen and (min-width: 768px) {
      font-size: 18px;

      svg {
        transition: margin-left 0.1s;
      }

      &:hover {
        svg {
          margin-left: 10px;
        }
      }
    }

    svg {
      vertical-align: middle;
    }
  }
`;

export const Explorer = styled.section`
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

export const ExploreCard = styled.button`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  overflow: hidden;

  & + button {
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

export const Adventure = styled.section`
  margin: 40px 0;
  overflow-x: scroll;

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

export const AdventureContent = styled.div``;
