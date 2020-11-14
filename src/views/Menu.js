import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li key={this.props.id}>
        <Link to={ this.props.matchUrl + '/menu/' + this.props.id } replace>{this.props.children}</Link>
      </li>
    );
  }
}

export default Menu;