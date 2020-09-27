import React from 'react';
import ptBR from 'date-fns/locale/pt-BR';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Container } from './styles';

const Date: React.FC<ReactDatePickerProps> = ({ ...rest }) => {
  return (
    <Container>
      <DatePicker {...rest} locale={ptBR} dateFormat="dd/MM/yyyy" />
    </Container>
  );
};

export default Date;
