import React from 'react';
import styled from 'styled-components';

const Studnet=({number,name,birthday,photo})=>{
    return(
        <Wrapper>
            <StudentInfo>
                {`${number}. ${name}`}
            </StudentInfo>
        </Wrapper>
    )
}

const Wrapper = styled.tr`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 16px;
`;

const StudentInfo=styled.div`
  display:flex;
  flex-direction:column;
  background-color:yellow;
`;

export default Studnet;