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
import React, { useContext, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../context/auth";
import Axios from "../../api/axios";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const DemoNavbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const handleLogout = useCallback(() => {
    window.localStorage.clear();

    Axios.delete("/logout");
    history.push("/login");
    auth.setUserMe(null);
    auth.setIsTeacher(false);
    auth.setIsStudent(false);
  }, []);

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              <img alt="..." src={require("assets/img/brand/logo-name.png")} />
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>

            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/class/management">
                    <img
                      alt="..."
                      src={require("assets/img/brand/argon-react.png")}
                    />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler" id="navbar_global">
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="navbar-nav-hover align-items-lg-center" navbar>
              <Link to="/class/management">
                <text
                  style={{
                    color: "black",
                    fontWeight: "bolder",
                    marginRight: "35px",
                  }}
                >
                  학급 관리
                </text>
              </Link>
              <Link to="/student/diary">
                {" "}
                <text
                  style={{
                    color: "black",
                    fontWeight: "bolder",
                    marginRight: "35px",
                  }}
                >
                  학생 일기
                </text>
              </Link>
              <Link to="/student/info">
                {" "}
                <text
                  style={{
                    color: "black",
                    fontWeight: "bolder",
                    marginRight: "35px",
                  }}
                >
                  학생 정보
                </text>
              </Link>
            </Nav>
            <Nav className="align-items-lg-center ml-lg-auto" navbar>
              <NavItem>
                {auth.userMe && (
                  <ClassButton type="button" onClick={handleLogout}>
                    로그아웃
                  </ClassButton>
                )}
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </>
  );
};
const ClassButton = styled.button`
  color: black;
  border: transparent;
  border-radius: 4px;
  background-color: transparent;
  text-decoration: none;
  margin-left: 30px;
  cursor: pointer;
`;

export default DemoNavbar;
