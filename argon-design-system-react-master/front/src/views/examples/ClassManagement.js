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
import MainHero from "../IndexSections/MainHero";
import { Row, Col } from "reactstrap";

class ClassManagement extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <MainNavbar />
        <main ref="main">
          <MainHero />
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-3 col-xs-5">a</div>
              <div class="col-md-9 col-xs-7">a</div>
              <div class="col-md-9 col-xs-12">b</div>
            </div>
          </div>
        </main>
        <UserFooter />
      </>
    );
  }
}

export default ClassManagement;
