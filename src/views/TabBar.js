import React from 'react';
import Tab from './Tab';
import '../css/TabBar.css';

class TabBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    // make tab list via data input
    const tabList = this.props.data.map((item) => <Tab key={item.id} id={item.id}>{item.name}</Tab>);

    return (
      <div className="TabBar">
        <ul role="nav">
          {tabList}
        </ul>
      </div>
    );
  }
}

export default TabBar;