import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AjaxHandler from '../AjaxHandler';
import MenuSider from './MenuSider';
import MenuContainer from './MenuContainer';

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
    // the current category id from the router
    const categoryId = this.props.match.params.id;

    AjaxHandler.get('/subcategories?category_id=' + categoryId)
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
      <div className="TabContainer">
        <MenuSider data={this.state.data} match={this.props.match}></MenuSider>
        <Switch>
          <Route path={this.props.match.url + '/menu/:id'} component={MenuContainer}/>
        </Switch>
      </div>
    );
  }
}

export default TabContainer;