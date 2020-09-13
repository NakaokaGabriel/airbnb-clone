import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { Container, Search } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Search>
        <form>
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

          <button type="submit">
            <AiOutlineSearch color="#FFF" />
          </button>
        </form>
      </Search>
    </Container>
  );
};

export default Header;
