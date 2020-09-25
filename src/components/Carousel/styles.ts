import styled from 'styled-components';

import { colors } from '../../styles/colors';

interface AdventureFocusProps {
  focus: boolean;
}

export const Container = styled.div`
  overflow: hidden;
  position: relative;

  .slick-track {
    margin: 0;
  }
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
