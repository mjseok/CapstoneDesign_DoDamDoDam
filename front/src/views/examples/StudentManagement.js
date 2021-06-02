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
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import { chartOptions, parseOptions, chartExample1 } from "variables/charts.js";
import StudentList from "components/Student/StudentList";
import StudentCard from "views/IndexSections/StudentCard";
import service from "service";
import styled from "styled-components";
// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import UserFooter from "components/Footers/UserFooter.js";
import Calendar from "components/Calendar/Calendar.js";
// index page sections
import SampleHero from "../IndexSections/SampleHero";
import Carousel from "../IndexSections/Carousel";

const StudentManagement = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");
  const [students, setStudents] = useState([{}]);
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
              <StudentList students={students} />
            </Grid>
          </Students>
        </div>
        <div class="col-lg-5">
          <Row className="justify-content-center">
            <div class="col-lg-12">
              {" "}
              <Title2>학생 일기</Title2>
              <Calendar />
            </div>
            <div class="col-lg-12">
              {" "}
              <Row className="justify-content-center">
                <Col className="col-md-11 " xr="8">
                  <Card className="bg-gradient-default shadow">
                    <CardHeader className="bg-transparent">
                      <Row className="align-items-center">
                        <div className="col">
                          <h6 className="text-uppercase text-light ls-1 mb-1">
                            Graph
                          </h6>
                          <h2 className="text-white mb-0">감정 변화</h2>
                        </div>
                        <div className="col">
                          <Nav className="justify-content-end" pills>
                            {/* <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1,
                          })}
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Month</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem> */}
                            <NavItem>
                              <NavLink
                                className={classnames("py-2 px-3", {
                                  active: activeNav === 1,
                                })}
                                data-toggle="tab"
                                href="#pablo"
                                onClick={(e) => toggleNavs(e, 1)}
                              >
                                <span className="d-none d-md-block">Week</span>
                                <span className="d-md-none">W</span>
                              </NavLink>
                            </NavItem>
                          </Nav>
                        </div>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      {/* Chart */}
                      <div className="chart">
                        <Line
                          data={chartExample1[chartExample1Data]}
                          options={chartExample1.options}
                          getDatasetAtEvent={(e) => console.log(e)}
                        />
                      </div>
                    </CardBody>
                  </Card>
                </Col>
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
  background-color: #928490;
  min-height: 1180px;
  margin-bottom: 50px;
  border-radius: 15px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-rows: 200px 200px 200px;
  grid-template-columns: 33.3% 33.3% 33.3%;
  justify-items: center;
  margin-left: 0px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-left: 110px;
`;
const Title2 = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-left: 50px;
  margin-bottom: 10px;
`;

export default StudentManagement;

//{
/* <Container fluid>
<Row>
  <Col className="col-md-3">
    <img
      alt="..."
      className="rounded-circle img-left shadow shadow-lg--hover"
      src={require("assets/img/theme/team-1-800x800.jpg")}
      style={{ width: "100px" }}
    />
    <img
      alt="..."
      className="rounded-circle img-left shadow shadow-lg--hover"
      src={require("assets/img/theme/team-1-800x800.jpg")}
      style={{ width: "100px" }}
    />
    <img
      alt="..."
      className="rounded-circle img-left shadow shadow-lg--hover"
      src={require("assets/img/theme/team-1-800x800.jpg")}
      style={{ width: "100px" }}
    />
    <img
      alt="..."
      className="rounded-circle img-left shadow shadow-lg--hover"
      src={require("assets/img/theme/team-1-800x800.jpg")}
      style={{ width: "100px" }}
    />
  </Col>

  <Col className="col-md-9" xr="8">
    <Calendar />
  </Col>
</Row>
<Row className="align-items-center">
  <Col className="col-md-9 " xr="8">
    <Card className="bg-gradient-default shadow">
      <CardHeader className="bg-transparent">
        <Row className="align-items-center">
          <div className="col">
            <h6 className="text-uppercase text-light ls-1 mb-1">
              Graph
            </h6>
            <h2 className="text-white mb-0">감정 변화</h2>
          </div>
          <div className="col">
            <Nav className="justify-content-end" pills>
              {/* <NavItem>
                <NavLink
                  className={classnames("py-2 px-3", {
                    active: activeNav === 1,
                  })}
                  onClick={(e) => toggleNavs(e, 1)}
                >
                  <span className="d-none d-md-block">Month</span>
                  <span className="d-md-none">M</span>
                </NavLink>
              </NavItem> */
//}
//               <NavItem>
//                 <NavLink
//                   className={classnames("py-2 px-3", {
//                     active: activeNav === 1,
//                   })}
//                   data-toggle="tab"
//                   href="#pablo"
//                   onClick={(e) => toggleNavs(e, 1)}
//                 >
//                   <span className="d-none d-md-block">Week</span>
//                   <span className="d-md-none">W</span>
//                 </NavLink>
//               </NavItem>
//             </Nav>
//           </div>
//         </Row>
//       </CardHeader>
//       <CardBody>
//         {/* Chart */}
//         <div className="chart">
//           <Line
//             data={chartExample1[chartExample1Data]}
//             options={chartExample1.options}
//             getDatasetAtEvent={(e) => console.log(e)}
//           />
//         </div>
//       </CardBody>
//     </Card>
//   </Col>
// </Row>
// </Container> */}
