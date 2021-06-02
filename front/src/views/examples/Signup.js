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
import React, { useContext, useState } from "react";
import Axios from "../../api/axios";
import { AuthContext } from "../../context/auth";
import { useHistory } from "react-router";
// reactstrap components
import {
  Button,
  Card,
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
  Label,
} from "reactstrap";

// core components
import SimpleNavbar from "components/Navbars/SimpleNavbar.js";
import UserFooter from "components/Footers/UserFooter.js";

const Signup = () => {
  const [values, setValues] = useState({
    id: "",
    password: "",
    name: "",
    school: "",
    grade: 1,
    class: 1,
  });
  const url = "http://localhost:3001/join/teacher";
  const auth = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = async () => {
    console.log(values);
    await Axios.post(url, values)
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          alert("가입을 환영합니다!");
          history.push("/class/management");
          console.log(auth);
          // auth.setUserMe(res.data);
          // auth.setIsTeacher(true);
          // auth.setIsTeacher(false);
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
                      <small>sign up with credentials</small>
                    </div>
                    <Form role="form">
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
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
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-hat-3" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Name"
                            type="text"
                            value={values.name}
                            onChange={handleChange("name")}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-building" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="School"
                            type="text"
                            value={values.school}
                            onChange={handleChange("school")}
                          />
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
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend"></InputGroupAddon>
                          <InputGroupText>
                            <Label for="grade">Grade</Label>
                          </InputGroupText>
                          <Input
                            name="Grade"
                            id="grade"
                            type="select"
                            value={values.grade}
                            onChange={handleChange("grade")}
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                          </Input>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-hat-3" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Class"
                            type="text"
                            value={values.class}
                            onChange={handleChange("class")}
                          />
                        </InputGroup>
                      </FormGroup>
                      <div className="text-center">
                        <Button
                          className="mt-4"
                          color="primary"
                          type="button"
                          onClick={handleSubmit}
                        >
                          Create Account
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <UserFooter />
    </>
  );
};

export default Signup;
