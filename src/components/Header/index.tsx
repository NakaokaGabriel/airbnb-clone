import React, { useState, useCallback } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { Container, Search, Form } from './styles';

import Calendar from '../Calendar';

const Header: React.FC = () => {
  const [toggleSearchMenu, setToggleSearchMenu] = useState<boolean>(false);
  const [checkinDate, setCheckinDate] = useState<Date | null>(null);
  const [checkoutDate, setCheckoutDate] = useState<Date | null>(null);

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

        <Form searchMenu={toggleSearchMenu} autoComplete="off">
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
              <Calendar
                selected={checkinDate}
                onChange={(date: Date) => setCheckinDate(date)}
                placeholderText="Insira a data"
                id="checkin"
              />
            </label>
          </div>

          <div className="form-input">
            <label htmlFor="checkout">
              CHECKOUT
              <Calendar
                selected={checkoutDate}
                onChange={(date: Date) => setCheckoutDate(date)}
                placeholderText="Insira a data"
                id="checkout"
              />
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
              <span>BUSCAR</span>
            </button>
          </div>
        </Form>
      </Search>
    </Container>
  );
};

export default Header;
