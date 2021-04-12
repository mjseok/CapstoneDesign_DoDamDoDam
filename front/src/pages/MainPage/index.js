import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <Link to="/class/management">클래스 관리</Link>
    </div>
  );
};

export default MainPage;
