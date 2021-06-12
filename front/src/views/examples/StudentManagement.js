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
import React, { useState, useEffect } from "react";

// reactstrap components
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
// reactstrap components
import { Row, Col } from "reactstrap";

// core components
import { chartOptions, parseOptions } from "variables/charts.js";
import StudentList from "components/Student/StudentList";
import service from "service";
import styled from "styled-components";
// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import UserFooter from "components/Footers/UserFooter.js";
import Calendar from "components/Calendar/Calendar.js";
// index page sections
import SampleHero from "../IndexSections/SampleHero";

const StudentManagement = (props) => {
  const [setActiveNav] = useState(1);
  const [setChartExample1Data] = useState("data1");
  const [students, setStudents] = useState([{}]);
  const [clicked, setClicked] = useState({ id: "", name: "학생의" });

  const getAllStudent = async () => {
    const { data: AllStudent } = await service.getStudents(
      window.localStorage.getItem("id")
    );
    setStudents(AllStudent); //가져온 studentList를 students에 저장
  };

  useEffect(() => {
    getAllStudent(); //page가 넘어갈때마다 getAllStudent()함수 실행(useEffect안에 함수쓰면 page바뀔때마다 함수 실행됨)
  }, []);

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <MainNavbar />
      {/* Page content */}
      <SampleHero headerStyle={3} />
      <div className="w-100" style={{ height: "100px" }} />
      <Row className="justify-content-center">
        <div class="col-lg-5">
          {" "}
          <Title>학생 목록</Title>
          <Students>
            <Grid>
              <StudentList students={students} setClicked={setClicked} />
            </Grid>
          </Students>
        </div>
        <div class="col-lg-5">
          <Row className="justify-content-center">
            <div class="col-lg-12">
              {" "}
              <Title2>{`${clicked.name} 일기목록`}</Title2>
              <Calendar studentID={clicked.id} studentName={clicked.name} />
            </div>
            <div class="col-lg-12">
              {" "}
              <Row className="justify-content-center">
                <Col className="col-md-12 " xr="8"></Col>
              </Row>
            </div>
          </Row>
        </div>
      </Row>
      <UserFooter />
    </>
  );
};

const Students = styled.div`
  background-color: rgba(175, 208, 224, 0.5);
  min-height: 1250px;
  margin-bottom: 50px;
  border-radius: 15px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-rows: 250px 250px 250px 250px 250px;
  grid-template-columns: 33.3% 33.3% 33.3%;
  justify-items: center;
  margin-left: 0px;
  margin-top: 15px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
const Title2 = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export default StudentManagement;
