import React from 'react';
import PageLayout from '../../layouts/PageLayout';
import styled from 'styled-components';
import MyChart from '@/components/common/Graph'
//import MyChart from '../../components/common/Graph'
import Calendar from '../../components/organisms/Calendar/Calendar';
import {fetchApi} from '../../util';

const StudentManagement = () => {

  return (
    <PageLayout>
      <Wrapper>
        <List>
            학생 목록
        </List>
        <Detail>
            <CalendarDiv>
              <Calendar/>
            </CalendarDiv>
            <Graph>
                <MyChart/>
            </Graph>
        </Detail>
      </Wrapper>
    </PageLayout>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const List = styled.div`
  margin-right:auto;
  background-color:red;
`;
const Detail = styled.div`
  margin-left:auto;
`;
const CalendarDiv = styled.div`
`;
const Graph = styled.div`
`;
export default StudentManagement;
