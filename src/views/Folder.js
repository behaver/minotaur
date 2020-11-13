import React from 'react';
import SUnit from './SUnit';

class Folder extends SUnit {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="Folder">
        <span>{ this.props.name }</span>
      </div>
    );
  }
}

export default Folder;