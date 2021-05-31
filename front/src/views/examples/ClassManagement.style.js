import styled from 'styled-components';

const ClassManagementStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin: auto;

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
    width: 850px;
  }
  .box2 {
    border-radius: 12px;
    // border: 3px solid #888;
    padding: 12px;
    width: 1500px;
    height: 500px
    background-color: #FFFFFF;
  }
  .bar-graph {
    width: 850px;
    height: 500px;
  }
  .doughnut-graph {
    width: 450px;
    //height: 100%;
     height: 500px;
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
  .doughnut-content {
    font-size: 15px;
    whilte-space: pre;
    height: 20%;
  }
  .real-doughnut-graph {
    height:100000px;

  }
  .title2 {
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
    margin-left: 100px;
    border-radius: 50%;
  }
  .row-thumbnails {
    display: flex;
    align-items: center;
    margin-top: 16px;
  }
  .double-check {
    //display: flex;
    display: inline-block;
    margin-top: 24px;
  }
  .child-info {
    display: flex;
    flex-direction: column;
    margin-left: 18px;
    .name {
      margin: 8px 0;
      font-size: 22px;
      margin-left: 80px;
    }
    .desc {
      margin: 8px 0;
      font-size: 17px;
      margin-left: 7px;
    }
    
  }
  .right {
    margin-left: 20px;
    padding: 16px;
  }
  .word-cloud {
    // max-height: 550px;
    height: 570px;
    width: 400px;
  }
  .list_detail {
    display: inline-block;
    width: 220px;
    height: 260px;
	  border: 1px solid;
    margin-bottom: 5px;
  }
`;

export default ClassManagementStyled;