import React from 'react';
import Menu from './Menu';

class MenuSider extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    // make menu list via data input
    const menuList = this.props.data.map((item) => <Menu key={item.id} id={item.id} matchUrl={this.props.match.url}>{item.name}</Menu>);

    return (
      <div className="MenuSider">
        <ul role="nav">
          {menuList}
        </ul>
      </div>
    );
  }
}

export default MenuSider;