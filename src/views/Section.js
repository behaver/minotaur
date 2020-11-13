import React from 'react';
import Folder from './Folder';
import Media from './Media';
import axios from 'axios';

class Section extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [], // for saving units data(include folders and medias) in the current section
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
    // the current section id from the router
    const sectionId = this.props.params.id;

    axios.get('/section/' + sectionId)
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
    // make SUnit list via data source
    const unitList = this.state.data.map((item) => {
      if (item.type == 'folder') 
        return <Folder key={item.id} name={item.name}/>;
      else if (item.type == 'media') 
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