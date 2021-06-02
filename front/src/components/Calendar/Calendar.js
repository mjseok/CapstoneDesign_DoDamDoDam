import React, { useState } from "react";
import CalendarStyled from "./Calendar.style.js";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
//import SimpleModal from "./SimpleModal";
//import service from "../../../service";

const Calendar = () => {
  const [value, onChange] = useState(new Date());
  // const showJournal = async () => {
  //   alert(value);
  //   const { data: diary } = await service.getJournal("student1", value);
  // };
  return (
    <CalendarStyled>
      <ReactCalendar
        onChange={onChange}
        value={value}
        calendarType={"US"}
        // onClickDay={showJournal}
      />
<<<<<<< HEAD
=======
      asdfasdf
>>>>>>> 8971299c1d308af2bcebe2b46fcfb2c4e175dd03
      {/* {student.student && <SimpleModal onSubmit={(value) => alert(value)} />} */}
    </CalendarStyled>
  );
};

export default Calendar;
