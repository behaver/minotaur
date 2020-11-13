import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import TabContainer from './TabContainer';
import MenuContainer from './MenuContainer';

class Minotaur extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="tab/:id" component={TabContainer}>
            <Route path="menu/:id" component={MenuContainer}/>
          </Route>
        </Route>
      </Router>
    );
  }
}

export default Minotaur;