import React, { useLayoutEffect } from 'react';
import { RiArrowLeftSLine } from 'react-icons/ri';

import { Wrapper, Header, ListContent } from './styles';

const Modal: React.FC = ({ children }) => {
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <Wrapper>
      <Header>
        <button type="button">
          <RiArrowLeftSLine />
        </button>
      </Header>
      <ListContent>{children}</ListContent>
    </Wrapper>
  );
};

export default Modal;
