import React from 'react';
import { Link } from 'react-router';

class Menu extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li key={this.props.key}>
        <Link to={'menu/' + this.props.key}>{this.props.children}</Link>
      </li>
    );
  }
}

export default Menu;