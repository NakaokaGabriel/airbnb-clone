import React, { useState, useCallback, useLayoutEffect } from 'react';
import { isBefore } from 'date-fns';
import { RiStarFill } from 'react-icons/ri';

import { Container, Header, Form, AvailableDate } from './styles';

import Input from '../../../components/Input';
import Calendar from '../../../components/Calendar';
import Guest from '../../../components/Guest';

const Availability: React.FC = () => {
  const [checkinDate, setCheckinDate] = useState<Date | null>(null);
  const [openCheckinDate, setOpenCheckinDate] = useState<boolean>(false);
  const [checkoutDate, setCheckoutDate] = useState<Date | null>(null);
  const [openCheckoutDate, setOpenCheckoutDate] = useState<boolean>(false);

  const [guest, setGuest] = useState(false);

  const toggleCheckinDate = useCallback((date) => {
    setCheckinDate(date);
  }, []);

  const toggleCheckoutDate = useCallback((date) => {
    setCheckoutDate(date);
  }, []);

  useLayoutEffect(() => {
    if (checkinDate && checkoutDate) {
      const validateCheckout = isBefore(checkoutDate, checkinDate)
        ? null
        : checkoutDate;
      setCheckoutDate(validateCheckout);
    }
  }, [checkinDate, checkoutDate, openCheckoutDate]);

  return (
    <Container>
      <Header>
        <span>
          <strong>R$128</strong>
          /Dia
        </span>
        <div className="stars">
          <RiStarFill /> <strong>4,98</strong> (4)
        </div>
      </Header>
      <Form>
        <AvailableDate>
          <Input>
            <label htmlFor="availability-checkin">
              CHECK-IN
              <Calendar
                id="availability-checkin"
                selected={checkinDate}
                onChange={(date: Date) => toggleCheckinDate(date)}
                placeholderText="Insira a data"
                minDate={new Date()}
                open={openCheckinDate}
                onInputClick={() => setOpenCheckinDate(true)}
                onClickOutside={() => setOpenCheckinDate(false)}
              />
            </label>
          </Input>

          <Input>
            <label htmlFor="availability-checkout">
              CHECKOUT
              <Calendar
                id="availability-checkout"
                selected={checkoutDate}
                onChange={(date: Date) => toggleCheckoutDate(date)}
                placeholderText="Insira a data"
                minDate={checkinDate || new Date()}
                open={openCheckoutDate}
                onInputClick={() => setOpenCheckoutDate(true)}
                onClickOutside={() => setOpenCheckoutDate(false)}
              />
            </label>
          </Input>
        </AvailableDate>

        <Input>
          <label>
            HOSPÉDES
            <input
              type="text"
              placeholder="Insira o numéro de hospedes"
              onFocus={() => setGuest(true)}
              onClick={() => setGuest(true)}
            />
            <Guest guest={guest} setGuest={setGuest} />
          </label>
        </Input>

        <div className="form-input">
          <button type="submit">Conferir disponibilidade</button>
        </div>
      </Form>
    </Container>
  );
};

export default Availability;
