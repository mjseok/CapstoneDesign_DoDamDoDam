import React, { createContext, useState, useEffect } from "react";
import Axios from "../api/axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userMe, setUserMe] = useState();
  const [isTeacher, setIsTeacher] = useState(false);
  const [isStudent, setIsStudent] = useState(false);

  useEffect(() => {
    Axios.get("/user/me")
      .then((result) => {
        const { userType, ...user } = result.data;
        setUserMe(user);
        userType === "teacher" && setIsTeacher(true);
        userType === "student" && setIsStudent(true);
      })
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
