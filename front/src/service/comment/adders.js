const adders = (apiRequest) => {
  const addComment = (body) => {
    return apiRequest.patch("/addComment", body);
  };
  return {
    addComment,
  };
};
export default adders;
