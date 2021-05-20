import React, { useRef, useState, useContext } from 'react';
import ClassDiaryStyled from './ClassDiary.style';
import preferenceImageUrl from '../../images/preference.png';
import Calendar from '../../components/organisms/Calendar/Calendar';
import Layout from '../../components/Layout';
import { AuthContext } from '../../context/auth';
import ReactWordcloud from 'react-wordcloud';

const ClassDiary = (props) => {
  const { title } = props;
  const auth = useContext(AuthContext);

  //
  //db에서 가져온 word와 frequency 데이터로 이루어진 배열
  let arr1=['십일십일', '십이십이', '십삼십삼'] //word(key)
  let arr2=[11,12,13] // frequency(value)
  var index = 0;
  const [inputs, setInputs] = useState({
    text: '',
    value: ''
  });
  const { text, value } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  
  const [words, setUsers] = useState([
    { 
      id: 1,
      text: '일일일',
      value: 1
    },
    {
      id: 2,
      text: '이이이',
      value: 2
    },
    {
      id: 3,
      text: '삼삼삼삼',
      value: 3
    },
    {
      id: 4,
      text: '사사사',
      value: 4
    },
    {
      id: 5,
      text: '오오오',
      value: 5
    },
    {
      id: 6,
      text: '육육육육육',
      value: 6
    },
    {
      id: 7,
      text: '칠칠칠',
      value: 7
    },
    {
      id: 8,
      text: '팔',
      value: 8
    },
    {
      id: 9,
      text: '구구',
      value: 9
    },
    {
      id: 10,
      text: '십십십',
      value: 10
    },
  ]);
  
  const nextId = useRef(0);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      text,
      value
    };
    setUsers(words.concat(user));

    setInputs({
      text: arr1[nextId.current],
      value: arr2[nextId.current]
    });
    nextId.current += 1;
    index += 1;
    console.log(nextId, index);
  };
  //

  console.log(auth.userMe);

  return (
    <Layout overflow>
      <ClassDiaryStyled>
        <div className="left">
          <div className="title">{title}</div>
          <div className="word-cloud">
            <ReactWordcloud words={words} />
              <button onClick={onCreate}> 추가</button>
          </div>
        </div>
        <div className="right">
          <Calendar />
        </div>
      </ClassDiaryStyled>
    </Layout>
  );
};

ClassDiary.defaultProps = {
  title: '친구들이 요즘 관심있는 것은?',
};

export default ClassDiary;
