import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, RouterModes } from 'x-react-router';
import CommonPages from '@com';
import P1 from '@com/profiles/p1';
import P2 from '@com/profiles/p2';
import P3 from '@com/profiles/p3';

const { Home, Profile, Setting } = CommonPages;

function run() {
  const prefix = '/react-like';
  ReactDOM.render(
    <Router prefix={prefix} mode={RouterModes.QUERY}>
      <Route path="/(home)?" component={Home} link-prefix={prefix} />
      <Route path="/profile" component={Profile} link-prefix={prefix}>
        <Route path="p1" component={P1} />
        <Route path="p2" component={P2} />
        <Route path="p3" component={P3} />
      </Route>
      <Route path="/setting" component={Setting} link-prefix={prefix} />
    </Router>
    , document.getElementById('container'));
}

function init() {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    return run();
  }
  if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', run);
  } else {
    window.attachEvent('onload', run);
  }
}

// Run the application when DOM is ready
init();
