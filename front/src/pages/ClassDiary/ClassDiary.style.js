import styled from 'styled-components';

const ClassDiaryStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 48px 64px;
  .left {
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100%;
    .title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 24px;
    }
    .img {
      width: 100%;
      margin-top: 20px;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: 50px;
    width: 70%;
    height: 100%;
  }
  .word-cloud {
    max-height: 750px;
  }
`;

export default ClassDiaryStyled;
