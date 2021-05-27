import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyle,theme } from '@/layouts/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import ClassManagement from '@/pages/ClassManagement/ClassManagement';
import StudentManagement from '@/pages/StudentManagement/StudentManagement';
import StudentInfo from '@/pages/StudentInfo/StudentInfo';
import AuthProvider from './context/auth';
import LoginPage from './pages/Login';
import TeacherJoin from './pages/Join/TeacherJoin';
import StudentJoin from './pages/Join/StudentJoin';
import ClassDiary from './pages/ClassDiary/ClassDiary'

const App = () => (

  <ThemeProvider theme={theme}>
    <GlobalStyle />
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={LoginPage} />
            <Route path="/class/diary" exact component={ClassDiary} />
            <Route path="/join/teacher" exact component={TeacherJoin} />
            <Route path="/join/student" exact component={StudentJoin} />
            <Route path='/student/management' component={StudentManagement} />
            <Route path='/student/enrollment' component={StudentInfo} />
            <Route path='/class/management' component={ClassManagement} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
  </ThemeProvider> 
);
export default App;

// const App = () => (
//   <div>
//     <ClassManagement />
//   </div>
// );
