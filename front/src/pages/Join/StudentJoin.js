import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import JoinForm from '../../components/JoinForm';

const StudentJoin = () => {
  return (
    <Layout>
      <StudentJoinPage>
        <JoinForm title="학생 회원가입" />
      </StudentJoinPage>
    </Layout>
  );
};

const StudentJoinPage = styled.div``;

export default StudentJoin;
