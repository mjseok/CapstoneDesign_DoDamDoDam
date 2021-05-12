import React from 'react';
import ClassManagementStyled from './ClassManagement.style';
import PageLayout from '../../layouts/PageLayout';
import styled from 'styled-components';
import ReactWordcloud from 'react-wordcloud';
// import 'tippy.js/dist/tippy.css';
// import 'tippy.js/animations/scale.css';

const ClassManagement = (props) => {
  const { positiveItems, negativeItems, checkItems } = props;
  const words = [
    {
      text: '일일일',
      value: 1
    },
    {
      text: '이이이',
      value: 2
    },
    {
      text: '삼삼삼삼',
      value: 3
    },
    {
      text: '사사사',
      value: 4
    },
    {
      text: '오오오',
      value: 5
    },
    {
      text: '육육육육육',
      value: 6
    },
    {
      text: '칠칠칠',
      value: 7
    },
    {
      text: '팔',
      value: 8
    },
    {
      text: '구구',
      value: 9
    },
    {
      text: '십십십',
      value: 10
    },
    
  ];

  return (
    
    <PageLayout>
      <Wrapper>
        <ClassManagementStyled>
          <div className="left">
            <div className="left-top">
              <div className="box">
                <h2 className="title">반 전체 한눈에 보기</h2>
                <div className="row-thumbnails">
                  <span className="row-thumbnail-text">긍정</span>
                  {positiveItems &&
                    positiveItems.map((item, index) => {
                      return (
                        <img
                          key={index}
                          className="thumbnail"
                          src={item}
                          alt="썸네일"
                        />
                      );
                    })}
                </div>
                <div className="dash-line"></div>
                <div className="row-thumbnails">
                  <span className="row-thumbnail-text">부정</span>
                  {negativeItems &&
                    negativeItems.map((item, index) => {
                      return (
                        <img
                          key={index}
                          className="thumbnail"
                          src={item}
                          alt="썸네일"
                        />
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="left-bottom">
              <div className="box">
                <h2 className="title">선생님이 한번 더 확인해 주세요</h2>
                {checkItems &&
                  checkItems.map((item, index) => {
                    return (
                      <div key={index} className="double-check">
                        <img
                          className="thumbnail-large"
                          src={item.thumbnail}
                          alt="썸네일"
                        ></img>
                        <div className="child-info">
                          <h3 className="name">{item.name}</h3>
                          <span className="desc">{item.desc}</span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="right">
            <div className="title">반의 관심사</div>
            <div className="preference-image ">
              <ReactWordcloud words={words} />
            </div>
          </div>
         
        </ClassManagementStyled>
       
      </Wrapper>
      
    </PageLayout>
    
  );
};

ClassManagement.defaultProps = {
  positiveItems: [
    'http://placehold.it/80x80',
    'http://placehold.it/80x80',
    'http://placehold.it/80x80',
    'http://placehold.it/80x80',
  ],
  negativeItems: [
    'http://placehold.it/80x80',
    'http://placehold.it/80x80',
    'http://placehold.it/80x80',
    'http://placehold.it/80x80',
  ],
  checkItems: [
    {
      name: '7번 하담비',
      desc: '최근 부정적 일기가 증가했어요!',
      thumbnail: 'http://placehold.it/100x100',
    },
    {
      name: '4번 이백기',
      desc: '최근 부정적 일기가 증가했어요!',
      thumbnail: 'http://placehold.it/100x100',
    },
  ],
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default ClassManagement;
