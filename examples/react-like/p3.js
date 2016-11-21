import React, { Component, PropTypes } from 'react';
import { Link } from 'x-react-router';

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>I am P3</h1>
        <p><Link to='./p1'>To P1</Link></p>
        <p><Link to='./p2'>To P2</Link></p>
      </div>
    );
  }
}