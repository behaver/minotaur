import React from 'react';
import MenuSider from './MenuSider';
import axios from 'axios';

class TabContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [], // for saving menus data
    }

    // bind this on methods
    this.requestData = this.requestData.bind(this);
  }

  componentDidMount(){
    this.requestData();
  }

  /**
   * request menus data which belong to the current tab, asynchronously 
   * @return {void} 
   */
  requestData() {
    // current tab id from the router
    const tabId = this.props.params.id;

    axios.get('/category/' + tabId)
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
      <div className="TabContainer">
        <MenuSider data={this.state.data}></MenuSider>
        {this.props.children}
      </div>
    );
  }
}

export default TabContainer;