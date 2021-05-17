import styled from 'styled-components';

const CalendarStyled = styled.div`
  .react-calendar {
    width: 100%;
    border: 1px solid transparent;
    position: relative;
    padding: 0 60px;
    box-sizing: border-box;
  }
  .react-calendar__navigation__next2-button,
  .react-calendar__navigation__prev2-button {
    display: none;
  }
  .react-calendar__navigation__prev-button {
    position: absolute;
    left: -12px;
    top: calc(50%);
    font-size: 64px;
  }
  .react-calendar__navigation__next-button {
    position: absolute;
    right: -12px;
    top: calc(50%);
    font-size: 64px;
  }

  .react-calendar__navigation__label {
    position: relative;
  }
  .react-calendar__navigation__label__labelText {
    position: absolute;
    right: 0;
    bottom: 0;
    font-weight: bold;
    font-size: 24px;
  }

  .react-calendar__month-view__weekdays__weekday {
    display: none;
  }
  .react-calendar__tile {
    width: 118px;
    height: 118px;
    position: relative;
    border-left: 2px solid #ddd;
    border-top: 2px solid #ddd;

    abbr {
      position: absolute;
      left: 0;
      top: 0;
      padding: 8px;
      font-size: 18px;
      color: #888;
    }
  }
  .react-calendar__month-view__days {
    margin-bottom: -1px;
    border-right: 2px solid #ddd;
    border-bottom: 2px solid #ddd;
  }
`;

export default CalendarStyled;
