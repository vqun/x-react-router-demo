import React, { Component, PropTypes } from 'react';
import { Link } from 'x-react-router';

export default class Setting extends Component {
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
        <h1>Hello, Setting</h1>
        <p><Link to={`${prefix}/home`}>To Home</Link></p>
        <p><Link to={`${prefix}/profile`}>To Profile</Link></p>
      </div>
    );
  }
}