import styled from 'styled-components';

import { colors } from '../../styles/colors';

import arrowLeft from '../../assets/arrow-point-to-left.svg';
import arrowRight from '../../assets/arrow-point-to-right.svg';

export const Container = styled.div`
  .react-datepicker__navigation--previous,
  .react-datepicker__navigation--next {
    top: 25px;
  }

  .react-datepicker__navigation--previous {
    background: url(${arrowLeft}) no-repeat 45% center;
    background-size: 10px;
    background-color: ${colors.red};
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    color: #fff;
  }

  .react-datepicker__navigation--next {
    background: url(${arrowRight}) no-repeat 58% center;
    background-size: 10px;
    background-color: ${colors.red};
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    color: #fff;
  }

  .react-datepicker-popper {
    transform: translate3d(0, 49px, 0px) !important;
  }

  .react-datepicker {
    border: none;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    padding: 20px;
    font-family: 'Roboto';

    .react-datepicker__triangle {
      display: none;
    }

    .react-datepicker__header {
      border: none;

      .react-datepicker__current-month {
        color: ${colors.darkGrey};
      }

      .react-datepicker__day-names {
        margin-top: 20px;

        .react-datepicker__day-name {
          color: ${colors.darkGrey};
          text-transform: uppercase;
        }
      }
    }

    .react-datepicker__month {
      .react-datepicker__day-name,
      .react-datepicker__day,
      .react-datepicker__time-name {
        color: ${colors.middleGray};
      }

      .react-datepicker__day--keyboard-selected,
      .react-datepicker__month-text--keyboard-selected,
      .react-datepicker__quarter-text--keyboard-selected,
      .react-datepicker__year-text--keyboard-selected {
        background: ${colors.red};
        color: #fff;
        border-radius: 50%;
      }

      .react-datepicker__day--selected:hover,
      .react-datepicker__day--in-selecting-range:hover,
      .react-datepicker__day--in-range:hover,
      .react-datepicker__month-text--selected:hover,
      .react-datepicker__month-text--in-selecting-range:hover,
      .react-datepicker__month-text--in-range:hover,
      .react-datepicker__quarter-text--selected:hover,
      .react-datepicker__quarter-text--in-selecting-range:hover,
      .react-datepicker__quarter-text--in-range:hover,
      .react-datepicker__year-text--selected:hover,
      .react-datepicker__year-text--in-selecting-range:hover,
      .react-datepicker__year-text--in-range:hover {
        background: ${colors.red};
        color: #fff;
        border-radius: 50%;
      }

      .react-datepicker__day--selected:hover,
      .react-datepicker__day--in-selecting-range:hover,
      .react-datepicker__day--in-range:hover,
      .react-datepicker__month-text--selected:hover,
      .react-datepicker__month-text--in-selecting-range:hover,
      .react-datepicker__month-text--in-range:hover,
      .react-datepicker__quarter-text--selected:hover,
      .react-datepicker__quarter-text--in-selecting-range:hover,
      .react-datepicker__quarter-text--in-range:hover,
      .react-datepicker__year-text--selected:hover,
      .react-datepicker__year-text--in-selecting-range:hover,
      .react-datepicker__year-text--in-range:hover {
        background: ${colors.red};
        color: #fff;
        border-radius: 50%;
      }

      .react-datepicker__day--selected,
      .react-datepicker__day--in-selecting-range,
      .react-datepicker__day--in-range,
      .react-datepicker__month-text--selected,
      .react-datepicker__month-text--in-selecting-range,
      .react-datepicker__month-text--in-range,
      .react-datepicker__quarter-text--selected,
      .react-datepicker__quarter-text--in-selecting-range,
      .react-datepicker__quarter-text--in-range,
      .react-datepicker__year-text--selected,
      .react-datepicker__year-text--in-selecting-range,
      .react-datepicker__year-text--in-range {
        background: ${colors.red};
        color: #fff;
        border-radius: 50%;
      }
    }
  }
`;
