import React,{useState,useEffect} from 'react';
import PageLayout from '../../layouts/PageLayout';
import styled from 'styled-components';
import MyChart from '@/components/common/Graph'
import Calendar from '../../components/organisms/Calendar/Calendar';
import service from '../../service';
import StudentList from '../../components/student/StudentList';

const StudentManagement = () => {
  const [students, setStudents] = useState([]);

  const getStudents = async ()=>{
      const { data: studentList } = await service.getStudents("teacher1");
      setStudents(studentList);
  
  }
  useEffect(() => {
    getStudents();
  }, []);
  return (
    <PageLayout>
      <Wrapper>
        <List>
           <StudentList students={students}/>
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
`;
const Detail = styled.div`
  margin-left:auto;
`;
const CalendarDiv = styled.div`
`;
const Graph = styled.div`
`;
export default StudentManagement;
