import getters from './getters';

const wordService = (apiRequest) => {
  return {
    //...adders(apiRequest),
    //...updaters(apiRequest),
    //...deleters(apiRequest),
    ...getters(apiRequest),
  };
};

export default wordService;
