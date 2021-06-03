import React from "react";
import styled from "styled-components";
import { Badge } from "reactstrap";

const Studnet = ({ id, number, name, birthday }) => {
  //number,name을 studetList폴더에서 받아서 어떻게 배치할지 결정

  return (
    <Wrapper>
      <StudentInfo>
        <img
          alt="..."
          className="shadow shadow-lg--hover"
          src={`https://storage.googleapis.com/dodamimage/${id}.png`}
          style={{ width: "150px", height: "170px" }}
        />
        <div
          style={{
            width: "150px",
            backgroundColor: "#57648C",
            color: "white",
            textAlign: "center",
          }}
        >{`${name}`}</div>
      </StudentInfo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

const StudentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Studnet;
