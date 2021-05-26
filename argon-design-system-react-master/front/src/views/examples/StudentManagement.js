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
import React, { useState } from "react";

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

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import UserFooter from "components/Footers/UserFooter.js";
import Calendar from "components/Calendar/Calendar.js";
// index page sections
import MainHero from "../IndexSections/MainHero";
import Carousel from "../IndexSections/Carousel";
// class StudentManagement extends React.Component {
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
//           <Chart />
//         </main>
//         <UserFooter />
//       </>
//     );
//   }
// }

// /*!

// node.js library that concatenates classes (strings)

const StudentManagement = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

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
      <Carousel />
      <div className="w-100" style={{ height: "300px" }} />

      <Container fluid>
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
        <Row className="align-items-end">
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
      </Container>

      <UserFooter />
    </>
  );
};

export default StudentManagement;
