const updaters = (apiRequest) => {
    const updateStudent = ({ id, password , name, teacher_id , number, birth, photo }) => {
      return apiRequest.patch(`/api/student/${id}`, {  password , name, teacher_id , number, birth, photo });
    };
  
    return {
      updateStudent,
    };
  };
  
  export default updaters;