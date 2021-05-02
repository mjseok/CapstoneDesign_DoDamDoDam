import React from 'react';
import styled from 'styled-components';
import { Field, Formik } from 'formik';
import bulb from '../assets/images/bulb.png';
import logo from '../assets/images/logo.png';
import { useHistory, Link } from 'react-router-dom';

const LoginForm = () => {
  const history = useHistory();

  return (
    <LoginFormWrapper>
      <div className="form_area">
        <Formik
          initialValues={{
            id: '',
            password: '',
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
              <div className="link_area">
                <Link className="link" to="/join/teacher">
                  선생님 회원가입
                </Link>
                <Link className="link" to="/join/student">
                  학생 회원가입
                </Link>
              </div>
              <div className="submit_area">
                <button
                  className="submit"
                  type="submit"
                  disabled={isSubmitting}
                >
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

const LoginFormWrapper = styled.div`
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
    justify-content: center;
    padding: 160px 0;
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

  .field_area {
    display: flex;
    margin-top: 100px;
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

export default LoginForm;
