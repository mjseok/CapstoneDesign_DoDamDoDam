import styled from 'styled-components';

const ClassDiaryStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 16px;
  margin-top: 100px;
  .left {
    display: flex;
    flex-direction: column;
    .title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 24px;
    }
    .img {
      width: 600px;
      height: 600px;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: 140px;
  }
`;

export default ClassDiaryStyled;
