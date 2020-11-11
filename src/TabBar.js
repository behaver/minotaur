import React from 'react';
import { Link } from 'react-router';

class TabBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TabBar">
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/repos">Repos</Link></li>
        </ul>
      </div>
    );
  }
}

export default TabBar;