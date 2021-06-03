import React, { useState, useEffect } from "react";
import service from "../../service";
// reactstrap components
import StudentList from "components/Student/StudentList";

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import UserFooter from "components/Footers/UserFooter.js";
// index page sections
import MainHero from "../IndexSections/MainHero";
import SampleHero from "../IndexSections/SampleHero";

import Pagination from "../IndexSections/Pagination.js";
import { Row, Col, Container } from "reactstrap";
import styled from "styled-components";

const StudentInfo = () => {
  // document.documentElement.scrollTop = 0;
  // document.scrollingElement.scrollTop = 0;
  // this.refs.main.scrollTop = 0;

  const [students, setStudents] = useState([{}]);
  const [clicked, setClicked] = useState({ id: "", name: "학생의" });

  // 서버에서 studentlist를 가져오는 방식
  const getAllStudent = async () => {
    const { data: AllStudent } = await service.getStudents(
      window.localStorage.getItem("id")
    );
    setStudents(AllStudent); //가져온 studentList를 students에 저장
  };

  useEffect(() => {
    getAllStudent(); //page가 넘어갈때마다 getAllStudent()함수 실행(useEffect안에 함수쓰면 page바뀔때마다 함수 실행됨)
  }, []);

  return (
    <>
      <MainNavbar />
      <main>
        <SampleHero headerStyle={3} />
        <Container
          style={{
            "background-color": "#ffd569",
            "border-radius": "30px",
          }}
        >
          <Grid>
            <StudentList students={students} setClicked={setClicked} />
          </Grid>
        </Container>
        <div className="w-100" style={{ height: "50px" }} /> <Pagination />
      </main>
      <UserFooter />
    </>
  );
};
const Grid = styled.div`
  display: grid;
  grid-template-rows: 230px 230px 230px 230px;
  grid-template-columns: 25% 25% 25% 25%;
  justify-items: center;
  margin-left: 0px;
  margin-top: 15px;
`;
export default StudentInfo;
