import React from 'react';
import Apropos from '../aPropos';
import Header from '../header';
import Footer from '../footer';
import Projet from '../projet';
import Landing from '../landing';
import ErrorPage from '../errorPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../../normalize.css';
import '../../grid.css';
import '../../style.css';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/projets" component={Projet} />
        <Route path="/apropos" component={Apropos} />
        <Route exact path="/" component={Landing} />
        <Route component={ErrorPage} />
      </Switch>

    </Router>
  );
}

export default App;
