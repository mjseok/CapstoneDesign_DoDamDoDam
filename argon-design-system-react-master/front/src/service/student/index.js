import adders from './adders';
import deleters from './deleters';
import getters from './getters';
import updaters from './updaters';

const studentService = (apiRequest) => {
  return {
    ...adders(apiRequest),
    ...updaters(apiRequest),
    ...deleters(apiRequest),
    ...getters(apiRequest),
  };
};

export default studentService;
