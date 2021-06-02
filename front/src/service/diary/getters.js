const getters = (apiRequest) => {
  const getJournal = (id, date) => {
    return apiRequest.get(`showJournal/${id}/${date}`);
  };
  const getMainEmo = (id) => {
    return apiRequest.get(`showMainEmo/${id}`);
  };
  return {
    getJournal,
    getMainEmo,
  };
};

export default getters;
