const getters = (apiRequest) => {
  const getWords = (id) => {
    return apiRequest.get(`/showWords/${id}`);
  };
  return {
    getWords,
  };
};

export default getters;
