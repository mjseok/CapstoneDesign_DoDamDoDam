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
import styled from "styled-components";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative" style={{ height: "680px" }}>
          {/* Hero for FREE version */}
          {/* Background circles */}

          <video
            id="videobcg"
            preload="auto"
            autoplay="true"
            loop="loop"
            muted="muted"
            volume="0"
            style={{
              width: "100%",
              "z-index": "-2",
              position: "absolute",
              bottom: 0,
              top: 0,
            }}
          >
            <source
              src="https://ad-files.classting.com/temporary_videos/classting_landing_20_360.mp4"
              type="video/mp4"
            />
          </video>
          <Cover></Cover>
          <Container
            className="shape-container d-flex align-items-center"
            style={{ height: "680px" }}
          >
            <div className="col px-0">
              <Row className="align-items-center justify-content-center">
                <Col className="text-center" lg="6">
                  {/* <p
                    className="lead text-white"
                    style={{ "font-size": "48px" }}
                  >
                    도담도담
                  </p> */}
                  <h1 className="display-2 text-white">도담도담</h1>
                  <p className="lead text-white">
                    일기를 바탕으로 감정분석과 학급관리를 위한 서비스
                  </p>
                  <div className="btn-wrapper mt-5">
                    <Link to="/register-page">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0"
                        color="default"
                        size="lg"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-user-plus" />
                        </span>
                        <span className="btn-inner--text">Sign Up</span>
                      </Button>{" "}
                    </Link>
                    <Link to="/login-page">
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="github"
                        size="lg"
                        target="_blank"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-sign-in" />
                        </span>
                        <span className="btn-inner--text">
                          <span className="text-warning mr-1">Sign In</span>
                        </span>
                      </Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>

          {/* SVG separator */}
          {/* <div className="separator separator-bottom separator-skew zindex-100">
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
        </div>
      </>
    );
  }
}

const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.52;
  background-color: #000;
`;

export default Hero;
