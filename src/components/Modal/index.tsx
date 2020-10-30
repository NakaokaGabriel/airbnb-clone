import React, {
  useLayoutEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react';
import { RiArrowLeftSLine } from 'react-icons/ri';

import { Wrapper, Header, Title, ListContent } from './styles';

interface ModalProps {
  toggleModal: boolean;
  setToggleModal: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({
  children,
  toggleModal,
  setToggleModal,
}) => {
  useLayoutEffect(() => {
    if (toggleModal) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [toggleModal]);

  const toggleCloseModal = useCallback(() => {
    setToggleModal(false);
  }, [setToggleModal]);

  return (
    <Wrapper modal={toggleModal}>
      <Header>
        <button type="button" onClick={toggleCloseModal}>
          <RiArrowLeftSLine />
        </button>
        <Title>Fotos do local</Title>
      </Header>
      <ListContent>{children}</ListContent>
    </Wrapper>
  );
};

export default Modal;
