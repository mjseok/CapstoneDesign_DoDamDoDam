/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// import React from "react";
import React, { useContext, useState, useEffect } from 'react';
import { Pie, Doughnut, Bar, Line } from 'react-chartjs-2';
//import Layout from '../../components/Layout';
import ClassManagementStyled from './ClassManagement.style';
//import PageLayout from '../../layouts/PageLayout';
import styled from 'styled-components';
import AuthContext from '../../context/auth';
import ReactWordcloud from 'react-wordcloud';
import service from '../../service';
// reactstrap components

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import UserFooter from "components/Footers/UserFooter.js";
// index page sections
import SampleHero from "../IndexSections/SampleHero";
import { Row } from "reactstrap";

const data2 = {
  labels: ['일', '월', '화', '수', '목', '금', '토'],
  datasets: [
    {
      data: [1,2,3,1,3,2,4],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options2 = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
const data = {
  // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  labels: ['행복', '중립', '슬픔', '분노', '두려움'],
  datasets: [
    {
      //label: '# of Votes',
      data: [12, 19, 3, 5, 6],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        // 'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        // 'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: 'y',
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '감정 그래프',
    },
  },
  //maintainAspectRatio: false,
};

const ClassManagement = (props) => {
  // componentDidMount() {
  //   document.documentElement.scrollTop = 0;
  //   document.scrollingElement.scrollTop = 0;
  //   this.refs.main.scrollTop = 0;
  // }

  const { positiveItems, negativeItems, checkItems } = props;
  const auth = useContext(AuthContext);
  let wordList = [{ text: '', value: '' }];

  //console.log(auth?.userMe);

  const [words, setWords] = useState([]);
  const getAllWords = async () => {
    const { data: AllWords } = await service.getWords(
      window.localStorage.getItem('id')
    );
    AllWords.map((word) => {
      wordList.push({ text: word.word, value: word.frequency });
    });
    setWords(words.concat(wordList));
  };
  useEffect(() => {
    getAllWords();
    console.log(words);
  }, []);

  const state = {
    labels: [
      '긍정',
      '부정',
      '무감정'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 30
    }]
  };

  return (
    <>
      <MainNavbar />

      <SampleHero headerStyle={3} />
      {/* <PageLayout> */}
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
              <Line data={data2} options={options2} />
            </div>
          </div>
          <div className="right">
            <div className="title">반의 관심사</div>

            <div className="word-cloud ">
              <ReactWordcloud words={words} />
            </div>
            <div>
              <div>
                <Doughnut
                  data={state}
                  options={{
                    title: {
                      display: true,
                      text: '어제의 학생 감정',
                      fontSize: 20
                    },
                    legend: {
                      display: true,
                      position: 'right'
                    }
                  }}
                />
              </div>
              <Bar data={data} options={options} />
              
            </div>
          </div>
        </ClassManagementStyled>
      </Wrapper>
      {/* </PageLayout> */}
      {/* <Row>
        <div class="col-lg-5">1</div>
        <div class="col-lg-5">
          <Row>
            <div class="col-lg-12">2</div>
            <div class="col-lg-12">3</div>
          </Row>
        </div>
      </Row> */}

      <UserFooter />
    </>
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

const Grid = styled.div`
  display: grid;
  grid-template-rows: 200px 200px 200px;
  grid-template-columns: 33.3% 33.3% 33.3%;
  justify-items: center;
  margin-left: 0px;
`;
export default ClassManagement;
