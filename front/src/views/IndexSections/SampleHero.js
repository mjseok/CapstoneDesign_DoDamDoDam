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
import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledCarousel,
  Card,
} from "reactstrap";
import UserHeader from "../../components/Headers/UserHeader";

const items = [
  {
    src: "https://cdn.dtnews24.com/news/photo/201712/129672_444418.jpg",
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: "https://cdn.crowdpic.net/list-thumb/thumb_l_11D43F801457A53E5BA86B56425C3CED.jpg",
    altText: "",
    caption: "",
    header: "",
  },
];

const SampleHero = ({ headerStyle }) => {
  return (
    <>
      {headerStyle == 1 && (
        <>
          <section className="section section-shaped">
            <div className="shape shape-style-1 shape-default"></div>
            <Container className="py-md">
              <Row className="justify-content-between align-items-center my-md-5">
                <Col className="mb-5 mb-lg-0" lg="5">
                  <h1 className="text-white font-weight-light">도담도담</h1>
                  <p className="lead text-white mt-4">학생관리 페이지</p>
                </Col>
                <Col className="mb-lg-auto" lg="6">
                  <div className="rounded shadow-lg overflow-hidden ">
                    <UncontrolledCarousel items={items} />
                  </div>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            {/* <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div> */}
          </section>
          <div className="w-100" style={{ height: "50px" }} />{" "}
        </>
      )}
      {headerStyle == 2 && (
        <>
          <section className="section section-shaped">
            <div className="shape shape-style-1 shape-default"></div>
            <Container className="py-md">
              <Row className="justify-content-center align-items-center my-md-5">
                <Col className="mb-rg-auto" rg="5">
                  <img
                    alt="..."
                    className="rounded-circle img-left shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                    style={{ width: "150px" }}
                  />
                </Col>
                <Col className="mb-lg-auto" lg="6">
                  <h1 className="display-2 text-white font-weight-light">
                    안녕하세요
                  </h1>
                  <h1 className="display-3 text-white font-weight-light">
                    xx선생님!
                  </h1>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            {/* <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div> */}
          </section>
          <div className="w-100" style={{ height: "50px" }} />{" "}
        </>
      )}
      {headerStyle == 3 && (
        <>
          <UserHeader />
          <Container className="mt--9" fluid>
            <Row>
              <Col className="order-1 mb-5 mb-xl-0" xl="4">
                <Card className="card-plain">
                  <Row className="order-2 pl-5">
                    <Col>
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/teacher.png")}
                            style={{ height: "260px", width: "260px" }}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col className="order-lg-2" lg="6">
                      <div className="card-blockquote">
                        <h1 className="display-2 text-white">세종 초등학교</h1>
                        <p className="text-white mt-0 mb-5">3-2 반</p>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default SampleHero;
