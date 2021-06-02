/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import styled from "styled-components";

const UserHeader = () => {
  return (
    <>
      <div className="position-relative" style={{ height: "450px" }}>
        <Cover></Cover>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "450px",
            backgroundImage:
              "url(" +
              require("../../assets/img/theme/profile-cover2.png") +
              ")",
            backgroundSize: "contain",
            backgroundPosition: "center top",
            "z-index": "-2",
            position: "absolute",
            width: "100%",
          }}
        >
          {/* Mask */}
          {/* <span className="mask bg-gradient-default opacity-8" /> */}
          {/* Header container */}
          {/* <Container className="d-flex align-items-center" fluid>
            <Row>
              <Col lg="7" md="10">
                <h1 className="display-2 text-white">Hello Jesse</h1>
                <p className="text-white mt-0 mb-5">
                  This is your profile page. You can see the progress you've
                  made with your work and manage your projects or assigned tasks
                </p>
              </Col>
            </Row>
          </Container> */}
        </div>
      </div>
    </>
  );
};
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
export default UserHeader;
