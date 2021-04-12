import React from 'react';
import ClassDiaryStyled from './ClassDiary.style';
import preferenceImageUrl from '../../images/preference.png';
import Calendar from '../../components/organisms/Calendar/Calendar';

const ClassDiary = (props) => {
  const { title } = props;
  return (
    <ClassDiaryStyled>
      <div className="left">
        <div className="title">{title}</div>
        <img className="img" src={preferenceImageUrl} />
      </div>
      <div className="right">
        <Calendar />
      </div>
    </ClassDiaryStyled>
  );
};

ClassDiary.defaultProps = {
  title: '친구들이 요즘 관심있는 것은?',
};

export default ClassDiary;
