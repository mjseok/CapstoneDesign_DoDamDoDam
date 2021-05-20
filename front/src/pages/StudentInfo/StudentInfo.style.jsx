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

  .modal-background {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(209, 213, 218, 0.5);
  }
  
  .modal-card {
    margin: 0 auto;
    display: block;
    margin-top: 250px;
    width: 700px;
    height: 500px;
    background-color: rgba(255, 213, 105, 10);
    border-radius: 5px;
  }




  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);   ///배경에 픽스를 주고 투명도를 준다.
  }
  .loginModal {
    width: 480px;
    height: 621px;
    background-color: white;
    position: relative;
    box-sizing: border-box;
    margin: 50px auto;
    padding: 20px;
    background: #fff;      //로그인 배경이다 
  }
      .close {
        float: right;
        font-size: 25px;
      }
      .modalContents {
        margin: 0 auto;
        width: 100%;
        position: relative;
        padding: 0 20px 32px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
  .signinIcon {
          width: 150px;
          margin: 0 auto;
        }
  
        .loginId {
          margin-top: 30px;
          border-radius: 2px;
          width: 100%;
          height: 40px;
          border: 1px solid #e5e5e5;
          padding: 9px 12px;
          outline: none;
          box-sizing: border-box;
        }
        input::placeholder {
          color: #999999;
        }
        .loginPw {
          margin-top: 15px;
          border-radius: 2px;
          width: 100%;
          height: 40px;
          border: 1px solid #e5e5e5;
          padding: 9px 12px;
          outline: none;
          box-sizing: border-box;
        }
  
        .loginMid {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .autoLogin {
            font-size: 12px;
            color: #8d8d8d;
            line-height: 3;
          }
        }
        .loginBtn {
          height: 40px;
          font-size: 14px;
          padding: 13px 30px;
          cursor: pointer;
          background-color: black;
          color: white;
          line-height: 1px;
          margin-top: 20px;
          margin-bottom: 12px;
          border-radius: 3px;
          border-style: none;
        }
  
        .socialBox {
          margin-bottom: 30px;
          .kakao {
            background-color: #feec34;
            border-color: #feec34;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            margin-bottom: 10px;
            border-radius: 3px;
  
            .kakaoLogo {
              width: 24px;
              height: 25px;
            }
            .kakaoText {
              width: 300px;
              font-size: 15px;
              text-align: center;
              display: inline-block;
              box-sizing: border-box;
            }
          }
  
          .facebook {
            background-color: #21538a;
            border-color: #21538a;
            height: 40px;
            display: flex;
            justify-content: center;
            box-sizing: border-box;
            color: #fff;
            border-radius: 3px;
           >
            .facebookText {
              padding-top: 12px;
              width: 310px;
              color: #fff;
              font-size: 15px;
              text-align: center;
              box-sizing: border-box;
            }
  
            .facebookLogo {
              padding-top: 7px;
              width: 24px;
              height: 25px;
            }
          }
        }
        .loginEnd {
          text-align: center;
          font-size: 11px;
  
          .loginLine {
            color: #bcbcbc;
            font-size: 11px;
            margin-bottom: 35px;
            a {
              color: black;
              text-decoration: underline;
              cursor: pointer;
            }
          }
          .noUser {
            text-decoration: underline;
          }

`;

export default StudentInfoStyled;