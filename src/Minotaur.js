import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './views/App';
import TabContainer from './views/TabContainer';


class Minotaur extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
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