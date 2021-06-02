import React from "react";
import styled from "styled-components";
import { Badge } from "reactstrap";

const Studnet = ({ number, name, birthday, photo }) => {
  //number,name을 studetList폴더에서 받아서 어떻게 배치할지 결정
  let blob = new Blob([new ArrayBuffer(photo)], { type: "image/png" });
  const url = window.URL.createObjectURL(blob);
  console.log(photo);
  return (
    <Wrapper>
      <StudentInfo>
        <img
          alt="..."
          className="shadow shadow-lg--hover"
          src={require("assets/img/theme/team-1-800x800.jpg")}
          style={{ width: "150px" }}
        />
        <div
          style={{
            width: "150px",
            backgroundColor: "#57648C",
            color: "white",
            textAlign: "center",
          }}
        >{`${number}. ${name}`}</div>
      </StudentInfo>
    </Wrapper>
  );
};

const Wrapper = styled.tr`
  display: flex;
  flex-direction: row;
  width: 33%;
  margin-top: 10px;
`;

const StudentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Studnet;
