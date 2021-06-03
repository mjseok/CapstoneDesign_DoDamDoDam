// /*!

// =========================================================
// * Argon Design System React - v1.1.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/argon-design-system-react
// * Copyright 2020 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */
import React,{useState} from "react";

// reactstrap components

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import UserFooter from "components/Footers/UserFooter.js";
// index page sections
import SampleHero from "../IndexSections/SampleHero";
import Pagination from "../IndexSections/Pagination.js";
import { Row, Col, Container } from "reactstrap";
import styled from "styled-components";

const StudentInfo =()=> {
    const [open,setOpen]=useState(false);
    return (
      <>
      
        <MainNavbar />
        <main>
         <SampleHero headerStyle={3} />

          <Container
            style={{ "background-color": "#ffd569", "border-radius": "30px" }}
          >
            <Row className="row justify-content-around">
              <div className="w-100" style={{ height: "50px" }} />
              <Col className="col-md-auto">
                <img
                  alt="..."
                  className="img-left shadow shadow-lg--hover"
                  src="https://www.freeiconspng.com/uploads/plus-icon-black-2.png"
                  style={{ width: "150px",height:"170px" }}
                  onClick={()=>{setOpen(!open)}}
                />{open&&(
                  <DiaryBack onClick={handleClickBg}>
                    {" "}
                    <Diary ref={element}>
                    </Diary>{" "}
        </DiaryBack>
      )}
              </Col>
              <Col className="col-md-auto">
                <img
                  alt="..."
                  className=" img-left shadow shadow-lg--hover"
                  src="https://i.ibb.co/NZVpw9g/8b23a25d341f74904f1340328ed3d0d6.jpg"
                  style={{ width: "150px",height:"170px" }}
                />
              </Col>
              <Col className="col-md-auto">
                <img
                  alt="..."
                  className="img-left shadow shadow-lg--hover"
                  src="https://i.ibb.co/K5R2MfF/9ebccf57-b06d-4449-9234-126d856f809d.jpg"
                  style={{ width: "150px",height:"170px" }}
                />
              </Col>
              <Col className="col-md-auto">
                <img
                  alt="..."
                  className="img-left shadow shadow-lg--hover"
                  src="https://i.ibb.co/rsXZ8Yf/42e3ffd6546e6b51156bf48ba50e886f.jpg"
                  style={{ width: "150px",height:"170px" }}
                />
              </Col>
              <div className="w-100" style={{ height: "50px" }} />
              <Col className="col-md-auto">
                <img
                  alt="..."
                  className="img-left shadow shadow-lg--hover"
                  src="https://i.ibb.co/RpRzDPz/71e093b52aaa0a76db8d300d384df709.jpg" 
                  style={{ width: "150px",height:"170px" }}
                />
              </Col>
              <Col className="col-md-auto">
                <img
                  alt="..."
                  className="img-left shadow shadow-lg--hover"
                  src="https://i.ibb.co/NnRCPC6/1267a0256e85db92b3c4a1db791b524d.png"
                  style={{ width: "150px",height:"170px" }}
                />
              </Col>
              <Col className="col-md-auto">
                <img
                  alt="..."
                  className="img-left shadow shadow-lg--hover"
                  src="https://i.ibb.co/rFs40TR/9998-E3505-E5-AD0-F413.png"
                  style={{ width: "150px",height:"170px" }}
                />
              </Col>
              <Col className="col-md-auto">
                <img
                  alt="..."
                  className="img-left shadow shadow-lg--hover"
                  src="https://i.ibb.co/gvG6T0h/38139-36645-1155.jpg" 
                  style={{ width: "150px",height:"170px" }}
                />{" "}
              </Col>
              <div className="w-100" style={{ height: "50px" }} />
              <Col className="col-md-auto">
                <img
                  alt="..."
                  className="img-left shadow shadow-lg--hover"
                  src="https://i.ibb.co/VmDcBbK/422377-534498-2153.jpg" 
                  style={{ width: "150px",height:"170px" }}
                />{" "}
              </Col>
              <Col className="col-md-auto">
                <img
                  alt="..."
                  className="img-left shadow shadow-lg--hover"
                  src="https://i.ibb.co/024ZD4r/841284-623514-4728.jpg" 
                  style={{ width: "150px",height:"170px" }}
                />{" "}
              </Col>
              <Col className="col-md-auto">
                <img
                  alt="..."
                  className="img-left shadow shadow-lg--hover"
                  src="https://i.ibb.co/FzwbwpM/20190211151836-5c6113bcb0186-1.jpg" 
                  style={{ width: "150px",height:"170px" }}
                />{" "}
              </Col>
              <Col className="col-md-auto">
                <img
                  alt="..."
                  className="img-left shadow shadow-lg--hover"
                  src="https://i.ibb.co/qk962F2/b23a7fc23796d14184d4a96f957f2c55.jpg" 
                  style={{ width: "150px",height:"170px" }}
                />{" "}
              </Col>
              <div className="w-100" style={{ height: "50px" }} />{" "}
              <Col className="col-md-auto">
                <img
                  alt="..."
                  className="img-left shadow shadow-lg--hover"
                  src="https://i.ibb.co/mDTLMtq/BVHNQg-DFr63.jpg"
                  style={{ width: "150px",height:"170px" }}
                />{" "}
              </Col>
              <Col className="col-md-auto">
                <img
                  alt="..."
                  className="img-left shadow shadow-lg--hover"
                  src="https://i.ibb.co/c8nB2hy/c3b27c60c9646.jpg"
                  style={{ width: "150px",height:"170px" }}
                />{" "}
              </Col>
              <Col className="col-md-auto">
                <img
                  alt="..."
                  className="img-left shadow shadow-lg--hover"
                  src="https://i.ibb.co/K6KXXGs/e01174364b6272a93befcd5fc2c8bfb3.jpg" 
                  style={{ width: "150px",height:"170px" }}
                />{" "}
              </Col>
              <Col className="col-md-auto">
                <img
                  alt="..."
                  className="img-left shadow shadow-lg--hover"
                  src="https://i.ibb.co/8M0NxMG/gyu-ri-kim9-79450938-419601585660413-7671089080126881451-n.jpg"
                  style={{ width: "150px",height:"170px" }}
                />{" "}
              </Col>
              <div className="w-100" style={{ height: "50px" }} />{" "}
            </Row>
          </Container>
          <div className="w-100" style={{ height: "50px" }} /> <Pagination />
        </main>
        <UserFooter />
      </>
    );
  }


export default StudentInfo;
const Diary = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 180px;
  width: 70%;
  height: 70%;
  background-color: rgba(255, 213, 105, 1);
  border-radius: 15px;
  z-index: 10;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const DiaryBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9;
`;

// /*!

// =========================================================
// * Argon Design System React - v1.1.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/argon-design-system-react
// * Copyright 2020 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */
// import React, { useState, useEffect } from "react";
// import service from "../../service";
// // reactstrap components
// import StudentList from "components/Student/StudentList";

// // core components
// import MainNavbar from "components/Navbars/MainNavbar.js";
// import UserFooter from "components/Footers/UserFooter.js";
// // index page sections
// import MainHero from "../IndexSections/MainHero";
// import SampleHero from "../IndexSections/SampleHero";

// import Pagination from "../IndexSections/Pagination.js";
// import { Row, Col, Container } from "reactstrap";
// import styled from "styled-components";

// const StudentInfo = () => {
//   // document.documentElement.scrollTop = 0;
//   // document.scrollingElement.scrollTop = 0;
//   // this.refs.main.scrollTop = 0;

//   const [students, setStudents] = useState([{}]);
//   const [clicked, setClicked] = useState({ id: "", name: "학생의" });

//   // 서버에서 studentlist를 가져오는 방식
//   const getAllStudent = async () => {
//     const { data: AllStudent } = await service.getStudents(
//       window.localStorage.getItem("id")
//     );
//     setStudents(AllStudent); //가져온 studentList를 students에 저장
//   };

//   useEffect(() => {
//     getAllStudent(); //page가 넘어갈때마다 getAllStudent()함수 실행(useEffect안에 함수쓰면 page바뀔때마다 함수 실행됨)
//   }, []);

//   return (
//     <>
//       <MainNavbar />
//       <main>
//         <SampleHero headerStyle={3} />
//         <Container
//           style={{
//             "background-color": "#ffd569",
//             "border-radius": "30px",
//           }}
//         >
//           <Grid>
//             <StudentList students={students} setClicked={setClicked} />
//           </Grid>
//         </Container>
//         <div className="w-100" style={{ height: "50px" }} /> <Pagination />
//       </main>
//       <UserFooter />
//     </>
//   );
// };
// const Grid = styled.div`
//   display: grid;
//   grid-template-rows: 230px 230px 230px 230px;
//   grid-template-columns: 25% 25% 25% 25%;
//   justify-items: center;
//   margin-left: 0px;
//   margin-top: 15px;
// `;
// export default StudentInfo;
