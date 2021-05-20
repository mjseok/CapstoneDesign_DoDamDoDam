const getters = (apiRequest) => {
  const getStudent = () => {
    return apiRequest.get(`/teacher/studentInfo`);
  };
  const getStudents = (id) => {
    return apiRequest.get(`/showAll/${id}`);
  };
  return {
    getStudent,
    getStudents,
  };
};

export default getters;
