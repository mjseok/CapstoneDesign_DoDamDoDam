import adders from './adders';
import deleters from './deleters';
import updaters from './updaters';

const studentService = (apiRequest) => {
  return {
    ...adders(apiRequest),
    ...updaters(apiRequest),
    ...deleters(apiRequest),
  };
};

export default studentService;