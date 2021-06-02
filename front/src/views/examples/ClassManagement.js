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

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import UserFooter from "components/Footers/UserFooter.js";
// index page sections
<<<<<<< HEAD
import MainHero from "../IndexSections/MainHero";
import { Row, Col, Container } from "reactstrap";
=======
import SampleHero from "../IndexSections/SampleHero";
import { Row } from "reactstrap";
>>>>>>> 8971299c1d308af2bcebe2b46fcfb2c4e175dd03

const ClassManagement = () => {
  // componentDidMount() {
  //   document.documentElement.scrollTop = 0;
  //   document.scrollingElement.scrollTop = 0;
  //   this.refs.main.scrollTop = 0;
  // }

  return (
    <>
      <MainNavbar />

<<<<<<< HEAD
      <MainHero />
=======
      <SampleHero headerStyle={3} />

>>>>>>> 8971299c1d308af2bcebe2b46fcfb2c4e175dd03
      <Row>
        <div class="col-lg-5">1</div>
        <div class="col-lg-5">
          <Row>
            <div class="col-lg-12">2</div>
            <div class="col-lg-12">3</div>
          </Row>
        </div>
      </Row>

      <UserFooter />
    </>
  );
};

export default ClassManagement;
