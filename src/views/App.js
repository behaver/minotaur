import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AjaxHandler from '../AjaxHandler';
import TabBar from './TabBar';
import TabContainer from './TabContainer';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [], // for saving tabs data
    }

    // bind this on methods
    this.requestData = this.requestData.bind(this);
  }

  componentDidMount(){
    this.requestData();
  }

  /**
   * request tabs data, asynchronously 
   * @return {void} 
   */
  requestData() {
    AjaxHandler.get('/categories')
      .then((response) => {
        this.setState({
          data: response.data.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  render() {

    return (
      <Router>
        <div className="App">
          <TabBar data={this.state.data}></TabBar>
          <Switch>
            <Route path='/tab/:id' component={TabContainer}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;