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
          className="shadow-lg--hover"
          src={`https://storage.googleapis.com/dodamimage/${id}.jpg`}
          style={{ width: "150px", height: "170px" ,borderRadius:"15px 15px 0px 0px"}}
        />
        <div
          style={{
            width: "150px",
            backgroundColor: "#fff0f0",
            color: "black",
            textAlign: "center",
            borderRadius:"0px 0px 15px 15px",
            boxShadow:"3px 3px 2px 1px rgba(0, 0, 0, 0.2)"
            
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
