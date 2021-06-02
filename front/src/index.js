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
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

//import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Signup from "views/examples/Signup.js";
import AuthProvider from "./context/auth";

import Main from "views/examples/Main";
import StudentManagement from "views/examples/StudentManagement.js";
import ClassManagement from "views/examples/ClassManagement.js";
import StudentInfo from "views/examples/StudentInfo.js";
import StudentPage from "views/examples/StudentPage.js";

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={(props) => <Main {...props} />} />
        <Route
          path="/landing-page"
          exact
          render={(props) => <Landing {...props} />}
        />
        <Route
          path="/login-page"
          exact
          render={(props) => <Login {...props} />}
        />
        <Route
          path="/profile-page"
          exact
          render={(props) => <Profile {...props} />}
        />
        <Route
          path="/register-page"
          exact
          render={(props) => <Signup {...props} />}
        />
        <Route
          path="/student/management"
          exact
          render={(props) => <StudentManagement {...props} />}
        />
        <Route
          path="/student/info"
          exact
          render={(props) => <StudentInfo {...props} />}
        />
        <Route
          path="/class/management"
          exact
          render={(props) => <ClassManagement {...props} />}
        />
        <Route
          path="/student/diary"
          exact
          render={(props) => <ClassManagement {...props} />}
        />
        <Route
          path="/student/main"
          exact
          render={(props) => <StudentPage {...props} />}
        />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById("root")
);
