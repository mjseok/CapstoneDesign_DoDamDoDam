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
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import { NavbarBrand, Navbar, Container, Nav, NavItem } from "reactstrap";

const MainNavbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const handleLogout = useCallback(() => {
    window.localStorage.clear();
    Axios.delete("/logout");
    history.push("/login");
    auth.setUserMe(null);
    auth.setIsTeacher(false);
    auth.setIsStudent(false);
  });
  // componentDidMount() {
  //   let headroom = new Headroom(document.getElementById("navbar-main"));
  //   // initialise
  //   headroom.init();
  // }
  // state = {
  //   collapseClasses: "",
  //   collapseOpen: false,
  // };

  // onExiting = () => {
  //   this.setState({
  //     collapseClasses: "collapsing-out",
  //   });
  // };

  // onExited = () => {
  //   this.setState({
  //     collapseClasses: "",
  //   });
  // };

  // render() {
  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand className="mr-lg-5" to="/student/main" tag={Link}>
              <img alt="..." src={require("assets/img/brand/logo-name.png")} />
            </NavbarBrand>
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
export default MainNavbar;
