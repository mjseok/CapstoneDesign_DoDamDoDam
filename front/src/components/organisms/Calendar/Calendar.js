import React, { useState } from 'react';
import CalendarStyled from './Calendar.style';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import SimpleModal from './SimpleModal';

const Calendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <CalendarStyled>
      <ReactCalendar
        onChange={onChange}
        value={value}
        nextLabel={<BsChevronRight color="#888" />}
        prevLabel={<BsChevronLeft color="#888" />}
      />
      <SimpleModal onSubmit={(value) => alert(value)} />
    </CalendarStyled>
  );
};

export default Calendar;
