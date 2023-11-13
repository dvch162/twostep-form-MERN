import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from '../SignUp';
import AddressInfo from '../AdressInfo';
import SuccessPage from '../SuccessPage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/signup/createaccount" component={SignUp} />
      <Route path="/signup/createaccount/addressinfo" component={AddressInfo} />
      <Route path="/success" component={SuccessPage} />
    </Switch>
  </Router>
);

export default App;
