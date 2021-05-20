import apiRequest from '../api/axios';
import studentService from './student';
import diaryService from './diary';
import commentService from './comment';

const Service = () => {
  return {
    ...studentService(apiRequest),
    ...diaryService(apiRequest),
    ...commentService(apiRequest),
  };
};

export default Service();
