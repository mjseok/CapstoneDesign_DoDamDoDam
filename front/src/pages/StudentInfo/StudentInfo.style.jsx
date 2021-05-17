import styled from 'styled-components';

const StudentInfoStyled = styled.div`
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
    padding: 10px;
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
  .row-thumbnails2 {
    display: flex;
    align-items: center;
    margin-top: 16px;
    justify-content: space-between;
  }
  .row-thumbnails2 img{
    margin-right: 40px;
    margin-left: 40px;
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

  .flex-container2{
    top: 328px;
    bottom: 328px;
  }

  .flex-container3{
    top: 433px;
    bottom: 433px;
  }

  .flex-container{
    width: 100%;
    height: 100vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }

  .abs {
    position: relative;
    bottom: 700px;
  }

  .pagination {
    display: inline-block;
  }
  
  .pagination a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
  }
  .react-pagination-js-circle ul{
    list-style: none;
    padding: 0 0 0 0;
    margin: 0 0 0 0;
    list-style: none;
    font-size: .875em;
    font-family: inherit;
    line-height: 2em;
  }
  .react-pagination-js-circle .page {
    display: inline-block;
    padding: 0px 1px;
      margin: 0px 9px;
    text-decoration: none;
    cursor: pointer;
    
    width: 30px;
    height: 30px;
    border-radius: 100%;
    padding: 0;
    margin: auto 5px;
    text-align: center;
    position: relative;
  }
  .react-pagination-js-circle .is-active {
    display: inline-block;
    padding: 0px 1px;
    margin: 0px 9px;
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
  
    color: #0088cc;
    border: 3px solid #0088cc;
    border-radius: 100%;
    width: 26px;
    height: 26px;
    border-radius: 100%;
    padding: 0;
    margin: auto 5px;
    text-align: center;
    position: relative;
  }
  .react-pagination-js-circle .pageElli {
    display: inline-block;
    padding: 0px 9px;
    margin-right: 4px;
  
    font-weight: bold;
    text-decoration: none;
    color: #717171;
    
  }
  
  
  .react-pagination-js-circle .page:hover{
    font-weight: bold;
    color: #0088cc;
    border: 3px solid #0088cc;
  }
  .circle a {
    width: 30px;
    height: 30px;
    line-height: 30px;
    padding: 0;
    text-align: center;
    margin: auto 5px;
  }
  
  .circle a.is-active {
    border: 3px solid #2ecc71;
    border-radius: 100%;
  
  }
  .react-paginate {
      display: flex;
      justify-content: center;
  }
  .react-paginate ul {
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
  }
  
  .react-paginate li {
    display: inline-block;
  }
`;

export default StudentInfoStyled;