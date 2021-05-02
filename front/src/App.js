import React from 'react';
import ClassManagement from './pages/ClassManagement/ClassManagement';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TeacherJoin from './pages/Join/TeacherJoin';
import StudentJoin from './pages/Join/StudentJoin';
import MainPage from './pages';
import LoginPage from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/class/management" exact component={ClassManagement} />
        <Route path="/join/teacher" exact component={TeacherJoin} />
        <Route path="/join/student" exact component={StudentJoin} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
