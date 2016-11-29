import React, { Component, PropTypes } from 'react';
import { Link } from 'x-react-router';

export default class Home extends Component {
  static propTypes = {
    'link-prefix': PropTypes.string
  };
  static defaultProps = {
    'link-prefix': '.'
  };
  render() {
    const prefix = this.props['link-prefix'];
    return (
      <div>
        <h2>Hello, Home</h2>
        <p><Link to={`${prefix}/profile`}>To Profile</Link></p>
        <p><Link to={`${prefix}/setting`}>To Setting</Link></p>
        {this.props.children}
      </div>
    );
  }
}