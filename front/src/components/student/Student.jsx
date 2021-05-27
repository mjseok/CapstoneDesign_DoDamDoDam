import React from 'react';
import styled from 'styled-components';

const Studnet=({number,name,birthday,photo})=>{
  //number,name을 studetList폴더에서 받아서 어떻게 배치할지 결정
  let blob = new Blob([new ArrayBuffer(photo)], { type: "image/png" });
  const url = window.URL.createObjectURL(blob);
    console.log(photo)
    return(
        <Wrapper>
            <StudentInfo>
              <img src={url}/>
                {`${number}. ${name}`}
            </StudentInfo>
        </Wrapper>
    )
}

const Wrapper = styled.tr`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 16px;
  margin-top:10px;

`;

const StudentInfo=styled.div`
  display:flex;
  flex-direction:column;
`;

export default Studnet;