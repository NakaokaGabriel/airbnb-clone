import styled from 'styled-components';

import { colors } from '../../../styles/colors';

export const Container = styled.div`
  @media screen and (max-width: 968px) {
    position: fixed;
    bottom: 0;
    left: 0;
    background: ${colors.red};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
  }

  @media screen and (min-width: 968px) {
    position: sticky !important;
    top: 30px;
    height: 100%;
    background: #fff;
    border: 1px solid rgba(164, 164, 164, 0.5);
    border-radius: 6px;
    padding: 20px;
    box-shadow: 0px 0px 11px 4px rgba(0, 0, 0, 0.05);
  }
`;

export const Header = styled.div`
  @media screen and (max-width: 968px) {
    span {
      color: ${colors.background};
      font-size: 0.8em;

      strong {
        font-size: 1.4em;
      }
    }

    .stars {
      display: flex;
      align-items: center;
      color: ${colors.background};
      margin-top: 5px;

      svg {
        color: ${colors.background};
        margin-right: 5px;
        width: 14px;
        height: 14px;
      }

      strong {
        margin-right: 5px;
      }
    }
  }

  @media screen and (min-width: 969px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 1em;
      color: ${colors.middleGray};

      strong {
        font-size: 2em;
        color: ${colors.darkGrey};
        margin-right: 5px;
      }
    }

    .stars {
      display: flex;
      align-items: center;
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
  }
`;

export const Form = styled.form`
  @media screen and (max-width: 968px) {
    label {
      display: none;
    }

    button {
      background: #fff;
      color: ${colors.red};
      border: none;
      border-radius: 6px;
      padding: 10px;
      font-size: 0.9em;
      font-weight: bold;
    }
  }

  @media screen and (min-width: 969px) {
    div {
      margin-left: 0;
    }

    button {
      width: 100%;
      background: ${colors.red};
      color: ${colors.background};
      border: none;
      border-radius: 6px;
      padding: 15px 0;
      font-size: 0.9em;
      font-weight: bold;
      margin-top: 20px;
    }
  }
`;

export const AvailableDate = styled.div`
  @media screen and (min-width: 969px) {
    display: flex;
    margin: 20px 0;
    position: relative;

    div {
      position: unset;
    }

    > div + div {
      margin-left: 10px;
      margin-top: 0;
    }
  }
`;
