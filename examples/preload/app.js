import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, RouterModes } from 'x-react-router';
import Home from '@com/home';
import Profile from 'file?name=/build/[name].[ext]&emitFile=false!@preload/profile';
import Setting from 'file?name=/build/[name].[ext]&emitFile=false!@preload/setting';

function run() {
  ReactDOM.render(
    <Router prefix="/preload">
      <Route path="(.*)">
        <h1>Use preload in x-react-router</h1>
        <hr />
      </Route>
      <Route path="/(home)?" component={Home} link-prefix="/preload" />
      <Route path="/profile" component={Profile} preload={true} />
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
