import styled from 'styled-components';

const ClassManagementStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;

  .left {
    display: flex;
    flex-direction: column;
  }
  .left-bottom {
    margin-top: 12px;
  }
  .box {
    border-radius: 12px;
    border: 3px solid #888;
    padding: 12px;
  }
  .preference-image {
    width: 400px;
    height: 400px;
  }
  .row-thumbnail-text {
    font-size: 22px;
    padding-left: 12px;
    padding-right: 12px;
  }
  .dash-line {
    border: 2px dashed #888;
    margin: 24px auto;
  }
  .title {
    font-size: 24px;
    font-weight: bold;
    margin: 0 0 16px 0;
  }
  .thumbnail {
    width: 80px;
    height: 80px;
    margin-left: 24px;
    border-radius: 50%;
  }
  .thumbnail-large {
    width: 100px;
    height: 100px;
    margin-left: 12px;
    border-radius: 50%;
  }
  .row-thumbnails {
    display: flex;
    align-items: center;
    margin-top: 16px;
  }
  .double-check {
    display: flex;
    margin-top: 24px;
  }
  .child-info {
    display: flex;
    flex-direction: column;
    margin-left: 18px;
    .name {
      margin: 8px 0;
      font-size: 22px;
    }
  }
  .right {
    margin-left: 80px;
    padding: 16px;
  }
`;

export default ClassManagementStyled;
