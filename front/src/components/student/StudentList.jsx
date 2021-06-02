import React from 'react';
import Student from './Student';
import PropTypes from 'prop-types';

const StudentList=({students})=>{
    //studetList를 student하나씩 나눠서(map) student의 이름(student.name)과 숫자를 Student폴더에서 사용하겠다 
    return(
        students.map((student)=>{
        return(
            <Student name={student.name} number={student.number} photo={student.photo}/>
        )
    })
        
    )
}
StudentList.propTypes = {
    students: PropTypes.array,
  };
  
StudentList.defaultProps = {
    students: [],
  };
export default StudentList;