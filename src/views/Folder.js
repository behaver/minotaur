import React from 'react';
import SUnit from './SUnit';
import '../css/SUnit.css';
import '../css/Folder.css';

class Folder extends SUnit {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="SUnit Folder" data-id={this.props.id} onDoubleClick={this.props.onDoubleClick}>
        <span>{ this.props.name }</span>
      </div>
    );
  }
}

export default Folder;