import React, { createContext, useState, useEffect } from 'react';
import Axios from '../api/axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userMe, setUserMe] = useState();
  const [isTeacher, setIsTeacher] = useState(false);
  const [isStudent, setIsStudent] = useState(false);

  useEffect(() => {
    Axios.get('/user/me')
      .then((result) => console.log(result.data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userMe,
        setUserMe,
        isTeacher,
        setIsTeacher,
        isStudent,
        setIsStudent,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
