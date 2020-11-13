import React from 'react';
import TabBar from './TabBar';
import axios from 'axios';

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
    axios.get('/categories')
      .then(function (response) {
        this.setState({
          data: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  render() {
    return (
      <div className="App">
        <TabBar data={this.state.data}></TabBar>
        {this.props.children}
      </div>
    );
  }
}

export default App;