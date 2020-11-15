import React from 'react';
import SUnit from './SUnit';

class Media extends SUnit {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="Media" data-id={this.props.id}>
        <span>{ this.props.name }</span>
      </div>
    );
  }
}

export default Media;