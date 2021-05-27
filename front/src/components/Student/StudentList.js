import React, { useState } from "react";
import Student from "./Students";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import styled from "styled-components";
const StudentList = ({ students }) => {
  //studetList를 student하나씩 나눠서(map) student의 이름(student.name)과 숫자를 Student폴더에서 사용하겠다
  const [line, setLine] = useState([]);

  return students.map((student) => {
    return (
      //   <Button color="ours" type="button" style={{ "margin-top": "15px" }}>
      <ImgContainer>
        {" "}
        <Student
          name={student.name}
          number={student.number}
          photo={student.photo}
        />
      </ImgContainer>

      //   </Button>
    );
  });
};
StudentList.propTypes = {
  students: PropTypes.array,
};

StudentList.defaultProps = {
  students: [],
};
const ImgContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
`;
export default StudentList;
