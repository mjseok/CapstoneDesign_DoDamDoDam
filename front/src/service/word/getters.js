const getters = (apiRequest) => {
  const getWords = (id) => {
    return apiRequest.get(`/showWords/${encodeURIComponent(id)}`);
  };
  return {
    getWords,
  };
};

export default getters;
