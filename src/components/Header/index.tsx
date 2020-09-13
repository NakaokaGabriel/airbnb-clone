import React, { useState, useCallback } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { Container, Search, Form } from './styles';

const Header: React.FC = () => {
  const [toggleSearchMenu, setToggleSearchMenu] = useState<boolean>(false);

  const toggleSearchMenuVisibility = useCallback(() => {
    setToggleSearchMenu(!toggleSearchMenu);
  }, [toggleSearchMenu]);

  return (
    <Container>
      <Search>
        <button
          type="button"
          className="form-input"
          onClick={toggleSearchMenuVisibility}
        >
          <input
            type="text"
            id="search"
            autoComplete="off"
            placeholder="Comece sua busca"
            readOnly
          />
          <div>
            <AiOutlineSearch color="#FFF" size={20} />
          </div>
        </button>

        <Form searchMenu={toggleSearchMenu}>
          <div className="form-input">
            <label htmlFor="localization">
              LOCALIZAÇÃO
              <input
                type="text"
                id="localization"
                placeholder="Para onde você vai ?"
              />
            </label>
          </div>

          <div className="form-input">
            <label htmlFor="checkin">
              CHECK-IN
              <input type="text" id="checkin" placeholder="Insira as datas" />
            </label>
          </div>

          <div className="form-input">
            <label htmlFor="checkout">
              CHECKOUT
              <input type="text" id="checkout" placeholder="Insira as datas" />
            </label>
          </div>

          <div className="form-input">
            <label htmlFor="guests">
              HOSPÉDES
              <input
                type="text"
                id="guests"
                placeholder="Insira o numéro de hospedes"
              />
            </label>
          </div>

          <div className="form-input">
            <button type="submit">
              <AiOutlineSearch color="#FFF" size={20} />
              BUSCAR
            </button>
          </div>
        </Form>
      </Search>
    </Container>
  );
};

export default Header;
