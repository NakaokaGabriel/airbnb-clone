import styled from 'styled-components';

import { colors } from '../../styles/colors';

import background from '../../assets/HERO_BG.jpg';

interface AdventureFocusProps {
  focus: boolean;
}

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

export const Adventure = styled.section`
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

export const AdventureContent = styled.div`
  overflow: hidden;
  position: relative;
`;

export const SlideButton = styled.div<AdventureFocusProps>`
  display: none;

  @media screen and (min-width: 768px) {
    display: ${(props) => (props.focus ? 'block' : 'none')};

    button {
      position: absolute;
      top: 45%;
      transform: translateY(-100%);
      border: none;
      border-radius: 50%;
      background: ${colors.red};
      margin: 0 10px;

      svg {
        color: ${colors.background};
      }

      & + button {
        right: 0;
      }
    }
  }
`;
