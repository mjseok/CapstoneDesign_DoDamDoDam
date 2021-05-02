import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/" className="menu">
        홈
      </Link>
      <Link to="/login" className="menu">
        로그인
      </Link>
      <Link to="/join/teacher" className="menu">
        선생님 회원가입
      </Link>
      <Link to="/join/student" className="menu">
        학생 회원가입
      </Link>
      <Link to="/class/management" className="menu">
        수업 관리
      </Link>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  padding: 24px;
  .menu {
    margin-left: 20px;
  }
`;

export default Header;
