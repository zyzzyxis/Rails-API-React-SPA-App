import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import AppTasks from './AppTasks';
import About from './About';
import Navbar from './components/NavBar';

const App =() => (
  <Fragment>
    <Navbar />
    <Route exact path="/" component={AppTasks} />
    <Route exact path="/about" component={About} />
  </Fragment>
);

export default App;