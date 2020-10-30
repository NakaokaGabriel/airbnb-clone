import React from 'react';
import { RiArrowLeftSLine } from 'react-icons/ri';

import { Wrapper, Header, ListContent } from './styles';

const Modal: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header>
        <RiArrowLeftSLine />
      </Header>
      <ListContent>{children}</ListContent>
    </Wrapper>
  );
};

export default Modal;
