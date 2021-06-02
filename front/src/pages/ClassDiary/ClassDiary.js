import React, { useRef, useState, useContext, useEffect } from 'react';
import ClassDiaryStyled from './ClassDiary.style';
//import preferenceImageUrl from '../../images/preference.png';
import Calendar from '../../components/organisms/Calendar/Calendar';
import Layout from '../../components/Layout';
import { AuthContext } from '../../context/auth';
import ReactWordcloud from 'react-wordcloud';
import service from '../../service';

const ClassDiary = (props) => {
  const { title } = props;
  const auth = useContext(AuthContext);

  //
  //db에서 가져온 word와 frequency 데이터로 이루어진 배열
  let arr1 = ['십일십일', '십이십이', '십삼십삼']; //word(key)
  let arr2 = [11, 12, 13]; // frequency(value)
  var index = 0;
  let wordList = [{ text: '', value: '' }];
  // const [inputs, setInputs] = useState({
  //   text: '',
  //   value: '',
  // });
  //const { text, value } = inputs;
  // const onChange = (e) => {
  //   const { name, value } = e.target;
  //   setInputs({
  //     ...inputs,
  //     [name]: value,
  //   });
  // };

  const [words, setWords] = useState([]);
  const getAllWords = async () => {
    const { data: AllWords } = await service.getWords(
      window.localStorage.getItem('teacher_id')
    );
    AllWords.map((word) => {
      wordList.push({ text: word.word, value: word.frequency });
    });
    console.log(wordList);
    setWords(words.concat(wordList));
  };
  useEffect(() => {
    getAllWords();
    console.log(words);
  }, []);

  const nextId = useRef(0);
  // const onCreate = () => {
  //   const user = {
  //     id: nextId.current,
  //     text,
  //     value,
  //   };
  //   setUsers(words.concat(user));

  //   setInputs({
  //     text: arr1[nextId.current],
  //     value: arr2[nextId.current],
  //   });
  //   nextId.current += 1;
  //   index += 1;
  //   console.log(nextId, index);
  // };
  //
  return (
    <Layout>
      <ClassDiaryStyled>
        <div className="left">
          <div className="title">{title}</div>
          <div className="word-cloud">
            <ReactWordcloud words={words} />
          </div>
        </div>
        <div className="right">
          <Calendar student={true} />
        </div>
      </ClassDiaryStyled>
    </Layout>
  );
};

ClassDiary.defaultProps = {
  title: '친구들이 요즘 관심있는 것은?',
};

export default ClassDiary;
