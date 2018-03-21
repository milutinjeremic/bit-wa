import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';


// import newMail from './shared/utils/formatMail'
// import newDate from './shared/utils/formatDate'
// import users from './users/users';

const App = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
    </Switch>

  );
}

export default App;


