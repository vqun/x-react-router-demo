import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, RouterModes } from 'x-react-router';
import Setting from '@com/setting';
import Home from 'file?name=/build/[name].[ext]&emitFile=false!@preload/app';
import Profile from 'file?name=/build/[name].[ext]&emitFile=false!@preload/profile';

function run() {
  ReactDOM.render(
    <Router prefix="/preload">
      <Route path="/(home)?" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/setting" component={Setting} link-prefix="/preload" />
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
