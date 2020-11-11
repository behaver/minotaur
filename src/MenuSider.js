import React from 'react';
import { Link } from 'react-router';

class MenuSider extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="MenuSider">
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/repos">Repos</Link></li>
        </ul>
      </div>
    );
  }
}

export default MenuSider;