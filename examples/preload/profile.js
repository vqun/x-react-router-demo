import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, RouterModes } from 'x-react-router';
import Profile from '@com/profile';
import Home from 'file?name=/build/[name].[ext]&emitFile=false!@preload/app';
import Setting from 'file?name=/build/[name].[ext]&emitFile=false!@preload/setting';

import P1 from '@com/profiles/p1';
import P2 from '@com/profiles/p2';
import P3 from '@com/profiles/p3';

function run() {
  ReactDOM.render(
    <Router prefix="/preload">
      <Route path="/(home)?" component={Home} />
      <Route path="/profile" component={Profile} link-prefix="/preload">
        <Route path="p1" component={P1} />
        <Route path="p2" component={P2} />
        <Route path="p3" component={P3} />
      </Route>
      <Route path="/setting" component={Setting} />
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
