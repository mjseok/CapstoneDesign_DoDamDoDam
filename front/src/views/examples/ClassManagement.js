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
import React, { useContext, useState, useEffect,useMemo } from "react";
import { Pie, Doughnut, Bar, Line, Mixed } from "react-chartjs-2";
//import Layout from '../../components/Layout';
import ClassManagementStyled from "./ClassManagement.style";
//import PageLayout from '../../layouts/PageLayout';
import styled from "styled-components";
import AuthContext from "../../context/auth";
import ReactWordcloud from "react-wordcloud";
import service from "../../service";
// reactstrap components
// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import UserFooter from "components/Footers/UserFooter.js";
// index page sections
import SampleHero from "../IndexSections/SampleHero";
import { Row } from "reactstrap";
import { setSourceMapRange, setTokenSourceMapRange } from "typescript";
import { Modal, Button } from "reactstrap";

const data3 = {
  labels: ["March", "April", "May", "June", "July", "August"],
  datasets: [
    {
      type: "line",
      label: "학년 평균",
      borderColor: "rgb(117, 188, 0)",
      borderWidth: 2,
      fill: false,
      data: [10, 8, 7, 8, 0, 0],
    },
    {
      type: "bar",
      label: "우리 반 평균",
      // backgroundColor: 'rgb(255, 99, 132)',
      backgroundColor: "rgb(255, 148, 54)",
      data: [11, 7, 6, 8, 0, 0],
      borderColor: "white",
      borderWidth: 2,
    },
  ],
  options: options,
};

const data2 = {
  labels: ["일", "월", "화", "수", "목", "금", "토"],
  datasets: [
    {
      data: [1, 2, 3, 1, 3, 2, 4],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
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
  labels: ["행복", "중립", "슬픔", "분노", "두려움"],
  datasets: [
    {
      //label: '# of Votes',
      data: [12, 19, 3, 5, 6],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        // 'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        // 'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: "y",
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
      position: "top",
    },
    title: {
      display: false,
      text: "감정 그래프",
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
  let wordList = [{ text: "", value: "" }];

  //console.log(auth?.userMe);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [bad, setBad] = useState("");

  const [words, setWords] = useState([]);
  const options = useMemo(() => {
    return {
      fontSizes: [20, 100],
    }
  }, []);
  const getAllWords = async () => {
    const { data: AllWords } = await service.getWords(
      window.localStorage.getItem("id")
    );
    AllWords.map((word) => {
      wordList.push({
        text: word.word,
        value:
          word.mon +
          word.tue +
          word.wed +
          word.thu +
          word.fri +
          word.sat +
          word.sun,
      });
    });
    setWords(words.concat(wordList));
  };
  useEffect(() => {
    getAllWords();
    console.log(words);
  }, []);

  const state = {
    labels: ["긍정", "부정", "무감정"],
    datasets: [
      {
        label: "My First Dataset",
        data: [5, 14, 8],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 30,
      },
    ],
  };

  return (
    <>
      <MainNavbar />

      <SampleHero headerStyle={3} />
      {/* <PageLayout> */}
      {/* <Wrapper> */}
      <Total12>
        <ClassManagementStyled>
          <div className="left">
            {/* <div className="left-top"> */}
            <div>
              <div className="box">
                <div className="title">반 전체 한눈에 보기</div>
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
                <div className="title">선생님이 한번 더 확인해 주세요</div>
                {checkItems &&
                  checkItems.map((item, index) => {
                    return (
                      <div key={index} className="double-check">
                        <img
                          className="thumbnail-large"
                          src={item.thumbnail}
                          alt="썸네일"
                          onClick={() => {
                            setOpen(true);
                            setName(item.name);
                            setBad(item.desc);
                          }}
                        ></img>
                        <div className="child-info">
                          <h3 className="name">{item.name}</h3>
                          <span className="desc">{item.desc}</span>
                        </div>
                      </div>
                    );
                  })}
                {open && (
                  <Modal className="modal-dialog-centered" isOpen={true}>
                    <div className="modal-header">
                      <h6 className="modal-title" id="modal-title-default">
                        {name} 상담하기
                      </h6>
                      <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => setOpen(false)}
                      >
                        <span aria-hidden={true}>×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <p>
                        최근에 {name}학생의 {bad}
                        <br />
                        선생님께서는 확인부탁드립니다.
                      </p>
                      <p>학생 전화번호: 010-1234-5678</p>
                    </div>
                  </Modal>
                )}
              </div>
              {/* <Line data={data2} options={options2} /> */}
            </div>
          </div>
          <div className="right">
            <div className="title">반의 관심사</div>

            <div className="word-cloud ">
              <ReactWordcloud words={words} options={options} />
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </ClassManagementStyled>
        <ClassManagementStyled>
          <div className="doughnut-graph">
            <div className="title2">어제의 우리반 감정</div>
            <div className="doughnut-content">
              어제의 일기를 바탕으로 나타낸 학생들의 감정 분포 그래프입니다.
              그래프에 커서를 갖다 대면 해당 감정의 학생 수를 알 수 있습니다.
            </div>
            <div classname="real-doughnut-graph">
              <Doughnut
                data={state}
                height={200}
                options={{
                  responsive: true,
                  title: {
                    display: false,
                    text: "어제의 학생 감정",
                    fontSize: 20,
                    maintainAspectRatio: true,
                  },
                  legend: {
                    display: true,
                    position: "bottom",
                  },
                  animation: {
                    animateScale: true,
                    animateRotate: true,
                  },
                }}
              />
            </div>
          </div>

          <div className="bar-graph">
            <div className="title2">우울증 의심 학생 평균</div>
            <div className>우울증이 의심되는 학생의 월별평균입니다.</div>
            <Bar data={data3} options={options} />
          </div>
        </ClassManagementStyled>
      </Total12>

      <UserFooter />
    </>
  );
};
ClassManagement.defaultProps = {
  positiveItems: [
    "https://i.ibb.co/NZVpw9g/8b23a25d341f74904f1340328ed3d0d6.jpg",
    "https://i.ibb.co/K5R2MfF/9ebccf57-b06d-4449-9234-126d856f809d.jpg",
    "https://i.ibb.co/RpRzDPz/71e093b52aaa0a76db8d300d384df709.jpg",
    "https://i.ibb.co/gvG6T0h/38139-36645-1155.jpg",
    "https://storage.googleapis.com/dodamimage/a.jpg",
    "https://storage.googleapis.com/dodamimage/b.jpg",
    "https://storage.googleapis.com/dodamimage/h.jpg",


  ],
  negativeItems: [
    "https://storage.googleapis.com/dodamimage/c.jpg",

    "https://i.ibb.co/VmDcBbK/422377-534498-2153.jpg",
    "https://i.ibb.co/rsXZ8Yf/42e3ffd6546e6b51156bf48ba50e886f.jpg",
    "https://storage.googleapis.com/dodamimage/l.jpg",
    "https://storage.googleapis.com/dodamimage/m.jpg",
    "https://storage.googleapis.com/dodamimage/n.jpg",
    "https://storage.googleapis.com/dodamimage/o.jpg",

  ],
  checkItems: [
    {
      name: "3번 고지우",
      desc: "부정적 감정이 72% 증가했어요!",
      thumbnail: "https://storage.googleapis.com/dodamimage/c.jpg",
    },
    {
      name: "6번 김태윤",
      desc: "부정적 감정이 61% 증가했어요!",
      thumbnail:
        "https://i.ibb.co/rsXZ8Yf/42e3ffd6546e6b51156bf48ba50e886f.jpg",
    },
    {
      name: "11번 박제하",
      desc: "부정적 감정이 58% 증가했어요!",
      thumbnail: "https://i.ibb.co/VmDcBbK/422377-534498-2153.jpg",
    },
  ],
};

const Total12 = styled.div`
  background-color: #ffffff;
  // height: 500px;
  width: 1600px;
  margin-left: 150px;
  margin-top: -50px;
  border-radius: 15px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Wrapper2 = styled.div`
  // display: inline-block;
  // vertical-align: middle;
  // height: 100%;
  display: table-cell;
  vertical-align: middle;
  margin-right: 500px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 200px 200px 200px;
  grid-template-columns: 33.3% 33.3% 33.3%;
  justify-items: center;
  left: 500px;
`;
export default ClassManagement;