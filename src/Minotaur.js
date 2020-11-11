import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';

/**
 * 
 */
class Minotaur extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/tab_name" component={TabContainer}>
            <Route path="/menu_name" component={MenuContainer}/>
          </Route>
          <Route path="/about" component={About}/>
        </Route>
      </Router>
    );
  }
}

export default Minotaur;