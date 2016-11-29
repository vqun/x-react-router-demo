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
        <h1>I am P1</h1>
        <p><Link to='./p2'>To P2</Link></p>
        <p><Link to='./p3'>To P3</Link></p>
      </div>
    );
  }
}