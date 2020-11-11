import React from 'react';
import Folder from './Folder';
import Media from './Media';

class Section extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="Section">
        <Folder name={name}/>
        <Media name={name}/>
      </div>
    );
  }
}

export default Section;