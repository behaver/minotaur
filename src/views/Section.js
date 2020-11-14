import React from 'react';
import Folder from './Folder';
import Media from './Media';
import AjaxHandler from '../AjaxHandler';

class Section extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [], // for saving units data(include folders and medias) in the current section
      pageIndex: 1, // the page index for requesting
      scopeId: 0, // the scope id for requesting
    }

    // bind this on methods
    this.requestData = this.requestData.bind(this);
  }
  
  componentDidMount(){
    this.requestData();
  }

  /**
   * request units data which belong to the current section, asynchronously 
   * @return {void} 
   */
  requestData() {
    // the current section id
    const sectionId = this.props.id;

    AjaxHandler.get('/subjects', {
        params: {
          'section_id': sectionId,
          'scope_id': this.state.scopeId,
          'page': this.state.pageIndex,
        }
      })
      .then((response) => {
        this.setState({
          data: response.data.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  enterFreshScope() {
    // change the current scopeId to the event-triggered SUnit key
    this.setState({
      scopeId: this.props.key,
    });

    this.requestData();
  }

  render() {
    // make SUnit list via data source
    const unitList = this.state.data.map((item) => {
      if (item.type === 'scope') 
        return <Folder key={item.id} name={item.name} onDoubleClick={this.enterFreshScope.bind(this)}/>;
      else
        return <Media key={item.id} name={item.name}/>;
    });


    return (
      <div className="Section">
        {unitList}
      </div>
    );
  }
}

export default Section;