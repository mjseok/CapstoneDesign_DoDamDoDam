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
import React, { useEffect, useState,useMemo } from "react";
import { Doughnut } from "react-chartjs-2";

// reactstrap components

// core components
import MainNavbar from "components/Navbars/SimpleNavbar";
import UserFooter from "components/Footers/UserFooter.js";

// index page sections
import SampleHero from "../IndexSections/SampleHero";
import Calendar from "../../components/Calendar/Calendar";
import SimpleModal from "../../components/Student/Dialog/SimpleModal";
import ReactWordcloud from "react-wordcloud";
import service from "../../service";

import "../../assets/scss/react/stuPage/stuPageStyle.scss";

const StudentPage = ({ title }) => {
  let wordList = [{ text: "", value: "" }];

  const data = {
    labels: ["긍정", "부정", "무감정"],
    datasets: [
      {
        label: "My First Dataset",
        data: [8, 7, 15],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 30,
      },
    ],
  };
  const options = useMemo(() => {
    return {
      fontSizes: [20, 100],
    }
  }, []);
  const [words, setWords] = useState([]);
  const getAllWords = async () => {
    const { data: AllWords } = await service.getWords(
      window.localStorage.getItem("teacher_id")
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
  //
  return (
    <>
      <MainNavbar />

      <SampleHero headerStyle={4} />

      <div className="topItemsBox">
        <div className="word-cloud">
          <h2 className="title display-4" style={{ textAlign: "center" }}>{title}</h2>
          <div>
            <ReactWordcloud words={words} options={options} size={300,300} />
          </div>
        </div>
        <div className="inChart">
          <h2 className="display-4" style={{ textAlign: "center" }}>지난달 나의 감정</h2>
          <Doughnut data={data} />
        </div>
      </div>
      <div className="inCalender">
        <Calendar studentID={window.localStorage.id} />
      </div>

      <SimpleModal />

      <UserFooter />
    </>
  );
};

StudentPage.defaultProps = {
  title: "친구들이 요즘 관심있는 것은?",
};

export default StudentPage;
