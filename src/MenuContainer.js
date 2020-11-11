import React from 'react';
import Section from './Section';

class MenuContainer extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="MenuContainer">
        <Section/>
        <Section/>
      </div>
    );
  }
}

export default MenuContainer;