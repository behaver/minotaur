import React from 'react';
import { Link } from 'react-router';

class Tab extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li key={this.props.key}>
        <Link to={'tab/' + this.props.key}>{this.props.children}</Link>
      </li>
    );
  }
}

export default Tab;