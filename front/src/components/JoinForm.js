import React from 'react';
import styled from 'styled-components';
import { Field, Formik } from 'formik';
import bulb from '../assets/images/bulb.png';
import logo from '../assets/images/logo.png';
import { useHistory } from 'react-router';

const JoinForm = ({ title }) => {
  const history = useHistory();

  return (
    <JoinFormWrapper>
      <div className="form_area">
        <h3 className="title">{title}</h3>
        <Formik
          initialValues={{
            id: '',
            password: '',
            name: '',
            school: '',
            grade: undefined,
            class: undefined,
          }}
          validate={(values) => {}}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            history.push('/');
          }}
        >
          {({
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="field_area">
                <label htmlFor="id">아이디</label>
                <Field name="id" placeholder="아이디" />
              </div>
              <div className="field_area">
                <label htmlFor="password">비밀번호</label>
                <Field type="password" name="password" placeholder="비밀번호" />
              </div>
              <div className="field_area">
                <label htmlFor="name">이름</label>
                <Field name="name" placeholder="이름" />
              </div>
              <div className="field_area">
                <label htmlFor="school">학교명</label>
                <Field name="school" placeholder="학교명" />
              </div>
              <div className="field_area">
                <label htmlFor="grade">학년</label>
                <Field type="number" name="grade" placeholder="3" />
              </div>
              <div className="field_area">
                <label htmlFor="class">반</label>
                <Field type="number" name="class" placeholder="1" />
              </div>
              <div className="submit_area">
                <button
                  className="submit"
                  type="submit"
                  disabled={isSubmitting}
                >
                  가입하기
                </button>
              </div>
            </form>
          )}
        </Formik>
        <img className="logo" src={logo} alt="" />
        <img className="bulb" src={bulb} alt="" />
      </div>
    </JoinFormWrapper>
  );
};

const JoinFormWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  &:after {
    content: '';
    display: flex;
    width: 100%;
    height: 40px;
    background-white: white;
  }

  .form_area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 180px 0;
    background: #ffd569;
    position: relative;
    flex: 1;
  }

  .blank {
    width: 100%;
    height: 40px;
    background: white;
  }

  .logo {
    width: 230px;
    height: 230px;
    position: absolute;
    top: 0px;
    left: 40px;
  }

  .bulb {
    width: 65px;
    height: 140px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .title {
    font-size: 32px;
    font-weight: bold;
  }

  .field_area {
    display: flex;
    align-items: center;
    label {
      width: 100px;
      font-size: 20px;
    }
    input {
      margin-left: 16px;
      width: 400px;
      font-size: 16px;
    }
  }

  .field_area + .field_area {
    margin-top: 32px;
  }

  .submit_area {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    right: 48px;
    bottom: 48px;
  }

  .submit {
    margin-left: auto;
    font-size: 24px;
    font-weight: bold;
    border: 2px solid black;
    padding: 8px 12px;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default JoinForm;
