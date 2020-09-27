import React from 'react';
import { pt } from 'date-fns/locale';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Container } from './styles';

const Date: React.FC<ReactDatePickerProps> = ({ ...rest }) => {
  return (
    <Container>
      <DatePicker {...rest} locale={pt} dateFormat="dd/MM/yyyy" />
    </Container>
  );
};

export default Date;
