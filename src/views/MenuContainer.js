import React from 'react';
import Section from './Section';
import AjaxHandler from '../AjaxHandler';

class MenuContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [], // for saving sections data
    }

    // bind this on methods
    this.requestData = this.requestData.bind(this);
  }

  componentDidMount(){
    this.requestData();
  }

  /**
   * request sections data which belong to the current menu, asynchronously 
   * @return {void} 
   */
  requestData() {
    // the current menu id from the router
    const menuId = this.props.match.params.id;

    AjaxHandler.get('/sections?subcategory_id=' + menuId)
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
    // make section JSX list via data source
    let sectionList = this.state.data.map((item) => <Section key={item.id} id={item.id} data={item.data} />);

    return (
      <div className="MenuContainer">
        {sectionList}
      </div>
    );
  }
}

export default MenuContainer;