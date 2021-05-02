import React from 'react';
import styled from 'styled-components';
import JoinForm from '../../components/JoinForm';
import Layout from '../../components/Layout';

const TeacherJoin = () => {
  return (
    <Layout>
      <TeacherJoinPage>
        <JoinForm title="선생님 회원가입" />
      </TeacherJoinPage>
    </Layout>
  );
};

const TeacherJoinPage = styled.div``;

export default TeacherJoin;
