const adders = (apiRequest) => {
    const addStudent = (body) => {
      return apiRequest.post(`/api/student`, body);
    };
  
    return {
      addStudent,
    };
  };
  
  export default adders;