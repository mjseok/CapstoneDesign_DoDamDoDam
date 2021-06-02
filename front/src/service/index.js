import apiRequest from '../api/axios';
import studentService from './student';
import diaryService from './diary';
import commentService from './comment';
import wordService from './word';

const Service = () => {
  return {
    ...studentService(apiRequest),
    ...diaryService(apiRequest),
    ...commentService(apiRequest),
    ...wordService(apiRequest),
  };
};

export default Service();
