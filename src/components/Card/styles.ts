import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../styles/colors';

import { CardProps } from '.';

export const Container = styled(Link)<CardProps>`
  margin-top: 20px;
  display: block;
  text-decoration: none;

  ${(props) => props.type === 'mini'
    && css`
      width: 100%;
      padding: 0 5px;

      > img {
        height: 240px;
        width: 100%;
        border-radius: 4px;
      }

      > div {
        margin-top: 5px;

        span {
          color: ${colors.middleGray};
          font-weight: bold;
          font-size: 12px;
          text-transform: uppercase;
        }

        h4 {
          margin: 5px 0;
          color: ${colors.darkGrey};
        }

        p {
          color: ${colors.darkGrey};
          font-size: 16px;
        }

        .stars {
          display: block;
          color: ${colors.green};
          margin-top: 5px;

          svg {
            margin-left: 2px;
          }
        }
      }
    `}

  ${(props) => props.type === 'medium'
    && css`
      width: 100%;

      > img {
        height: 240px;
        width: 100%;
        border-radius: 4px;
      }

      .content {
        display: flex;
        align-items: center;
        justify-content: space-between;

        div {
          margin: 10px 0;

          strong {
            border: 1px solid ${colors.darkGrey};
            border-radius: 4px;
            color: ${colors.darkGrey};
            text-transform: uppercase;
            padding: 5px;
            display: inline-block;
            font-size: 10px;
          }

          span {
            font-size: 12px;
            color: ${colors.middleGray};
            margin-left: 10px;
          }
        }

        .stars {
          font-size: 14px;
          color: ${colors.darkGrey};
          font-weight: bold;
          display: flex;
          align-items: center;

          svg {
            color: ${colors.red};
            margin-right: 5px;
          }
        }
      }

      > p {
        color: ${colors.darkGrey};
      }
    `}

  ${(props) => props.type === 'large'
    && css`
      max-width: 400px;

      > img {
        height: 240px;
        width: 100%;
        border-radius: 4px;
      }

      h5 {
        color: ${colors.purple};
        font-size: 14px;
        margin: 5px 0;
      }

      p {
        color: ${colors.darkGrey};
      }
    `}
`;
