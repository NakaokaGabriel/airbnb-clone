import styled from 'styled-components';

import { colors } from '../../styles/colors';

interface SearchProps {
  searchMenu: boolean;
}

export const Container = styled.div`
  padding: 10px 10px;
`;

export const Search = styled.div`
  background: #fff;
  border-radius: 4px;

  > .form-input {
    background: #fff;
    display: block;
    position: relative;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    width: 100%;

    > input {
      cursor: pointer;
      width: 100%;
      background: none;
      border: 1px solid ${colors.middleGray};
      border-radius: 4px;
      padding: 12px 0 10px 10px;
      color: ${colors.middleGray};
      font-size: 16px;

      &::placeholder {
        color: ${colors.middleGray};
        font-size: 16px;
        font-weight: bold;
      }
    }

    > div {
      position: absolute;
      right: 10px;
      top: 50%;
      height: 30px;
      width: 30px;
      transform: translateY(-50%);
      border: none;
      border-radius: 1000px;
      background: ${colors.red};
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Form = styled.form<SearchProps>`
  display: ${(props) => (props.searchMenu ? '' : 'none')};
  padding: 10px 20px;

  .form-input {
    position: relative;
    width: 100%;

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

      svg {
        vertical-align: middle;
        margin-right: 10px;
      }
    }

    & + div {
      margin-top: 20px;
    }
  }
`;
