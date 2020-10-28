import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Container = styled.div`
  position: relative;
  width: 100%;

  @media screen and (min-width: 1024px) {
    flex: 1;

    &:last-child {
      flex: 0;
    }
  }

  > label {
    cursor: text;
    border: 1px solid ${colors.middleGray};
    border-radius: 4px;
    font-size: 10px;
    font-weight: bold;
    color: ${colors.darkGrey};
    padding: 5px 10px 2px 10px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media screen and (min-width: 1024px) {
      height: 50px;
      padding: 8px 10px 4px 10px;
      font-size: 12px;
    }

    input {
      display: block;
      border: none;
      background: none;
      color: ${colors.middleGray};
      font-size: 16px;
    }
  }

  > button {
    background: ${colors.red};
    border: none;
    border-radius: 4px;
    display: block;
    width: 100%;
    padding: 10px;
    text-align: left;
    color: #fff;
    font-weight: bold;

    @media screen and (min-width: 1024px) {
      width: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1000px;
    }

    svg {
      vertical-align: middle;
      margin-right: 10px;

      @media screen and (min-width: 1024px) {
        margin-right: 0;
      }
    }

    @media screen and (min-width: 1024px) {
      span {
        display: none;
      }
    }
  }

  & + div {
    margin-top: 20px;

    @media screen and (min-width: 1024px) {
      margin-top: 0;
      margin-left: 10px;
    }
  }
`;
