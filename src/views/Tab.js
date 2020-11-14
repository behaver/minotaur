import React from 'react';
import { Link } from 'react-router-dom';

class Tab extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li key={this.props.id}>
        <Link to={'/tab/' + this.props.id}>{this.props.children}</Link>
      </li>
    );
  }
}

export default Tab;