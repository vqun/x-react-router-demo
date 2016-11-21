import React, { Component, PropTypes } from 'react';
import { Link } from 'x-react-router';

export default class Profile extends Component {
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
        <h1>Hello, Profile</h1>
        <p><Link to={`${prefix}/home`}>To Home</Link></p>
        <p><Link to={`${prefix}/setting`}>To Setting</Link></p>
        <hr />
        <p><Link to={`${prefix}/profile/p1`}>To Profile/P1</Link></p>
        <p><Link to={`${prefix}/profile/p2`}>To Profile/P2</Link></p>
        <p><Link to={`${prefix}/profile/p3`}>To Profile/P3</Link></p>
        <hr />
        {this.props.children}
      </div>
    );
  }
}