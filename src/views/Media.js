import React from 'react';
import SUnit from './SUnit';
import '../css/SUnit.css';
import '../css/Media.css';

class Media extends SUnit {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="SUnit Media">
        <span>{ this.props.name }</span>
      </div>
    );
  }
}

export default Media;