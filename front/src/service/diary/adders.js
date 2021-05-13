const adders = (apiRequest) => {
    const addDiary = (body) => {
      return apiRequest.post('/api/diary', body);
    };
    return {
      addDiary,
    };
  };
  export default adders;