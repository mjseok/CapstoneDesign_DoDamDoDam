const getters = (apiRequest) => {
  const getStudent = (id) => {
    return apiRequest.get(`/show/${id}`);
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
