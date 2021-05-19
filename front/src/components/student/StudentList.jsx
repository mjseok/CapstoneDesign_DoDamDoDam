import React from 'react';
import Student from './Student';

const StudentList=({students})=>{
    console.log(students);
    students.map((student)=>{
        return(
       
            <Student name={student.name} number={student.number}/>
        )
    }
        
    )
}
export default StudentList;