import React from 'react';
import ClassManagement from './pages/ClassManagement/ClassManagement';
import ClassDiary from './pages/ClassDiary/ClassDiary';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TeacherJoin from './pages/Join/TeacherJoin';
import StudentJoin from './pages/Join/StudentJoin';
import MainPage from './pages';
import LoginPage from './pages/Login';
import AuthProvider from './context/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/class/management" exact component={ClassManagement} />
          <Route path="/class/diary" exact component={ClassDiary} />
          <Route path="/join/teacher" exact component={TeacherJoin} />
          <Route path="/join/student" exact component={StudentJoin} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
