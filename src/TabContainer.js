import React from 'react';
import MenuSider from './MenuSider';

class TabContainer extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="TabContainer">
        <MenuSider></MenuSider>
        {this.props.children}
      </div>
    );
  }
}

export default TabContainer;