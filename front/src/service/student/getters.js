const getters = (apiRequest) => {
  const getStudent = (id) => {
    return apiRequest.get(`/api/teacher/${id}`);
  };
  const getStudents = (teacherID) => {
    return apiRequest.get(`/api/teacher/${teacherID}`);
  };
  return {
    getStudent,
    getStudents,
  };
};

export default getters;
