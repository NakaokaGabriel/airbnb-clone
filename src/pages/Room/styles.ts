import styled from 'styled-components';

import { colors } from '../../styles/colors';

interface RoomProps {
  photoTooltip: boolean;
}

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

    @media screen and (min-width: 968px) {
      & + div {
        margin-left: 30px;
      }
    }
  }

  div:first-child {
    flex: 2;
  }
`;

export const MainContent = styled.div``;

export const PhotoPreview = styled.div<RoomProps>`
  position: relative;

  img {
    border-radius: 6px;
  }

  .all-images {
    position: absolute;
    bottom: 10px;
    right: 10px;

    button {
      background: #000;
      padding: 8px;
      border: none;
      border-radius: 6px;

      svg {
        color: ${colors.background};
        width: 20px;
        height: 20px;
      }
    }

    span {
      visibility: visible;
      position: absolute;
      right: 100%;
      margin-right: 2px;
      top: 0;
      text-align: center;
      background: #000;
      color: ${colors.background};
      width: 160px;
      font-weight: 400;
      padding: 10px;
      border-radius: 6px;

      @media screen and (min-width: 768px) {
        visibility: ${(props) => (props.photoTooltip ? 'visible' : 'hidden')};
        right: -10px;
        top: 40px;
        transform: translateY(20px);

        &::before {
          content: '';
          position: absolute;
          top: -5px;
          right: 15px;
          background: #000;
          height: 20px;
          width: 20px;
          transform: rotate(45deg);
          border-radius: 2px;
          z-index: -1;
        }
      }
    }
  }
`;

export const Host = styled.div``;

export const Description = styled.div``;
