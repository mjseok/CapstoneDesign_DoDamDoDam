// /*!

import React, { useState, useContext } from "react";
import Axios from "../../api/axios";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import SimpleNavbar from "components/Navbars/SimpleNavbar.js";
import UserFooter from "components/Footers/UserFooter.js";
import { AuthContext } from "../../context/auth";
import { useHistory } from "react-router";

const Login = () => {
  const [values, setValues] = useState({
    id: "",
    password: "",
  });
  const auth = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = async () => {
    console.log(values);
    await Axios.post("/login", values)
      .then((res) => {
        if (res.status === 200) {
          alert(`${res.data.name}님 환영합니다!`);
          window.localStorage.setItem("id", res.data.id);
          if (res.data.userType === "student") {
            window.localStorage.setItem("teacher_id", res.data.teacher_id);
          }
          auth.setUserMe(res.data);
          const isTeacher = res.data.userType === "teacher";
          const isStudent = res.data.userType === "student";
          auth.setIsStudent(isStudent);
          auth.setIsTeacher(isTeacher);
          isTeacher && history.push("/class/management");
          isStudent && history.push("/student/main");
        }
      })
      .catch((e) => {
        throw e;
      });
  };
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  return (
    <>
      <SimpleNavbar />
      <main>
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="pt-lg-7">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>sign in with credentials</small>
                    </div>
                    <Form role="form">
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="fa fa-user" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="ID"
                            type="text"
                            value={values.id}
                            onChange={handleChange("id")}
                          />{" "}
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Password"
                            type="password"
                            autoComplete="off"
                            value={values.password}
                            onChange={handleChange("password")}
                          />
                        </InputGroup>
                      </FormGroup>
                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="primary"
                          type="button"
                          onClick={handleSubmit}
                        >
                          Sign in
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
                <Row className="mt-3">
                  <Col xs="6">
                    <a
                      className="text-light"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <small>Forgot password?</small>
                    </a>
                  </Col>
                  <Col className="text-right" xs="6">
                    <a
                      className="text-light"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <small>Create new account</small>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <UserFooter />
    </>
  );
};

export default Login;
