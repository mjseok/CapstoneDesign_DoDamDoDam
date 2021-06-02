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
// import React from "react";

// // reactstrap components

// // core components
// import MainNavbar from "components/Navbars/MainNavbar.js";
// import UserFooter from "components/Footers/UserFooter.js";
// // index page sections
// import MainHero from "../IndexSections/MainHero";
// import Pagination from "../IndexSections/Pagination.js";
// import { Row, Col, Container } from "reactstrap";

// class StudentInfo extends React.Component {
//   componentDidMount() {
//     document.documentElement.scrollTop = 0;
//     document.scrollingElement.scrollTop = 0;
//     this.refs.main.scrollTop = 0;
//   }
//   render() {
//     return (
//       <>
//         <MainNavbar />
//         <main ref="main">
//           <MainHero />
//           <Container
//             style={{ "background-color": "#ffd569", "border-radius": "30px" }}
//           >
//             <Row className="row justify-content-around">
//               <div className="w-100" style={{ height: "50px" }} />
//               <Col className="col-md-auto">
//                 <img
//                   alt="..."
//                   className="rounded-circle img-left shadow shadow-lg--hover"
//                   src={require("assets/img/theme/team-1-800x800.jpg")}
//                   style={{ width: "100px" }}
//                 />
//               </Col>
//               <Col className="col-md-auto">
//                 <img
//                   alt="..."
//                   className="rounded-circle img-left shadow shadow-lg--hover"
//                   src={require("assets/img/theme/team-1-800x800.jpg")}
//                   style={{ width: "100px" }}
//                 />
//               </Col>
//               <Col className="col-md-auto">
//                 <img
//                   alt="..."
//                   className="rounded-circle img-left shadow shadow-lg--hover"
//                   src={require("assets/img/theme/team-1-800x800.jpg")}
//                   style={{ width: "100px" }}
//                 />
//               </Col>
//               <Col className="col-md-auto">
//                 <img
//                   alt="..."
//                   className="rounded-circle img-left shadow shadow-lg--hover"
//                   src={require("assets/img/theme/team-1-800x800.jpg")}
//                   style={{ width: "100px" }}
//                 />
//               </Col>
//               <div className="w-100" style={{ height: "50px" }} />
//               <Col className="col-md-auto">
//                 <img
//                   alt="..."
//                   className="rounded-circle img-left shadow shadow-lg--hover"
//                   src={require("assets/img/theme/team-1-800x800.jpg")}
//                   style={{ width: "100px" }}
//                 />
//               </Col>
//               <Col className="col-md-auto">
//                 <img
//                   alt="..."
//                   className="rounded-circle img-left shadow shadow-lg--hover"
//                   src={require("assets/img/theme/team-1-800x800.jpg")}
//                   style={{ width: "100px" }}
//                 />
//               </Col>
//               <Col className="col-md-auto">
//                 <img
//                   alt="..."
//                   className="rounded-circle img-left shadow shadow-lg--hover"
//                   src={require("assets/img/theme/team-1-800x800.jpg")}
//                   style={{ width: "100px" }}
//                 />
//               </Col>
//               <Col className="col-md-auto">
//                 <img
//                   alt="..."
//                   className="rounded-circle img-left shadow shadow-lg--hover"
//                   src={require("assets/img/theme/team-1-800x800.jpg")}
//                   style={{ width: "100px" }}
//                 />{" "}
//               </Col>
//               <div className="w-100" style={{ height: "50px" }} />
//               <Col className="col-md-auto">
//                 <img
//                   alt="..."
//                   className="rounded-circle img-left shadow shadow-lg--hover"
//                   src={require("assets/img/theme/team-1-800x800.jpg")}
//                   style={{ width: "100px" }}
//                 />{" "}
//               </Col>
//               <Col className="col-md-auto">
//                 <img
//                   alt="..."
//                   className="rounded-circle img-left shadow shadow-lg--hover"
//                   src={require("assets/img/theme/team-1-800x800.jpg")}
//                   style={{ width: "100px" }}
//                 />{" "}
//               </Col>
//               <Col className="col-md-auto">
//                 <img
//                   alt="..."
//                   className="rounded-circle img-left shadow shadow-lg--hover"
//                   src={require("assets/img/theme/team-1-800x800.jpg")}
//                   style={{ width: "100px" }}
//                 />{" "}
//               </Col>
//               <Col className="col-md-auto">
//                 <img
//                   alt="..."
//                   className="rounded-circle img-left shadow shadow-lg--hover"
//                   src={require("assets/img/theme/team-1-800x800.jpg")}
//                   style={{ width: "100px" }}
//                 />{" "}
//               </Col>
//               <div className="w-100" style={{ height: "50px" }} />{" "}
//               <Col className="col-md-auto">
//                 <img
//                   alt="..."
//                   className="rounded-circle img-left shadow shadow-lg--hover"
//                   src={require("assets/img/theme/team-1-800x800.jpg")}
//                   style={{ width: "100px" }}
//                 />{" "}
//               </Col>
//               <Col className="col-md-auto">
//                 <img
//                   alt="..."
//                   className="rounded-circle img-left shadow shadow-lg--hover"
//                   src={require("assets/img/theme/team-1-800x800.jpg")}
//                   style={{ width: "100px" }}
//                 />{" "}
//               </Col>
//               <Col className="col-md-auto">
//                 <img
//                   alt="..."
//                   className="rounded-circle img-left shadow shadow-lg--hover"
//                   src={require("assets/img/theme/team-1-800x800.jpg")}
//                   style={{ width: "100px" }}
//                 />{" "}
//               </Col>
//               <Col className="col-md-auto">
//                 <img
//                   alt="..."
//                   className="rounded-circle img-left shadow shadow-lg--hover"
//                   src={require("assets/img/theme/team-1-800x800.jpg")}
//                   style={{ width: "100px" }}
//                 />{" "}
//               </Col>
//               <div className="w-100" style={{ height: "50px" }} />{" "}
//             </Row>
//           </Container>
//           <div className="w-100" style={{ height: "50px" }} /> <Pagination />
//         </main>
//         <UserFooter />
//       </>
//     );
//   }
// }

// export default StudentInfo;
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
import service from "../../service";
// reactstrap components

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import UserFooter from "components/Footers/UserFooter.js";
// index page sections
import MainHero from "../IndexSections/MainHero";
import SampleHero from "../IndexSections/SampleHero";

import Pagination from "../IndexSections/Pagination.js";
import { Row, Col, Container } from "reactstrap";

const StudentInfo = () => {
  // document.documentElement.scrollTop = 0;
  // document.scrollingElement.scrollTop = 0;
  // this.refs.main.scrollTop = 0;

  const [students, setStudents] = useState([{}]);

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
          style={{ "background-color": "#ffd569", "border-radius": "30px" }}
        >
          <Row className="row justify-content-around">
            <div className="w-100" style={{ height: "50px" }} />
            <Col className="col-md-auto">
              <img
                alt="..."
                className="rounded-circle img-left shadow shadow-lg--hover"
                src={require("assets/img/theme/team-1-800x800.jpg")}
                style={{ width: "100px" }}
              />
            </Col>
            <Col className="col-md-auto">
              <img
                alt="..."
                className="rounded-circle img-left shadow shadow-lg--hover"
                src={require("assets/img/theme/team-1-800x800.jpg")}
                style={{ width: "100px" }}
              />
            </Col>
            <Col className="col-md-auto">
              <img
                alt="..."
                className="rounded-circle img-left shadow shadow-lg--hover"
                src={require("assets/img/theme/team-1-800x800.jpg")}
                style={{ width: "100px" }}
              />
            </Col>
            <Col className="col-md-auto">
              <img
                alt="..."
                className="rounded-circle img-left shadow shadow-lg--hover"
                src={require("assets/img/theme/team-1-800x800.jpg")}
                style={{ width: "100px" }}
              />
            </Col>
            <div className="w-100" style={{ height: "50px" }} />
            <Col className="col-md-auto">
              <img
                alt="..."
                className="rounded-circle img-left shadow shadow-lg--hover"
                src={require("assets/img/theme/team-1-800x800.jpg")}
                style={{ width: "100px" }}
              />
            </Col>
            <Col className="col-md-auto">
              <img
                alt="..."
                className="rounded-circle img-left shadow shadow-lg--hover"
                src={require("assets/img/theme/team-1-800x800.jpg")}
                style={{ width: "100px" }}
              />
            </Col>
            <Col className="col-md-auto">
              <img
                alt="..."
                className="rounded-circle img-left shadow shadow-lg--hover"
                src={require("assets/img/theme/team-1-800x800.jpg")}
                style={{ width: "100px" }}
              />
            </Col>
            <Col className="col-md-auto">
              <img
                alt="..."
                className="rounded-circle img-left shadow shadow-lg--hover"
                src={require("assets/img/theme/team-1-800x800.jpg")}
                style={{ width: "100px" }}
              />{" "}
            </Col>
            <div className="w-100" style={{ height: "50px" }} />
            <Col className="col-md-auto">
              <img
                alt="..."
                className="rounded-circle img-left shadow shadow-lg--hover"
                src={require("assets/img/theme/team-1-800x800.jpg")}
                style={{ width: "100px" }}
              />{" "}
            </Col>
            <Col className="col-md-auto">
              <img
                alt="..."
                className="rounded-circle img-left shadow shadow-lg--hover"
                src={require("assets/img/theme/team-1-800x800.jpg")}
                style={{ width: "100px" }}
              />{" "}
            </Col>
            <Col className="col-md-auto">
              <img
                alt="..."
                className="rounded-circle img-left shadow shadow-lg--hover"
                src={require("assets/img/theme/team-1-800x800.jpg")}
                style={{ width: "100px" }}
              />{" "}
            </Col>
            <Col className="col-md-auto">
              <img
                alt="..."
                className="rounded-circle img-left shadow shadow-lg--hover"
                src={require("assets/img/theme/team-1-800x800.jpg")}
                style={{ width: "100px" }}
              />{" "}
            </Col>
            <div className="w-100" style={{ height: "50px" }} />{" "}
            <Col className="col-md-auto">
              <img
                alt="..."
                className="rounded-circle img-left shadow shadow-lg--hover"
                src={require("assets/img/theme/team-1-800x800.jpg")}
                style={{ width: "100px" }}
              />{" "}
            </Col>
            <Col className="col-md-auto">
              <img
                alt="..."
                className="rounded-circle img-left shadow shadow-lg--hover"
                src={require("assets/img/theme/team-1-800x800.jpg")}
                style={{ width: "100px" }}
              />{" "}
            </Col>
            <Col className="col-md-auto">
              <img
                alt="..."
                className="rounded-circle img-left shadow shadow-lg--hover"
                src={require("assets/img/theme/team-1-800x800.jpg")}
                style={{ width: "100px" }}
              />{" "}
            </Col>
            <Col className="col-md-auto">
              <img
                alt="..."
                className="rounded-circle img-left shadow shadow-lg--hover"
                src={require("assets/img/theme/team-1-800x800.jpg")}
                style={{ width: "100px" }}
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
};

export default StudentInfo;
