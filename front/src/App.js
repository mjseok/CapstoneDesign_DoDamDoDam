import React from 'react';
import ClassManagement from './pages/ClassManagement/ClassManagement';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/class/management" exact component={ClassManagement} />
    </Switch>
  </BrowserRouter>
);

export default App;
