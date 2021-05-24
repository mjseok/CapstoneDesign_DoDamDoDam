import React, { useState, useCallback } from 'react';
import CalendarStyled from './Calendar.style';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import SimpleModal from './SimpleModal';
import Axios from '../../../api/axios';
import { isEmpty, debounce } from 'lodash';
import styled from 'styled-components';

const Calendar = () => {
  const [value, onChange] = useState(new Date());
  const [corrections, setCorrections] = useState([]);

  const debouncedCheckSpell = useCallback(
    debounce(async (text) => {
      setCorrections(
        (await Axios.get('/student/spell', { params: { text } })).data
      );
    }, 500),
    []
  );

  const handleChangeDiary = useCallback((value) => {
    debouncedCheckSpell(value);
  }, []);

  console.log(corrections);

  return (
    <CalendarStyled>
      <ReactCalendar
        onChange={onChange}
        value={value}
        nextLabel={<BsChevronRight color="#888" />}
        prevLabel={<BsChevronLeft color="#888" />}
      />
      <SimpleModal
        onSubmit={(value) => alert(value)}
        onChange={handleChangeDiary}
      >
        {!isEmpty(corrections) && (
          <>
            <CorrectionTitle>아래와 같이 변경해주세요.</CorrectionTitle>
            {corrections.map((c, i) => {
              if (isEmpty(c.suggestions)) return null;
              return (
                <Correction key={i}>{c.suggestions.join(', ')}</Correction>
              );
            })}
          </>
        )}
      </SimpleModal>
    </CalendarStyled>
  );
};

const CorrectionTitle = styled.h3`
  font-size: 18px;
  padding: 16px;
  font-weight: bold;
`;

const Correction = styled.p`
  padding: 16px;
  color: red;
`;

export default Calendar;
