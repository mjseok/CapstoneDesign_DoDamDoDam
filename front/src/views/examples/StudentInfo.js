// /*!

// =========================================================
// * Argon Design System React - v1.1.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/argon-design-system-react
// * Copyright 2020 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */
import React, { useState, useRef, useEffect } from "react";
import axios from "../../api/axios";
import StudentList from "components/Student/StudentList";

// reactstrap components

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import UserFooter from "components/Footers/UserFooter.js";
// index page sections
import SampleHero from "../IndexSections/SampleHero";
import Pagination from "../IndexSections/Pagination.js";
import {
  Row,
  Col,
  Container,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  FormGroup,
  Label,
  Button,
} from "reactstrap";
import styled from "styled-components";
import { useHistory } from "react-router";
import service from "../../service";

const StudentInfo = () => {
  const [clicked, setClicked] = useState({ id: "", name: "학생의" });
  const [students, setStudents] = useState([{}]);
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [newStudent, setnewStudent] = useState(false);
  const getAllStudent = async () => {
    const { data: AllStudent } = await service.getStudents(
      window.localStorage.getItem("id")
    );
    setStudents(AllStudent); //가져온 studentList를 students에 저장
  };

  useEffect(() => {
    getAllStudent(); //page가 넘어갈때마다 getAllStudent()함수 실행(useEffect안에 함수쓰면 page바뀔때마다 함수 실행됨)
  }, []);

  const handleClickBg = (e) => {
    if ((open && !element.current) || !element.current.contains(e.target))
      setOpen(!open);
  };
  const element = useRef();
  const [imageUrl, setImageUrl] = useState(
    "https://i.ibb.co/ZH6Wmm0/Png-Item-1468281.png"
  );
  const [values, setValues] = useState({
    id: "",
    password: "",
    teacher_id: window.localStorage.id,
    name: "",
    number: 0,
  });
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };
  const handleSubmit = () => {
    axios.post("/addStudent", values);
    history.go(0);
  };
  const setFile = (e) => {
    if (e.target.files[0] && values.id !== "") {
      const img = new FormData();
      img.append("file", e.target.files[0]);
      img.append("name", `${values.id}.jpg`);

      axios
        .post("/upload", img)
        .then((res) => {
          setImageUrl(res.data.url);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  return (
    <>
      <MainNavbar />
      <main>
        <SampleHero headerStyle={3} />
        <div 
          style={{ "background-color": "rgba(175,208,224,0.5)", "border-radius": "30px", width:"80%",marginLeft:"10%"}}
        >
          <Grid>
            <img
              alt="..."
              className="rounded-circle img-center shadow shadow-lg--hover"
              src="https://www.freeiconspng.com/uploads/plus-icon-black-2.png"
              style={{ width: "100px", height: "100px", marginTop: "25%", backgroundColor:"white"}}
              onClick={() => {
                setOpen(!open);
              }}
            />
            {open && (
              <DiaryBack onClick={handleClickBg}>
                {" "}
                <Diary ref={element}>
                  <div class="image-upload">
                    <label htmlFor="file-input">
                      <img
                        src={imageUrl}
                        style={{
                          width: "300px",
                          height: "300px",
                          marginRight: "100px",
                        }}
                      />
                    </label>
                    <Input
                      id="file-input"
                      type="file"
                      accept="image/*"
                      onChange={(e) => setFile(e)}
                      style={{ display: "none" }}
                    />
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
                          placeholder="PhoneNumber"
                          type="number"
                          value={values.number}
                          onChange={handleChange("number")}
                        />
                      </InputGroup>
                    </FormGroup>
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
                        className="mt-4"
                        color="primary"
                        type="button"
                        onClick={handleSubmit}
                      >
                        학생 추가하기
                      </Button>
                    </div>
                  </Form>
                </Diary>{" "}
              </DiaryBack>
            )}
            <StudentList students={students} setClicked={setClicked} />
          </Grid>
          {/* </Row> */}
        </div>
        <div className="w-100" style={{ height: "50px" }} /> <Pagination />
      </main>
      <UserFooter />
    </>
  );
};

export default StudentInfo;
const Diary = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 260px;
  width: 40%;
  height: 50%;
  background-color: rgba(255, 213, 105, 1);
  border-radius: 15px;
  z-index: 10;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;
const DiaryBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9;
`;
const Grid = styled.div`
  display: grid;
  grid-template-rows: 230px 230px 230px 230px 230px;
  grid-template-columns: 16.66% 16.66% 16.66% 16.66% 16.66% 16.66%;
  justify-items: center;
  margin-left: 0px;
  margin-top: 15px;
  padding-top:25px;
`;

