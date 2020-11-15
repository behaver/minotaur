import React from 'react';
import Section from './Section';
import AjaxHandler from '../AjaxHandler';
import '../css/MenuContainer.css';

class MenuContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      menuId: 0, // the current menu id
      data: [], // for saving sections data
    }

    // bind this on methods
    this.requestData = this.requestData.bind(this);
  }

  componentDidMount(){
    this.requestData();
  }

  componentDidUpdate() {
    if (this.props.match.params.id !== this.state.menuId) {
      this.requestData();
    }
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
          menuId: this.props.match.params.id,
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