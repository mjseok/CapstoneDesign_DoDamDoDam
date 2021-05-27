const deleters = (apiRequest) => {
    const deleteStudent = (id) => {
      return apiRequest.delete(`/api/student/${id}`);
    };
  
    return {
      deleteStudent,
    };
  };
  
  export default deleters;