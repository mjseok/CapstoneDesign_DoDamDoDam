import styled from "styled-components";

const CalendarStyled = styled.div`
  .react-calendar {
    width: 100%;
    position: relative;
    padding: 0 30xpx;
    box-sizing: border-box;
    min-height: 640px;
    font-family: "Open Sans", sans-serif;
  }
  .react-calendar__navigation__next2-button,
  .react-calendar__navigation__prev2-button {
    display: none;
  }
  .react-calendar__navigation__prev-button {
    left: 20px;
    top: 0px;
    font-size: 45px;
    background-color: #afd0e0;
    min-height: 50px;
  }

  .react-calendar__navigation__next-button {
    right: 20px;
    top: 0px;
    font-size: 45px;
    background-color: #afd0e0;
    min-height: 50px;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #afd0e0;
  }
  .react-calendar__navigation__label {
    position: relative;
    background-color: #afd0e0;
    min-height: 50px;
  }
  .react-calendar__navigation__label__labelText {
    font-weight: bold;
    font-size: 25px;
    text-align: center;
  }

  .react-calendar__month-view__weekdays__weekday {
    display: none;
  }
  .react-calendar__tile {
    width: 60px;
    height: 85px;
    position: relative;
    border-radius: 15px;

    abbr {
      position: absolute;
      top: 0;
      left:0;
      padding: 10px;
      font-size: 18px;
      color: black;
    }
  }
  .react-calendar__month-view__days {
    margin-bottom: -1px;
  }
  .react-calendar__month-view__weekdays__weekday {
    padding-bottom: 1.5em;
    padding-top: 1em;
    display: block;
    abbr {
      font-size: 18px;
      color: black;
      text-decoration: none;
    }
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
  }
  .react-calendar__tile--active {
    background: transparent;
  }
  .react-calendar__tile--now {
    background: #afd0e0;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #e8505b;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: pink;
  }
`;

export default CalendarStyled;
