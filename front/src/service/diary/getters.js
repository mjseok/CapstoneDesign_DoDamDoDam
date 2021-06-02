const getters = (apiRequest) => {
  const getJournal = (id, date) => {
    return apiRequest.get(`showJournal/${id}/${date}`);
  };

  return {
    getJournal,
  };
};

export default getters;
