import React from 'react';
import ClassDiaryStyled from './ClassDiary.style';
import preferenceImageUrl from '../../images/preference.png';
import Calendar from '../../components/organisms/Calendar/Calendar';

const ClassDiary = () => {
  return (
    <ClassDiaryStyled>
      <div className="left">
        <div className="title">친구들이 요즘 관심있는 것은?</div>
        <img className="img" src={preferenceImageUrl} />
      </div>
      <div className="right">
        <Calendar />
      </div>
    </ClassDiaryStyled>
  );
};

export default ClassDiary;
