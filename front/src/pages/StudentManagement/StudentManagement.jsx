import React,{useState,useEffect} from 'react';
import PageLayout from '../../layouts/PageLayout';
import styled from 'styled-components';
import MyChart from '@/components/common/Graph'
import Calendar from '../../components/organisms/Calendar/Calendar';
import service from '../../service';
import StudentList from '../../components/student/StudentList';
import Axios from '../../api/axios';
import { useParams } from 'react-router';

const StudentManagement = () => {
  const [students, setStudents] = useState([{}]); 
  
  // 서버에서 studentlist를 가져오는 방식
  const getAllStudent =  async()=>{
    const {data:AllStudent} = await service.getStudents(window.localStorage.getItem('id'));
    setStudents(AllStudent);//가져온 studentList를 students에 저장 
  };

  useEffect(() => {
    getAllStudent();//page가 넘어갈때마다 getAllStudent()함수 실행(useEffect안에 함수쓰면 page바뀔때마다 함수 실행됨)
  }, []);
 //return에서 students를 StudentList폴더로 보냄
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
  width:100%;
  height:100%;
`;
const List = styled.div`
  margin-right:auto;
  width:40%;
  height:100%;
`;
const Detail = styled.div`
  margin-left:auto;
  width:60%;
  height:100%;
`;
const CalendarDiv = styled.div`
    min-height:40%;
`;
const Graph = styled.div`
  position:fixed;
  bottom:13px;
`;
export default StudentManagement;
