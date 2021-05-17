import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyle,theme } from '@/layouts/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import ClassManagement from '@/pages/ClassManagement/ClassManagement';
import StudentManagement from '@/pages/StudentManagement/StudentManagement';
import StudentInfo from '@/pages/StudentInfo/StudentInfo';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ClassManagement} />
        <Route path='/studentManagement' component={StudentManagement} />
        <Route path='/studentEnrollment' component={StudentInfo} />
        <Route path='/classManagement' component={ClassManagement} />
        
      </Switch>
    </BrowserRouter>
  </ThemeProvider> 
);
export default App;

// const App = () => (
//   <div>
//     <ClassManagement />
//   </div>
// );
