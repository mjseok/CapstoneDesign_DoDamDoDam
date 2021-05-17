import React, { useContext, useCallback } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { BiBell } from 'react-icons/bi';
import { AuthContext } from '../context/auth';
import Axios from '../api/axios';

const Header = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const handleLogout = useCallback(() => {
    Axios.delete('/logout');
    history.push('/login');
  }, []);

  return (
    <Component>
      <Logo
        src="https://i.ibb.co/LkJhyKK/image.png"
        onClick={() => history.push('/')}
      />
      {auth.isStudent && (
        <ClassButton type="button">
          <Link to="/class/diary">일기</Link>
        </ClassButton>
      )}
      {auth.isTeacher && (
        <>
          <ClassButton type="button">
            <Link to="/class/management">학급관리</Link>
          </ClassButton>
          <StudentButton type="button">
            <Link to="/student/management">학생관리</Link>
          </StudentButton>
          <EnrollmentButton type="button">
            <Link to="/student/enrollment">학생등록</Link>
          </EnrollmentButton>
        </>
      )}
      {!auth.userMe && (
        <ClassButton type="button">
          <Link to="/login">로그인</Link>
        </ClassButton>
      )}
      {auth.userMe && (
        <ClassButton type="button" onClick={handleLogout}>
          로그아웃
        </ClassButton>
      )}
      <Information>
        <Bell>
          <BiBell size={25} />
        </Bell>
        <People>사람사진</People>
      </Information>
    </Component>
  );
};
const Component = styled.header`
  width: 100%;
  height: 100px;
  min-height: 100px;
  position: relative;
  display: flex;
  background-color: #ffd569;
`;
const ClassButton = styled.button`
  color: black;
  border: transparent;
  border-radius: 4px;
  background-color: transparent;
  text-decoration: none;
  margin-left: 30px;
  cursor: pointer;
`;
const StudentButton = styled.button`
  color: black;
  border: transparent;
  background-color: transparent;
  margin-left: 30px;
  border-radius: 4px;
`;
const EnrollmentButton = styled.button`
  color: black;
  border: transparent;
  border-radius: 4px;
  background-color: transparent;
  margin-left: 30px;
`;
const Logo = styled.img`
  margin-left: 15px;
  cursor: pointer;
`;
const Bell = styled.button`
  color: black;
`;
const People = styled.div`
  margin-right: 35px;
`;
const Information = styled.div`
  display: flex;
  margin: auto 0;
  margin-left: auto;
`;
export default Header;
