const adders = (apiRequest) => {
  const addDiary = (body) => {
    return apiRequest.post("/addJournal", body);
  };
  return {
    addDiary,
  };
};
export default adders;
