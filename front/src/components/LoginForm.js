import React, { useContext } from 'react';
import styled from 'styled-components';
import { Field, Formik } from 'formik';
import bulb from '../assets/images/bulb.png';
import logo from '../assets/images/logo.png';
import { useHistory, Link } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from '../context/auth';
const Axios = require('../api/axios');

const LoginForm = () => {
  const [generalError, setGeneralError] = useState('');
  const [formError, setFormError] = useState({});
  const auth = useContext(AuthContext);
  const history = useHistory();

  return (
    <LoginFormWrapper>
      <div className="form_area">
        <Formik
          initialValues={{}}
          validate={(values) => {}}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setGeneralError('');
            setFormError({});
            Axios.post('/login', values)
              .then((res) => {
                if (res.status === 200) {
                  alert(`${res.data.name}님 환영합니다!`);
                  window.localStorage.setItem('id', res.data.id);
                  auth.setUserMe(res.data);
                  const isTeacher = res.data.userType === 'teacher';
                  const isStudent = res.data.userType === 'student';
                  auth.setIsStudent(isStudent);
                  auth.setIsTeacher(isTeacher);
                  isTeacher && history.push('/class/management');
                  isStudent && history.push('/class/diary');
                }
              })
              .catch((e) => {
                if (e.response.data.type === 'general') {
                  setGeneralError(e.response.data.message);
                }
                if (e.response.data.type === 'form') {
                  setFormError(e.response.data.error);
                }
              });
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
                <div className="field">
                  <label htmlFor="id">아이디</label>
                  <Field type="text" name="id" placeholder="아이디" />
                </div>
                <ErrorText>{formError.id?.msg}</ErrorText>
              </div>
              <div className="field_area">
                <div className="field">
                  <label htmlFor="password">비밀번호</label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                  />
                </div>
                <ErrorText>{formError.password?.msg}</ErrorText>
              </div>
              <ErrorText>{generalError}</ErrorText>
              <div className="link_area">
                <Link className="link" to="/join/teacher">
                  선생님 회원가입
                </Link>
                <Link className="link" to="/join/student">
                  학생 회원가입
                </Link>
              </div>
              <div className="submit_area">
                <button className="submit" type="submit">
                  로그인하기
                </button>
              </div>
            </form>
          )}
        </Formik>
        <img className="logo" src={logo} alt="" />
        <img className="bulb" src={bulb} alt="" />
      </div>
    </LoginFormWrapper>
  );
};

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin: 16px auto;
  width: 100%;
`;

const LoginFormWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  .field {
    display: flex;
    align-items: center;
  }

  &:after {
    content: '';
    display: flex;
    width: 100%;
    height: 40px;
    background-white: white;
  }

  .link_area {
    display: flex;
    justify-content: space-around;
    margin-top: 120px;
    font-size: 24px;
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
    ${ErrorText} {
      margin: 12px 0 0 120px;
    }
  }

  .blank {
    width: 100%;
    height: 40px;
    background: white;
  }

  .logo {
    width: 280px;
    height: 280px;
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
  }

  .bulb {
    width: 65px;
    height: 130px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  form {
    margin-top: 200px;
  }

  .field_area {
    display: flex;
    flex-direction: column;
    label {
      width: 100px;
      font-size: 20px;
    }
    input {
      margin-left: 16px;
      width: 400px;
      font-size: 16px;
      z-index: 1;
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

export default LoginForm;
